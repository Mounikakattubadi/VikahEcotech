import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MagneticSteelSeparators = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Strong Magnetic Force', description: 'Powerful magnetic field ensures efficient separation of ferrous metals from waste streams.' },
    { title: 'Durable Build', description: 'Constructed with heavy-duty materials suitable for harsh industrial environments.' },
    { title: 'Easy Installation', description: 'Designed for quick and easy mounting on conveyor systems or processing lines.' },
    { title: 'Low Maintenance', description: 'Robust design minimizes downtime and maintenance needs.' },
    { title: 'Energy Efficient', description: 'Consumes minimal power, reducing operational costs.' },
    { title: 'Adjustable Height & Width', description: 'Customizable dimensions to fit different conveyor sizes and material flows.' },
    { title: 'Safety Features', description: 'Includes protective housings and safety switches for operator protection.' },
    { title: 'Wide Application Range', description: 'Suitable for recycling, mining, manufacturing, and waste management industries.' }
  ];

  const applications = [
    'Recycling Facilities',
    'Scrap Yards',
    'Mining Operations',
    'Waste Management Plants',
    'Manufacturing Lines',
    'Construction & Demolition Waste Processing',
  ];

  return (
    <div className="tbf-page">

      {/* Header (gradient) */}
      <header className="tbf-header text-white text-center py-5">
        <Container>
          <h1 className="tbf-heading">Overband Magnetic Steel Separators</h1>
        </Container>
      </header>

      {/* Intro Paragraph (old style) */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Overband Magnetic Steel Separators efficiently remove ferrous metals from conveyor belts and waste streams,
          protecting downstream equipment and improving product purity.
        </p>
      </div>

      {/* Features Section */}
      <section className="tbf-section tbf-features">
        <Container>
          <h2 className="section-title text-center mb-5">Key Features</h2>
          <div className="feature-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card shadow-sm">
                <div className="feature-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications Section */}
      <section className="tbf-section tbf-applications">
        <Container>
          <h2 className="section-title text-center mb-5">Applications</h2>
          <div className="applications-grid">
            {applications.map((app, idx) => (
              <div key={idx} className="application-card shadow-sm">
                <i className="bi bi-box-seam"></i>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="tbf-contact-section text-white text-center py-5">
        <Container>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p className="mb-0">
            For more information about our Overband Magnetic Steel Separators or to request a quote, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default MagneticSteelSeparators;
