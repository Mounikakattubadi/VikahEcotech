import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import classifier from "./images/classifier.png";

const Classifiers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'High Precision Classification', description: 'Ensures accurate separation of particles based on size, enhancing product quality.' },
    { title: 'Versatile Applications', description: 'Suitable for various industries including chemical, food, pharmaceutical, and mineral processing.' },
    { title: 'Energy Efficient', description: 'Operates with low power consumption, reducing operational costs.' },
    { title: 'Compact Design', description: 'Space-saving design suitable for various workshop sizes.' },
    { title: 'User-Friendly Operation', description: 'Designed for ease of use, reducing operator training time.' },
    { title: 'Durable Construction', description: 'Built with high-quality materials to withstand rigorous industrial use.' },
    { title: 'Low Maintenance', description: 'Features a simple design that requires minimal maintenance, ensuring long-term reliability.' },
    { title: 'Safety Features', description: 'Incorporates safety mechanisms to protect operators during operation.' }
  ];

  const applications = [
    'Chemical Industry',
    'Food Processing',
    'Pharmaceutical Manufacturing',
    'Mineral Processing',
    'Plastic Recycling',
    'Powder Coating',
  ];

  const specs = [
    { label: 'Classification Accuracy', value: '±0.5%' },
    { label: 'Capacity', value: 'Up to 5 Tons/Hour' },
    { label: 'Power Consumption', value: '5 kW' },
    { label: 'Machine Dimensions (L x W x H)', value: '1.8 m x 1.2 m x 1.5 m' },
    { label: 'Weight', value: '450 kg' }
  ];

  return (
    <div className="tbf-page">

      {/* Enhanced Header with image */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Classifiers</h1>
              <p className="lead mt-3">
                Engineered for precise particle separation and high efficiency, our Classifiers are ideal for improving product quality across diverse industries.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={classifier} alt="Classifier Machine" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Intro Paragraph */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Classifiers provide reliable and efficient separation of particles by size, ensuring enhanced quality and consistent results in various industrial processes.
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
            For more information about our Classifiers or to request a quote, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>

    </div>
  );
};

export default Classifiers;
