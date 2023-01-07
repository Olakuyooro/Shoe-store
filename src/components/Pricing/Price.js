import React from "react";

const Price = () => {
  return (
    <div className=" mt-8 flex justify-between md:flex-col">
      <div className="flex space-x-4">
        <div className="text-2xl font-bold">$125.00</div>
        <div className="text-xs mt-2 text-Orange font-semibold bg-PaleOrange px-1 h-4 w-8 rounded-sm"> 50% </div>
      </div>
      <div className="text-xs text-DarkGrayishBlue line-through mt-2 ">$250.00</div>
    </div>
  );
};

export default Price;
