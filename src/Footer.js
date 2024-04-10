import React from 'react';
const Footer = React.forwardRef((props, ref) => {
    // Component implementation
    return <div ref={ref}>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <ul className="contact-info">
              <li>Email: EHR@gmail.com</li>
              <li>Phone: 12345 67890</li>
              <li>Address: 123 Main Street, Chennai, TamilNadu, India</li>
            </ul>
          </div>
          <div className="col-md-6">
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; {new Date().getFullYear()} EHR. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>;
  });
  export default Footer;