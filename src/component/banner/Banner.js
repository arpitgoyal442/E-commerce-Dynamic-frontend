import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerImage from "../../assets/images/banner-image.png"
import product1 from "../../assets/images/product-item1.jpg"
import product2 from "../../assets/images/product-item2.jpg"
import product3 from "../../assets/images/product-item3.jpg"
import product4 from "../../assets/images/product-item4.jpg"


import "../../global.css"
import "./Banner.css"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black", right: "-150px", border: "2px solid black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (

    <div
      className={className}
      style={{ ...style, color: "red", display: "block", backgroundColor: "black", left: "10px", border: "2px solid black" }}
      onClick={onClick}
    />
  );
}

function Banner() {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,

    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     nextArrow: <SampleNextArrow/>,
  //     prevArrow: <SamplePrevArrow />,
  //   };

  return (

    <div className="banner">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="single_banner">

            <h1>Awesome Product</h1>
            <img className="banner_image" src={bannerImage} alt="" />

          </div>

          <div className="single_banner">

            <h1>Awesome Product</h1>
            <img className="banner_image" src={bannerImage} alt="" />

          </div>

          <div className="single_banner">

            <h1>Awesome Product</h1>
            <img className="banner_image" src={bannerImage} alt="" />

          </div>
          <div className="single_banner">

            <h1>Awesome Product</h1>
            <img className="banner_image" src={bannerImage} alt="" />

          </div>
          <div className="single_banner">

            <h1>Awesome Product</h1>
            <img className="banner_image" src={bannerImage} alt="" />

          </div>
          <div className="single_banner">

            <h1>Awesome Product</h1>
            <img className="banner_image" src={bannerImage} alt="" />

          </div>
        </Slider>
      </div></div>
  );
}

export default Banner;
