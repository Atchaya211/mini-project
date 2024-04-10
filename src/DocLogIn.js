import React, {useState} from "react";
import back from "./images/back.png";
import CommonDeptFields from "./CommonDeptFields";
import "./style2.css"
export default function DocLogIn({docType})
{
    console.log(docType);
    const [submit, setSubmit] = useState(false);
    const handleClose = () =>{
        window.location.reload();
    }
    // document.getElementById('medicalRecordNumber').value
    const handleSubmit = () => {
        if(document.getElementById('docName').value && document.getElementById('dept').value && document.getElementById('hospi').value && document.getElementById('info').value){
        setSubmit(true);
        }
        else{
            alert("Pls fill all fields!");
        }
    }  
    return(
        <>
             <div className="wrap">
            <div className="logInDiv">
            <div className="doc_det-div"><p className="doc_det">Enter Your Details</p></div>
            <input type="text" placeholder="Doctor's Name" id="docName" className="inp"/>
            <input type="text" placeholder="Department" id="dept" className="inp"/>
            <input type="text" placeholder="Hospital/Clinic" id="hospi" className="inp"/>
            <input type="text" placeholder="Contact Information" id="info" className="inp"/>
            <button className='docType-btn' onClick={handleSubmit}>Submit</button>
            <button className="back" onClick={handleClose}>
                <img src={back} alt="" className="backImg" />
            </button>
            </div>
        </div>
        {submit && (<CommonDeptFields docType={docType}/>)}
        </>
       
    );
}

