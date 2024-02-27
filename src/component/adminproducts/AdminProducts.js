import ProductCard from "../productcard/ProductCard"

import "./AdminProducts.css"

import EditIcon from "../../assets/icons/edit.png"
import deleteIcon from "../../assets/icons/delete.png"
import {useState,useEffect} from "react"
import axios from "axios"


const backendURL=process.env.REACT_APP_BACKEND;

const AdminProducts=()=>{

    const [items,setItems]=useState([]);
    const fetchProducts=async()=>{

        try{
        let res=await axios.get(`${backendURL}product`)
        let items=res.data;
         setItems(items)

         console.log(items)
        }catch(e){
            console.log("Error While Fetching Products: ",e);
            throw new Error(e)
        }

    }
    useEffect(()=>{
        fetchProducts();
    },[])

    const handleDeleteClk=async(product_id)=>{

        try{

           let result= await axios.delete(`${backendURL}product/${product_id}`);

           console.log(result);
           alert("Deleted")
           
           

        }catch(e){
            alert(e)

        }



    }


    return (
        <div className="admin_products">
            <div className="admin_products_header">
                <h2>Products</h2>
                <input type="text" placeholder="Search Product" />
            </div>
             {/* <h3>Watches</h3> */}
            <div className="admin_products_list">

                {items.map((item)=>{

                    return  <div className="admin_products_product">
                <ProductCard item={item}/>
    
                <div className="edit_del_btn">
    
                    <img  src={EditIcon} alt="" />
                    <img onClick={()=>handleDeleteClk(item?.product_id)} src={deleteIcon} alt="" />
                    
                </div>
                 </div>
                })}


          
            </div>
        </div>
    )

}

export default AdminProducts;