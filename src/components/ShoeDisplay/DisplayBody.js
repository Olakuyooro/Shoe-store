import React from "react";
import ShoeDesc from "./ShoeDesc";
import ShoeSection from "./ShoeSection";

const DisplayBody = (props) => {
  return (
    <div className="mt-20 mb-24 px-6 flex flex-col md:flex-row md:space-x-32">
      <ShoeSection />
      <ShoeDesc />
    </div>
  );
};

export default DisplayBody;
