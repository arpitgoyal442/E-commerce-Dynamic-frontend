import "./ProductCard.css"

import bannerImage from "../../assets/images/banner-image.png"
import { useNavigate } from "react-router-dom"


const ProductCard=({item})=>{

    const navigate=useNavigate();


    return (

        <div className="product_card" onClick={ ()=>navigate(`/product/${item.product_id}`)}>

            <img src={ item?.product_images?.[0] ? item.product_images[0] :bannerImage} alt="" />
            <div className="product_card_info">
                <p className="product_card_name">{item?.product_name}</p>
                <p className="product_card_rate">${item?.price}</p>
            </div>

        </div>
    )


}

export default ProductCard;