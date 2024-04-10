import React from "react";
import "./style.css";
// import { Link } from 'react-router-dom';
export default function Nav({UpdateLogin, scrollToAbout, scrollToHome, scrollToServices, scrollToGallery, scrollToFooter})
{
    return(
        <div className="Navigate">
            <div className="logo">EHR</div>
            <div className="link-wrap">
                <button className="other" onClick={scrollToHome}>Home</button>
                <button className="other" onClick={scrollToAbout}>About</button>
                {/* <button className="other"><Link to="/about">About</Link></button> */}
                <button className="other" onClick={scrollToServices}>Services</button>
                <button className="other" onClick={scrollToGallery}>GALLERY</button>
                <button className="other" onClick={scrollToFooter}>Contact</button>
                <button className="loginNav" onClick={UpdateLogin}>Login</button>
            </div>
            
        </div>
    );
}