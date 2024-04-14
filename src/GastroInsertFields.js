import React, {useState} from "react";
// import "./style2.css";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
export default function GastroInsertFields({args,handleBack}){
    let tempArray=[];
    const handleParameter = ()=>{
        // const TestName = document.getElementById('testName').value;
        const TestDate = document.getElementById('testDate').value;
        const BreathTestReport = document.getElementById('breathTestReport').value;
        const LiverbiospyTestReport = document.getElementById('liverbiospyTestReport').value;
        const UpperendoscopyTestReport = document.getElementById('upperendoscopyTestReport').value;
        const CapsuleendoscopyTestReport = document.getElementById('capsuleendoscopyTestReport').value;
        const reportDate = document.getElementById('reportDate').value;
        const DoctorName = document.getElementById('doctorName').value;
        const Medicine = textAreaValue.toString();
        tempArray = [TestDate,BreathTestReport,LiverbiospyTestReport,UpperendoscopyTestReport,CapsuleendoscopyTestReport,DoctorName,Medicine,reportDate];
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
        const ehr = new ethers.Contract("0x75Bbc02f4C2036DEF20D1CB25492cf847C757964",abi,signer);
        console.log("inside try",address);
        // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
        console.log("before deptmethod:");
        await ehr.addGastroenterologyTestReport(args[0],args[1],args[2],args[3],args[4],args[5],tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5],tempArray[6],tempArray[7]);
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
            <input type="text" placeholder="Breath Tests report" id="breathTestReport" className="inp"/>
            <input type="text" placeholder="Liver Biopsy report" id="liverbiospyTestReport" className="inp"/>
            <input type="text" placeholder="Upper Endoscopy report" id="upperendoscopyTestReport" className="inp"/>
            <input type="text" placeholder="Capsule Endoscopy report" id="capsuleendoscopyTestReport" className="inp"/>
            <input type="text" placeholder="Report Date" id="reportDate" className="inp" />
            <input type="text" placeholder="Doctor Name" id="doctorName" className="inp" />
            <div className="text-area">
                <label className="medi">Medicine:</label>
                <textarea id="medicine" onChange={handleChange} rows={7} cols={40}/>
            </div>
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