import React from "react";
import "./style.css";
const Orthology = React.forwardRef((props, ref) => {
    // Component implementation
    return <div ref={ref}>
        <div className="cover">
             <p className="text">
                 <h1>Orthology</h1>
                 Orthology refers to the study of genes or proteins that are derived from a common ancestor through speciation events. It involves identifying and comparing these homologous sequences across different species to understand their evolutionary relationships and functional similarities. Orthologous genes often perform similar biological functions in different organisms, providing valuable insights into gene function, evolutionary history, and species divergence. By studying orthology, researchers can uncover conserved biological processes, identify disease-related genes, and develop evolutionary models to better understand the diversity of life on Earth.
             </p>
             <div className="brief"></div>
         </div>
    </div>;
  });
  
  export default Orthology;
// export default function Orthology(){
//     return(
//         <div className="cover">
//             <p className="text">
//                 <h1>Orthology</h1>
//                 Orthology refers to the study of genes or proteins that are derived from a common ancestor through speciation events. It involves identifying and comparing these homologous sequences across different species to understand their evolutionary relationships and functional similarities. Orthologous genes often perform similar biological functions in different organisms, providing valuable insights into gene function, evolutionary history, and species divergence. By studying orthology, researchers can uncover conserved biological processes, identify disease-related genes, and develop evolutionary models to better understand the diversity of life on Earth.
//             </p>
//             <div className="brief"></div>
//         </div>
//     );
// }