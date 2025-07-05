import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const StripCutter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Precision Cutting', description: 'Designed to deliver clean and accurate cuts for various strip materials.' },
    { title: 'Heavy-Duty Construction', description: 'Built with robust components to withstand continuous industrial use.' },
    { title: 'Adjustable Cutting Lengths', description: 'Easily adjustable settings to accommodate different strip sizes and thicknesses.' },
    { title: 'User-Friendly Controls', description: 'Intuitive interface for smooth operation and minimal training required.' },
    { title: 'Low Maintenance', description: 'Simple design for easy cleaning and maintenance, reducing downtime.' },
    { title: 'Safety Mechanisms', description: 'Equipped with safety guards and emergency stops to protect operators.' },
    { title: 'High Throughput', description: 'Capable of processing large volumes efficiently to meet production demands.' },
    { title: 'Versatile Applications', description: 'Suitable for cutting strips in recycling, manufacturing, and packaging industries.' }
  ];

  const applications = [
    'Recycling Facilities',
    'Manufacturing Plants',
    'Packaging Industry',
    'Metal Processing',
    'Plastic Processing',
    'Waste Management',
  ];

  return (
    <div className="tbf-page">

      {/* Header (gradient) */}
      <header className="tbf-header text-white text-center py-5">
        <Container>
          <h1 className="tbf-heading">Strip Cutter</h1>
        </Container>
      </header>

      {/* Intro Paragraph */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Strip Cutter offers precise and efficient cutting solutions for various industrial strip materials, enhancing productivity and product quality.
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
            For more information about our Strip Cutter, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default StripCutter;
