import React, { useEffect, useState } from "react";
import "./style.css";
import pic1 from "./images/1.jpg";
import pic2 from "./images/2.png";
import pic3 from "./images/3.jpg";
import pic4 from "./images/4.jpg";
const image = [pic1,pic2,pic3,pic4];
const HomeAutoSlide =  React.forwardRef((props, ref) =>{
    const [ current, setCurrent ] = useState(image[0]);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrent(image[Math.floor(Math.random()*image.length)]);
        },2000);
        return () => clearInterval(interval);
    });
    
    return(
        <div className="autoPlayImg">
            <img src={current} alt="" className="imagePlay"/>
        </div>
    );
    });
    export default HomeAutoSlide;
