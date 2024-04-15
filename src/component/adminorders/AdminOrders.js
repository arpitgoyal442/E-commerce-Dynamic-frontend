
import "./AdminOrder.css"
import viewIcon from "../../assets/icons/view.png"

const AdminOrder=()=>{

    return (

        <div className="admin_order">

            <div className="admin_order_header">

                <h2>Orders</h2>

                <div className="searches_header">
                    <input type="text" placeholder="Search" />

                    <div className="order_filter">
                        <select name="" id="">
                            <option value="">Status</option>
                            <option value="">Active</option>
                            <option value="">Disable</option>
                        </select>
                        <select name="" id="">
                            <option value="">Sort By Date -ASC</option>
                            <option value="">Sort By Date -DESC</option>
                           
                        </select>
                    </div>
                </div>




            </div>

            <div className="admin_order_table">

                <table>

                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <td>Arpit</td>
                        <td>arp@gmail.com</td>

                        <td>500</td>
                        <td>Paid</td>
                        <td>21-0-23</td>
                        <td >Delivered</td>
                        <td><img className="view_icon" src={viewIcon} alt="" /></td>
                    </tr>

                    <tr>
                        <td>Arpit</td>
                        <td>arp@gmail.com</td>

                        <td>500</td>
                        <td>Paid</td>
                        <td>21-0-23</td>
                        <td className="focus">Not Delivered</td>
                        <td><img className="view_icon" src={viewIcon} alt="" /></td>
                      </tr>
                    <tr>
                        <td>Arpit</td>
                        <td>arp@gmail.com</td>

                        <td>500</td>
                        <td>Paid</td>
                        <td>21-0-23</td>
                        <td >Delivered</td>
                        <td><img className="view_icon" src={viewIcon} alt="" /></td>
                    </tr>

                </table>
            </div>



        </div>
    )
}


export default AdminOrder