import React from "react";
import "./style.css";
// import img1 from "./images/about.jpeg";
const About = React.forwardRef((props, ref) => {
    // Component implementation
    return <div ref={ref}>
        <div className="page" ref={ref}></div>
        <div className="abt-cent">
             <p className="para-text">
                 <h6 className="heading">About Us</h6>
                 <p className="cen-txt">
                    At EHR, we are dedicated to providing exceptional healthcare services tailored to meet the unique needs of each patient. With a team of experienced healthcare professionals, state-of-the-art facilities, and a commitment to excellence, we strive to deliver the highest standard of care.

                    Our clinic offers a wide range of medical services, including preventive care, diagnostics, treatment, and rehabilitation. 
                    </p>
                    {/* <img src={img1} alt=""/> */}
                    {/* <p className="cen-txt"> */}
                    Whether you're visiting us for a routine check-up, managing a chronic condition, or seeking specialized care, you can trust our team to provide compassionate, comprehensive, and personalized care every step of the way.

                    We believe in fostering long-lasting relationships with our patients built on trust, respect, and open communication. Your health and well-being are our top priorities, and we are here to support you on your journey to better health.

                    Thank you for choosing EHR. We look forward to serving you and your family for all your healthcare needs.
                    {/* </p> */}
                    
             </p>
             </div>
    </div>;
  });
  export default About;
