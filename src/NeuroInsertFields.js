import React from "react";
// import "./style2.css";
export default function NeuroInsertFields(){
    return(
        <>
            <input type="text" placeholder="Test Name" id="testName" className="inp"/>
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="Neurological Examination Report" id="neurologicalExaminationReport" className="inp"/>
            <input type="text" placeholder="Electroencephalogram (EEG) Report" id="eegReport" className="inp"/>
            <input type="text" placeholder="Lumbar Puncture (Spinal Tap) Report" id="lumbarPunctureReport" className="inp"/>
            <input type="text" placeholder="Neuro psychological TestingReport" id="neuropsychologicalTestingReport" className="inp"/>
            <input type="text" placeholder="Genetic Testing Report" id="geneticTestingReport" className="inp" />
            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/>
            <input type="text" placeholder="Neurological Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Neurological Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Neurological Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Neurological Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Neurological Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}