import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import oms from "./images/oms.jpeg"; // Your image path here

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

  // Optional specs for Magnetic Steel Separators (customize if you want)
  const specs = [
    { label: 'Magnetic Strength', value: 'Up to 10,000 Gauss' },
    { label: 'Conveyor Width Compatibility', value: 'Up to 1800 mm' },
    { label: 'Operating Temperature', value: '-10°C to 50°C' },
    { label: 'Power Supply', value: '230V / 50Hz' },
    { label: 'Weight', value: '150–300 kg (varies by model)' },
  ];

  return (
    <div className="tbf-page">

      {/* Enhanced Header (like StripCutter) */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Overband Magnetic Steel Separators</h1>
              <p className="lead mt-3">
                Efficient removal of ferrous metals from conveyor belts and waste streams to protect downstream equipment and improve product purity.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={oms} alt="Overband Magnetic Steel Separator" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Intro Paragraph */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Overband Magnetic Steel Separators are designed to provide powerful magnetic separation with durable construction and easy installation, ideal for a wide range of industrial applications.
        </p>
      </div>

      {/* Floating Technical Overview (like specs box) */}
      <div className="specs-box shadow">
        <h5 className="fw-bold mb-3">Technical Overview</h5>
        <ul className="list-unstyled mb-0">
          {specs.map((item, idx) => (
            <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
          ))}
        </ul>
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
