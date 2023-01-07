import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import closeIcon from "../images/icon-close.svg";
import { UserContext } from "../UserContext";

const MobileOverlay = () => {
  return (
    <div className="bg-VeryDarkBlue lg:hidden opacity-80 fixed z-10 top-0 left-0 right-0 bottom-0 "></div>
  );
};

const MobileMenu = (props) => {
  const value = React.useContext(UserContext)
  return (
    <section className="bg-White fixed w-52 h-screen py-10 z-20 lg:hidden">
      <aside className="mb-12 ml-2">
        <img className="w-5" onClick={value} src={closeIcon} alt="close"></img>
      </aside>
      <ul className="pl-4 space-y-3">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </section>
  );
};
const portalElement = document.getElementById("overlays");

const MobileModal = (props) => {
  if (!props.open) {
    return null
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(<MobileOverlay></MobileOverlay>, portalElement)}
      {ReactDOM.createPortal(<MobileMenu />, portalElement)}
    </Fragment>
  );
};

export default MobileModal;
