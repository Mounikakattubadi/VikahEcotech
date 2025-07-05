import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const BlockCutter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'High Precision Cutting', description: 'Equipped with advanced cutting technology to ensure accurate and clean cuts.' },
    { title: 'Versatile Applications', description: 'Suitable for cutting various materials including concrete, stone, and bricks.' },
    { title: 'Durable Construction', description: 'Built with high-quality materials to withstand rigorous industrial use.' },
    { title: 'User-Friendly Operation', description: 'Designed for ease of use, reducing operator training time.' },
    { title: 'Safety Features', description: 'Incorporates safety mechanisms to protect operators during operation.' },
    { title: 'Low Maintenance', description: 'Features a simple design that requires minimal maintenance, ensuring long-term reliability.' },
    { title: 'Energy Efficient', description: 'Operates with low power consumption, reducing operational costs.' },
    { title: 'Compact Design', description: 'Space-saving design suitable for various workshop sizes.' }
  ];

  const applications = [
    'Construction Industry',
    'Masonry Work',
    'Landscaping Projects',
    'Road Construction',
    'Building Renovations',
    'Brick and Stone Cutting',
    'Paving Stone Production',
  ];

  return (
    <div className="tbf-page">

      {/* Header (gradient) */}
      <header className="tbf-header text-white text-center py-5">
        <Container>
          <h1 className="tbf-heading">Block Cutter</h1>
        </Container>
      </header>

      {/* Intro Paragraph */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Block Cutter machines are engineered to provide precise and efficient cutting solutions for various materials,
          enhancing productivity and ensuring high-quality results in construction and masonry applications.
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
            For more information about our Block Cutter machines or to request a quote, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default BlockCutter;
