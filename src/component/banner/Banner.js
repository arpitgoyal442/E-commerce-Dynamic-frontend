import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerImage from "../../assets/images/banner-image.png"

import "../../global.css"
import "./Banner.css"
import axios from "axios";

const backendURL=process.env.REACT_APP_BACKEND;


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

  const [items, setItems] = useState([]);
  const fetchProducts = async () => {

    try {
      let res = await axios.get(`${backendURL}product?page=1`)
      let items = res.data;
      setItems(items)
    } catch (e) {
      console.log("Error While Fetching Products: ", e);
      throw new Error(e)
    }

  }
  useEffect(() => {
    fetchProducts();
  }, [])


  return (

    <div className="banner">
      <div className="slider-container">
        <Slider {...settings}>


          {items.map((item) => {

            return  <div className="single_banner">
              {/* item.product_images[0] */}

            <h1>Awesome Product</h1>
            <img className="banner_image" src={item.product_images[0]} alt="" />

          </div>
          })}



          {/* <div className="single_banner">

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

          </div> */}


        </Slider>
      </div></div>
  );
}

export default Banner;
