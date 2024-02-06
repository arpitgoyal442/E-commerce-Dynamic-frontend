

import Footer from "../../component/footer/Footer"
import Navbar from "../../component/navbar/Navbar"
import "./Cart.css"

import AddIcon from "../../assets/icons/add.png"
import MinusIcon from "../../assets/icons/minus-sign.png"
import deleteIcon from "../../assets/icons/delete.png"

import BannerImage from "../.../../../assets/images/banner-image.png"
import product2 from "../../assets/images/product-item2.jpg"

import leftArrow from "../../assets/icons/left-arrow.png"



const ProductCartCard=({image,name})=>{

    return (

        <div className="product_cart_card">
        <img className="cart_product_img" src={image} alt="" />
        <h4> {name}</h4>
        </div>
    )
}

const Cart=()=>{


    return (


        <>
        
        <Navbar/>

        <div className="cart">

            <div className="cart_left">

                <h2 className="subheading">Shopping Cart</h2>
                <table>

                    <tr>


                    <th>Product</th>
                    <th>Qty.</th>
                    <th>Total Price</th>
                    </tr>

                    <tr>
                        <td><ProductCartCard image={product2} name="Iphone"/></td>
                        <td>
                            <div className="cart_qty">
                               
                               <img className="cart_qty_icon" src={MinusIcon} alt="" />

                                2

                                <img className="cart_qty_icon" src={AddIcon} alt="" />

                               

                            </div>
                        </td>
                        <td>500/-</td>

                        <td>  <img className="cart_qty_delete" src={deleteIcon} alt="" /></td>
                    </tr>

                    <tr>
                        <td><ProductCartCard image={BannerImage} name="watch"/></td>
                        <td>
                            <div className="cart_qty">
                               
                               <img className="cart_qty_icon" src={MinusIcon} alt="" />

                                3

                                <img className="cart_qty_icon" src={AddIcon} alt="" />

                               

                            </div>
                        </td>
                        <td>500/-</td>
                        <td>  <img className="cart_qty_delete" src={deleteIcon} alt="" /></td>
                    </tr>


                    

                </table>

                <h3> <img className="cart_qty_icon" src={leftArrow} alt="" /> Continue Shopping</h3>
            </div>

            <div className="cart_right">
                <h3 className="subheading">Payment Info.</h3>
                <div className="payment_method">

                    <p>Payment Info.</p>

               
                    <label>
                        <input
                        type="radio"
                        value="cod"
                        />
                        COD (Cash on Delivery)
                    </label>

                    <label>
                        <input
                        type="radio"
                        value="card"
                        
                        />
                        Card
                    </label>

                    <label>
                        <input
                        type="radio"
                        value="upi"
                        
                        />
                        UPI
                    </label>

                </div>

                <div className="payment_details">
                     <div className="payment_card">  
                    <input className="" type="text" placeholder="Name on Card" />

                    
                    <input type="text" placeholder="Card Number" />
                   
                     <input type="text" placeholder="Expiry" />
                     </div>

                        {/* <div className="upi">
                            <input type="text" placeholder="Enter UPI Id" />
                        </div> */}
                </div>


                <button   className="primary-btn checkout">Checkout</button>

            </div>



        </div>

        <Footer/>





       
        </>
        )

}

export default Cart