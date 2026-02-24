import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import lion from '../images/Lion.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container fluid>
        <Row className="align-items-start text-center text-md-start">

          {/* Logo + Social */}
          <Col xs={12} md={2} className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
            <img src={lion} alt="Make in India" className="footer-logo mb-3" />
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1Mxsd16XWYMsvCyi/?mibextid=qi2Omg"><i className="fab fa-facebook facebook-icon"></i></a>
              <a href="https://www.youtube.com/@vikahecotech"><i className="fab fa-youtube youtube-icon"></i></a>
              <a href="https://www.instagram.com/vikahecotech/"><i className="fab fa-instagram instagram-icon"></i></a>
              <a href="https://x.com/vikahecotech"><i className="fab fa-twitter twitter-icon"></i></a>
            </div>
          </Col>

          {/* Navigation Links */}
          <Col xs={6} md={2} className="mb-3 mb-md-0">
            <h6 className="fw-bold">Navigation</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ourproducts">Our Products</Link></li>
              <li><Link to="/tradefairs">Trade Fairs</Link></li>
              <li><Link to="/enquire">Enquire Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/bloglandingpage">Blogs</Link></li>
            </ul>
          </Col>

          {/* Balers */}
          <Col xs={6} md={2} className="mb-3 mb-md-0 mx-0">
            <h6 className="fw-bold">Balers</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/balers">Balers</Link></li>
              <li><Link to="/tyre-scrap-balers">Tyre Scrap Balers</Link></li>
              <li><Link to="/plasticbaler">Plastic Balers</Link></li>
              <li><Link to="/pcb">PCB Balers</Link></li>
              <li><Link to="/metalbaler">Metal Balers</Link></li>
            </ul>
          </Col>

          {/* Primary Shredders */}
          <Col xs={6} md={2} className="mb-3 mb-md-0">
            <h6 className="fw-bold">Primary Shredders</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/primary-shredder">Primary Shredder</Link></li>
              <li><Link to="/tyreshredder">Tyre Shredder</Link></li>
              <li><Link to="/shm4000">Metal Shredder</Link></li>
              <li><Link to="/plasticshredder">Plastic Shredder</Link></li>
              <li><Link to="/papershredder">Paper Shredder</Link></li>
              <li><Link to="/ewaste">E-Waste Shredder</Link></li>
            </ul>
          </Col>

          {/* Secondary Shredders */}
          <Col xs={6} md={2} className="mb-3 mb-md-0">
            <h6 className="fw-bold">Secondary Shredders</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/secondary-shredder">Secondary Shredder</Link></li>
              <li><Link to="/rasper_secondaryshredders">Rasper</Link></li>
              <li><Link to="/secondarymetalshredder">Secondary Metal Shredder</Link></li>
              <li><Link to="/secondaryplasticshredder">Secondary Plastic Shredder</Link></li>
              <li><Link to="/secondarypcb">Secondary PCB Shredder</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={2} className="text-center text-md-start">
            <h6 className="fw-bold">Contact Us</h6>
            <p className='mt-3'><strong>Admin Off:</strong> #406, 4th Floor, Patel Towers, Above EasyBuy Beside Nagole RTO Office, Nagole Hyderabad, Telangana-500068</p>
            <p className='mt-3'><strong>Unit Add:</strong> Plot No - 81, Phase-III, Mahalaxmi Nagar, IDA Cherlapally, Rangareddy District, Hyderabad-500051</p>
            <p className='mt-3' ><strong>Off:</strong> +91 4049471616</p>
            <p className='mt-2'><strong>Email:</strong> Info@vikahecotech.com</p>
          </Col>

        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">Copyright © 2026 Vikah-Ecotech | All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;