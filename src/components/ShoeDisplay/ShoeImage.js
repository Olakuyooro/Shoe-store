import React from "react";
import mainShoe from "../images/image-product-1.jpg";
import secondMainShoe from "../images/image-product-2.jpg";
import thirdMainShoe from "../images/image-product-3.jpg";
import fourMainShoe from "../images/image-product-4.jpg";
import ShoeSlider from "../Modal/ShoeSlider";
import { UserContext } from "../UserContext";

const ShoeImage = (props) => {
  const { value1, value2 } = React.useContext(UserContext);
  return (
    <div>
      <div className="w-16 sm:hidden">
        <ShoeSlider />
      </div>
      <div className="lg:w-128 lg:h-96 sm:w-72 hidden sm:block">
        {props.firstShoe && (
          <img
            onClick={() => {
              value2();
            }}
            className="rounded-2xl cursor-pointer"
            src={mainShoe}
            alt=""
          ></img>
        )}
        {props.secondShoe && (
          <img
            onClick={() => {
              value2();
            }}
            className="rounded-2xl cursor-pointer"
            src={secondMainShoe}
            alt=""
          ></img>
        )}
        {props.thirdShoe && (
          <img
            onClick={() => {
              value2();
            }}
            className="  rounded-2xl cursor-pointer"
            src={thirdMainShoe}
            alt=""
          ></img>
        )}
        {props.fourthShoe && (
          <img
            onClick={() => {
              value2();
            }}
            className=" rounded-2xl cursor-pointer"
            src={fourMainShoe}
            alt=""
          ></img>
        )}
      </div>
    </div>
  );
};

export default ShoeImage;
