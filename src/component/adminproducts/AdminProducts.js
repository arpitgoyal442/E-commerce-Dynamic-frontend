import ProductCard from "../productcard/ProductCard"

import "./AdminProducts.css"

import EditIcon from "../../assets/icons/edit.png"
import deleteIcon from "../../assets/icons/delete.png"


const AdminProducts=()=>{


    return (

        <div className="admin_products">


            <div className="admin_products_header">

                <h2>Products</h2>

                <input type="text" placeholder="Search Product" />
            </div>



             {/* <h3>Watches</h3> */}
            <div className="admin_products_list">

                <div className="admin_products_product">
            <ProductCard/>

            <div className="edit_del_btn">

                <img  src={EditIcon} alt="" />
                <img src={deleteIcon} alt="" />
                {/* <button className="secondary-btn">Edit</button>
                <button className="secondary-btn">Delete</button> */}
            </div>
            
            </div>

            <div className="admin_products_product">
            <ProductCard/>

            <div className="edit_del_btn">

                <img  src={EditIcon} alt="" />
                <img src={deleteIcon} alt="" />
        
            </div>
            
            </div>


            <div className="admin_products_product">
            <ProductCard/>

            <div className="edit_del_btn">

                <img  src={EditIcon} alt="" />
                <img src={deleteIcon} alt="" />
              
            </div>
            
            </div>

            <div className="admin_products_product">
            <ProductCard/>

            <div className="edit_del_btn">

                <img  src={EditIcon} alt="" />
                <img src={deleteIcon} alt="" />
              
            </div>
            
            </div>

            {/* <div className="admin_products_product">
            <ProductCard/>

            <div className="edit_del_btn">

                <img  src={EditIcon} alt="" />
                <img src={deleteIcon} alt="" />
              
            </div>
            
            </div> */}

          

         
           
            </div>




        </div>


    )

}

export default AdminProducts;