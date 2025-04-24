import React from 'react';
import { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the styles for consistency

function Plasticbaler() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Plastic Balers</h1>
          <p className="lead">
            We Vikah Ecotech manufacture high-quality plastic balers for PET, HDPE, LDPE, etc., 
            to streamline your plastic waste management and promote environmental sustainability.
          </p>
        </div>
      </header>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Reliable Plastic Baling Solutions</h3>
              <p>
                Vikah Ecotech is committed to providing cutting-edge solutions that meet the evolving needs 
                of the recycling industry. With years of experience in designing and manufacturing 
                state-of-the-art plastic baler machinery, we help businesses efficiently manage plastic waste.
              </p>
              <p>
                Our team of skilled engineers and professionals works tirelessly to develop innovative balers 
                that support recycling and reuse while reducing environmental impact.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">We’ll be happy to assist you with your plastic baler requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Plasticbaler;
