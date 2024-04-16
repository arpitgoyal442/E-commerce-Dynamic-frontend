import { Footer } from "antd/es/layout/layout"
import Navbar from "../../component/navbar/Navbar"
import "./paymentstatus.css"
import { useNavigate } from "react-router-dom"



const Success=()=>{

    const navigate=useNavigate()

    return <div>

        <Navbar/>

        <div className="payment_status">
            <h1>Payment Successfull</h1>
            <button onClick={()=>navigate("/")} className="primary-btn payment_status_btn">Continue Shopping</button>
        </div>

      

    </div>

}

export default Success