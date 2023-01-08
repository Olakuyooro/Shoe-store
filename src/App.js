import React, { useState } from "react";
import Header from "./components/Header/Header";
import DisplayBody from "./components/ShoeDisplay/DisplayBody";
import "./App.css";
import { UserContext } from "./components/UserContext";
import BasketEmpty from "./components/PopUp/BasketEmpty";
import BasketFilled from "./components/PopUp/BasketFilled";
import Modal from "./components/Modal/Modal";
import MobileModal from "./components/Modal/MobileModal";
import ShoeImage from "./components/ShoeDisplay/ShoeImage";
import ShoeSlider from "./components/Modal/ShoeSlider";

function App() {
  const [itemNumber, setItemNumber] = useState("");

  const itemFetcher = (item) => {
    setItemNumber(item);
  };

  const [empty, setEmpty] = useState(false);
  const [cartPhoto, setCartPhoto] = useState(true);
  const [secondCartPhoto, setSecondCartPhoto] = useState(false);
  const [filled, setFilled] = useState(false);
  const [defaultSlider, setDefaultSlider] = useState(0)

  const emptyHandler = () => {
    if (itemNumber < 1) {
      setEmpty(true);
      setCartPhoto(false);
      setSecondCartPhoto(true);
    }
  };

  const returnEmpty = () => {
    if (itemNumber < 1) {
      setEmpty(false);
      setSecondCartPhoto(false);
      setCartPhoto(true);
    }
  };

  const filledHandler = () => {
    if (itemNumber > 0) {
      setFilled(true);
    }
  };

  const cartDelete = ()=>{
    setFilled(false);
    setItemNumber(null)
  }

  const [isOpen, setIsOpen] = useState(false);

  const openerHandler = (defaultSlider) => {
    setIsOpen(true);
    setDefaultSlider(defaultSlider)
  };

  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(true);
  };

  const closeHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className="lg:px-32 pt-8 font-sans relative">
      <UserContext.Provider value={emptyHandler}>
        <Header
          itemNumber={itemNumber}
          cartPhoto={cartPhoto}
          secondCartPhoto={secondCartPhoto}
          returnEmpty={returnEmpty}
          filledHandler={filledHandler}
          modalHandler={modalHandler}
        />
      </UserContext.Provider>
      <div className=" z-10 absolute ml-16 mt-8 md:absolute md:top-16 md:right-16 lg:absolute lg:top-24 lg:right-16">
        <BasketEmpty
          empty={empty}
          emptyHandler={emptyHandler}
          itemNumber={itemNumber}
        />
      </div>
      <div className=" z-10 absolute ml-16 mt-8 md:absolute md:top-16 md:right-16 lg:absolute lg:top-24 lg:right-16">
        <BasketFilled itemNumber={itemNumber} filled={filled} deleteHandler={cartDelete} />
      </div>
      <UserContext.Provider
        value={{ value1: itemFetcher, value2: openerHandler }}
      >
        <DisplayBody />
      </UserContext.Provider>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ShoeSlider default={defaultSlider} />
      </Modal>
      <UserContext.Provider value={closeHandler}>
        <MobileModal open={modalOpen} />
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
