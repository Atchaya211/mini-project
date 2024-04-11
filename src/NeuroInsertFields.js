import React from "react";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
// import "./style2.css";
export default function NeuroInsertFields({args,handleBack}){
    // console.log("Inside Neuro:",args);
    let tempArray=[];
    // const [append, setAppend ] = useState([]);
    const handleParameter = ()=>{
        // const TestName = document.getElementById('testName').value;
        const TestDate = document.getElementById('testDate').value;
        const NeurologicalExaminationReport = document.getElementById('neurologicalExaminationReport').value;
        const EegReport = document.getElementById('eegReport').value;
        const LumbarPunctureReport = document.getElementById('lumbarPunctureReport').value;
        const NeuropsychologicalTestingReport = document.getElementById('neuropsychologicalTestingReport').value;
        const GeneticTestingReport = document.getElementById('geneticTestingReport').value;
        const reportDate = document.getElementById('reportDate').value;
        tempArray = [TestDate,NeurologicalExaminationReport,EegReport,LumbarPunctureReport,NeuropsychologicalTestingReport,GeneticTestingReport,reportDate];
        console.log("inside ortho:",tempArray);
        // setAppend(tempArray);
        handleBlock();
        handleBack();
        // handleUserInp(tempArray);
    }
    // useEffect(() => {
    //     console.log("state args", append);
    // }, [append]);

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
        const ehr = new ethers.Contract("0xF925c63db5A71D05A9c21b0D5674541Dd479e504",abi,signer);
        console.log("inside try",address);
        // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
        console.log("before deptmethod:");
        await ehr.addNeurologyTestReport(args[0],args[1],args[2],args[3],args[4],tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5],tempArray[6]);
        console.log("function was called successfully");

    }
    return(
        <>
            {/* <input type="text" placeholder="Test Name" id="testName" className="inp"/> */}
            <input type="text" placeholder="Tests Date" id="testDate" className="inp"/>
            <h3>Test Result:</h3>
            <input type="text" placeholder="Neurological Examination Report" id="neurologicalExaminationReport" className="inp"/>
            <input type="text" placeholder="Electroencephalogram (EEG) Report" id="eegReport" className="inp"/>
            <input type="text" placeholder="Lumbar Puncture (Spinal Tap) Report" id="lumbarPunctureReport" className="inp"/>
            <input type="text" placeholder="Neuro psychological TestingReport" id="neuropsychologicalTestingReport" className="inp"/>
            <input type="text" placeholder="Genetic Testing Report" id="geneticTestingReport" className="inp" />
            <input type="text" placeholder="Report Date" id="reportDate" className="inp" />
            <button className="next sub" onClick={handleParameter}>Submit</button>

            {/* <input type="text" placeholder="Test Description" id="testDescription" className="inp"/>
            <input type="text" placeholder="Neurological Examination Findings" id="examinationFindings" className="inp"/>
            <input type="text" placeholder="Neurological Diagnosis:" id="diagnosis" className="inp"/>
            <input type="text" placeholder="Neurological Treatment Plan" id="treatmentPlan" className="inp"/>
            <input type="text" placeholder="Neurological Prescription" id="prescription" className="inp"/>
            <input type="text" placeholder="Neurological Follow-up Recommendations" id="followUpRecommendations" className="inp"/> */}
        </>
    );
}