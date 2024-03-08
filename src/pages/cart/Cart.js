

import Footer from "../../component/footer/Footer"
import Navbar from "../../component/navbar/Navbar"
import "./Cart.css"

import AddIcon from "../../assets/icons/add.png"
import MinusIcon from "../../assets/icons/minus-sign.png"
import deleteIcon from "../../assets/icons/delete.png"

import BannerImage from "../.../../../assets/images/banner-image.png"
import product2 from "../../assets/images/product-item2.jpg"

import leftArrow from "../../assets/icons/left-arrow.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { showErrorNotification } from "../../component/notification/Notification"



const backendURL=process.env.REACT_APP_BACKEND;




const ProductCartCard=({image,name})=>{

    return (

        <div className="product_cart_card">
        <img className="cart_product_img" src={image} alt="" />
        <h4> {name}</h4>
        </div>
    )
}

const Cart=()=>{


    const [items,SetItems]=useState([]);

    const fetchCartitems=async()=>{
        try{

            let res=await axios.get(`${backendURL}cart/1`);
            SetItems(res.data)
        }catch(e){
            console.log(e)
        }
    }


    const handleQtyChng=async(item,change)=>{

      try{

        if(item.quantity==1&&change==='minus')
        return;

        let newQty=item.quantity;

        if(change==='delete')
        newQty=0;

        else if(change==='plus')
        newQty+=1;

        else newQty-=1;


        let res=await axios.post(`${backendURL}cart/1`,{product_id:item.product_id,quantity:newQty});

        console.log(res)

        if(res.data.rowCount==1)
           fetchCartitems();

        else showErrorNotification("Some Internal Server Occured, Please try Later")


        
      }catch(e){

        console.log(e)
        showErrorNotification("Some Internal Server Occured, Please try Later")

      }


    }




    useEffect(()=>{

        fetchCartitems()

    },[])


  


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


                    {items.map((item)=>{


                     return  <tr>
                     <td><ProductCartCard image={item.product_images[0]} name={item.product_name}/></td>
                     <td>
                         <div className="cart_qty">
                            
                            <img  onClick={()=>handleQtyChng(item,'minus')} className="cart_qty_icon" src={MinusIcon} alt="" />

                             {item.quantity}

                             <img onClick={()=>handleQtyChng(item,'plus')} className="cart_qty_icon" src={AddIcon} alt="" />

                            

                         </div>
                     </td>
                     <td>{item.price}</td>

                     <td>  <img onClick={()=>handleQtyChng(item,'delete')} className="cart_qty_delete" src={deleteIcon} alt="" /></td>
                 </tr>



                    })}

                  


                    

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