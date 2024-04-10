import React from "react";
// import "./style2.css";
export default function UroInsertFields(){
    return(
        <>
            <input type="text" placeholder="Test Name" id="testName" className="inp"/>
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="Urinalysis" id="urinalysisTestReport" className="inp"/>
            <input type="text" placeholder="Urinary Culture" id="urinarycultureTestReport" className="inp"/>
            <input type="text" placeholder="Cystoscopy" id="cystoscopyTestReport" className="inp"/>
            <input type="text" placeholder="Prostate Biopsy" id="prostatebiopsyTestReport" className="inp"/>
            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/>
            <input type="text" placeholder="Urological Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Urological Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Urological Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Urological Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Urological Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}