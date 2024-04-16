import { Footer } from "antd/es/layout/layout"
import Navbar from "../../component/navbar/Navbar"
import "./paymentstatus.css"
import { useNavigate } from "react-router-dom"
const Cancel=()=>{

    const navigate=useNavigate()

    return <div>

        <Navbar/>

        <div className="payment_status">
            <h1>Payment Failed</h1>
            <button  onClick={()=>navigate("/cart")} className="primary-btn payment_status_btn">Retry Payment</button>
        </div>

      

    </div>

}

export default Cancel