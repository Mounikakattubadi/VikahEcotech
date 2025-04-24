import React from 'react';
import { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles as Tyrecutting for consistency

function Pcb() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Paper and Cardboard Balers</h1>
          <p className="lead">
            Vikah Ecotech is a premier manufacturer of top-quality paper and cardboard baler machinery 
            designed to revolutionize cardboard waste management processes.
          </p>
        </div>
      </header>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Revolutionizing Paper and Cardboard Recycling</h3>
              <p>
                At Vikah Ecotech, we focus on innovation, efficiency, and environmental responsibility. 
                We are dedicated to providing cutting-edge solutions that cater to the diverse needs of paper 
                and cardboard recyclers. Our baler machinery is designed to streamline recycling processes, 
                enabling businesses to handle and manage their cardboard waste efficiently.
              </p>
              <p>
                Our team of experienced engineers and professionals is committed to delivering innovative solutions 
                that empower businesses to efficiently bale and recycle paper and cardboard waste with ease. 
                By providing high-performance baling machines, we are enabling companies to reduce their environmental footprint.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">We’ll be happy to assist you with your paper and cardboard baler requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pcb;
