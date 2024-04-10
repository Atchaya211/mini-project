import React from "react";
import "./style.css";
const Neurology = React.forwardRef((props, ref) => {
    // Component implementation
    return <div ref={ref}>
         <div className="cover neuro_cover">
             <p className="text">
                 <h1>Neurology</h1>
                 Neurology is a branch of medicine that focuses on the diagnosis and treatment of disorders related to the nervous system, including the brain, spinal cord, nerves, and muscles. Neurologists specialize in identifying and managing conditions such as strokes, epilepsy, Alzheimer's disease, Parkinson's disease, multiple sclerosis, and headaches. They utilize various diagnostic techniques, including imaging studies and neurological examinations, to assess and diagnose patients. Treatment options may include medications, physical therapy, surgery, and lifestyle modifications. Neurology plays a crucial role in improving the quality of life for individuals affected by neurological disorders through comprehensive care and management strategies.
             </p>
             <div className="bneuro"></div>
         </div>
    </div>
  });
  
  export default Neurology;
// export default function Neurology(){
//     return(
//         <div className="cover neuro_cover">
//             <p className="text">
//                 <h1>Neurology</h1>
//                 Neurology is a branch of medicine that focuses on the diagnosis and treatment of disorders related to the nervous system, including the brain, spinal cord, nerves, and muscles. Neurologists specialize in identifying and managing conditions such as strokes, epilepsy, Alzheimer's disease, Parkinson's disease, multiple sclerosis, and headaches. They utilize various diagnostic techniques, including imaging studies and neurological examinations, to assess and diagnose patients. Treatment options may include medications, physical therapy, surgery, and lifestyle modifications. Neurology plays a crucial role in improving the quality of life for individuals affected by neurological disorders through comprehensive care and management strategies.
//             </p>
//             <div className="bneuro"></div>
//         </div>
//     );
// }