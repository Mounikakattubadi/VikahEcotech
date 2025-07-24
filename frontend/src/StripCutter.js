import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import stripcutter from './images/stripcutter1.png'; // Ensure this path is correct

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

  const specs = [
    { label: 'Strip Width', value: '2–6 cm (adjustable)' },
    { label: 'Motor Power', value: '10 HP' },
    { label: 'Capacity', value: '1 TON/Hour' },
    { label: 'Tyre Diameter Compatibility', value: 'Up to 1200 mm' },
    { label: 'Machine Size (L x W x H)', value: '1.5 M x 1.0 M x 1.2 M' },
    { label: 'Weight', value: '800–850 kg' }
  ];

  return (
    <div className="tbf-page">

      {/* Enhanced Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Strip Cutter</h1>
              <p className="lead mt-3">
                Industrial-grade precision cutting solution for rubber and plastic strips with heavy-duty performance and robust design.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={stripcutter} alt="Strip Cutter Machine" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Intro Paragraph */}
      <div className="tbf-intro container text-center my-4">
        <p className="lead">
          Our Strip Cutter offers precise and efficient cutting solutions for various industrial strip materials, enhancing productivity and product quality.
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
            For more information about our Strip Cutter, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default StripCutter;
