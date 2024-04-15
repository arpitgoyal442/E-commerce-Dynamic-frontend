

import "./SideBar.css"
import siteLogo from "../../assets/images/logo.svg"
import dashboardImg from "../../assets/icons/dashboard.png"
import bagIcon from "../../assets/icons/bag.png"
import addProductIcon from "../../assets/icons/addProduct.png"
import orderIcon from "../../assets/icons/orders.png"
const SideBar=({menuSelected,setMenuSelected})=>{

    return (

        <>

        <div className="sidebar">

            
            <div className="sidebar_items">

                <li onClick={()=>setMenuSelected(1)}>
                    <div>
                        <img className="sidebar_icon" src={dashboardImg} alt="" />
                        <h3>Dashboard</h3>
                    </div>
                </li>

                <li onClick={()=>setMenuSelected(2)}>
                    <div>
                        <img className="sidebar_icon" src={bagIcon} alt="" />
                        <h3>Products</h3>
                    </div>
                </li>
                <li onClick={()=>setMenuSelected(3)}>
                    <div>
                        <img className="sidebar_icon" src={addProductIcon} alt="" />
                        <h3>Add Products</h3>
                    </div>
                </li>
                <li onClick={()=>setMenuSelected(4)}>
                    <div>
                        <img className="sidebar_icon" src={orderIcon} alt="" />
                        <h3>Orders</h3>
                    </div>
                </li>
            </div>

        </div>
        
        </>
    )

}

export default SideBar