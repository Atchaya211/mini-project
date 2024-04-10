import React from "react";
import Sample from "./sample.json";
import back from "./images/back.png"
import "./style2.css";
// import Login from "./Login";
export default function PatientLogIn()
{
    const handleClose = () =>{
        window.location.reload();
      } 
    return(
        <div className="navi">
            <button className="back" onClick={handleClose}>
                <img src={back} alt="" className="backImg" />
            </button>
            <div className="wrap">
            <div className="logInDiv">
                <div className="pat_nav">My details</div>
                <div className="rec_pat">
                    <div className="data">ID</div>
                    <div className="data">{Sample[0].recordId}</div>
                </div>
                <div className="rec_pat">
                    <div className="data">Name</div>
                    <div className="data">{Sample[0].name}</div>
                </div>
                <div className="rec_pat">
                    <div className="data">Age</div>
                    <div className="data">{Sample[0].age}</div>
                </div>
                <div className="rec_pat">
                    <div className="data">Gender</div>
                    <div className="data">{Sample[0].gender}</div>
                </div>
                <div className="rec_pat">
                    <div className="data">Blood Type</div>
                    <div className="data">{Sample[0].bloodType}</div>
                </div>
                <div className="rec_pat">
                    <div className="data">Allergies</div>
                    <div className="data">{Sample[0].allergies}</div>
                </div>
                <div className="rec_pat">
                    <div className="data">Diagnosis</div>
                    <div className="data">{Sample[0].diagnosis}</div>
                </div>
                <div className="rec_pat">
                    <div className="data">Treatment</div>
                    <div className="data">{Sample[0].treatment}</div>
                </div>

                {/* <form className="LogInForm">
                    <input type="text" placeholder="Enter Patient's Name:" className="inp"/>
                    <input type="text" placeholder="Enter Password" className="inp"/>
                    <input type="text" placeholder="Confirm Password" className="inp"/> 
                </form>
                <button type="submit" className="submit">Sign In</button> */}
                    <button className="back" onClick={handleClose}>
                        <img src={back} alt="" className="backImg" />
                    </button>
            </div>
        </div>
 
        </div>
          );
}