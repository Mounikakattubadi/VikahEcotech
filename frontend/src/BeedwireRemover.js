import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import beedwireremover from "./images/beedwireremover.webp";

const BeadwireRemover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'High Efficiency', description: 'Capable of processing 40 to 120 tires per hour, depending on the model.' },
    { title: 'Durable Construction', description: 'Built with robust materials to withstand the rigors of tire recycling operations.' },
    { title: 'User-Friendly Operation', description: 'Designed for ease of use, reducing operator training time.' },
    { title: 'Low Maintenance', description: 'Features a simple design that requires minimal maintenance, ensuring long-term reliability.' },
    { title: 'Energy Efficient', description: 'Operates with low power consumption, reducing operational costs.' },
    { title: 'Versatile Applications', description: 'Suitable for various tire sizes and types, including truck and OTR tires.' },
    { title: 'Clean Steel Wire Output', description: 'Produces high-quality steel wire suitable for resale or further processing.' },
    { title: 'Safety Features', description: 'Equipped with safety mechanisms to protect operators during operation.' }
  ];

  const applications = [
    'Tire Recycling Plants',
    'Rubber Processing Facilities',
    'Steel Wire Recovery Operations',
    'Environmental Waste Management',
    'Automotive Industry',
    'Construction and Demolition Waste Processing'
  ];

  const specs = [
    { label: 'Processing Capacity', value: '40 to 120 tires per hour' },
    { label: 'Applicable Tire Types', value: 'Passenger, Truck, OTR Tires' },
    { label: 'Power Consumption', value: 'Low Energy Usage' },
    { label: 'Machine Dimensions', value: 'Varies by model' },
    { label: 'Weight', value: 'Model dependent' },
  ];

  return (
    <div className="tbf-page">

      {/* Enhanced Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Beadwire Remover</h1>
              <p className="lead mt-3">
                Efficient and reliable machines engineered to extract steel bead wires from waste tires, boosting recycling and material recovery.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={beedwireremover} alt="Beadwire Remover Machine" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Intro Paragraph */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Beadwire Remover machines are designed to simplify the tire recycling process by efficiently extracting steel bead wires, improving overall recycling efficiency.
        </p>
      </div>

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
            For more information about our Beadwire Remover machines or to request a quote, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>

    </div>
  );
};

export default BeadwireRemover;
