"use client";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Dinning = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://royal-zamaluxe-hotel-server.vercel.app/dinning")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-[#faf5eb] py-20">
      <div
        className=" py-14 px-3 md:w-2/4 mx-auto text-center text-blue-950 "
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1 className="text-4xl font-serif pb-5 border-b-[1px] border-blue-950 mb-6">
          DUBAI’S PREMIER DINING DESTINATION
        </h1>
        <p>
          We have selected some of the finest chefs in the world to create
          exceptional dining experiences like no other. Home to 17 world-class
          restaurants, including 8 helmed by celebrity chefs, Atlantis The Royal
          joins forces with Atlantis, The Palm to create a leading culinary
          destination in Dubai. From Michelin-starred concepts to showstoppers,
          the world has not seen culinary mastery until now.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-3 md:w-[1300px] mx-auto">
        {chefs.map((chef) => (
          <div key={chef._id} className="" data-aos="flip-left">
            <div className="overflow-hidden ">
              <img
                className="hover:scale-125 h-[230px] w-full duration-1000"
                src={chef.image}
                alt=""
              />
            </div>
            <h1 className="text-blue-950 py-5 text-2xl">{chef.name}</h1>
            <p className="text-blue-950 mb-6">{chef.description}</p>
            <div className="flex justify-between ">
              <button className="px-8 bg-[#171255] hover:bg-[#d3aa2f] duration-700 py-3 text-white mb-4">
                Reserve
              </button>
              <br />
              <Link to={`/dinning/${chef._id}`}>
             <button className="px-8 bg-transparent border-2 border-[#171255] hover:bg-[#d3aa2f] duration-700 py-3 text-[#171255] mb-4">
                Explore
              </button>
             </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinning;
