import React from "react";
// import "./style2.css";
export default function GastroInsertFields({handleUserInp}){
    const handleParameter = ()=>{
        const TestName = document.getElementById('testName').value;
        const TestDate = document.getElementById('testDate').value;
        const BreathTestReport = document.getElementById('breathTestReport').value;
        const LiverbiospyTestReport = document.getElementById('liverbiospyTestReport').value;
        const UpperendoscopyTestReport = document.getElementById('upperendoscopyTestReport').value;
        const CapsuleendoscopyTestReport = document.getElementById('capsuleendoscopyTestReport').value;
        const tempArray = [TestName,TestDate,BreathTestReport,LiverbiospyTestReport,UpperendoscopyTestReport,CapsuleendoscopyTestReport];
        console.log("inside ortho:",tempArray);
        handleUserInp(tempArray);
    }
    return(
        <>
            <input type="text" placeholder="Test Name" id="testName" className="inp"/>
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="Breath Tests report" id="breathTestReport" className="inp"/>
            <input type="text" placeholder="Liver Biopsy report" id="liverbiospyTestReport" className="inp"/>
            <input type="text" placeholder="Upper Endoscopy report" id="upperendoscopyTestReport" className="inp"/>
            <input type="text" placeholder="Capsule Endoscopy report" id="capsuleendoscopyTestReport" className="inp"/>
            <button className="next sub" onClick={handleParameter}>Submit</button>

            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/>
            <input type="text" placeholder="Gastrointestinal Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Gastrointestinal Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Gastrointestinal Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Gastrointestinal Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Gastrointestinal Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}