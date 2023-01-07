import React from "react";
import Menu from "./Menu";
 import logo from "../images/logo.svg"
import Cart from "./Cart";
import Profile from "./Profile";
import menuIcon from "../images/icon-menu.svg";

const Header = (props) => {
  return (
    <div>
      <div className="flex px-4 sm:px-0 sm:justify-between">
        <div className="sm:hidden mt-5" > <img onClick={props.modalHandler} src={menuIcon} alt="" ></img> </div>
        <div className="flex space-x-12">
          <div className="sm:w-32 mt-4 ml-6">
            <img src={logo} alt=""></img>
          </div>
          <Menu></Menu>
        </div>
        <div className="flex ml-36 space-x-4 sm:ml-0 sm:space-x-12">
          <Cart itemNumber={props.itemNumber} filledHandler={props.filledHandler} cartPhoto={props.cartPhoto} secondCartPhoto={props.secondCartPhoto} returnEmpty={props.returnEmpty} ></Cart>
          <Profile></Profile>
        </div>
      </div>
      <hr className="hidden sm:block w-76 mt-8"></hr>
    </div>
  );
};

export default Header;
