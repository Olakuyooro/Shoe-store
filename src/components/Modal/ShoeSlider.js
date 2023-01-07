import React, {useState} from "react"; 
import './ShoeSlider.css'
import mainShoe from "../images/image-product-1.jpg";
import secondMainShoe from "../images/image-product-2.jpg";
import thirdMainShoe from "../images/image-product-3.jpg";
import fourMainShoe from "../images/image-product-4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [ mainShoe, secondMainShoe, thirdMainShoe, fourMainShoe ]
  
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",  }}
      onClick={onClick}
    />
  );
}
const ShoeSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        } 
      }
    ]
  };
  return (
    <div className="w-100 lg:w-100 md:w-72 ml-2 sm:h-72 sm:w-96 " >
      <Slider {...settings} >
        {imageList.map((photo, index)=> <div><img src={photo}></img></div>)}
        {/* <div   >
          <img src={mainShoe} alt=""></img>
        </div>
        <div>
          <img src={secondMainShoe} alt=""></img>
        </div>
        <div>
          <img src={thirdMainShoe} alt=""></img>
        </div>
        <div>
          <img src={fourMainShoe} alt=""></img>
        </div> */}
      </Slider>
    </div>
  );
};

export default ShoeSlider;
