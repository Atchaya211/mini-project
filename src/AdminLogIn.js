import React, {useState} from "react";
// import Login from "./Login";
import back from "./images/back.png";
import "./style2.css";
import { ethers } from "ethers";
import abi from "./abi/abi.json";
export default function AdminLgoIn(){
    const [selectedValue, setSelectedValue] = useState('');
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
    // let uType=0;
    const handleAdduser = async ()=>{
        // const provider = detectProvider();
        const addr = document.getElementById('addr').value;
        const uType = parseInt(selectedValue);
        // console.log("utype: ",uType);
        // console.log("address: ",addr);

        // setNext(!next);
        const provider = detectProvider();
        // const signer = new ethers.providers.Web3Provider(window.ethereum);
        const sign = new ethers.BrowserProvider(window.ethereum);
        const signer = await sign.getSigner();
        if(provider)
        {
            if(provider !== window.ethereum)
            {
                alert("Not window.ethereum");
            }
            await provider.request({
                method: "eth_requestAccounts"
            });
           
            let accounts = await sign.send("eth_requestAccounts",[])
            const address = accounts[0];
            const ehr = new ethers.Contract("0x4587fdC50640756bf4543d4ff602Fc69361627Ad",abi,signer);
            try{

                console.log("inside try",address);
                // const ehrDeploy = await ehr.constructor(["0x7816ca2ec251b5a94b16421febc66cb151f8dca4"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca5"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca8"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca7"],["0x7816ca2ec251b5a94b16421febc66cb151f8dca6"]);
                alert("before deptmethod:");
                let department = await ehr.checkUser();
                await ehr.addUser(addr,uType);
                const c = parseInt(department);
                alert(c);
                console.log("department:",department);
                // setSelectedValue(department);
                // props.updateDocType(department);
            }
            catch(error){
                console.log("Error calling constructor:",error)
            }
        }
    }
    const handleClose = () =>{
        window.location.reload();
      }
    
      const handleRadioChange = (event) => {
            setSelectedValue(event.target.value);
          }
    return(
        <div className="wrap">
            <div className="logInDiv">
            <form className="addusernav">
                <p className="addusertop">Add User</p>
                <input type="text" id="addr" className="aduseraddr" placeholder="Enter new user address" />
                <p className="selectusertype">User Type</p>

                <label>
                <p className="adduserpara">Patient
                <input type="radio" name="docTypeDiv" value="1"  onChange={handleRadioChange}/></p>
                </label>
                <label>
                <p className="adduserpara">Nurse
                <input type="radio" name="docTypeDiv" value="2"  onChange={handleRadioChange}/></p>
                </label>
                <label>
                <p className="adduserpara">Orthopedics Doctor
                <input type="radio" name="docTypeDiv" value="3"  onChange={handleRadioChange}/></p>
                </label>
                <label>
                <p className="adduserpara">Neurology Doctor
                <input type="radio" name="docTypeDiv" value="4" onChange={handleRadioChange}/></p>
                </label>
                <label>
                <p className="adduserpara">Cardiology Doctor
                <input type="radio" name="docTypeDiv" value="5" onChange={handleRadioChange}/></p>
                </label>
                <label>
                <p className="adduserpara">Gastroenterology Doctor
                <input type="radio" name="docTypeDiv" value="6" onChange={handleRadioChange}/></p>
                </label>
                <label>
                <p className="adduserpara">Urology Doctor
                <input type="radio" name="docTypeDiv" value="7" onChange={handleRadioChange}/></p>
                </label>
            </form>
           
                <button className="add-user" onClick={handleAdduser}>Add User</button>
                <button className="back" onClick={handleClose}>
                    <img src={back} alt="" className="backImg" />
                </button>
            </div>
        </div>
    );
}

