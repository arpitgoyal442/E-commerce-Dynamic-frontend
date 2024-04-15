
import "./Navbar.css"

import shoppingcart from "../../assets/icons/shopping-cart .png"
import userIcon from "../../assets/icons/user.png"
import mainLogo from "../../assets/images/logo.png"

// import {useNavigate} from "react-router-dom"

import {useNavigate} from "react-router-dom"

const Navbar=()=>{
    const navigate=useNavigate();
    return <>
       <div className="navbar ">
       <img className="navbar-mainlogo" onClick={()=>{navigate("/")}} src={mainLogo} alt="userImage" />

        <div className="navbar-options">
            <p className="navbar-option">Contact Us</p>
            <p className="navbar-option">About</p>
            <p  onClick={()=>navigate("/")} className="navbar-option">Home</p>
            <img className="navbar-icon" src={userIcon} alt="userImage" />
            <img  onClick={()=>navigate("/cart")} className="navbar-icon" src={shoppingcart} alt="userImage" />
        </div>
       </div>
    </>
}



export default Navbar