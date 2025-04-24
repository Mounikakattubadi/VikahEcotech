import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import lion from './images/Lion.png'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="footer-section bg-black text-white pt-5 pb-3">
      <Container>
        <Row className="align-items-start">
          {/* Logo and Social Media */}
          <Col md={4} className="text-center mb-4">
            <img
              src={lion}
              alt="Make in India"
              className="footer-logo mb-3"
            />
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1Mxsd16XWYMsvCyi/?mibextid=qi2Omg"><i className="fab fa-facebook facebook-icon mx-2 fs-4"></i></a>
              <a href="https://www.youtube.com/@vikahecotech"><i className="fab fa-youtube youtube-icon mx-2 fs-4"></i></a>
              <a href="https://www.instagram.com/vikahecotech/"><i className="fab fa-instagram instagram-icon mx-2 fs-4"></i></a>
              <a href="https://x.com/vikahecotech"><i className="fab fa-twitter twitter-icon mx-2 fs-4"></i></a>
            </div>
          </Col>

          {/* Navigation Links */}
          <Col md={4} className="mb-4 text-center text-md-start">
          <ul className="list-unstyled footer-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/ourproducts">Products</Link></li>
  <li><Link to="/tradefairs">Trade Fairs</Link></li>
  <li><Link to="/enquire">Enquire Us</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
</ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="text-md-start text-center">
            <h5>Contact Us</h5>
            <p><strong>Admin Off:</strong> #406, 4th Floor, Patel Towers, Above EasyBuy Beside Nagole RTO Office, Nagole Hyderabad, Telangana-500068</p>
            <p><strong>Unit Add:</strong> Plot No - 81, Phase-III, Mahalaxmi Nagar, IDA Cherlapally, Rangareddy District, Hyderabad-500051</p>
            <p><strong>Off:</strong> +91 4049471616</p>
            <p><strong>Email:</strong> Info@vikahecotech.com</p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4">
            <p className="mb-0">
              Copyright © 2023 Vikah-Ecotech |
              All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
