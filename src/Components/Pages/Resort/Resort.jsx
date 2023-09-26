const Resort = () => {
    return (
      <div className="bg-orange-50">
        <div className=" md:w-2/4 px-3 mx-auto text-center pt-10">
          <h1
            className="text-4xl font-sans pb-5 border-b-[1px] border-blue-500 mb-5 text-blue-950"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Zamaluxe Resorts
          </h1>
          <p
            className="text-blue-950"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Discover a world away from your everyday at our Atlantis resorts in
            Dubai and China. These iconic entertainment resorts are world famous
            for their stunning architecture, unique Rooms and Suites,
            out-of-this-world dining and thrilling attractions such as Aquaventure
            Waterpark.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:max-w-[1460px] mx-auto px-3 py-28 ">
          <div className="" data-aos="zoom-in" data-aos-duration="1000">
            <img
              src="https://assets.kerzner.com/api/public/content/51398544aeea4336a2673b3793b9a078?v=86721310&t=w992"
              alt=""
            />
            <h1
              className="text-3xl text-blue-950 my-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Zamaluxe,The Palm
            </h1>
            <p
              className="mb-5 text-blue-950"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              This Dubai icon is the ultimate holiday destination for both couples
              and families to make lifetime memories. From thrill-seekers to
              foodies, sun lovers to explorers, there is an unforgettable
              experience for everyone.
            </p>
            <button
              className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Explore More
            </button>
          </div>
          <div className="" data-aos="zoom-in" data-aos-duration="1000">
            <img
              src="https://luxurycolumnist.com/wp-content/uploads/2021/07/THE-MURAKA_Undersea-Bedroom_Justin-Nicholas.jpg"
              alt=""
            />
            <h1
              className="text-3xl text-blue-950 my-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Zamaluxe,The Royal
            </h1>
            <p
              className="mb-5 text-blue-950"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              A daring destination resort with extraordinary stays, dining,
              attractions and entertainment where you’ll be left with a feeling of
              wonderment. The most anticipated hotel is now open.
            </p>
            <button
              className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resort;
  