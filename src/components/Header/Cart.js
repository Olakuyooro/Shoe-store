import React from "react";
import cartIcon from "../images/icon-cart.svg";
import { UserContext } from "../UserContext";

const Cart = (props) => {
  const value = React.useContext(UserContext)


  return (
    <div className="mt-4 relative">
      {props.cartPhoto && <img onClick={()=>{
        value();
        props.filledHandler();
      }} className="w-5 h-5 sm:w-6 sm:h-6  cursor-pointer" src={cartIcon} alt=""></img>} 
     {props.secondCartPhoto && <img onClick={props.returnEmpty} className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" src={cartIcon} alt=""></img>} 
      <div className="text-lit absolute -top-1 left-4 bg-Orange text-White px-1 rounded-md">{props.itemNumber}</div>
    </div>
  );
};

export default Cart;
