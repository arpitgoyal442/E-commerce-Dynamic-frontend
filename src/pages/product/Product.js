import ImageCrousel from "../../component/image-crousel/ImageCrousel";
import Navbar from "../../component/navbar/Navbar";
import "./Product.css"

import product1 from "../../assets/images/product-item1.jpg"
import product2 from "../../assets/images/product-item2.jpg"
import product3 from "../../assets/images/product-item3.jpg"
import product4 from "../../assets/images/product-item4.jpg"
import { PanoramaVerticalSelectSharp } from "@mui/icons-material";

const Product=()=>{


    return (

        <>

        <Navbar/>

        <div className="product_main">

         <div className="product_main_left">
        <ImageCrousel   allImages= {[product1,product2,product3,product4]}/>
        </div>


        <div className="product_main_right">
            <h2>IPhone 13 Pro Max</h2>
            <h3>$89999</h3>

            <p> <b>Color</b>: Red,Yellow, Black</p>
            <p><b>Size</b>: S,M,L</p>
            <p><b>Description: </b> It is a long established letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>

         
         <div className="buy_add_btns">
            
         <p className="secondary-btn buy_btn">Buy Now</p>
         <p className="primary-btn addcart_btn">Add to cart</p>
         </div>

        </div>
        </div>


       

       <div className="product_info_tab">

        <p className="product_info_tab_item">Description</p>
        <p className="product_info_tab_item">Details</p>
        <p className="product_info_tab_item">Reviews</p>
        <p></p>

       </div>

        
        </>


    )


}


export default Product;