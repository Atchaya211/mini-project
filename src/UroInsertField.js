import React, {useState} from "react";
// import "./style2.css";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
export default function UroInsertFields({args,handleBack}){
    let tempArray=[];
    const handleParameter = ()=>{
        // const TestName = document.getElementById('testName').value;
        const TestDate = document.getElementById('testDate').value;
        const UrinalysisTestReport = document.getElementById('urinalysisTestReport').value;
        const UrinarycultureTestReport = document.getElementById('urinarycultureTestReport').value;
        const CystoscopyTestReport = document.getElementById('cystoscopyTestReport').value;
        const ProstatebiopsyTestReport = document.getElementById('prostatebiopsyTestReport').value;
        const reportDate = document.getElementById('reportDate').value;
        const DoctorName = document.getElementById('doctorName').value;
        const Medicine = textAreaValue.toString();
        tempArray = [TestDate,UrinalysisTestReport,UrinarycultureTestReport,CystoscopyTestReport,ProstatebiopsyTestReport,DoctorName,Medicine,reportDate];
        console.log("inside ortho:",tempArray);
        // handleUserInp(tempArray);
        handleBlock();
        handleBack();
    }
    const handleBlock = async ()=>{
        // setNext(!next);
        console.log("Inside Neuro:",args[0]);
        console.log("inside block append", tempArray[0]);
        const sign = new ethers.BrowserProvider(window.ethereum);
        let accounts = await sign.send("eth_requestAccounts",[]);
        // const balance = await sign.getBalance(accounts[0]);
        // const balanceInEther = ethers.formatEther(balance);
        // const block = await sign.getBlockNumber();

        sign.on("block", (block) => {
            this.setState({ block })
          })

        const signer = await sign.getSigner();
        const address = accounts[0];
        const ehr = new ethers.Contract("0x4587fdC50640756bf4543d4ff602Fc69361627Ad",abi,signer);
        console.log("inside try",address);
        // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
        console.log("before deptmethod:");
        await ehr.addUrologyTestReport(args[0],args[1],args[2],args[3],args[4],args[5],tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5],tempArray[6],tempArray[7]);
        console.log("function was called successfully");

    }
    const [textAreaValue, setTextAreaValue] = useState("");

    const handleChange = (event) => {
      setTextAreaValue(event.target.value);
    };
    return(
        <>
            {/* <input type="text" placeholder="Test Name" id="testName" className="inp"/> */}
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="Urinalysis" id="urinalysisTestReport" className="inp"/>
            <input type="text" placeholder="Urinary Culture" id="urinarycultureTestReport" className="inp"/>
            <input type="text" placeholder="Cystoscopy" id="cystoscopyTestReport" className="inp"/>
            <input type="text" placeholder="Prostate Biopsy" id="prostatebiopsyTestReport" className="inp"/>
            <input type="text" placeholder="Report Date" id="reportDate" className="inp" />
            <input type="text" placeholder="Doctor Name" id="doctorName" className="inp" />
            <div className="text-area">
                <label className="medi">Medicine:</label>
                <textarea id="medicine" onChange={handleChange} rows={7} cols={40}/>
            </div>
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