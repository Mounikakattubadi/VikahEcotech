import React from 'react';
import { useEffect } from 'react';
import './AboutUs.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import partnerImage from './images/Tradefair/1.12.jpg';
import missionImage from './images/bands.jpeg';      

const AboutUs = () => {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
  return (
    <div className="about-us-page text-dark">
      {/* Top Gradient Section */}
      <div className="about-top-section text-white text-center py-5">
        <h1 className="display-5 fw-bold">About Us</h1>
        <p className="lead">Read more about us. Our vision, mission, success and many other you might love</p>
        <p><a href="/" className="text-white-50 text-decoration-none">Home</a> &gt; <span className="text-white">About</span></p>
      </div>

      <Container className="section-padding">
        {/* Who We Are */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={partnerImage} alt="Vikah Ecotech innovative recycling machinery" className="about-img" />
          </Col>
          <Col md={6}>
            <h2 className="section-heading">Who We Are</h2>
            <p className="about-section-text">
              <strong>Vikah Ecotech</strong> is a leading manufacturer of innovative and sustainable recycling machinery solutions.
              With a strong commitment to environmental sustainability and technological excellence, we aim to deliver top-tier
              machinery that empowers industries and communities to manage waste effectively and build a greener planet.
            </p>
          </Col>
        </Row>

        {/* Our Mission */}
        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={missionImage} alt="Vikah Ecotech mission for sustainable waste management" className="about-img" />
          </Col>
          <Col md={6}>
            <h2 className="section-heading">Our Mission</h2>
            <p className="about-section-text">
              We provide industry-leading recycling machinery that enhances efficiency, minimizes waste,
              and supports global environmental conservation. Our experienced team of engineers and technicians
              bring unmatched knowledge in the design and manufacturing of reliable recycling systems.
            </p>
          </Col>
        </Row>

        {/* Get in Touch */}
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
      </Container>
    </div>
  );
};

export default AboutUs;
