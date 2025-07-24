import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import sidewallremover from "./images/sidewallremover.jpg";

const SidewallRemover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Efficient Sidewall Removal', description: 'Effectively removes sidewall materials for cleaner processing and reduced contamination.' },
    { title: 'Robust Construction', description: 'Made with durable materials to withstand industrial wear and tear.' },
    { title: 'Adjustable Settings', description: 'Easily adjustable for different sidewall thicknesses and materials.' },
    { title: 'User-Friendly Operation', description: 'Simple controls ensure smooth and safe operation.' },
    { title: 'Low Maintenance', description: 'Designed for minimal upkeep and long-lasting performance.' },
    { title: 'Compact Design', description: 'Space-saving design fits well within existing production lines.' },
    { title: 'Safety Features', description: 'Incorporates safety guards and emergency stop functions.' },
    { title: 'Versatile Applications', description: 'Suitable for use in recycling, manufacturing, and waste management industries.' }
  ];

  const applications = [
    'Recycling Plants',
    'Manufacturing Facilities',
    'Waste Processing Units',
    'Material Recovery Facilities',
    'Packaging Industry',
  ];

  const specs = [
    // Optional: Add specs if available, or remove this section if none
    { label: 'Machine Size (L x W x H)', value: 'TBD' },
    { label: 'Weight', value: 'TBD' },
    { label: 'Power Requirements', value: 'TBD' },
  ];

  return (
    <div className="tbf-page">

      {/* Enhanced Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Side Wall Remover</h1>
              <p className="lead mt-3">
                Our Side Wall Remover is designed to efficiently remove unwanted sidewall materials during processing, improving product quality and optimizing downstream operations.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={sidewallremover} alt="Side Wall Remover Machine" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Floating Technical Overview (optional - show only if specs available) */}
      {specs && specs.length > 0 && (
        <div className="specs-box shadow">
          <h5 className="fw-bold mb-3">Technical Overview</h5>
          <ul className="list-unstyled mb-0">
            {specs.map((item, idx) => (
              <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
            ))}
          </ul>
        </div>
      )}

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
            For more information about our Side Wall Remover or to request a quote, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default SidewallRemover;
