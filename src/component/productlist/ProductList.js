

import { useNavigate } from "react-router-dom"
import ProductCard from "../productcard/ProductCard"
import "./ProductList.css"
import { useEffect, useState } from "react";
import axios from "axios";

const backendURL=process.env.REACT_APP_BACKEND;


const ProductList = () => {

    const [items, setItems] = useState([]);
    const fetchProducts = async () => {

        try {
            let res = await axios.get(`${backendURL}product?page=1`)
            let items = res.data;
            setItems(items)
        } catch (e) {
            console.log("Error While Fetching Products: ", e);
            throw new Error(e)
        }

    }
    useEffect(() => {
        fetchProducts();
    }, [])

    const navigate = useNavigate();

    return (

        <div className="product_list-main">

            <div className="product_list-main-header">

                <p className='subheading'>Our Products</p>
                <p className="product_list_viewall" onClick={() => navigate("/products")}>View all</p></div>
            <div className="product_list">


                {items.map((item) => {

                    return <ProductCard item={item} />
                })}

                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}


            </div>
        </div>


    )
}

export default ProductList