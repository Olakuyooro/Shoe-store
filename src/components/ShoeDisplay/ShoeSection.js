import React, { useState } from "react";
import ShoeHighlight from "./ShoeHighlight";
import ShoeImage from "./ShoeImage";

const ShoeSection = (props) => {

  const[firstShoe, setFirstShoe] = useState(true)
  const[secondShoe, setSecondShoe] = useState(false)
  const[thirdShoe, setThirdShoe] = useState(false)
  const[fourthShoe, setFourthShoe] = useState(false)


  const showFirst = ()=>{
    setFirstShoe(true)
    setSecondShoe(false)
    setThirdShoe(false)
    setFourthShoe(false)
  }


  const showSecond = ()=>{
    setFirstShoe(false)
    setSecondShoe(true)
    setThirdShoe(false)
    setFourthShoe(false)
  }

  const showThird = ()=>{
    setThirdShoe(true)
    setFirstShoe(false)
    setSecondShoe(false)
    setFourthShoe(false)
  }

  const showFourth = ()=>{
    setFourthShoe(true)
    setThirdShoe(false)
    setFirstShoe(false)
    setSecondShoe(false)
  }

  return (
    <div className="flex flex-col space-y-12 lg:space-y-24">
      <ShoeImage  firstShoe={firstShoe} secondShoe={secondShoe} thirdShoe={thirdShoe} fourthShoe={fourthShoe} />
      <ShoeHighlight showFirst={showFirst} showSecond={showSecond} showThird={showThird} showFourth={showFourth} />
    </div>
  );
};

export default ShoeSection;