const Dessert = () => {
    return (
      <div className="bg-slate-50">
        <div className="py-20  md:flex w-[90%] mx-auto">
          <div className=" md:w-[70%] w-full mr-14">
            <img
              className="w-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://assets.kerzner.com/api/public/content/67b7316157494ac88cce2b7777611c90?v=d079f9d1&t=w992"
              alt=""
            />
          </div>
          <div className=" md:w-[30%] flex justify-center items-center border-t-2 border-b-2 border-blue-950">
            <div className=" w-[80%] mx-auto text-center">
              <h1
                className="text-4xl py-6 text-blue-700 font-serif border-b-[1px] border-blue-700 mb-10"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                The Royal Tearoom with Christophe Devoille
              </h1>
              <p
                className="text-blue-950 mb-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                A sophisticated lounge serving all-day light snacks and
                refreshments, and a luxury afternoon tea in collaboration with
                Pastry Chef Christophe Devoille.
              </p>
              <h3 className="text-2xl text-black font-serif font-bold mb-10">
                Located in Zamaluxe The Royal
              </h3>
              <div
                className=" flex justify-between"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <button className="px-8 bg-blue-700 hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                  Explore
                </button>
                <button className="px-8 bg-transparent border-2 border-blue-950 hover:bg-[#d3aa2f] duration-700 py-3 text-blue-950">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="buttome w-[90%] mx-auto pb-20 relative">
          <div className="md:h-[500px] md:w-[100%] overflow-hidden">
            <img
              className=""
              src="https://assets.kerzner.com/api/public/content/2f678e0401ba41889da92c38ba982ca1?v=946329f3&t=w1920"
              alt=""
            />
          </div>
          <div className=" md:absolute -left-60 top-10">
          <div className=" ">
            <div className=" md:w-[40%] mx-auto bg-black bg-opacity-30 px-10 pb-10 ">
              <h1 className="text-4xl py-6  text-white  font-serif border-b-[2px] border-white mb-10" data-aos="zoom-in"
              data-aos-duration="2000">Non-Stop Entertainment</h1>
              <p className=" mb-5  text-white" data-aos="zoom-in"
              data-aos-duration="1000">
                Atlantis Resorts are the quintessential day through to night
                entertainment destinations, offering a range of activities
                suitable for guests of all ages.
              </p>
              <h3 className="text-2xl  text-white font-serif font-bold mb-10">
                Located in Zamaluxe The Royal
              </h3>
              <div className="" data-aos="zoom-in"
              data-aos-duration="1000">
                <button className="px-8 bg-[#645117] hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                  Explore
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dessert;