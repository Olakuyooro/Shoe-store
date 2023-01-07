import React from "react";
import DisplayPrice from "../Pricing/DisplayPrice";

const ShoeDesc = () => {
  return (
    <div className="md:m-6 lg:mt-16">
      <div>
        <h4 className="uppercase text-xs font-semibold text-Orange">
          Sneaker Company
        </h4>
        <h2 className="mt-4 mb-8 font-semibold text-3xl lg:text-5xl">
          Fall Limited Edition Sneakers
        </h2>
        <p className=" text-sm lg:text-sm text-DarkGrayishBlue w-72 lg:w-96">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div>
        <DisplayPrice  />  
      </div>
    </div>
  );
};

export default ShoeDesc;
