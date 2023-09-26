const Explore = () => {
    return (
      <div>
        <div className="relative">
          <div className="">
            <img
              className="h-screen w-full "
              data-aos="zoom-in"
              data-aos-duration="3000"
              src="https://assets.kerzner.com/api/public/content/b480e7798a324103a123a3a6d651b2bc?v=ee76577f&t=w1920"
              alt=""
            />
          </div>
          <div className=" absolute top-[37%] left-2 md:left-[10%] w-[500px] mb-3 bg-[#201b0d] bg-opacity-30"  data-aos="fade-right"
              data-aos-duration="3000">
            <h1 className=" md:text-6xl font-serif text-white font-extrabold uppercase">This is our royle scape</h1>
            <p className="md:text-lg mb-5 uppercase text-white font-serif">our extraordinary view and shows</p>
            <button className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 md:py-3 text-white">
              Explore More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Explore;