

import ProductCard from "../productcard/ProductCard"
import "./ProductList.css"



const ProductList=()=>{

    return (

        <div className="product_list-main">

            <div className="product_list-main-header">

         <p className='subheading'>Our Products</p>
         <p className="product_list_viewall">View all</p></div>
        <div className="product_list">
           
            
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
       
       
        </div>
        </div>
       
        
    )
}

export default ProductList