const Entertainment = () => {
    return (
      <div className="bg-orange-50 ">
        <div className="py-20  md:flex w-[90%] mx-auto">
          <div className=" md:w-[70%]">
            <img
              className="w-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://assets.kerzner.com/api/public/content/e55d588e36cf4fc9a9443642efc68204?v=f3773722&t=w992"
              alt=""
            />
          </div>
          <div className=" md:w-[30%] flex justify-center items-center">
            <div className=" w-[80%] mx-auto text-center">
              <h1 className="text-4xl py-6 text-blue-700 font-serif border-b-[1px] border-blue-700 mb-10" data-aos="zoom-in"
              data-aos-duration="2000">Non-Stop Entertainment</h1>
              <p className="text-blue-950 mb-5" data-aos="zoom-in"
              data-aos-duration="1000">
                Atlantis Resorts are the quintessential day through to night
                entertainment destinations, offering a range of activities
                suitable for guests of all ages.
              </p>
              <div className="" data-aos="zoom-in"
              data-aos-duration="1000">
                <button className="px-8 bg-blue-700 hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Entertainment;