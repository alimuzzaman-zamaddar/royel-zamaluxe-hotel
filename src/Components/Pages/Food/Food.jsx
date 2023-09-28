"use client";
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";

const Food = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://royal-zamaluxe-hotel-server.vercel.app/Foods")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(foods);

  return (
    <div>
      <div className="bg-[#001446]">
        <div className=" pt-14 px-3 md:w-2/4 mx-auto text-center text-orange-300 ">
          <h1
            className="text-4xl font-serif pb-5 border-b-[1px] border-orange-300 mb-6"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            FIND THE FOOD THAT IS OUT OF THE WORLD AND AUTHINTIC TEST OF LIFE.
          </h1>
          <p data-aos="fade-up" data-aos-duration="3000">
            We have selected some of the finest chefs in the world to create
            exceptional dining experiences like no other. Home to 17 world-class
            restaurants, including 8 helmed by celebrity chefs, Atlantis The
            Royal joins forces with ZamaLuxe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-20  px-5">
          {foods.map((food) => (
            <div className="">
              <Card
                className="bg-gradient-to-r h-[550px] from-blue-950 via-blue-500 to-blue-950 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <a href="#">
                  <div className="overflow-hidden">
                    <img
                      className="hover:scale-125 h-[208px] duration-700 w-full"
                      src={food.imageSrc}
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
                  <p className="text-white">{food.stars} Stars</p>
                </div>
                <div className="text-white font-serif text-justify">
                  <p>{food.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-white">
                      ${food.price}
                    </span>
                    <span className="ml-1 text-xl font-bold text-white">++</span>
                  </div>
                  <button className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                    Order Now
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
