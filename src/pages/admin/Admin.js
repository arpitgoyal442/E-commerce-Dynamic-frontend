
import "./Admin.css"
import Navbar from "../../component/navbar/Navbar"
import SideBar from "../../component/sidebar/SideBar"
import AdminProducts from "../../component/adminproducts/AdminProducts"
import AddProduct from "../../component/addproduct/AddProduct"
import { useState } from "react"
import AdminOrder from "../../component/adminorders/AdminOrders"


const Admin=()=>{

    const [menuSelected,setMenuSelected]=useState(2);

    return (
        <>
      <Navbar/>

      <div className="admin">
        
      <SideBar menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>

      <div className="admin_right">

        {menuSelected===2 &&<AdminProducts/>}
       { menuSelected===3 &&<AddProduct/>}
       {menuSelected==4 && <AdminOrder/>}
      </div>

      </div>
        </>



    )

}

export default Admin