import Navbar from "../../component/navbar/Navbar";
import ProductCard from "../../component/productcard/ProductCard";

import "./Products.css"


const Products=()=>{
    return (

        <div className="products">
        <Navbar/>
        <div className="products_main">
            <div className="products_main_left">

                <div  className="products_main_left_filter_item">
                    <label htmlFor="">Product Type</label>
                    <input type="text" />
                </div>

                <div className="products_main_left_pricerange products_main_left_filter_item">
                    <label htmlFor="">Price Range</label>
                    <input type="text" placeholder="Min." />
                    <input type="text" placeholder="Max" />
                </div>

                <div className="products_main_left_otherfilter products_main_left_filter_item">
                    <label htmlFor="">More FIlters</label>
                    <div className="filter_items_roundblock">
                    <p className="roundblock">Men</p>
                    <p className="roundblock">Women</p>
                    <p className="roundblock">Kids</p>
                    <p className="roundblock">Sale</p>
                    <p className="roundblock">Price Low to High</p>
                    <p className="roundblock">Price High to Low</p>
                    <p className="roundblock">Newly Added</p>
                    <p className="roundblock">High Rating</p>
                    </div>
                  
                </div>

            </div>
            <div className="products_main_right">
                <h2>Products</h2>
                <div className="products_main_right_products">

                 <div className="">
                <ProductCard/>
                </div>
               
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                </div>
            </div>

        </div>

        </div>
    )

}

export default Products;





