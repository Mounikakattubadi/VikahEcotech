import React, { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles for consistency

function Plasticshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Plastic Shredder</h1>
        </div>
      </header>

      <div className="container text-center my-4">
        <p className="lead">
          Vikah Ecotech manufactures high-quality plastic shredders designed to streamline plastic waste management and
          promote environmental sustainability. Our shredders are built to handle various types of plastics such as PET, HDPE,
          LDPE, and more.
        </p>
      </div>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Efficient and Sustainable Plastic Shredding</h3>
              <p>
                Vikah Ecotech's plastic shredders are engineered to process various plastic materials efficiently, enabling businesses
                to reduce plastic waste and contribute to a circular economy. We are committed to providing cutting-edge solutions
                that meet the evolving needs of the recycling industry.
              </p>
              <p>
                Our shredders are built with advanced technology to ensure high performance, safety, and ease of operation.
                Whether you're dealing with PET, HDPE, or LDPE plastic waste, our machines can handle it all, helping you efficiently
                compact and recycle plastic waste for reuse.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">We’ll be happy to assist you with your plastic shredder requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Plasticshredder;
