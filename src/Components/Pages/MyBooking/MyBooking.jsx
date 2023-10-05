import React, { useContext, useEffect, useState } from "react";
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



  return (
    <div className="py-5">
{bookings?.length == 0 ? <h1 className="font-serif uppercase text-4xl text-center py-6 text-[#dcb84e]">you haven't booked rooms yet</h1> :
     <>
        <h1 className="font-serif text-4xl text-center py-6 text-[#dcb84e]">YOUR BOOKED ROOMS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bookings.map((booking) => (
            <Card key={booking._id} horizontal imgSrc={booking.imageSrc}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                
                <p> Room Price :{booking.price}</p>
                <p> Date Of Booking :{booking?.date}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <p> Description:{booking.description}</p>
              </p>
            </Card>
          ))}
        </div>
     </>

}
    </div>
  );
};

export default MyBooking;
