const Pool = () => {
    return (
      <div className="bg-orange-50">
        <div className="py-20  md:flex w-[90%] mx-auto">
          <div className=" md:w-[30%] flex justify-center mb-5 items-center">
            <div className=" w-[80%] mx-auto text-center">
              <h1
                className="text-4xl py-6 text-blue-700 font-serif border-b-[1px] border-blue-700 mb-10"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Non-Stop Entertainment In The Pool
              </h1>
              <p
                className="text-blue-950 mb-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                Zamaluxe Resorts are the quintessential day through to night
                entertainment destinations, offering a range of activities
                suitable for guests of all ages.
              </p>
              <p
                className="text-blue-800 mb-5 pt-5 border-t-[1px] border-blue-700"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                offering a range of activities
                suitable for guests of all ages
                Zamaluxe Resorts are the quintessential day through to night
                entertainment destinations, .
              </p>
              <div className="flex justify-between" data-aos="zoom-in" data-aos-duration="1000">
                <button className="px-8 bg-blue-700 hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                  Explore
                </button>
                <button className="px-8 bg-[#544312] hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className=" md:w-[70%]">
            <img
              className="w-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://luxurycolumnist.com/wp-content/uploads/2021/07/grand-hotel-tremezzo-swimming-pool.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Pool;
  