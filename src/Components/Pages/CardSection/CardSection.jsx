import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";

const CardSection = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
  return (
    <div className="bg-orange-50">
      <div className="pt-14 px-3 md:w-2/4 mx-auto text-center text-blue-950 ">
        <h1 className="text-4xl font-serif pb-5 border-b-[1px] border-blue-950 mb-6" data-aos="fade-up"
     data-aos-duration="3000">
          FIND THE PLACE YOU LIKE AND EXPLORE LUXARY LIFE.
        </h1>
        <p data-aos="fade-up"
     data-aos-duration="3000">
          We have selected some of the finest chefs in the world to create
          exceptional dining experiences like no other. Home to 17 world-class
          restaurants, including 8 helmed by celebrity chefs, Atlantis The Royal
          joins forces with Atlantis, The Palm to create a leading culinary
          destination in Dubai. From Michelin-starred concepts to showstoppers,
          the world has not seen culinary mastery until now.
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-5 py-20  px-5">
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://assets.kerzner.com/api/public/content/da5a3a1e026a4407b37f1562f604366f?v=a0b1f26a&t=w992"
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
              <p className="text-blue-950">5.0 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $5999++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1B0yWxMakXOFrA3OT2S2Dom3NpGVXYMaTA&usqp=CAU"
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
              </div>
              <p className="text-blue-950">4.0 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $3599++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYgAo4uFVXoUh1CXzN9ZMlJuSdamviLMEBg&usqp=CAU"
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
              <p className="text-blue-950">5.0 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $4298++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/63/0f/a5/corner-double-queen-city.jpg?w=1200&h=-1&s=1"
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
              <p className="text-blue-950">5.0 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $7509++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/6474ca3acb8c5f94d80cc706_luxury-yacht-berkus-p-500.webp"
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
              </div>
              <p className="text-blue-950">4.5 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $11111++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOaCY0NuecOKtZwAJ0ATWRqEZE5torUruWQ&usqp=CAU"
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
              <p className="text-blue-950">5.0 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $8989++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9FdQEl71q0jlqFjzhXZYxC41om8v9x4Paw&usqp=CAU"
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
              <p className="text-blue-950">5.0 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $6969++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-125 h-[208px] duration-700 w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhcCtWZzCLAH-IhMJvrNbCGPbm785sgV-nR5MbVJuk57jV8ptCZ50ajAG9IU6-1zutmw&usqp=CAU"
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
              <p className="text-blue-950">5.0 Stars</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $1007++
              </span>
              <a
                className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                href="#"
              >
                <p>Book Now</p>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardSection;