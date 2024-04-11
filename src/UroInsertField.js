import React from "react";
// import "./style2.css";
export default function UroInsertFields({handleUserInp}){
    const handleParameter = ()=>{
        const TestName = document.getElementById('testName').value;
        const TestDate = document.getElementById('testDate').value;
        const UrinalysisTestReport = document.getElementById('urinalysisTestReport').value;
        const UrinarycultureTestReport = document.getElementById('urinarycultureTestReport').value;
        const CystoscopyTestReport = document.getElementById('cystoscopyTestReport').value;
        const ProstatebiopsyTestReport = document.getElementById('prostatebiopsyTestReport').value;
        const tempArray = [TestName,TestDate,UrinalysisTestReport,UrinarycultureTestReport,CystoscopyTestReport,ProstatebiopsyTestReport];
        console.log("inside ortho:",tempArray);
        handleUserInp(tempArray);
    }
    return(
        <>
            <input type="text" placeholder="Test Name" id="testName" className="inp"/>
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="Urinalysis" id="urinalysisTestReport" className="inp"/>
            <input type="text" placeholder="Urinary Culture" id="urinarycultureTestReport" className="inp"/>
            <input type="text" placeholder="Cystoscopy" id="cystoscopyTestReport" className="inp"/>
            <input type="text" placeholder="Prostate Biopsy" id="prostatebiopsyTestReport" className="inp"/>
            <button className="next sub" onClick={handleParameter}>Submit</button>

            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/>
            <input type="text" placeholder="Urological Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Urological Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Urological Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Urological Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Urological Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}