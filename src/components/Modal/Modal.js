import { Fragment } from "react";
import ReactDOM from "react-dom";
import ShoeSlider from "./ShoeSlider";

const Modal = (props) => {
  if (!props.open) return null;

  return ReactDOM.createPortal (
    <div className="hidden md:block">
      <div
        onClick={props.onClose}
        className="fixed top-0 left-0 right-0 bottom-0 p-96 z-10 bg-VeryDarkBlue opacity-80"
      ></div>
      <div className="fixed md:top-20 md:left-64 lg:top-44 lg:left-3px z-10">{props.children}</div>
    </div>, document.getElementById('overlays')
  );
};

export default Modal;
