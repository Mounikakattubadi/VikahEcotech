import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import tumbleBackFeederImg from './images/Tumbleback-Feeder.png';

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

  const specs = [
    { label: 'Length', value: '20–48 ft (modular)' },
    { label: 'Throughput Capacity', value: '10–70 TPH' },
    { label: 'Material Compatibility', value: 'Rubber, Aluminum, PET, E-Waste, Steel, Glass' },
    { label: 'Feeding Angle', value: 'Adjustable' },
    { label: 'Construction Material', value: 'Heavy-duty steel' },
    { label: 'Power Requirements', value: 'Varies by configuration' },
  ];

  return (
    <div className="tbf-page">

      {/* Enhanced Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Tumble Back Feeder</h1>
              <p className="lead mt-3">
                Engineered to automate and streamline the feeding process for shredders and recycling machinery with modular flexibility and durability.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={tumbleBackFeederImg} alt="Tumble Back Feeder Machine" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Floating Technical Overview */}
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
            For more information or to request a quote, contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default TumbleBackFeeder;
