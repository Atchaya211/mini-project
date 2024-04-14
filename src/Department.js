// import React from "react";
// import "./style.css";
// import Bones from "./images/bones1.png";
// import Bones1 from "./images/bone2.png";
// import cardio from "./images/cardiology.png";
// import cardio1 from "./images/cardiology1.png";
// import neuro from "./images/neurology.png";
// import neuro1 from "./images/neurology2.png";
// import stomach from "./images/stomach.png";
// import stomach1 from "./images/stomach2.png";
// import urology from "./images/urology.png";
// import urology1 from "./images/urology2.png";
// export default function Department({scrollToOrtho,scrollToNeuro,scrollToCardio,scrollToGastro,scrollToUro}){
//     return(
//         <div className="department">
//             <h1 className="heading">Departments</h1>
//             <div className="dept_icon_wrap">
//                 <div className="deptname">
//                     <button className="btn bones-btn" onClick={scrollToOrtho}>
//                         <img src={Bones} alt="" className="dept-icon l1"/>
//                         <img src={Bones1} alt="" className="dept-icon l2"/>
//                     </button>
//                     <p className="name">Orthology</p>
//                 </div>
//                 <div className="deptname">
//                 <button className="btn neuro-btn" onClick={scrollToNeuro}>
//                     <img src={neuro} alt="" className="dept-icon l1"/>
//                     <img src={neuro1} alt="" className="dept-icon l2"/>
//                 </button>
//                 <p className="name">Neurology</p>
//                 </div>
//                 <div className="deptname">
//                 <button className="btn cardio-btn"  onClick={scrollToCardio}>
//                     <img src={cardio} alt="" className="dept-icon l1"/>
//                     <img src={cardio1} alt="" className="dept-icon l2"/>
//                 </button>
//                 <p className="name">Cardiology</p>
//                 </div>
//                 <div className="deptname">
//                 <button className="btn stomach-btn" onClick={scrollToGastro}>
//                     <img src={stomach} alt="" className="dept-icon l1"/>
//                     <img src={stomach1} alt="" className="dept-icon l2"/>
//                 </button>
//                 <p className="name">Gastrology</p>
//                 </div>
//                 <div className="deptname">
//                 <button className="btn urology-btn" onClick={scrollToUro}>
//                     <img src={urology} alt="" className="dept-icon l1"/>
//                     <img src={urology1} alt="" className="dept-icon l2"/>
//                 </button>
//                 <p className="name">Urology</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { forwardRef } from "react";
import "./style.css";
import Bones from "./images/bones1.png";
import Bones1 from "./images/bone2.png";
import cardio from "./images/cardiology.png";
import cardio1 from "./images/cardiology1.png";
import neuro from "./images/neurology.png";
import neuro1 from "./images/neurology2.png";
import stomach from "./images/stomach.png";
import stomach1 from "./images/stomach2.png";
import urology from "./images/urology.png";
import urology1 from "./images/urology2.png";

const Department = forwardRef(({ scrollToOrtho, scrollToNeuro, scrollToCardio, scrollToGastro, scrollToUro }) => {
    return (
        <div className="department">
            <h1 className="heading">Departments</h1>
            <div className="dept_icon_wrap">
                <div className="deptname">
                    <button className="btn bones-btn" onClick={scrollToOrtho}>
                        <img src={Bones} alt="" className="dept-icon l1" />
                        <img src={Bones1} alt="" className="dept-icon l2" />
                    </button>
                    <p className="name">Orthology</p>
                </div>
                <div className="deptname">
                    <button className="btn neuro-btn" onClick={scrollToNeuro}>
                        <img src={neuro} alt="" className="dept-icon l1" />
                        <img src={neuro1} alt="" className="dept-icon l2" />
                    </button>
                    <p className="name">Neurology</p>
                </div>
                <div className="deptname">
                    <button className="btn cardio-btn" onClick={scrollToCardio}>
                        <img src={cardio} alt="" className="dept-icon l1" />
                        <img src={cardio1} alt="" className="dept-icon l2" />
                    </button>
                    <p className="name">Cardiology</p>
                </div>
                <div className="deptname">
                    <button className="btn stomach-btn" onClick={scrollToGastro}>
                        <img src={stomach} alt="" className="dept-icon l1" />
                        <img src={stomach1} alt="" className="dept-icon l2" />
                    </button>
                    <p className="name">Gastrology</p>
                </div>
                <div className="deptname">
                    <button className="btn urology-btn" onClick={scrollToUro}>
                        <img src={urology} alt="" className="dept-icon l1" />
                        <img src={urology1} alt="" className="dept-icon l2" />
                    </button>
                    <p className="name">Urology</p>
                </div>
            </div>
        </div>
    );
});

export default Department;
