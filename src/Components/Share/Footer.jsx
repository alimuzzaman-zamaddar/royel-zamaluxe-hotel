"use client";

import {
  FaDiscord,
  FaFacebook,
  FaInstagramSquare,
  FaRegAddressCard,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-[#dcb84e] bg-[#001446]">
      <div className="">
        <div className="">
          <h1 className="text-center text-2xl text-[#dcb84e] pt-10 font-serif">
            THE ROYEL ZAMALUXE
          </h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-4 font-serif py-5 border-b-[1px] border-[#dcb84e] w-[95%] mx-auto "
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="">
          <h1 className="mb-6 text-2xl ">ZAMALUXE RESOURT</h1>
          <p className="mb-2">DHAKA </p>
          <p className="mb-2">KALKATA </p>
          <p className="mb-2">DUBAI </p>
          <p className="mb-2">KUALA LAMPUR </p>
          <p className="mb-2">BAHRAIN </p>
        </div>
        <div className="">
          <h1 className="mb-6 text-2xl">SOCIAL LINKS</h1>
          <div className="grid grid-cols-2 gap-5">
            <span>
              {" "}
              <FaFacebook className="mb-2 text-4xl text-[#dcb84e] animate-pulse"></FaFacebook>
            </span>
            <span>
              {" "}
              <FaInstagramSquare className="mb-2 text-4xl text-[#dcb84e] animate-pulse"></FaInstagramSquare>
            </span>
            <span>
              {" "}
              <FaTwitterSquare className="mb-2 text-4xl text-[#dcb84e] animate-pulse"></FaTwitterSquare>
            </span>
            <span>
              {" "}
              <FaYoutube className="mb-2 text-4xl text-[#dcb84e] animate-pulse"></FaYoutube>
            </span>
            <span>
              <FaDiscord className="mb-2 text-4xl text-[#dcb84e] animate-pulse "></FaDiscord>
            </span>
            <span>
              <FaRegAddressCard className="mb-2 text-4xl text-[#dcb84e] animate-pulse "></FaRegAddressCard>
            </span>
          </div>
        </div>
        <div className="">
          <h1 className="mb-6 text-2xl">POLICY PRIVACY</h1>
          <p className="mb-2">SECURITY</p>
          <p className="mb-2">PEACH</p>
          <p className="mb-2">RESTRICTIONS</p>
          <p className="mb-2">HOISTING</p>
          <p className="mb-2">SAFETY</p>
        </div>
        <div className="">
          <h1 className="text-2xl mb-6">SERVICES</h1>
          <p className="mb-2">RESOTRTS</p>
          <p className="mb-2">POOLS</p>
          <p className="mb-2">FOODS</p>
          <p className="mb-2">ROOM SERVICE</p>
          <p className="mb-2">BAR AND PARTY</p>
          <p className="mb-2">MEDICALE SERVICE</p>
        </div>
      </div>
      <div className=" text-center py-11">
        <p>@copy All right reserved to Royle Zamaluxe </p>
      </div>
    </div>
  );
};

export default Footer;
