import Banner from "../../component/banner/Banner"
import Footer from "../../component/footer/Footer"
import Navbar from "../../component/navbar/Navbar"
import ProductList from "../../component/productlist/ProductList"
import SingleBanner from "../../component/singlebanner/SingleBanner"
import Stats from "../../component/stats/Stats"


const Home=()=>{

    return (

    <>


    <Navbar/>
    <Banner/>
    <Stats/>
    <ProductList/>

    <SingleBanner/>

    <Footer/></>)



}

export default Home