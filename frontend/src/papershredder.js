import React, { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles for consistency

function Papershredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Paper and Cardboard Shredder</h1>
        </div>
      </header>

      <div className="container text-center my-4">
        <p className="lead">
          Vikah Ecotech manufactures high-quality Paper and Cardboard Shredders designed to streamline your paper and cardboard waste management.
          Our shredders ensure efficient processing and contribute to environmental sustainability.
        </p>
      </div>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Efficient Paper and Cardboard Shredding</h3>
              <p>
                Vikah Ecotech's Paper and Cardboard Shredders are designed to efficiently handle large quantities of paper and cardboard waste.
                By processing these materials, businesses can optimize their recycling operations and reduce waste volumes.
              </p>
              <p>
                Our shredders are equipped with advanced technology for reliable and high-performance shredding. Whether you're dealing with paper
                or cardboard waste, we ensure that our shredders meet the highest standards of safety, efficiency, and durability.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">We’ll be happy to assist you with your Paper and Cardboard Shredder requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Papershredder;
