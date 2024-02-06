import "./ProductCard.css"

import bannerImage from "../../assets/images/banner-image.png"


const ProductCard=()=>{


    return (

        <div className="product_card">

            <img src={bannerImage} alt="" />
            <div className="product_card_info">
                <p className="product_card_name">Titan Edge</p>
                <p className="product_card_rate">$100</p>
            </div>

        </div>
    )


}

export default ProductCard;