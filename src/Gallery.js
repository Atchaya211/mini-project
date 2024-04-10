import React from "react";
import "./style.css";
import pic1 from "./images/img1.webp";
import pic2 from "./images/img2.jpg";
import pic3 from "./images/img3.jpg";
import pic4 from "./images/img4.webp";
import pic5 from "./images/img5.webp";
import pic6 from "./images/img6.jpeg";
import pic7 from "./images/img7.webp";
import pic8 from "./images/img8.webp";
import pic9 from "./images/img9.jpeg";
const Gallery = React.forwardRef((props, ref) => {
    // Component implementation
    return <div ref={ref} className="gallery-wrap">
    <h1>Gallery</h1>
        <div className="gallery">
        <img src={pic1} alt="" className="gallery-img"/>
        <img src={pic2} alt="" className="gallery-img"/>
        <img src={pic3} alt="" className="gallery-img"/>
        <img src={pic4} alt="" className="gallery-img"/>
        <img src={pic5} alt="" className="gallery-img"/>
        <img src={pic6} alt="" className="gallery-img"/>
        <img src={pic7} alt="" className="gallery-img"/>
        <img src={pic8} alt="" className="gallery-img"/>
        <img src={pic9} alt="" className="gallery-img"/>
        </div>
    </div>;
  });
  export default Gallery;
