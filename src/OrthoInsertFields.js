import React, {useState} from "react";
// import "./style2.css";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
export default function OrthoInsertFields({args,handleBack}){
    let tempArray=[];
    const handleParameter = ()=>{
        // const TestName = document.getElementById('testName').value;
        const TestDate = document.getElementById('testDate').value;
        const XrayTestReport = document.getElementById('xrayTestReport').value;
        const MriTestReport = document.getElementById('mriTestReport').value;
        const CtScanTestReport = document.getElementById('ctScanTestReport').value;
        const UltrasoundTestReport = document.getElementById('ultrasoundTestReport').value;
        const reportDate = document.getElementById('reportDate').value;
        const DoctorName = document.getElementById('doctorName').value;
        const Medicine = textAreaValue.toString();
        tempArray = [TestDate,XrayTestReport,MriTestReport,CtScanTestReport,UltrasoundTestReport,DoctorName,Medicine,reportDate];
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
        console.log("before deptmethod:",tempArray);
        await ehr.addOrthopedicsTestReport(args[0],args[1],args[2],args[3],args[4],args[5],tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5],tempArray[6],tempArray[7]);
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
            <input type="text" placeholder="X-Ray report" id="xrayTestReport" className="inp"/>
            <input type="text" placeholder="MRI report" id="mriTestReport" className="inp"/>
            <input type="text" placeholder="CT scan report" id="ctScanTestReport" className="inp"/>
            <input type="text" placeholder="UltraSound report" id="ultrasoundTestReport" className="inp"/>
            <input type="text" placeholder="Report Date" id="reportDate" className="inp" />
            <input type="text" placeholder="Doctor Name" id="doctorName" className="inp" />
            <div className="text-area">
                <label className="medi">Medicine:</label>
                <textarea id="medicine" onChange={handleChange} rows={7} cols={40}/>
            </div>
            
            {/* onClick={()=>handlePrint([item.recordId,item.name,item.age,item.gender,item.bloodType,item.diagnosis,item.allergies])} */}
            <button className="next sub" onClick={handleParameter}>Submit</button>
            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/> */}
            {/* <input type="text" placeholder="Orthopedic Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Orthopedic Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Orthopedic Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Orthopedic Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Orthopedic Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}