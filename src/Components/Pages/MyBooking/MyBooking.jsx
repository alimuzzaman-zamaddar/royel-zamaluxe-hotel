import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Card } from "flowbite-react";
import { AuthContext } from "../Providers/AuthProviders";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `https://royal-zamaluxe-hotel-server.vercel.app/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`https://the-toy-store-server.vercel.app/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="py-5">
        <h1 className="font-serif text-4xl text-center py-6 text-[#dcb84e]">YOUR BOOKED ROOMS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {bookings.map((booking) => (
          <Card key={booking._id} horizontal imgSrc={booking.imageSrc}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              
              <p> Room Price :{booking.price}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            <p> Description:{booking.description}</p>
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
