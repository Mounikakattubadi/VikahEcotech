import React, { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles for consistency

function SecondaryMetalshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Secondary Metal Shredder</h1>
        </div>
      </header>

      <div className="container text-center my-4">
        <p className="lead">
          Vikah Ecotech offers advanced secondary metal shredders designed for precise size reduction of pre-shredded ferrous and non-ferrous metals, including aluminum, copper, brass, and more.
        </p>
      </div>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Precision in Metal Size Reduction</h3>
              <p>
                Our secondary metal shredders play a critical role in the recycling process by reducing the size of metal fragments produced during primary shredding. These machines are engineered for consistent output sizing, making them ideal for downstream processing like separation, melting, or granulation.
              </p>
              <p>
                At Vikah Ecotech, we ensure that each secondary shredder is built with durable materials, automated control systems, and customizable screens to achieve desired output sizes with minimal energy consumption. Whether processing aluminum, copper, or steel fragments, our shredders help optimize your recycling line.
              </p>
              <p>
                With our secondary shredding solutions, you can achieve cleaner, more uniform metal output — improving both processing efficiency and material resale value.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">Let us help you streamline your secondary metal shredding process.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondaryMetalshredder;
