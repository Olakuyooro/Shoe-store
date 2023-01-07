import React, { useReducer } from "react";
import { UserContext } from "../UserContext";
import cartButton from "../images/icon-cart.svg";


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      break;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    if (state.count === 0) {
      return;
    }
    dispatch({ type: "decrement" });
  };

  const stopper = ()=>{
    if (state.count === 0) {
      return;
    }
  }

  const {value1, value2} = React.useContext(UserContext);
  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="flex justify-between bg-LightGrayishblue w-72 md:w-32 ml-8 md:ml-0 py-2 px-2 space-x-3 rounded-lg font-semibold">
        <div
          onClick={() => {
            decrement();
          }}
          className="text-Orange text-2xl cursor-pointer hover:opacity-60"
        >
          -
        </div>
        <div className="text-sm mt-2">{state.count}</div>
        <div
          onClick={() => {
            increment();
          }}
          className="text-Orange text-2xl cursor-pointer hover:opacity-60"
        >
          +
        </div>
      </div>
      <div>
        <div>
          <button
            onClick={() => {
              if (state.count === 0) {
                return
              }
              value1(state.count);
              
            }}
            className="bg-Orange flex justify-center items-center space-x-3 mt-4 md:mt-0 ml-8 md:ml-0 w-72 md:w-52 rounded-lg px-2 py-4 cursor-pointer hover:opacity-60"
          >
            <img className="w-4" src={cartButton} alt=""></img>
            <div className="text-xs text-White">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
