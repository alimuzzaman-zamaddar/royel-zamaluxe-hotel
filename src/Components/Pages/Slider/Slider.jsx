import React from "react";
import Marquee from "react-fast-marquee";
const Slider = () => {
  return (
    <div className="py-20 bg-[#001446]">
      <Marquee direction="left" speed={100}>
        <div className="flex  gap-5  h-80">
          <img
            className=""
            src="https://i.ibb.co/0QBTWrc/hotel-picture-luxrious-1.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/qMcB9d7/hotel-picture-luxrious.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/4fqSBc1/hotel-room-luxgerous-in-dubai-1.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/q5MQH06/hotel-room-luxgerous-3.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/J54MTdM/hotel-room-luxgerous-2.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/GM2FZVs/hotel-room-luxgerous-1.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/pd7P0Wy/hotel-room-luxgerous-in-dubai.png"
            alt=""
          />
          <img src="https://i.ibb.co/ZfLRDPN/hotel-room-luxgerous.png" alt="" />
          <img src="https://i.ibb.co/gD01LZf/hotel-room.png" alt="" />
        </div>
      </Marquee>
      <h1 className="text-center text-5xl font-serif text-[#dcb84e] py-8">
        GALLERY OF ZAMALUXE
      </h1>
      <Marquee direction="right">
        <div className="flex gap-5 h-80">
          <img src="https://i.ibb.co/BN5dNL0/luxurious-hotels-3.png" alt="" />
          <img src="https://i.ibb.co/D5VZmq0/luxurious-hotels-2.png" alt="" />
          <img
            src="https://i.ibb.co/k12rmqb/luxurious-hotels-building-3.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/Gdyt5Zq/luxurious-hotels-building-out-of-the-world-2.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/LtR3PXt/luxurious-hotels-building-out-of-the-world-3.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/Hp784gq/luxurious-hotels-building-out-of-the-world-1.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/2MnC4Vk/luxurious-hotels-building-out-of-the-world.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/WKLTVB7/luxurious-hotels-building-out-of-the-world.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/0fMmVG0/luxurious-hotels-building-1.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/C0W26s3/luxurious-hotels-building.png"
            alt=""
          />
          <img src="https://i.ibb.co/D5VZmq0/luxurious-hotels-2.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
