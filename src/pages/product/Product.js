import ImageCrousel from "../../component/image-crousel/ImageCrousel";
import Navbar from "../../component/navbar/Navbar";
import "./Product.css"

import product1 from "../../assets/images/product-item1.jpg"
import product2 from "../../assets/images/product-item2.jpg"
import product3 from "../../assets/images/product-item3.jpg"
import product4 from "../../assets/images/product-item4.jpg"

import Footer from "../../component/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { showErrorNotification, showSuccessNotification } from "../../component/notification/Notification";

const backendURL=process.env.REACT_APP_BACKEND;

const Product=()=>{

   
    const {productId} =useParams();
    const [item,setItem]=useState(null);
    const [attributes,setAttributes]=useState({});

    const fetchProduct=async ()=>{
        let res=await axios(`${backendURL}product/${productId}`);
        console.log(res.data[0])
        setAttributes(res.data[0].attributes)
        setItem(res.data[0])
    }

    useEffect(()=>{
        fetchProduct();
    },[])



    const handleAddToCart=async()=>{

        try{

            let res=await axios.post(`${backendURL}cart/1`,{product_id:productId});

            if(res.data.rowCount==1)
            showSuccessNotification("Successfully Added To Cart")

            else showErrorNotification("Some Internal Server Occured, Please try Later")
           

        }catch(e){


            console.log(e)
            showErrorNotification("Some Internal Server Occured, Please try Later")

        }



    }

    const handleBuyNow=async()=>{

    }

    return (

        <>
        <Navbar/>
        <div className="product_main">
         <div className="product_main_left">
        <ImageCrousel   allImages= {item?.product_images || []}/>
        </div>
        <div className="product_main_right">
            <h2>{item?.product_name}</h2>
            <h3>${item?.price}</h3>

            {Object.keys(attributes)?.map((key)=>{

               return  <p><b>{key}</b>: {item?.attributes?.[key]}</p>

            })}

            
            {/* <p> <b>Color</b>: Red,Yellow, Black</p>
            <p><b>Size</b>: S,M,L</p>
            <p><b>Description: </b> {item?.description}
        </p> */}
         <div className="buy_add_btns">
         <p  onClick={handleBuyNow} className="secondary-btn buy_btn">Buy Now</p>
         <p onClick={handleAddToCart} className="primary-btn addcart_btn">Add to cart</p>
         </div>

        </div>
        </div>

       <div className="product_info_tab">
        <p className="product_info_tab_item">Description</p>
        <p className="product_info_tab_item">Details</p>
        <p className="product_info_tab_item">Reviews</p>
        
       </div>

       <div className="product_info_item">
        <h2>Description</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        </p>
       </div>

       <Footer/>
        </>
    )


}


export default Product;