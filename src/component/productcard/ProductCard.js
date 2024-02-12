import "./ProductCard.css"

import bannerImage from "../../assets/images/banner-image.png"
import { useNavigate } from "react-router-dom"


const ProductCard=()=>{

    const navigate=useNavigate();


    return (

        <div className="product_card" onClick={ ()=>navigate("/product/123")}>

            <img src={bannerImage} alt="" />
            <div className="product_card_info">
                <p className="product_card_name">Titan Edge</p>
                <p className="product_card_rate">$100</p>
            </div>

        </div>
    )


}

export default ProductCard;