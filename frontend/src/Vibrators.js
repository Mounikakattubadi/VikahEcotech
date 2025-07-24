import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import vibrator from './images/vibrator.jpg'; // Ensure this path is correct

const Vibrators = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Versatile Material Handling', description: 'Handles a wide range of materials, including granular, powdery, and block-sized substances.' },
    { title: 'Precise Flow Control', description: 'Ensures uniform and controlled material flow, enhancing process efficiency.' },
    { title: 'Durable Construction', description: 'Built with robust materials to withstand harsh industrial environments.' },
    { title: 'Energy Efficient', description: 'Designed to operate with low power consumption, reducing operational costs.' },
    { title: 'Minimal Maintenance', description: 'Features a simple design that requires less maintenance, ensuring long-term reliability.' },
    { title: 'Customizable Options', description: 'Available in various sizes and configurations to suit specific application needs.' },
    { title: 'Adaptability', description: 'Suitable for integration into existing production lines and systems.' },
    { title: 'Compliance Ready', description: 'Meets industry standards and regulations for safety and performance.' }
  ];

  const applications = [
    'Mining and Metallurgy',
    'Food Processing',
    'Chemical Manufacturing',
    'Pharmaceutical Production',
    'Packaging Industries',
    'Recycling Facilities',
    'Plastic and Rubber Processing',
    'Glass and Ceramic Manufacturing'
  ];

  // Sample technical specs for Vibrators (You can update values as needed)
  const specs = [
    { label: 'Vibration Frequency', value: '50-60 Hz' },
    { label: 'Motor Power', value: '5-15 HP' },
    { label: 'Capacity', value: 'Variable based on model' },
    { label: 'Material Construction', value: 'Stainless Steel / Mild Steel' },
    { label: 'Weight', value: '200-1000 kg' },
    { label: 'Mounting Type', value: 'Surface or Suspension' }
  ];

  return (
    <div className="tbf-page">

      {/* Enhanced Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Vibratory Feeders</h1>
              <p className="lead mt-3">
                Engineered to provide efficient and controlled material handling across various industries with durability and energy efficiency.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={vibrator} alt="Vibratory Feeders" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Intro Paragraph */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Vibratory Feeders offer precise control and versatility for handling a wide variety of materials, improving process efficiency and reliability.
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
            For more information about our Vibratory Feeders or to request a quote, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>

    </div>
  );
};

export default Vibrators;
