import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";

const DinningExplore = () => {
  const chefDetails = useLoaderData();
  console.log(chefDetails.dishes);
  return (
    <div>
      <Card
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={chefDetails.image}
      >
        <a href="#">
          <h5 className="text-3xl font-semibold font-serif tracking-tight text-center uppercase text-gray-900 dark:text-white">
            <p>{chefDetails.name}</p>
          </h5>
        </a>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-7">
          {chefDetails?.dishes?.map((menu) => (
            <Card
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              
            >
                <img className="h-[220px]" src={menu.image} alt="" />
                <h5 className="text-xl font-semibold tracking-tight font-serif text-gray-900 dark:text-white">
                   Name of Item : {menu.name}
                </h5>
                <h5 className="font-serif"> <strong >Served Width :</strong>{menu.servedWith}</h5>

        
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DinningExplore;
