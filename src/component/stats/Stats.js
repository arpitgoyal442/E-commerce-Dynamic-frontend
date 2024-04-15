import "./Stats.css"

import cartIcon from "../../assets/icons/cart-blue.png"
import qualityIcon from "../../assets/icons/quality.png"




const StatsCard=({icon,heading,para})=>{




    return (

        <div className="stats_card">

            <img className="stats-card-icon" src={icon} alt="" />

            <div>
            <p>{heading}</p>
            <p>{para}</p>
            </div>
        </div>
    )


}

const Stats=()=>{


    return (

        <div className="stats">

            <StatsCard icon={cartIcon} heading="FREE Delivery" para="Get Free Delivery on every order"/>
            <StatsCard icon={qualityIcon} heading="FREE Delivery" para="Get Free Delivery on every order"/>

            <StatsCard icon={cartIcon} heading="FREE Delivery" para="Get Free Delivery on every order"/>
            <StatsCard icon={qualityIcon} heading="FREE Delivery" para="Get Free Delivery on every order"/>

        </div>
    )


}

export default Stats