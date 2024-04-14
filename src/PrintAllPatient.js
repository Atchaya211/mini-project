import React from "react";
import "./style.css";
export default function PrintReport({allPatList, handlePrint}){
    console.log("value of array in print report:",allPatList);
    // console.log("docType:",docType);
    return(
        <div>
            <table className="print-table">
                <thead>
                    <tr>
                        <th className="print-data">Rec No</th>
                        <th className="print-data">Patient Name</th>
                    </tr>
                </thead>
                <tbody>
                    {allPatList.map((val,key)=>{
                        return(
                            <tr className="print-row"  key={key}>
                                <td className="print-data">{parseInt(val[0])}</td>
                                <td className="print-data">{val[1]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="next" onClick={handlePrint}>back</button>           
        </div>
    );
}
