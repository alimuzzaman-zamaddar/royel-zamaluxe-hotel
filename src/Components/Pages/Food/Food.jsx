"use client";
import React from "react";
import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";

const Food = () => {
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
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 " data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/64230f30dfd62d8e3beb31f4_wedding-cake-candlelight-p-500.webp"
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
                <p className="text-white">5.0 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $99++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950" data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/64230eaf21ff820fc75efe25_lava-cake-closeup-p-500.webp"
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
                <p className="text-white">4.0 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $59++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950" data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/64230ea221ff822e9c5efd6d_ice-cream-sundae-p-500.webp"
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
                <p className="text-white">5.0 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $29++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950" data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/64230f3e4964667fe5212d84_whole-apple-pie-p-500.webp"
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
                <p className="text-white">5.0 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $75++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950" data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/6488cb44418be98909158c91_sparnaay-burger.webp"
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
                <p className="text-white">4.5 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $11++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950" data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/64230e8a716fa9e86c9a8623_fried-oreos-at-statefair-p-500.webp"
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
                <p className="text-white">5.0 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $88++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950" data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/64230f0097f94a04f98bb2ac_ramen-bowl-p-500.webp"
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
                <p className="text-white">5.0 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $69++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950" data-aos="fade-up" data-aos-duration="1000">
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-125 h-[208px] duration-700 w-full"
                    src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/64230ee530c0962328d841d1_pastitsio-closeup-p-500.webp"
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
                <p className="text-white">5.0 Stars</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  $33++
                </span>
                <a
                  className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
                  href="#"
                >
                  <p>Order Now</p>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
