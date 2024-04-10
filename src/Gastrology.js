import React from "react";
import "./style.css";
const Gastrology = React.forwardRef((props, ref) => {
    // Component implementation
    return <div ref={ref}>
        <div className="cover gastro_cover" ref={ref}>
             <div className="bgastro"></div>
             <p className="text">
                 <h1>Gastrology</h1>
                 Gastrology, the study of the digestive system, encompasses a diverse array of disciplines crucial to understanding the intricacies of digestion and its impact on overall health. From the esophagus to the intestines, gastrology delves into the physiology, pathology, and treatment of gastrointestinal disorders. It explores the complexities of nutrient absorption, gut microbiota, and the interplay between diet and health. Gastrologists employ a variety of diagnostic tools such as endoscopy and imaging techniques to investigate gastrointestinal ailments ranging from acid reflux to inflammatory bowel diseases. By advancing our knowledge of digestion, gastrology plays a pivotal role in improving patient care and enhancing quality of life.
             </p>
         </div>
    </div>;
  });
  export default Gastrology;
