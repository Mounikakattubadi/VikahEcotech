import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Baler.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import Balerimg from "./images/baler.png";
import Baler1 from "./images/baler1.png";
import Baler2 from "./images/baler2.png";

function Baler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Durable Construction', description: 'Built using robust materials and cutting-edge technology for long-term performance.' },
    { title: 'Versatile Design', description: 'Offers solutions for OCC, Paper, Plastic, Waste Tyres, Light Metal Scrap and more.' },
    { title: 'Efficiency and Productivity', description: 'Designed for high throughput to optimize processes and reduce labor costs.' },
    { title: 'Safety Features', description: 'Equipped with advanced safety features for secure operations.' },
    { title: 'User-Friendly Interface', description: 'Simple and intuitive controls for a smooth user experience.' },
    { title: 'Cost Savings', description: 'Lower disposal costs and potential revenue from compacted materials.' },
    { title: 'Environmental Sustainability', description: 'Reduces landfill waste and promotes conservation.' },
    { title: 'Compliance and Regulations', description: 'Meets industry standards and safety regulations.' }
  ];

  const applications = [
    'Recycling Centers',
    'Manufacturing Facilities',
    'Distribution Centers',
    'Retail Stores',
    'Hospitality Industry',
    'And more'
  ];

  return (
    <div className="baler-page">

      {/* Gradient-styled heading only */}
      <header className="baler-header text-white text-center py-5">
        <Container>
          <h1 className="shredder-heading-alt">Balers</h1>
        </Container>
      </header>

      {/* Paragraph in normal section, no gradient background */}
      <div className="container text-center my-4">
        <p className="lead description-below-heading">
          At Vikah Ecotech, we specialize in designing and manufacturing high-quality recycling balers machinery that is tailored to meet the diverse needs of industries and facilities involved in waste management and recycling processes. Our balers are engineered to streamline waste handling, increase operational efficiency, and promote sustainable practices.
        </p>
      </div>

      {/* Key Features and Applications */}
      <section className="features-applications-section py-5 balerbackimg">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <h2 className="section-headingbaler mb-4">Key Features</h2>
              <ul className="feature-list">
                {features.map((feature, idx) => (
                  <li key={idx} className="feature-item d-flex align-items-start mb-3">
                    <div className="feature-icon me-3">
                      <span className="badge bg-primary rounded-circle p-2">
                        <i className="bi bi-check-lg text-white"></i>
                      </span>
                    </div>
                    <div className="feature-content">
                      <h5 className="feature-title mb-1">{feature.title}</h5>
                      <p className="feature-desc mb-0">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6}>
              <h2 className="section-headingbaler mb-4">Applications</h2>
              <ul className="list-group list-group-flush app-list">
                {applications.map((app, idx) => (
                  <li key={idx} className="list-group-item">{app}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Cards */}
      <div className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading">Applications</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4">
              <Link to="/tyrescrapbaler">
                <div className="product-card">
                  <img src={Balerimg} alt="Industrial baler" className="product-img" />
                  <div className="product-label">Tyre Scrap Balers</div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <Link to="/plasticbaler">
                <div className="product-card">
                  <img src={Baler1} alt="Plastic baler" className="product-img" />
                  <div className="product-label">Plastic Balers</div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <Link to="/pcb">
                <div className="product-card">
                  <img src={Baler2} alt="Cardboard cutting equipment" className="product-img" />
                  <div className="product-label">Card Board</div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <Link to="/metalbaler">
                <div className="product-card">
                  <img src={Balerimg} alt="Metal baler" className="product-img" />
                  <div className="product-label">Metal Baler</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Row className="text-center get-in-touch-section text-white py-5 rounded">
        <Col>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            For more information about our products and services, please visit our{" "}
            <a href="/ourproducts" className="fw-bold">product range</a> or reach us at{" "}
            <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a>.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Baler;
