
import { useEffect, useState } from "react"
import "./AddProduct.css"
import axios from "axios";
import { showErrorNotification, showSuccessNotification } from "../notification/Notification";


const backendURL = process.env.REACT_APP_BACKEND;

const AddProduct = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [extraFields, setExtraFields] = useState([]);
    const [productData, setProductData] = useState({});

    // const fields=['length','width','height']



    const fetchAllCategory = async () => {


        let result = await axios.get(`${backendURL}product-types`)

        console.log("Result is ");
        console.log(result.data)
        setCategories(result.data)


    }


    const handleCategoryChange = (e) => {

        setSelectedCategory(e.target.value)
        handleInputChange(e);

    }



    useEffect(() => {

        fetchAllCategory();

    }, [])

    useEffect(() => {

        categories.map((category) => {

            if (category.product_type_id == selectedCategory) {
                setExtraFields(category.fields)
                return;
            }
        })

    }, [selectedCategory])



    const handleInputChange = (e) => {

        let name = e.target.name;
        let val = (name !== 'product_images') ? e.target.value : e.target.files;

        // console.log("Files are ---");
        // console.log(val[0])

        setProductData((oldData) => {
            return {
                ...oldData,
                [name]: val
            }


        })

    }


    const handlePublish = async () => {

        try {

            let formData = new FormData();

            for (let key in productData) {
                if (key !== 'product_images')
                    formData.append(key, productData[key])
            }

            for (let i = 0; i < productData.product_images.length; i++) {

                let image = productData.product_images[i]
                formData.append('productImages', image, image.name)
            }

            let result = await axios.post(`${backendURL}product`,formData)

            console.log("Publish Result --",result)

            showSuccessNotification("Product Published Successfully.")


        } catch (e) {

            console.log(e)
            showErrorNotification("Some Error Occurred , try later")


        }

    }



    return (

        <div className="add_product">

            <div className="add_product_header">

                <h2>Add Product</h2>

            </div>

            <div className="add_product_form">


                <div className="add_product_form_field">
                    <label htmlFor="">Category</label>

                    <select name="product_type_id" id="" onChange={(e) => handleCategoryChange(e)}>

                    <option value="0">Select Category</option>

                        {categories.map((category) => {
                            return <option value={category.product_type_id}>{category.product_type_name}</option>


                        })}

                    </select>
                    {/* <input type="text" /> */}
                </div>


                <div className="add_product_form_field">
                    <label >Title</label>
                    <input onChange={(e) => handleInputChange(e)} name="product_name" type="text" />
                </div>

                <div className="add_product_form_field">
                    <label >Price</label>
                    <input onChange={(e) => handleInputChange(e)} name="price" type="text" />
                </div>

                <div className="add_product_form_field">
                    <label >Count in Stock</label>
                    <input onChange={(e) => handleInputChange(e)} name="stock" type="text" />
                </div>

                <div className="add_product_form_field">
                    <label >Description</label>
                    <input onChange={(e) => handleInputChange(e)} name="description" type="text" />
                </div>

                <div className="add_product_form_field">
                    <label >Sale(Percentage)</label>
                    <input name="sale" type="text" />
                </div>

                {/* Additional Fields  START */}

                {extraFields.map((field) => {


                    return <div className="add_product_form_field">
                        <label htmlFor="">{field}</label>
                        <input onChange={(e) => handleInputChange(e)} name={field} type="text" />
                    </div>

                })}




                {/* Additional Fields ends */}

                <div className="add_product_form_field">
                    <label htmlFor="">Images</label>
                    <input multiple={true} name="product_images" onChange={(e) => handleInputChange(e)} className="add_product_images" type="file" />
                </div>




            </div>

            <button onClick={handlePublish} className="primary-btn publish_btn">Publish</button>
        </div>
    )
}

export default AddProduct