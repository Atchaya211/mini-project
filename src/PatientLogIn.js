import React from "react";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
import Sample from "./sample.json";
import back from "./images/back.png"
import "./style2.css";
// import Login from "./Login";
export default function PatientLogIn()
{
    const fetchPatDet = async () =>{
        const sign = new ethers.BrowserProvider(window.ethereum);
        const signer = await sign.getSigner();
        let accounts = await sign.send("eth_requestAccounts",[])
        const address = accounts[0];
        const ehr = new ethers.Contract("0x75Bbc02f4C2036DEF20D1CB25492cf847C757964",abi,signer);
        try{

            console.log("inside try",address);
            // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
            console.log("before deptmethod:");
            let department = await ehr.checkUser();
            const c = parseInt(department);
            if(c === 2){
                console.log("inside if in login");
            }
            console.log("department:",department);
            // setSelectedValue(department);
            
        }
        catch(error){
            console.log("Error calling constructor:",error)
        }
    }
    if(1){
        fetchPatDet();
    }
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