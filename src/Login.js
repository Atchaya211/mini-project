import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import abi from "./abi/abi.json";
import Doctor from "./images/doctor-min1.png";
import Patient from "./images/patient.png";
import "./style2.css";
// import Web3 from 'web3';
export default function Login(props)
{
    const [walletAddress, setWalletAddress] = useState(null);
    const [ userType, setUserType] = useState(null);
    const [list, setList] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    // const [contractInstance, setContractInstance] = useState(null);
    useEffect(() => {
        console.log(walletAddress);
        console.log(userType);
        // console.log(ethers.version);
        // const contract = new Web3.eth.Contract(abi, "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8");
        // setContractInstance(contract);
    }, [walletAddress,userType]);

    const detectProvider = () => {
        let provider;
        if(window.ethereum)
        {
            provider = window.ethereum;
        }
        else if(window.web3)
        {
            provider = window.web3.currentProvider;
        }
        else{
            window.alert("MetaMask is not found in browser");
        }
        return provider;
    };

    const loginHandleDoc = async () =>{
        // const value = document.querySelector('input[name="docTypeDiv"]:checked').value;
        if(document.querySelector('input[name="docTypeDiv"]:checked')){
            handleDoc();
        }
        else{
            alert("Choose your department to proceed")
        }
        props.updateDocType(selectedValue);
        const provider = detectProvider();
        // const signer = new ethers.providers.Web3Provider(window.ethereum);
        const signer = new ethers.BrowserProvider(window.ethereum);
        // const signer = new ethers.JsonRpcProvider(url);
        if(provider)
        {
            if(provider !== window.ethereum)
            {
                alert("Not window.ethereum");
            }
            await provider.request({
                method: "eth_requestAccounts"
            });
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const address = accounts[0];
            // await provider.send("eth_requestAccounts",[])
            // const address = await provider.getSigner;
            setWalletAddress(address);
            setUserType("Doctor");
            props.connected(provider);
            // const signer = provider.getSigner();
            const ehr = new ethers.Contract("0xd9145CCE52D386f254917e481eB44e9943F39138",abi,signer);
            // const ehr = new ethers.Contract(contractInfo.address,abi,provider);
            try{
                console.log("inside try",address);
                // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
                console.log("before deptmethod:");
                let department = await ehr.checkUser(address);
                console.log("department:",department);
            }
            catch(error){
                console.log("Error calling constructor:",error)
            }
        }
       
    };

    const docTypefun = () =>{
        setList(true);
    }

    const loginHandlePat = async () =>{
        handlePat();
        const provider = detectProvider();
        if(provider)
        {
            if(provider !== window.ethereum)
            {
                alert("Not window.ethereum");
            }
            await provider.request({
                method: "eth_requestAccounts"
            });
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const address = accounts[0];
            setWalletAddress(address);
            setUserType("Patient");
            props.connected(provider);
        }
    };

    // const loginHandleAdmin = async () =>{
    //     handleAdmin();
    //     const provider = detectProvider();
    //     if(provider)
    //     {
    //         if(provider !== window.ethereum)
    //         {
    //             alert("Not window.ethereum");
    //         }
    //         await provider.request({
    //             method: "eth_requestAccounts"
    //         });
    //         props.connected(provider);
    //     }
    // };

    const handleDoc = () =>{
        props.updateDoc(true);
    }
    const handlePat = () =>{
        props.updatePatient(true);
    }

    // const handleAdmin = () =>{
    //     props.updateAdmin(true);
    // }
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
      };

    return(
        <>
            <div className='Login'>
            {!list && (
                <div className='div-log'>
                <div className="left">
                    <button onClick={loginHandlePat} className='btn-1'>
                        <img src={Patient} alt='Patient' className='Patient'></img>
                        <p className="abt">I'm Patient</p>
                    </button> 
                    
                </div>
                <div className="right">
                    <button onClick={docTypefun} className='btn-1'>
                        <img src={Doctor} alt='Doctor' className='Doctor'></img>
                        <p className="abt">I'm Doctor</p>
                    </button>
                </div>
            </div>
            )}

            {list && (
                <div className="docTypeDiv">
                        <label className='docType_wrap'>
                            <p className="docTypeText_top">Choose Department:</p>
                            <label className="docTypeDiv_label">
                                <p className="docTypeText">Orthopedics
                                <input type="radio" name="docTypeDiv" value="Orthopedics"  onChange={handleRadioChange}/></p>
                            </label>
                            <label className="docTypeDiv_label">
                                <p className="docTypeText">Neurology
                                <input type="radio" name="docTypeDiv" value="Neurology" onChange={handleRadioChange}/></p>
                            </label>
                            <label className="docTypeDiv_label">
                                <p className="docTypeText">Cardiology
                                <input type="radio" name="docTypeDiv" value="Cardiology" onChange={handleRadioChange}/></p>
                            </label>
                            <label className="docTypeDiv_label">
                                <p className="docTypeText">Gastroenterology
                                <input type="radio" name="docTypeDiv" value="Gastroenterology" onChange={handleRadioChange}/></p>
                            </label>
                            <label className="docTypeDiv_label">
                                <p className="docTypeText">Urology
                                <input type="radio" name="docTypeDiv" value="Urology" onChange={handleRadioChange}/></p>
                            </label>
                        </label>
                        <button onClick={loginHandleDoc} className='docType-btn'>Submit</button>
                    </div>
            )}
        </div>
        {/* <button className="admin" type='submit' onClick={loginHandleAdmin}>
            For Admin Log in...
        </button> */}
        </>
        
    );
}
