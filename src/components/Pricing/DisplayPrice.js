import React from "react";
import Price from "./Price";
import Counter from "./Counter";


const DisplayPrice = () => {


  return (
    <div>
      <Price />
      <div className="flex space-x-5 mt-5">
         <Counter />
      </div>
     
    </div>
  );
};

export default DisplayPrice;
