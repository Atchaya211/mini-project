import React from "react";
// import Login from "./Login";
import back from "./images/back.png";
import "./style2.css";
export default function AdminLgoIn()
{
    const handleClose = () =>{
        window.location.reload();
      }
    return(
        <div className="wrap">
            <div className="logInDiv">
                <h1>Yet to build</h1>
                <button className="back" onClick={handleClose}>
                    <img src={back} alt="" className="backImg" />
                </button>
            </div>
        </div>
    );
}

