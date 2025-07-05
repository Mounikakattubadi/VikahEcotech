import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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

  return (
    <div className="tbf-page">

      {/* Header (gradient) */}
      <header className="tbf-header text-white text-center py-5">
        <Container>
          <h1 className="tbf-heading">Beadwire Remover</h1>
        </Container>
      </header>

      {/* Intro Paragraph (old style) */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Beadwire Remover machines are engineered to efficiently extract steel bead wires from waste tires,
          facilitating the recycling process and enhancing material recovery rates.
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
            For more information about our Beadwire Remover machines or to request a quote, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default BeadwireRemover;
