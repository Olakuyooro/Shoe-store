import React from "react";
import firstShoe from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";
const BasketFilled = (props) => {
  return (
    <>
      {props.filled && (
        <div className="bg-White h-60 w-72 rounded-lg shadow-3xl ">
          <h3 className="pl-4 text-sm font-bold py-4 pt-8 ">Cart</h3>
          <hr></hr>
          <div className="px-2 py-4">
            <section className="flex space-x-4 mt-4">
              <img
                className="w-12 h-12 rounded-sm"
                src={firstShoe}
                alt=""
              ></img>
              <span className="text-xs">
                <div>Fall Limited Edition Sneakers</div>
                <span className="flex space-x-1">
                  <div> $125.00 x {props.itemNumber}</div>
                  <div className="font-bold">
                    ${props.itemNumber * 125.0}.00
                  </div>
                </span>
              </span>
              <img
                className="h-4 cursor-pointer"
                onClick={props.deleteHandler}
                src={deleteIcon}
                alt=""
              ></img>
            </section>
            <a href="https://www.google.com.ng/">
              <button className="text-White text-sm bg-Orange w-64 py-2 ml-1 mt-8 rounded-md ">
                Checkout
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default BasketFilled;
