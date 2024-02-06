

import "./SingleBanner.css"

import bannerImage from "../../assets/images/banner-image.png"

const SingleBanner=()=>{

    return (

    <div className="single_banner">

    <h1>Sale Is Live </h1>
    <img className="banner_image" src={bannerImage} alt="" />

  </div>
    )


}


export default SingleBanner