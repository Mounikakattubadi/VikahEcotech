import React, { useEffect } from "react";
import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Aboutcss from './About.module.css';
// Images
import t9 from "./images/eco sustain 2025/images/abtbgve.png";
import grouppic from "./images/eco sustain 2025/images/ecosust_15.jpg";
import Baler from "./images/baler_bg.png";
import shredderhdimg from "./images/Shedder _ Final PNG.png";
import shred2 from "./images/R3.jpg";

const AboutUs = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="about-us-page text-dark">
      {/* Top Gradient Section */}
           <div className={Aboutcss.aboutWrapper}>
             <img src={t9} alt="Scenic view of nature" className={Aboutcss.image} />
              <div className={Aboutcss.textOverlay}>
               <h1>About Us</h1>
               <p>Read more about us. Our vision, mission, success and many other things you might love.</p>
             </div>
           </div>

      <Container className="section-padding">
        {/* Who We Are – keep first image as it is */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={grouppic}
              alt="Vikah Ecotech innovative recycling machinery"
              className="about-img"
            />
          </Col>
          <Col md={6}>
            <h2 className="section-heading">Who We Are</h2>
            <p className="about-section-text">
              <strong>Vikah Ecotech</strong> is a leading manufacturer of
              innovative and sustainable recycling machinery solutions. With a
              strong commitment to environmental sustainability and
              technological excellence, we aim to deliver top-tier machinery
              that empowers industries and communities to manage waste
              effectively and build a greener planet.
            </p>
          </Col>
        </Row>

        {/* Our Mission – carousel instead of static image */}
        <Row className="align-items-center flex-md-row-reverse mb-5">
          {/* LEFT on desktop (because of flex-md-row-reverse) */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Carousel
              className="about-carousel"
              interval={2500}
              pause="hover"
              indicators
              controls
            >
              <Carousel.Item>
                <img
                  src={Baler}
                  alt="Baler machine"
                  className="about-img d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={shredderhdimg}
                  alt="Shredder machine"
                  className="about-img d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={shred2}
                  alt="Recycling equipment"
                  className="about-img d-block w-100"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* RIGHT text */}
          <Col md={6}>
            <h2 className="section-heading">Our Mission</h2>
            <p className="about-section-text">
              We provide industry-leading recycling machinery that enhances
              efficiency, minimizes waste, and supports global environmental
              conservation. Our experienced team of engineers and technicians
              brings unmatched knowledge in the design and manufacturing of
              reliable recycling systems that help shape a sustainable future.
            </p>
          </Col>
        </Row>

        {/* Get in Touch (same as your current layout) */}
        <Row className="text-center get-in-touch-section text-white py-5 rounded">
          <Col>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p>
              For more information about our products and services, please visit
              our{" "}
              <a href="#/ourproducts" className="fw-bold">
                product range
              </a>{" "}
              or reach us at{" "}
              <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
