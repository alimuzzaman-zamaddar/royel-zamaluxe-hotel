import { React, useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CardSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(rooms);

  const handleBooking = (room) => {
    const { imageSrc, rating, price, _id } = room;

    if (user?.email) {
      const bookedRoom = {
        bookedId: _id,
        imageSrc: room.imageSrc,
        rating: room.rating,
        price: room.price,
        email: user?.email,
      };
      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookedRoom),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Room Is Booked",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You Need to Login to Book Rooms",
        icon: "primary",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
      }).then((result) => {
        navigate("/login");
      });
    }
  };

  return (
    <div className="bg-orange-50">
      <div className="pt-14 px-3 md:w-2/4 mx-auto text-center text-blue-950 ">
        <h1
          className="text-4xl font-serif pb-5 border-b-[1px] border-blue-950 mb-6"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          FIND THE PLACE YOU LIKE AND EXPLORE LUXARY LIFE.
        </h1>
        <p data-aos="fade-up" data-aos-duration="3000">
          We have selected some of the finest chefs in the world to create
          exceptional dining experiences like no other. Home to 17 world-class
          restaurants, including 8 helmed by celebrity chefs, Atlantis The Royal
          joins forces with Atlantis, The Palm to create a leading culinary
          destination in Dubai. From Michelin-starred concepts to showstoppers,
          the world has not seen culinary mastery until now.
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-5 py-20">
        {rooms.map((room) => (
          <div key={room._id}>
            <div className="">
              <Card className="" data-aos="fade-up" data-aos-duration="1000">
                <a href="#">
                  <div className="overflow-hidden">
                    <img
                      className="hover:scale-125 h-[208px] duration-700 w-full"
                      src={room.imageSrc}
                      alt=""
                    />
                  </div>
                </a>
                <div className="mb-5 mt-2.5 flex items-center">
                  <div className="flex mr-5 text-orange-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </div>
                  <p className="text-blue-950">{room.rating} Stars</p>
                </div>
                <div className="flex items-center justify-between">
                 <div className="flex items-center">
                 <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${room.price} 
                  </span>
                  <span className="ml-1 text-xl font-bold">++</span>
                 </div>
                  <button
                    className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                    onClick={() => handleBooking(room)}
                  >
                    Book Now
                  </button>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
