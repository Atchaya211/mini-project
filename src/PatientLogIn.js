import React, {useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
// import Sample from "./sample.json";
import back from "./images/back.png"
import "./style2.css";
// import Login from "./Login";
export default function PatientLogIn()
{
    useEffect(() => {
        // Call your function here
        fetchPatDet();
      }, []);
      
    const [ortho, setOrtho] = useState([]);
    const [neuro, setneuro] = useState([]);
    const [cardio, setCardio] = useState([]);
    const [gastro, setGastro] = useState([]);
    const [uro, setUro] = useState([]);
    
    const fetchPatDet = async () =>{
        const sign = new ethers.BrowserProvider(window.ethereum);
        const signer = await sign.getSigner();
        let accounts = await sign.send("eth_requestAccounts",[])
        const address = accounts[0];
        const ehr = new ethers.Contract("0x05c5B11E06CbdC60297Ec4E6DCdBB0e4D321eBD8",abi,signer);
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
            try{
                const allPatRec = await ehr.findRecords(address);
                // console.log("neurooo:",allPatRec[2][0]);
                if((allPatRec[0]).length !== 0){
                    console.log("inside ortho");
                    setOrtho(allPatRec[0][0]);
                }
                if((allPatRec[1]).length !== 0){
                    console.log("inside ortho");
                    setCardio(allPatRec[1][0]);
                }
                if((allPatRec[2]).length !== 0){
                    console.log("inside ortho");
                    setneuro(allPatRec[2][0]);
                }
                if((allPatRec[3]).length !== 0){
                    console.log("inside ortho");
                    setGastro(allPatRec[3][0]);
                }
                if((allPatRec[4]).length !== 0){
                    console.log("inside ortho");
                    setUro(allPatRec[4][0]);
                }
                // console.log("ortho",allPatRec[2][0]);
            }
            catch(error){
                console.log("Calling findRecords",error);
            }
            // setSelectedValue(department);
            
        }
        catch(error){
            console.log("Error calling constructor:",error);
        }
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
            <table className="print-table patient-control-tab">
                <thead>
                    <tr>
                        <th className="print-data">Departments</th>
                        <th className="print-data">Test reports</th>
                        <th className="print-data">Test results</th>
                    </tr>
                </thead>
                {/* {tempVal.map((val,key)=>{
                    return(
                        <tr key={key}>
                            <td>{val}</td>
                        </tr>
                    )
                })} */}
                <tbody>
                    <tr className="print-row">
                        <td className="print-data" rowSpan={5}>Ortho</td>
                    </tr>
                    <tr>
                        <td className="print-data">X-Ray report</td>
                        <td className="print-data">{ortho[7]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">MRI report</td>
                        <td className="print-data">{ortho[8]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">CT scan report</td>
                        <td className="print-data">{ortho[9]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">UltraSound report</td>
                        <td className="print-data">{ortho[10]}</td>
                    </tr>

                    <tr className="print-row">
                        <td className="print-data" rowSpan={6}>neuro</td>
                    </tr>
                    <tr>
                        <td className="print-data">Neurological Examination Report</td>
                        <td className="print-data">{neuro[7]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Electroencephalogram (EEG) Report</td>
                        <td className="print-data">{neuro[8]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Lumbar Puncture (Spinal Tap) Report</td>
                        <td className="print-data">{neuro[9]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Neuro psychological TestingReport</td>
                        <td className="print-data">{neuro[10]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Genetic Testing Report</td>
                        <td className="print-data">{neuro[11]}</td>
                    </tr>

                    <tr className="print-row">
                        <td className="print-data" rowSpan={5}>cardio</td>
                    </tr>
                    <tr>
                        <td className="print-data">Electrocardiogram (ECG or EKG)</td>
                        <td className="print-data">{cardio[7]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Echocardiogram (Echo)</td>
                        <td className="print-data">{cardio[8]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Stress Test</td>
                        <td className="print-data">{cardio[9]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Cardiac MRI</td>
                        <td className="print-data">{cardio[10]}</td>
                    </tr>

                    <tr className="print-row">
                        <td className="print-data" rowSpan={5}>Gastro</td>
                    </tr>
                    <tr>
                        <td className="print-data">Breath Tests report</td>
                        <td className="print-data">{gastro[7]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Liver Biopsy report</td>
                        <td className="print-data">{gastro[8]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Upper Endoscopy report</td>
                        <td className="print-data">{gastro[9]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Capsule Endoscopy report</td>
                        <td className="print-data">{gastro[10]}</td>
                    </tr>

                    <tr className="print-row">
                        <td className="print-data" rowSpan={5}>Uro</td>
                    </tr>
                    <tr>
                        <td className="print-data">Urinalysis</td>
                        <td className="print-data">{uro[7]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Urinary Culture</td>
                        <td className="print-data">{uro[8]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Cystoscopy</td>
                        <td className="print-data">{uro[9]}</td>
                    </tr>
                    <tr>
                        <td className="print-data">Prostate Biopsy</td>
                        <td className="print-data">{uro[10]}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <button className="tab-back" onClick={handleClose}>back</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="back" onClick={handleClose}>
                <img src={back} alt="" className="backImg" />
            </button>
            {/* <button onClick={fetchPatDet}>getdata</button> */}
                {/* <div className="pat_nav">My details</div>
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
                </div> */}

                {/* <form className="LogInForm">
                    <input type="text" placeholder="Enter Patient's Name:" className="inp"/>
                    <input type="text" placeholder="Enter Password" className="inp"/>
                    <input type="text" placeholder="Confirm Password" className="inp"/> 
                </form>
                <button type="submit" className="submit">Sign In</button> */}
                    
            </div>
        </div>
 
        </div>
          );
}