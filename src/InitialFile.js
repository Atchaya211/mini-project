import React, { useState } from 'react';
import './style2.css';
import Login from './Login';
import Web3 from "web3";
// import DocLogIn from './DocLogIn';
import DocLogIn from './CommonDeptFields';
import PatientLogIn from './PatientLogIn';
import AdminLgoIn from './AdminLogIn';
// import Nav from "./Nav";
function InitialFile(props) {
const [isConnected, setIsConnected] = useState(false);
const [currentAcc , setCurrentAcc] = useState(null);
const [isDoctor , setIsDoctor] = useState(false);
const [isPatient , setIsPatient] = useState(false);
const [isAdmin , setIsAdmin] = useState(false);
const [docType, setDocType] = useState("");

const updateDoc = () =>{
  setIsDoctor(!isDoctor);
}
const updatePatient = () =>{
  setIsPatient(!isPatient);
}
const updateAdmin = () =>{
  setIsAdmin(!isAdmin);
}
const updateDocType = (temp) =>{
  setDocType(temp);
}
const connected = async (provider)=>{
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  if(accounts.length === 0){
    alert("Please Connect to meta mask");
  }
  else if(accounts[0] !== currentAcc){
    setCurrentAcc(accounts[0]);
    setIsConnected(true);
  }
}

  return (
    <div className="initial">
      {/* <Nav/> */}
      {!isConnected && <Login connected={connected} updateDoc={updateDoc} updatePatient={updatePatient} updateAdmin={updateAdmin} updateDocType={updateDocType}/>}
      {/* {isDoctor && isConnected && <Home/>} */}
      {isDoctor && isConnected && <DocLogIn docType={docType}/>}
      {isPatient && isConnected && <PatientLogIn/>}
      {isAdmin && isConnected && <AdminLgoIn/>}
    </div>
  );
}

export default InitialFile;
