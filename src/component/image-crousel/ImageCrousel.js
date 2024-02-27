import "./ImageCrousel.css"



import leftArrow from "../../assets/icons/left-arrow.png"
import rightArrow from "../../assets/icons/right-arrow.png"
import { useState } from "react"


const ImageCrousel=({allImages})=>{

    let width='400px'
    let height='400px'
   
    const len=allImages.length;

    // const len=allImages.length;
    const [show,setShow]=useState(0);

    const handleNext=()=>{

       let nextVal=  (show+1)%len
        setShow(nextVal);
    }

    const handlePre=()=>{
        let preVal=0;

        console.log("Show is ",show)
        if(show<=0){
            preVal= len+ (show-1) ; 
        }

        else preVal=(show-1);
        setShow(preVal)
    }


    return (

        <div className="image_crousel" style={{width:width,height:height}}>

            <img src={leftArrow} className="corusel_prev crousel_icon" onClick={handlePre}/>

            <img className="crousel_main_img" src={allImages[show]} alt="" />

            <img src={rightArrow} className="corusel_next crousel_icon" onClick={handleNext}/>



        </div>
    )
}


export default ImageCrousel