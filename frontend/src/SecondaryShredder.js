import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Baler.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from "./images/secondaryshredder1.jpg";
import img2 from "./images/secondaryshredder2.jpg";
import img3 from "./images/secondaryshredder3.jpg";
import shredderhd from "./images/st.jpeg";
import shredderhd1 from "./images/shredder_hd1.jpg";
import shredderhdimg from "./images/Shedder _ Final PNG.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SecondaryShredder.css';
import { Link } from "react-router-dom";

function SecondaryShredder() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    { title: 'Output Size', description: 'Reduces tyre chips to sizes as small as 23 mm.' },
    { title: 'Blades', description: 'Uses hardened steel blades for efficient, precise cutting.' },
    { title: 'Screening System', description: 'Built-in screens ensure uniform output size and quality.' },
    { title: 'Easy Maintenance', description: 'Our  Machineries is designed with easy maintenance in mind to ensure smooth operation, reduce  downtime and extends the equipments lifespan.' },
    { title: 'Dust and Noise Control', description: 'Equipped with features to minimize dust and noise during operation.' },
    { title: 'Integration Ready', description: 'Easily integrates into existing tyre recycling systems.' }
  ];


  const applications = [
    'Feedstock for crumb rubber production.',
    'Tire-derived fuel (TDF).',
    'Rubber mulch or playground surfacing.'
  ];

  return (
    <div className="baler-page">
      <header className="baler-header text-white text-center py-5" data-aos="fade-down">
        <Container>
          <h1 className="shredder-heading-alt">Secondary Shredder</h1>
        </Container>
      </header>

      <div className="container text-center my-4">
        <p className="lead description-below-heading">
          The secondary shredder, also known as a tyre rasper, is used in the second stage of the tyre recycling process. After the primary shredder breaks down whole tyres into rough chips (typically 50–150 mm or more), the secondary shredder further processes these chips into smaller, more uniform pieces. These refined pieces are often used for further granulation or in various industrial applications.
        </p>
      </div>

      <section className="features-applications-section py-5 balerbackimg" data-aos="fade-right">
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

      {/* Applications Cards Section (like Primary Shredder) */}
      <div className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading mb-4">Applications</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4">
              <Link to="/rasper">
                <div className="product-card">
                  <img src={img2} alt="Rasper" className="product-img" />
                  <div className="product-label">Secondary Shredder / Rasper</div>
                  <div className="product-label">(Tyres)</div>

                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <Link to="/secondarymetalshredder">
                <div className="product-card">
                  <img src={shredderhdimg} alt="Metal Shredder" className="product-img" />
                  <div className="product-label">Metal Shredder</div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <Link to="/secondaryplasticshredder">
                <div className="product-card">
                  <img src={shredderhdimg} alt="Plastic Shredder" className="product-img" />
                  <div className="product-label">Plastic Shredder</div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <Link to="/secondarypcb">
                <div className="product-card">
                  <img src={shredderhd1} alt="Paper and Cardboard" className="product-img" />
                  <div className="product-label">Paper & Cardboard</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Row className="text-center get-in-touch-section text-white py-5 rounded" data-aos="fade-up">
        <Col>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            Please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">info@vikahecotech.com</a>. Our CS team is ready to assist you and we can send our engineer within 48 hours.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default SecondaryShredder;
