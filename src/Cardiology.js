import React from "react";
import "./style.css";
const Urology = React.forwardRef((props, ref) => {
    // Component implementation
    return <div ref={ref}>
        <div className="cover cardio_cover" ref={ref}>
             <div className="bcardio"></div>
             <p className="text">
                 <h1>Cardiology</h1>
                 Cardiology is the medical specialty focused on diagnosing, treating, and preventing diseases and disorders of the heart and blood vessels. Cardiologists, experts in this field, assess patients for conditions such as coronary artery disease, heart failure, arrhythmias, and congenital heart defects. Treatment may involve medication, lifestyle changes, or procedures like angioplasty and bypass surgery. Preventive measures include managing risk factors like hypertension, high cholesterol, and diabetes through diet, exercise, and medication. Regular screenings and cardiac evaluations are crucial for maintaining heart health and reducing the risk of cardiovascular events like heart attacks and strokes.
             </p>
         </div>
    </div>;
  });
  export default Urology;
