import React from "react";
// import "./style2.css";
export default function OrthoInsertFields(){
    return(
        <>
            <input type="text" placeholder="Test Name" id="testName" className="inp"/>
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="X-Ray report" id="xrayTestReport" className="inp"/>
            <input type="text" placeholder="MRI report" id="mriTestReport" className="inp"/>
            <input type="text" placeholder="CT scan report" id="ctScanTestReport" className="inp"/>
            <input type="text" placeholder="UltraSound report" id="ultrasoundTestReport" className="inp"/>
            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/> */}
            {/* <input type="text" placeholder="Orthopedic Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Orthopedic Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Orthopedic Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Orthopedic Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Orthopedic Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}