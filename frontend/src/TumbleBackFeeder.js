import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TumbleBackFeeder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Modular Design', description: 'Customizable head and tail sections (20–48 ft) for flexible installation.' },
    { title: 'High Throughput', description: 'Handles 10–70 TPH depending on configuration and hopper type.' },
    { title: 'Gravity-Driven Mechanism', description: 'Utilizes gravity to efficiently remove oversized materials.' },
    { title: 'Durable Construction', description: 'Built with robust materials to withstand harsh recycling environments.' },
    { title: 'Adjustable Feeding Angle', description: 'Allows customization to suit specific material types and processing needs.' },
    { title: 'Easy Maintenance', description: 'Designed for straightforward servicing and reduced downtime.' },
    { title: 'Consistent Feed Rate', description: 'Ensures a steady flow of materials to downstream equipment.' },
    { title: 'Versatile Applications', description: 'Suitable for various recycling processes including rubber, aluminum, PET, e-waste, steel, and glass.' }
  ];

  const applications = [
    'Rubber Recycling',
    'Aluminum Recycling',
    'PET Recycling',
    'E-Waste Recycling',
    'Steel Recycling',
    'Glass Recycling'
  ];

  return (
    <div className="tbf-page">

      {/* Header (gradient) with ONLY heading */}
      <header className="tbf-header text-white text-center py-5">
        <Container>
          <h1 className="tbf-heading">Tumble Back Feeder</h1>
        </Container>
      </header>

      {/* Below header centered paragraph (old style) */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Tumble Back Feeders are engineered to automate the loading process into shredders and other recycling machinery,
          enhancing material handling efficiency and reducing manual labor.
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
            For more information or to request a quote, contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default TumbleBackFeeder;
