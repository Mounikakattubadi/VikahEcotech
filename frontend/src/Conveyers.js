import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Conveyers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Durable Construction', description: 'Made from high-quality materials for long-lasting performance in tough environments.' },
    { title: 'Versatile Designs', description: 'Suitable for feeding and discharging a wide range of materials across industries.' },
    { title: 'Efficient Material Handling', description: 'Optimizes throughput and minimizes material spillage for smooth operation.' },
    { title: 'Customizable Length & Speed', description: 'Easily adjustable to meet specific process requirements.' },
    { title: 'Energy Efficient Motors', description: 'Equipped with low power consumption drives to reduce operational costs.' },
    { title: 'Low Maintenance', description: 'Simple design reduces downtime and maintenance needs.' },
    { title: 'Safety Features', description: 'Includes protective guards and emergency stop systems for operator safety.' },
    { title: 'Easy Integration', description: 'Seamlessly integrates with existing processing lines and machinery.' }
  ];

  const applications = [
    'Recycling Centers',
    'Manufacturing Plants',
    'Food Processing Facilities',
    'Packaging Lines',
    'Mining Operations',
    'Warehousing & Distribution',
  ];

  return (
    <div className="tbf-page">

      {/* Header (gradient) with ONLY heading */}
      <header className="tbf-header text-white text-center py-5">
        <Container>
          <h1 className="tbf-heading">Feeding & Discharge Conveyers</h1>
        </Container>
      </header>

      {/* Below header centered paragraph (old style) */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Feeding & Discharge Conveyers are designed to efficiently move materials through your production or recycling line, improving productivity and reliability.
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
            For more information about our Feeding & Discharge Conveyers, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Conveyers;
