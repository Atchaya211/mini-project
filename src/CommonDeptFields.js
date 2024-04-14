import React, { useState, useEffect } from "react";
// import Login from "./Login";
// import Sample from "./sample.json";
import back from "./images/back.png";
import "./style2.css";
import OrthoInsertFields from "./OrthoInsertFields";
import NeuroInsertFields from "./NeuroInsertFields";
import CardioInsertFields from "./CardioInsertField";
import GastroInsertFields from "./GastroInsertFields";
import UroInsertFields from "./UroInsertField";
import PrintReport from "./PrintReport";
import PrintPrescription from "./PrintPrescription";
import PrintReportComponent from "./PrintAllPatient";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
export default function CommonDeptFields({docType})
{
    console.log(docType);
    const [ show, setShow] = useState(false);
    const [next, setNext ] = useState(false);
    const [ print, setPrint ] = useState(false);
    const [view, setView ] = useState(true);
    // const [temp, setTemp] = useState([]);
    // const itemId = Sample.items.find(item => item.recordId === temp);
    // const [ userInp, setUserInp] = useState([]);
    
    // const handleUserInp = (t) =>{
    //     console.log("inside userInp parameter",t);
    //     setUserInp(t);
    // }
    // useEffect(() => {
    //     console.log("state", userInp);
    // }, [userInp]);
    const handleClose = () =>{
        window.location.reload();
      }

    const handleIPD = () =>{
        setShow(true);
    }

    const handleOPD = () => {
        setShow(false);
    }
    const [ isDelete, setIsDelete ] = useState(false);
    const [ isInsert, setIsInsert ] = useState(true);
    const handleBtn = () =>{
        setIsDelete(false);
        setIsInsert(true)
    }
    const handleDel =() =>{
        setIsDelete(true);
        setIsInsert(false);
    }
    const [selectedOption, setSelectedOption] = useState('');
    const [args,setArgs] = useState([]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };

    const handleNext = () =>{
        setNext(!next);
        //document.getElementById('medicalRecordNumber').value
        const medicalRecordNumber = document.getElementById('medicalRecordNumber').value;
        const userAddress = document.getElementById('userAddress').value;

        const patientName = document.getElementById('patientName').value;
        const age = document.getElementById('age').value;
        const gender = selectedOption;
        const bloodGroup = document.getElementById('bloodGroup').value;
        const temp = [medicalRecordNumber,userAddress,patientName,age,gender,bloodGroup];
        console.log(temp);
        setArgs(temp);
    }
    useEffect(() => {
        console.log("state args", args);
    }, [args]);

    const handleBack = () =>{
        setNext(!next);
    }
    // const handlePrint = (t) =>{
    //     setPrint(!print);
    //     setView(!view);
    //     setTemp(t);
    //     // console.log(temp[1])
    // }

    const handleView = () =>{
        setPrint(!print);
        setView(!view);
    }
    const [search,setSearch] =useState();
    const handelSearch = (event) =>{
        // setPrint(!print);
        // setView(!view);
        setSearch(event.target.value);
        console.log("inside handle search :",search);
    }
    const [blockArray, setBlockArray] = useState([]);
    const handleBlock = async ()=>{
        setPrint(!print);
        setView(!view);
        setChoose(0);
        // handleBlockSearch();
        // setNext(!next);
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
        // console.log("inside eth fun search",search);
        if(docType === 4n){
           const tempArray = await ehr.getOrthopedicsTestReportDetails(search);
           console.log("blockArray:",tempArray);
           setBlockArray(tempArray);
           const temp = await ehr.getOrthoMedicineList(search);
           setBlockArraySearch(temp);

        }
        else if(docType === 5n){
            const tempArray = await ehr.getNeurologyTestReportDetails(search);
           console.log("blockArray:",tempArray);
           setBlockArray(tempArray);
           const temp = await ehr.getNeuroMedicineList(search);
           setBlockArraySearch(temp);
        }
        else if(docType === 6n){
            const tempArray = await ehr.getCardiologyTestReportDetails(search);
           console.log("blockArray:",tempArray);
           setBlockArray(tempArray);
           const temp = await ehr.getCardioMedicineList(search);
           setBlockArraySearch(temp);
        }
        else if(docType === 7n){
            const tempArray = await ehr.getGastroenterologyTestReportDetails(search);
           console.log("blockArray:",tempArray);
           setBlockArray(tempArray);
           const temp = await ehr.getGastroMedicineList(search);
           setBlockArraySearch(temp);
        }
        else if(docType === 8n){
            const tempArray = await ehr.getUrologyTestReportDetails(search);
           console.log("blockArray:",tempArray);
           setBlockArray(tempArray);
           const temp = await ehr.getUroMedicineList(search);
           setBlockArraySearch(temp);
        }
        console.log("inside try",address);
        // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
        console.log("before deptmethod:");
        // await ehr.addOrthopedicsTestReport(args[0],args[1],args[2],args[3],args[4],tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5]);
        console.log("function was called successfully");

    }
    const [choose, setChoose] = useState(0);
    const [blockArraySearch, setBlockArraySearch] = useState([]);
    const handleBlockSearch = async ()=>{
        setPrint(!print);
        setView(!view);
        setChoose(1);
        // setNext(!next);
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
        // console.log("inside eth fun search",search);
        if(docType === 4n){
           const tempArray = await ehr.getOrthoMedicineList(search);
           console.log("blockArray:",tempArray);
           setBlockArraySearch(tempArray);
        }
        else if(docType === 5n){
            const tempArray = await ehr.getNeuroMedicineList(search);
           console.log("blockArray:",tempArray);
           setBlockArraySearch(tempArray);
        }
        else if(docType === 6n){
            const tempArray = await ehr.getCardioMedicineList(search);
           console.log("blockArray:",tempArray);
           setBlockArraySearch(tempArray);
        }
        else if(docType === 7n){
            const tempArray = await ehr.getGastroMedicineList(search);
           console.log("blockArray:",tempArray);
           setBlockArraySearch(tempArray);
        }
        else if(docType === 8n){
            const tempArray = await ehr.getUroMedicineList(search);
           console.log("blockArray:",tempArray);
           setBlockArraySearch(tempArray);
        }
        console.log("inside try",address);
        // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
        console.log("before deptmethod:");
        // await ehr.addOrthopedicsTestReport(args[0],args[1],args[2],args[3],args[4],tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5]);
        console.log("function was called successfully");

    }
    const [totNo,setTotNo] = useState(0);
    const [allPatList, setAllPatList] = useState([]);
    const PrintAll = async ()=>{
        setPrint(!print);
        setView(!view);
        setChoose(2);
        // setNext(!next);
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
        // console.log("inside eth fun search",search);
        if(docType === 4n){
           const tempArray = await ehr.getAllOrthopedicsRecords();
           console.log("blockArray:",tempArray[1]);
           const details = tempArray[1];
           setTotNo(tempArray[0]);
           setAllPatList(details);
        }
        else if(docType === 5n){
            const tempArray = await ehr.getAllNeurologyRecords();
           console.log("blockArray:",tempArray[1]);
           const details = tempArray[1];
           setTotNo(tempArray[0]);
           setAllPatList(details);
        }
        else if(docType === 6n){
            const tempArray = await ehr.getAllCardiologyRecords();
           console.log("blockArray:",tempArray[1]);
           const details = tempArray[1];
           setTotNo(tempArray[0]);
           setAllPatList(details);
        }
        else if(docType === 7n){
            const tempArray = await ehr.getAllGastroenterologyRecords();
           console.log("blockArray:",tempArray[1]);
           const details = tempArray[1];
           setTotNo(tempArray[0]);
           setAllPatList(details);
        }
        else if(docType === 8n){
            const tempArray = await ehr.getAllUrologyRecords();
           console.log("blockArray:",tempArray[1]);
           const details = tempArray[1];
           setTotNo(tempArray[0]);
           setAllPatList(details);
        }
        console.log("inside try",address);
        // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
        console.log("All Patients:",allPatList);
        console.log("Total no of rec:",totNo);
        // await ehr.addOrthopedicsTestReport(args[0],args[1],args[2],args[3],args[4],tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5]);
        console.log("function was called successfully");
    }

    // useEffect(() => {
    //     console.log("state Pat:", allPatList);
    // }, [allPatList]);

    // useEffect(() => {
    //     const input = document.getElementById('age');
    
    //     const checkPatternMismatch = () => {
    //       const patternMismatch = input.validity.patternMismatch;
    //       console.log(patternMismatch);
    //     };
    
    //     input.addEventListener('input', checkPatternMismatch);
    
    //     // Cleanup function
    //     return () => {
    //       input.removeEventListener('input', checkPatternMismatch);
    //     };
    //   }, []);
    // const [value, setValue] = useState();

    // const handleChange = ({ target: { value } }) => {
    //     setValue((prevState) =>
    //       value.length <= 2 && !isNaN(Number(value)) ? value : prevState
    //     );
    //   };
    return(
        <div className="wrap">
            <div className="logInDiv">
            { !print && (<div className="doc_nav">
                <button className="insert" onClick={handleBtn}>Insert</button>
                <button className="delete" onClick={handleDel}>View all records</button>
            </div>)}
            { isDelete && !isInsert && !print &&(
                <div className="deletePat">
                    <form className="search">
                        <label className="medi">Print Report</label><br/>
                        <input type="text" placeholder="Enter medical record number" onChange={handelSearch} className="search-inp" />
                        <button onClick={handleBlock} className="search-btn">search</button>
                    </form>
                    <form className="search">
                        <label className="medi">Print Prescription</label><br/>
                        <input type="text" placeholder="Enter medical record number" onChange={handelSearch} className="search-inp" />
                        <button onClick={handleBlockSearch} className="search-btn">search</button>
                    </form>
                    <form className="search">
                        <label className="medi all-pat-lab">Print Prescription</label>
                        <button onClick={PrintAll} className="search-btn all-pat-btn">Print All</button>
                    </form>
                    {/* {
                        <div className="rec_wrap">
                        {Sample.map((item) => (
                            <div className="rec" key={item.recordId}>
                                <div className="rec_field">{item.recordId}</div>
                                <div className="rec_field">{item.name}</div>
                                <div className="rec_field">{item.age}</div>
                                <div className="rec_field">{item.gender}</div>
                                <div className="rec_field">{item.bloodType}</div>
                                <div className="rec_field">{item.diagnosis}</div>
                                <button className="remove_btn" onClick={()=>handlePrint([item.recordId,item.name,item.age,item.gender,item.bloodType,item.diagnosis,item.allergies])}>Print🖨️</button>
                                {item.name} - {item.date}
                             </div>
                        ))}
                    </div> 
                    } */}
                </div>
            )}
            { isDelete && !isInsert && print && (choose === 0) && (
                <PrintReport tempVal={blockArray} handlePrint={handleView} docType={docType} temp={blockArraySearch}/>
            )}
            { isDelete && !isInsert && print && (choose === 1) && (
                <PrintPrescription tempVal={blockArraySearch} handlePrint={handleView}/>
            )}
            { isDelete && !isInsert && print && (choose === 2) && (
                <PrintReportComponent allPatList={allPatList} handlePrint={handleView}/>
            )}
            {
                !isDelete && isInsert && !next &&(
                    <div className="insertPat">
                    {/* { docType === 4n && (<div>Ortho</div>)}
                    { docType === 5n && (<div>Neuro</div>)}
                    { docType === 6n && (<div>Cardio</div>)}
                    { docType === 7n && (<div>Gastro</div>)}
                    { docType === 8n && (<div>Uro</div>)} */}
                    <form className="LogInForm">
                    <input type="number" placeholder="Medical rec no" id="medicalRecordNumber" className="inp"/>
                    <input type="text" placeholder="Patient Metamask address" id="userAddress" className="inp"/>

                    <input type="text" placeholder="Patient's Name" id="patientName" className="inp"/>
                    <input type="number" placeholder="Enter Age" id="age" className="inp"/>
                    <div className="gender">
                        <label>
                            Gender:
                            <label className="gender_label">
                                Male:
                                <input type="radio" name="gender" value="Male" onChange={handleOptionChange}/>
                            </label>
                            <label className="gender_label">
                                Female:
                                <input type="radio" name="gender" value="Female" onChange={handleOptionChange}/>
                            </label>
                        </label>
                    </div>
                    {/* <input type="text" placeholder="Address" id="address1" className="inp"/> */}
                    <div className="Type">
                        <label>
                            Type:
                            <label className="Type_label">
                                OPD:
                                <input type="radio" name="type" value="OPD" onClick={handleOPD} />
                            </label>
                            <label className="Type_label">
                                IPD:
                                <input type="radio" name="type" value="IPD" onClick={handleIPD} />
                            </label>
                        </label>
                    </div>
                    { show && (
                        <input type="text" placeholder="Room Number" className="inp"/>
                    )}
                    <input type="text" placeholder="Blood type" id="bloodGroup" className="inp"/> 
                    {/* <input type="text" placeholder="Allergies" id="allergies" className="inp"/> */}
                    {/* <input type="text" placeholder="Date of Test" id="testDate" className="inp"/>  */}
                    {/* <input type="text" placeholder="Doctor's Name" id="doctorName" className="inp"/> */}
                    {/* <input type="text" placeholder="Hospital/Clinic Name" id="hospitalClinic" className="inp"/> */}
                    {/* <input type="text" placeholder="Contact Information" id="contactInformation" className="inp"/> */}
                    {/* <input type="text" placeholder="Report Date:         DD/MM/YYYY" id="reportDate"  className="inp"/> */}
                </form>
                <button className="next" onClick={handleNext}>next</button>
                </div>
                )
            }
            {!isDelete && isInsert && next && (
                <div className="specific-inp">
                    { docType === 4n && (<OrthoInsertFields args={args} handleBack={handleBack}/>)}
                    { docType === 5n && (<NeuroInsertFields args={args} handleBack={handleBack}/>)}
                    { docType === 6n && (<CardioInsertFields args={args} handleBack={handleBack}/>)}
                    { docType === 7n && (<GastroInsertFields args={args} handleBack={handleBack}/>)}
                    { docType === 8n && (<UroInsertFields args={args} handleBack={handleBack}/>)}
                    {/* <button className="next sub">Submit</button> */}
                    <button className="next back" onClick={handleBack}>Back</button>
                </div>
            )}
            {!print && (<button className="back" onClick={handleClose}>
                <img src={back} alt="" className="backImg" />
            </button>)}
            </div>
        </div>
    );
}

