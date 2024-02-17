
import { useEffect, useState } from "react"
import "./AddProduct.css"
import axios from "axios";


const backendURL=process.env.REACT_APP_BACKEND;

const AddProduct=()=>{

    const[categories,setCategories]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState(null);

    const [extraFields,setExtraFields]=useState([]);
    const [productData,setProductData]=useState({});

    // const fields=['length','width','height']



    const fetchAllCategory=async()=>{


       let result=await axios.get(`${backendURL}product-types`)

       console.log("Result is ");
       console.log(result.data)
       setCategories(result.data)

    
    }


    const handleCategoryChange=(e)=>{

       setSelectedCategory(e.target.value)
       handleInputChange(e);

    }



    useEffect(()=>{

        fetchAllCategory();

    },[])

    useEffect(()=>{

        categories.map((category)=>{

            if(category.product_type_id==selectedCategory)
            {setExtraFields(category.fields)
                return;
            }
        })

    },[selectedCategory])



    const handleInputChange=(e)=>{

        let name=e.target.name;
        let val=e.target.value;

        setProductData((oldData)=>{

            return {

                ...oldData,
                [name]:val
            }


        })

    }


    const handlePublish=()=>{

        console.log("Product Data is --")
        console.log(productData)

    }

    

    return (

        <div className="add_product">

            <div className="add_product_header">

                <h2>Add Product</h2>

            </div>

        <div className="add_product_form">


        <div className="add_product_form_field">
            <label htmlFor="">Category</label>
          
            <select name="product_type_id" id="" onChange={ (e)=>handleCategoryChange(e)}>

                {categories.map((category)=>{
                   return  <option value={category.product_type_id}>{category.product_type_name}</option>


                })}
              
            </select>
            {/* <input type="text" /> */}
            </div>


             <div className="add_product_form_field">
            <label >Title</label>
            <input onChange={(e)=>handleInputChange(e)} name="product_name" type="text" />
            </div>

            <div className="add_product_form_field">
            <label >Price</label>
            <input onChange={(e)=>handleInputChange(e)} name="price" type="text" />
            </div>

            <div className="add_product_form_field">
            <label >Count in Stock</label>
            <input onChange={(e)=>handleInputChange(e)} name="stock" type="text" />
            </div>

            <div className="add_product_form_field">
            <label >Description</label>
            <input onChange={(e)=>handleInputChange(e)} name="description" type="text" />
            </div>

            <div className="add_product_form_field">
            <label >Sale(Percentage)</label>
            <input name="sale" type="text" />
            </div>

             {/* Additional Fields  START */}

             {extraFields.map((field)=>{


               return <div className="add_product_form_field">
               <label htmlFor="">{field}</label>
               <input onChange={(e)=>handleInputChange(e)} name={field} type="text" />
               </div>

             })}




             {/* Additional Fields ends */}

            <div className="add_product_form_field">
            <label htmlFor="">Images</label>
            <input className="add_product_images" type="file" />
            </div>

           


        </div>

        <button  onClick={handlePublish}  className="primary-btn publish_btn">Publish</button>
        </div>
    )
}

export default AddProduct