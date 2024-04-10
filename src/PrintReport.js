import React from "react";

export default function PrintReport({tempVal, handlePrint}){
    console.log(tempVal);
    return(
        <div>
            <p>Helooo</p>
            <p>{tempVal}</p>
            <button onClick={handlePrint}>back</button>
        </div>
    );
}