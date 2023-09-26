const Fountain = () => {
    return (
      <div className="bg-slate-300 py-10 border-y-2 border-blue-900">
        <div className="  py-11 md:w-[1280px] mx-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 relative md:border-2 border-blue-900">
            <div
              className="bg-[#001446] flex justify-center items-center mb-16 md:absolute left-[500px] top-0  h-[600px]"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div
                className=" w-2/4"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1 className="text-3xl text-white font-serif mb-6">
                  SKYBLAZE FOUNTAIN
                </h1>
                <p className="text-white font-serif ">
                  Impressive yet intimate, Skyblaze Fountain is the region’s first
                  fire-meets-water spectacle. The heat of the flames and delicate
                  waves of cooling mist rush through the skies with
                  colour-changing lights that set fire to the night and
                  electrifies your soul.
                </p>
              </div>
            </div>
            <div className="mt-16 ">
              <img
                className="h-[600px] shadow-2xl"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src="https://assets.kerzner.com/api/public/content/1973bf992e1846f5a5ac7cdd9e5640d9?v=8bb65b2e&t=w992"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Fountain;
  