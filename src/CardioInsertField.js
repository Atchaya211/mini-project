import React from "react";
// import "./style2.css";
export default function CardioInsertFields({handleUserInp}){
    const handleParameter = ()=>{
        const TestName = document.getElementById('testName').value;
        const TestDate = document.getElementById('testDate').value;
        const ElectrocardiogramTestReport = document.getElementById('electrocardiogramTestReport').value;
        const EchocardiogramTestReport = document.getElementById('echocardiogramTestReport').value;
        const StressTestReport = document.getElementById('stressTestReport').value;
        const CardiacmriTestReport = document.getElementById('cardiacmriTestReport').value;
        const tempArray = [TestName,TestDate,ElectrocardiogramTestReport,EchocardiogramTestReport,StressTestReport,CardiacmriTestReport];
        console.log("inside ortho:",tempArray);
        handleUserInp(tempArray);
    }
    return(
        <>
            <input type="text" placeholder="Test Name" id="testName" className="inp"/>
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="Electrocardiogram (ECG or EKG)" id="electrocardiogramTestReport" className="inp"/>
            <input type="text" placeholder="Echocardiogram (Echo)" id="echocardiogramTestReport" className="inp"/>
            <input type="text" placeholder="Stress Test" id="stressTestReport" className="inp"/>
            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/> */}
            <input type="text" placeholder="Cardiac MRI" id="cardiacmriTestReport" className="inp" />
            <button className="next sub" onClick={handleParameter}>Submit</button>

            {/* <input type="text" placeholder="Cardiac Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Cardiac Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Cardiac Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Cardiac Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Cardiac Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}