import React, { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles for consistency

function SecondaryPlasticShredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Secondary Plastic Shredder</h1>
        </div>
      </header>

      <div className="container text-center my-4">
        <p className="lead">
          Vikah Ecotech provides advanced secondary plastic shredders designed for precision size reduction of pre-shredded plastic materials including PET, HDPE, LDPE, and more.
        </p>
      </div>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Fine Plastic Size Reduction for High-Quality Output</h3>
              <p>
                Our secondary plastic shredders are specially developed to further reduce plastic pieces after initial shredding,
                making them ideal for downstream processing such as granulation or pelletizing. These machines ensure consistent
                particle size and improved efficiency in recycling operations.
              </p>
              <p>
                Built with hardened cutters, customizable screens, and smart controls, Vikah’s secondary plastic shredders provide
                precise control over output size while minimizing dust and energy consumption. This stage is crucial for preparing
                plastic for reprocessing into usable raw materials.
              </p>
              <p>
                Whether you're working with shredded PET, HDPE, or soft LDPE films, our machines help refine and standardize your plastic waste stream for better recycling outcomes.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">Reach out to us to optimize your secondary plastic shredding process.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondaryPlasticShredder;
