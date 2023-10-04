"use client";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="relative bg-black">
      <Carousel className="h-screen">
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/22a13cd86bef48b28e9ff17642419a6c?v=bc38f902&t=w1920"
        />
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/ef0171bb255f4a068a6ac64e41ae821e?v=d2ab854c&t=w992"
        />
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/c92cb53c9cb04290892a3fbfb010ee74?v=4632931a&t=w992"
        />
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/99ad55d3eb954379ae1cf81369de8ad8?v=bd12262a&t=w992"
        />
      </Carousel>

      <div className=" md:absolute text-center md:left-[8%] md:top-[30%]">
        <div className=" md:w-2/4 ">
          <h1 className="md:text-2xl font-extrabold uppercase text-center text-white font-serif bg-black bg-opacity-20">
            explore the most luxerous hotel in the world
            <div className="">
              <Link to="/Stays">
                <button className="px-16 mt-10 md:text-2xl bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                  Book Now
                </button>
              </Link>
            </div>
          </h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
