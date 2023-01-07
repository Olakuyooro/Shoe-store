import React from "react";

const BasketEmpty = (props) => {
  return (
    <div>
      {props.empty && (
        <div className="bg-White h-60 w-72 rounded-lg shadow-3xl ">
          <h3 className="pt-2 pl-4 text-sm font-bold py-4 pt-8 ">Cart</h3>
          <hr></hr>
          <div className="flex justify-center items-center">
            <article className="text-sm mt-20">Your cart is empty</article>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketEmpty;
