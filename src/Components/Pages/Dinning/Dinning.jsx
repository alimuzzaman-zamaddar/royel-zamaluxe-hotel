"use client";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Dinning = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
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
        <div className="" data-aos="flip-left">
          <div className="overflow-hidden ">
            <img
              className="hover:scale-125 h-[230px] w-full duration-1000"
              src="https://assets.kerzner.com/api/public/content/774426dc63bc42478257419460690c82?v=9813ca0a&t=w576"
              alt=""
            />
          </div>
          <h1 className="text-blue-950 py-5 text-2xl">Nobu By The Beach</h1>
          <p className="text-blue-950 mb-6">
            Renowned worldwide for its distinctive Japanese-Peruvian cuisine,
            chef Nobu Matsuhisa debuts his first ever daytime poolside and beach
            restaurant.
          </p>
          <button className="px-8 bg-[#171255] hover:bg-[#d3aa2f] duration-700 py-3 text-white mb-4">
            Reserve
          </button>
          <br />
          <button className="px-[33px] border-2 border-[#171255] bg-transparent hover:bg-[#d3aa2f] duration-700 py-3 text-[#171255]">
            Explore
          </button>
        </div>
        <div className="" data-aos="flip-left">
          <div className="overflow-hidden">
            <img
              className="hover:scale-125  h-[230px] w-full duration-1000"
              src="https://assets.kerzner.com/api/public/content/12704f1115944ca3868fb0014b1548bd?v=d138b03c&t=w576"
              alt=""
            />
          </div>
          <h1 className="text-blue-950 py-5 text-2xl">Dinner By Heston </h1>
          <p className="text-blue-950 mb-6">
            Heston Blumenthal delights diners through a pioneering and
            intriguing menu with emphasis on multi-sensory dishes that are
            playful and.
          </p>
          <button className="px-8 bg-[#171255] hover:bg-[#d3aa2f] duration-700 py-3 text-white mb-4">
            Reserve
          </button>
          <br />
          <button className="px-[33px] border-2 border-[#171255] bg-transparent hover:bg-[#d3aa2f] duration-700 py-3 text-[#171255]">
            Explore
          </button>
        </div>
        <div className="" data-aos="flip-left">
          <div className="overflow-hidden">
            <img
              className="hover:scale-125  h-[230px] w-full duration-1000"
              src="https://assets.kerzner.com/api/public/content/31297253f34747609844686cadbad6c0?v=275c4751&t=w576"
              alt=""
            />
          </div>
          <h1 className="text-blue-950 py-5 text-2xl">La Mar by Gastón</h1>
          <p className="text-blue-950 mb-6">
            The brilliant James Beard-award winning chef José Andrés, showcases
            the rich cutting-edge flavours and flair of Spanish cuisine in a
            vibrant atmosphere.
          </p>
          <button className="px-8 bg-[#171255] hover:bg-[#d3aa2f] duration-700 py-3 text-white mb-4">
            Reserve
          </button>
          <br />
          <button className="px-[33px] border-2 border-[#171255] bg-transparent hover:bg-[#d3aa2f] duration-700 py-3 text-[#171255]">
            Explore
          </button>
        </div>
        <div className="" data-aos="flip-left">
          <div className="overflow-hidden">
            <img
              className="hover:scale-125  h-[230px] w-full duration-1000"
              src="https://assets.kerzner.com/api/public/content/3f43affb19014bbaa9c39012ee2f87ba?v=8d44f544&t=w576"
              alt=""
            />
          </div>
          <h1 className="text-blue-950 py-5 text-2xl">Jaleo by José Andrés</h1>
          <p className="text-blue-950 mb-6">
            cutting-edge flavours and flair ofdistinctive Japanese-Peruvian
            cuisine, chef Nobu Matsuhisa debuts his first ever daytime poolside
            and beach.
          </p>
          <button className="px-8 bg-[#171255] hover:bg-[#d3aa2f] duration-700 py-3 text-white mb-4">
            Reserve
          </button>
          <br />
          <button className="px-[33px] border-2 border-[#171255] bg-transparent hover:bg-[#d3aa2f] duration-700 py-3 text-[#171255]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dinning;
