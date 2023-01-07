import React from "react";
import firstShoe from "../images/image-product-1-thumbnail.jpg";
import secondShoe from "../images/image-product-2-thumbnail.jpg";
import thirdShoe from "../images/image-product-3-thumbnail.jpg";
import fourthShoe from "../images/image-product-4-thumbnail.jpg";

const ShoeHighlight = (props) => {
  return (
    <div className="hidden md:flex md:flex-row md:space-x-5 ">
      <img onClick={props.showFirst} className="w-14 h-14 lg:w-24 lg:h-24 rounded-lg cursor-pointer hover:opacity-60" src={firstShoe} alt=""></img>
      <img onClick={props.showSecond} className="w-14 h-14 lg:w-24 lg:h-24 rounded-lg cursor-pointer hover:opacity-60" src={secondShoe} alt=""></img>
      <img onClick={props.showThird} className="w-14 h-14 lg:w-24 lg:h-24 rounded-lg cursor-pointer hover:opacity-60 " src={thirdShoe} alt=""></img>
      <img onClick={props.showFourth} className="w-14 h-14 lg:w-24 lg:h-24 rounded-lg cursor-pointer hover:opacity-60" src={fourthShoe} alt=""></img>
    </div>
  );
};

export default ShoeHighlight;
