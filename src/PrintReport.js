import React from "react";
import "./style.css";
export default function PrintReport({tempVal, handlePrint}){
    console.log(tempVal);
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
                <tr className="print-row">
                    <th className="print-data">Fields</th>
                    <th className="print-data">Values</th>
                </tr>
                <tr className="print-row">
                    <td className="print-data">recordId</td>
                    <td className="print-data">{tempVal[0]}</td>
                </tr>
                <tr className="print-row">
                    <td className="print-data">name</td>
                    <td className="print-data">{tempVal[1]}</td>
                </tr>
                <tr className="print-row">
                    <td className="print-data">age</td>
                    <td className="print-data">{tempVal[2]}</td>
                </tr>
                <tr className="print-row">
                    <td className="print-data">gender</td>
                    <td className="print-data">{tempVal[3]}</td>
                </tr>
                <tr className="print-row">
                    <td className="print-data">bloodType</td>
                    <td className="print-data">{tempVal[4]}</td>
                </tr>
                <tr className="print-row">
                    <td className="print-data">diagnosis</td>
                    <td className="print-data">{tempVal[5]}</td>
                </tr>
                <tr className="print-row">
                    <td className="print-data">allergies</td>
                    <td className="print-data">{tempVal[6]}</td>
                </tr>
            </table>
            <button className="next" onClick={handlePrint}>back</button>
        </div>
    );
}