import React from "react";

const Gallery = () => {
  return (
    <div className="py-20 bg-orange-100">
      <div className="w-[95%] mx-auto">
        <div className="text-center md:w-1/2 px-3 mx-auto">
          <h1 data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="text-4xl text-blue-950 mb-6 font-serif pb-5 border-b-[1px] border-blue-950">
            GALLERY OF ZAMALUXE SUITE
          </h1>
          <p className="text-blue-950 mb-7" data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            Discover a world of award-winning adventure. A world of water
            adventures filled with thrilling rides, for the young and the young
            at heart. Where adventurers ride rapids, whilst thrill seekers defy
            gravity, and relaxers soak up the sun. Ground-breaking marine animal
            experiences and once in a lifetime opportunities to interact with
            the ocean’s most beloved inhabitants.
          </p>
        </div>
        <div className=" md:flex gap-4 md:h-[500px]">
          <div
            className="md:w-[22%] overflow-hidden"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              className="md:max-w-[100%] w-full h-[100%] hover:scale-125 duration-700"
              src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/6423050aaaa7d14a8ac2ddd2_cyberpunk-apartment-p-500.webp"
              alt=""
            />
          </div>
          <div className=" md:w-[50%]">
            <div
              className="md:h-[50%] mb-4 overflow-hidden"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                className="h-[100%] w-[100%] hover:scale-125 duration-700"
                src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/648774b3da4ec766208766bb_hoppen-bedroom.webp"
                alt=""
              />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="overflow-hidden"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  className="md:h-[235px] hover:scale-125 duration-700"
                  src="https://www.pandotrip.com/wp-content/uploads/2023/01/Photo-of-Burj-Al-Arab-from-Madinat-Jumeirah.jpg"
                  alt=""
                />
              </div>
              <div
                className=" overflow-hidden"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  className="md:h-[235px] hover:scale-125 duration-700"
                  src="https://uploads-ssl.webflow.com/63e3cc1923c2ab167578e72a/6422065b34c64899fd99de58_open-concept-living-room-p-500.webp"
                  alt=""
                />
              </div>
              <div
                className="overflow-hidden"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  className="md:h-[235px] hover:scale-125 duration-700"
                  src="https://www.pandotrip.com/wp-content/uploads/2023/01/Ristorante-L-Olivo-at-Al-Mahara-with-seawater-aquarium.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" md:w-[28%] bg-slate-100">
            <div
              className="md:h-[50%] mb-4 overflow-hidden"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                className="h-[100%] w-full hover:scale-125 duration-700"
                src="https://assets.kerzner.com/api/public/content/34ee2af57fdb4b779ce60e95329bf8e7?v=70023764&t=w992"
                alt=""
              />
            </div>
            <div className="md:flex gap-4">
              <div
                className="overflow-hidden"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  className="md:h-[235px] hover:scale-125 duration-700"
                  src="https://assets.kerzner.com/api/public/content/da5a3a1e026a4407b37f1562f604366f?v=a0b1f26a&t=w992"
                  alt=""
                />
              </div>
              <div
                className=" overflow-hidden"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  className="md:h-[235px] hover:scale-125 duration-700"
                  src="https://assets.kerzner.com/api/public/content/faed8d55a44746d39169c1d3e8364f6b?v=a6a0c5c9&t=w992"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;