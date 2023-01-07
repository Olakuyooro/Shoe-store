import React from "react";
import cartButton from "../images/icon-cart.svg";

const AddCart = (props)=>{
    return(
        <div>
            <button onClick={()=>{console.log(props.picked)}} className="bg-Orange flex justify-center items-center space-x-3 w-52 rounded-lg px-2 py-4 cursor-pointer hover:opacity-60">
                <img className="w-4" src={cartButton} alt=""></img>
                <div className="text-xs text-White">Add to Cart</div>
            </button>
        </div>
    )
}

export default AddCart;