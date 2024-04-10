import React, { useState } from "react";
// import Login from "./Login";
import Sample from "./sample.json";
import back from "./images/back.png";
import "./style2.css";
import OrthoInsertFields from "./OrthoInsertFields";
import NeuroInsertFields from "./NeuroInsertFields";
import CardioInsertFields from "./CardioInsertField";
import GastroInsertFields from "./GastroInsertFields";
import UroInsertFields from "./UroInsertField";
import PrintReport from "./PrintReport";
export default function CommonDeptFields({docType})
{
    console.log(docType);
    const [ show, setShow] = useState(false);
    const [next, setNext ] = useState(false);
    const [ print, setPrint ] = useState(false);
    const [view, setView ] = useState(true);
    const [temp, setTemp] = useState("");
    // const itemId = Sample.items.find(item => item.recordId === temp);
    
    const handleClose = () =>{
        window.location.reload();
      }

    const handleIPD = () =>{
        setShow(true);
    }

    const handleOPD = () => {
        setShow(false);
    }
    const [ isDelete, setIsDelete ] = useState(false);
    const [ isInsert, setIsInsert ] = useState(true);
    const handleBtn = () =>{
        setIsDelete(false);
        setIsInsert(true)
    }
    const handleDel =() =>{
        setIsDelete(true);
        setIsInsert(false);
    }
    const handleNext = () =>{
        setNext(!next);
        // console.log( document.getElementById('medicalRecordNumber').value)
    }
    const handlePrint = (t) =>{
        setPrint(!print);
        setView(!view);
        setTemp(t);
        console.log(temp);
    }
    const handleView = () =>{
        setPrint(!print);
        setView(!view);
    }
    
    return(
        <div className="wrap">
            <div className="logInDiv">
            { !print && (<div className="doc_nav">
                <button className="insert" onClick={handleBtn}>Insert</button>
                <button className="delete" onClick={handleDel}>View all records</button>
            </div>)}
            { isDelete && !isInsert && !print &&(
                <div className="deletePat">

                    {
                        <div className="rec_wrap">
                        {Sample.map((item) => (
                            <div className="rec" key={item.recordId}>
                                <div className="rec_field">{item.recordId}</div>
                                <div className="rec_field">{item.name}</div>
                                <div className="rec_field">{item.age}</div>
                                <div className="rec_field">{item.gender}</div>
                                <div className="rec_field">{item.bloodType}</div>
                                <div className="rec_field">{item.diagnosis}</div>
                                <button className="remove_btn" onClick={()=>handlePrint(item.name)}>Print🖨️</button>
                                {/* {item.name} - {item.date} */}
                             </div>
                        ))}
                    </div> 
                    }
                </div>
            )}
            { isDelete && !isInsert && print && (
                <PrintReport tempVal={temp} handlePrint={handleView}/>
            )}
            {
                !isDelete && isInsert && !next &&(
                    <div className="insertPat">
                    <form className="LogInForm">
                    <input type="text" placeholder="Medical rec no" id="medicalRecordNumber" className="inp"/>
                    <input type="text" placeholder="Patient's Name" id="patientName" className="inp"/>
                    <input type="text" placeholder="Enter Age" id="age" className="inp"/>
                    <div className="gender">
                        <label>
                            Gender:
                            <label className="gender_label">
                                Male:
                                <input type="radio" name="gender" value="Male" />
                            </label>
                            <label className="gender_label">
                                Female:
                                <input type="radio" name="gender" value="Female" />
                            </label>
                        </label>
                    </div>
                    {/* <input type="text" placeholder="Address" id="address1" className="inp"/> */}
                    <div className="Type">
                        <label>
                            Type:
                            <label className="Type_label">
                                OPD:
                                <input type="radio" name="type" value="OPD" onClick={handleOPD} />
                            </label>
                            <label className="Type_label">
                                IPD:
                                <input type="radio" name="type" value="IPD" onClick={handleIPD} />
                            </label>
                        </label>
                    </div>
                    { show && (
                        <input type="text" placeholder="Room Number" className="inp"/>
                    )}
                    <input type="text" placeholder="Blood type" id="bloodGroup" className="inp"/> 
                    {/* <input type="text" placeholder="Allergies" id="allergies" className="inp"/> */}
                    {/* <input type="text" placeholder="Date of Test" id="testDate" className="inp"/>  */}
                    {/* <input type="text" placeholder="Doctor's Name" id="doctorName" className="inp"/> */}
                    {/* <input type="text" placeholder="Hospital/Clinic Name" id="hospitalClinic" className="inp"/> */}
                    {/* <input type="text" placeholder="Contact Information" id="contactInformation" className="inp"/> */}
                    {/* <input type="text" placeholder="Report Date:         DD/MM/YYYY" id="reportDate"  className="inp"/> */}
                </form>
                <button className="next" onClick={handleNext}>next</button>
                </div>
                )
            }
            {!isDelete && isInsert && next && (
                <div className="specific-inp">
                    { docType === "Orthopedics" && (<OrthoInsertFields/>)}
                    { docType === "Neurology" && (<NeuroInsertFields/>)}
                    { docType === "Cardiology" && (<CardioInsertFields/>)}
                    { docType === "Gastroenterology" && (<GastroInsertFields/>)}
                    { docType === "Urology" && (<UroInsertFields/>)}
                    <button className="next" onClick={handleNext}>Back</button>
                </div>
            )}
            {!print && (<button className="back" onClick={handleClose}>
                <img src={back} alt="" className="backImg" />
            </button>)}
            </div>
        </div>
    );
}

