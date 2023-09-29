import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Card } from "flowbite-react";
import Swal from "sweetalert2";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const roomBooking = useLoaderData();
  const navigate = useNavigate();

//   console.log(roomBooking);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { imageSrc, rating, price, _id, description } = roomBooking;

    if (user?.email) {
      const bookedRoom = {
        bookedId: _id,
        imageSrc: imageSrc,
        date:data.date,
        rating: rating,
        price: price,
        email: user?.email,
        description: description,
      };
      console.log(bookedRoom);
      fetch("https://royal-zamaluxe-hotel-server.vercel.app/booking", {
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
            navigate("/Stays")
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
    <div className="w-[40%] mx-auto bg-white p-5 rounded-xl my-10">
           <Card  horizontal imgSrc={roomBooking.imageSrc}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              
              <p className="text-2xl font-serif font-bold"> Room Price :{roomBooking.price}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            <p> Description:{roomBooking.description}</p>
            </p>
          </Card>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label htmlFor="date" className="text-black text-2xl font-serif">Select a Date of Booking:</label>
          <Controller
           {...register("date", { required: true })}
            name="date"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => <input type="date" id="date" {...field} />}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <div className="form-control mt-6">
          <input
            className="md:px-8  bg-[#877a52] hover:bg-[#d3aa2f] rounded-lg duration-700 p-2 md:py-3 text-white"
            type="submit"
            value="Conform Booking"
          />
        </div>
      </form>
    </div>
  );
};

export default Booking;
