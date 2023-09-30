import React, { useContext, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { AuthContext } from "../Providers/AuthProviders";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `https://royal-zamaluxe-hotel-server.vercel.app/order?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);



  return (
    <div className="py-5">
        <h1 className="font-serif text-4xl text-center py-6 text-[#dcb84e]">YOUR ORDERED FOODS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {orders.map((order) => (
          <Card key={order._id} horizontal imgSrc={order.imageSrc}>
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              
              <p> Room Price :{order.price}</p>
              <p> Date Of Order :{order?.date}</p>
              <p> Time Of Order :{order?.time}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            <p> Description:{order.description}</p>
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
