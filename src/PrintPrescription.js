import React from "react";
import "./style.css";
export default function PrintReport({tempVal, handlePrint}){
    console.log("value of array in print report:",tempVal);
    // console.log("docType:",docType);
    const names = ["Smith", "Johnson", "Williams"];
    let randomInt = getRandomInt(0, 3);
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    return(
        <div>
            <table className="print-table">
                <thead>
                    <tr>
                        <th className="print-data">Fields</th>
                        <th className="print-data">Values</th>
                    </tr>
                </thead>
                {/* {tempVal.map((val,key)=>{
                    return(
                        <tr key={key}>
                            <td>{val}</td>
                        </tr>
                    )
                })} */}
                <tbody>
                    <tr className="print-row">
                        <td className="print-data">Pharmacist Name</td>
                        <td className="print-data">{names[randomInt]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Patient Name</td>
                        <td className="print-data">{tempVal[0]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Age</td>
                        <td className="print-data">{parseInt(tempVal[1])}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Gender</td>
                        <td className="print-data">{tempVal[2]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Doctor Name</td>
                        <td className="print-data">{tempVal[3]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Prescription</td>
                        <td className="print-data">{tempVal[4]}</td>
                    </tr>
                </tbody>
            </table>
            <button className="next" onClick={handlePrint}>back</button>           
        </div>
    );
}
