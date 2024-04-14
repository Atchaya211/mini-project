import React, { useState} from "react";
import "./style.css";
export default function PrintReport({tempVal, handlePrint,docType,temp}){
    console.log("value of array in print report:",tempVal);
    console.log("docType:",docType);
    const [ printPres, setPrintPres] = useState(false);
    const names = ["Smith", "Johnson", "Williams"];
    let randomInt = getRandomInt(0, 3);
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      const handlePrintPress = ()=>{
        setPrintPres(!printPres);
      }
    return(
        <div>
            <table className="print-table">
                {/* {tempVal.map((val,key)=>{
                    return(
                        <tr key={key}>
                            <td>{val}</td>
                        </tr>
                    )
                })} */}
                <thead>
                    <tr>
                        <th className="print-data">Fields</th>
                        <th className="print-data">Values</th>
                    </tr>
                </thead>
                <tbody>
                    {!printPres && (
                    <>
                    <tr className="print-row">
                        <td className="print-data">Medical Record Number</td>
                        {/* <td className="print-data">{tempVal[0]}</td> */}
                        <td className="print-data">{parseInt(tempVal[0])}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Patient Name</td>
                        <td className="print-data">{tempVal[1]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Age</td>
                        <td className="print-data">{parseInt(tempVal[2])}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Gender</td>
                        <td className="print-data">{tempVal[3]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Blood Group</td>
                        <td className="print-data">{tempVal[4]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Test Date</td>
                        <td className="print-data">{parseInt(tempVal[5])}</td>
                    </tr>
                    {(docType === 4n )&&(
                        <>
                    <tr className="print-row">
                        <td className="print-data">X-ray Test Report</td>
                        <td className="print-data">{tempVal[6]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">MRI Test Report</td>
                        <td className="print-data">{tempVal[7]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">CT Scan Test Report</td>
                        <td className="print-data">{tempVal[8]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Ultrasound Test Report</td>
                        <td className="print-data">{tempVal[9]}</td>
                    </tr>
                    </>)}

                    {(docType === 5n )&&(
                        <>
                    <tr className="print-row">
                        <td className="print-data">Neurology Examination Test Report</td>
                        <td className="print-data">{tempVal[6]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Electro Encephalogram Test Report</td>
                        <td className="print-data">{tempVal[7]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Lumbar Puncture Test Report</td>
                        <td className="print-data">{tempVal[8]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Neuropsychological Test Report</td>
                        <td className="print-data">{tempVal[9]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Genetic Test Report</td>
                        <td className="print-data">{tempVal[10]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Report Date</td>
                        <td className="print-data">{parseInt(tempVal[11])}</td>
                    </tr>
                    </>)}

                    {(docType === 6n )&&(
                        <>
                    <tr className="print-row">
                        <td className="print-data">Electrocardiogram Test Report</td>
                        <td className="print-data">{tempVal[6]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Echocardiogram Test Report</td>
                        <td className="print-data">{tempVal[7]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Stress Test Report</td>
                        <td className="print-data">{tempVal[8]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Cardiac MRI Test Report</td>
                        <td className="print-data">{tempVal[9]}</td>
                    </tr>
                    </>)}

                    {(docType === 7n )&&(
                        <>
                    <tr className="print-row">
                        <td className="print-data">Breath Test Report</td>
                        <td className="print-data">{tempVal[6]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Liverbiospy Test Report</td>
                        <td className="print-data">{tempVal[7]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Upper Endoscopy Test Report</td>
                        <td className="print-data">{tempVal[8]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Capsule Endoscopy Test Report</td>
                        <td className="print-data">{tempVal[9]}</td>
                    </tr>
                    </>)}

                    {(docType === 8n )&&(
                        <>
                    <tr className="print-row">
                        <td className="print-data">Urinalysis Test Report</td>
                        <td className="print-data">{tempVal[6]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Urinary Culture Test Report</td>
                        <td className="print-data">{tempVal[7]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Cystoscopy Test Report</td>
                        <td className="print-data">{tempVal[8]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Prostatebiopsy Test Report</td>
                        <td className="print-data">{tempVal[9]}</td>
                    </tr>
                    </>)}
                    {!(docType === 5n ) && (
                        <tr className="print-row">
                        <td className="print-data">Report Date</td>
                        <td className="print-data">{parseInt(tempVal[10])}</td>
                    </tr>
                    )}
                    <button className="remove_btn" onClick={handlePrintPress}>Print🖨️</button>
                    </>)}
                    {printPres && (<>
                        <tr className="print-row">
                        <td className="print-data">Pharmacist Name</td>
                        <td className="print-data">{names[randomInt]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Patient Name</td>
                        <td className="print-data">{temp[0]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Age</td>
                        <td className="print-data">{parseInt(temp[1])}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Gender</td>
                        <td className="print-data">{temp[2]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Doctor Name</td>
                        <td className="print-data">{temp[3]}</td>
                    </tr>
                    <tr className="print-row">
                        <td className="print-data">Prescription</td>
                        <td className="print-data">{temp[4]}</td>
                    </tr>
                    </>)}
                </tbody>
            </table>
            
            <button className="next report-back" onClick={handlePrint}>back</button>
        </div>
    );
}