
import "./AddProduct.css"


const AddProduct=()=>{

    return (

        <div className="add_product">

            <div className="add_product_header">

                <h2>Add Product</h2>

            </div>

        <div className="add_product_form">


        <div className="add_product_form_field">
            <label htmlFor="">Category</label>
            <select name="" id="">
                <option value="">Clothes</option>
                <option value="">Watches</option>
                <option value="">Bags</option>
                <option value="">Other</option>
            </select>
            {/* <input type="text" /> */}
            </div>


             <div className="add_product_form_field">
            <label htmlFor="">Title</label>
            <input type="text" />
            </div>

            <div className="add_product_form_field">
            <label htmlFor="">Price</label>
            <input type="text" />
            </div>

            <div className="add_product_form_field">
            <label htmlFor="">Count in Stock</label>
            <input type="text" />
            </div>

            <div className="add_product_form_field">
            <label htmlFor="">Description</label>
            <input type="text" />
            </div>

            <div className="add_product_form_field">
            <label htmlFor="">Description</label>
            <input type="text" />
            </div>

            <div className="add_product_form_field">
            <label htmlFor="">Description</label>
            <input type="text" />
            </div>

            <div className="add_product_form_field">
            <label htmlFor="">Description</label>
            <input type="text" />
            </div>

            <div className="add_product_form_field">
            <label htmlFor="">Images</label>
            <input className="add_product_images" type="file" />
            </div>

           

          



        </div>

        <button  className="primary-btn publish_btn">Publish</button>
        </div>
    )
}

export default AddProduct