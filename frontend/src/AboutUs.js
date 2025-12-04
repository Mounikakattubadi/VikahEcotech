import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

import Aboutcss from "./About.module.css";

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
    <div className={`${Aboutcss.aboutUsPage} text-dark`}>
      {/* Hero using module CSS */}
      <div className={Aboutcss.aboutWrapper}>
        <img
          src={t9}
          alt="Scenic sustainable background"
          className={Aboutcss.image}
        />
        <div className={Aboutcss.textOverlay}>
          <h1>About Us</h1>
          <p>
            Read more about our vision, mission, success and the engineering
            behind our recycling systems.
          </p>
        </div>
      </div>

      <Container className={Aboutcss.sectionPadding}>
        <Row className={`text-center mb-5 justify-content-center gap-3 ${Aboutcss.aboutStatsRow}`}>
  <Col xs={10} sm={6} md={3}>
    <div className={Aboutcss.aboutStatCard}>
      <i className={`fas fa-industry ${Aboutcss.aboutStatIcon}`} />
      <div className={Aboutcss.aboutStatValue}>10+ yrs</div>
      <div className={Aboutcss.aboutStatLabel}>Manufacturing Experience</div>
    </div>
  </Col>

  <Col xs={10} sm={6} md={3}>
    <div className={Aboutcss.aboutStatCard}>
      <i className={`fas fa-recycle ${Aboutcss.aboutStatIcon}`} />
      <div className={Aboutcss.aboutStatValue}>100+</div>
      <div className={Aboutcss.aboutStatLabel}>Recycling Installations</div>
    </div>
  </Col>

  <Col xs={10} sm={6} md={3}>
    <div className={Aboutcss.aboutStatCard}>
      <i className={`fas fa-globe-asia ${Aboutcss.aboutStatIcon}`} />
      <div className={Aboutcss.aboutStatValue}>15+</div>
      <div className={Aboutcss.aboutStatLabel}>Countries Served</div>
    </div>
  </Col>
</Row>


        {/* Who We Are */}
        <Row
          className={`align-items-center mb-5 ${Aboutcss.aboutSection}`}
        >
          <Col md={6} className="text-center mb-4 mb-md-0">
            <div className={Aboutcss.aboutImgWrapper}>
              <img
                src={grouppic}
                alt="Vikah Ecotech innovative recycling machinery"
                className={Aboutcss.aboutImg}
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 className={Aboutcss.sectionHeading}>Who We Are</h2>
            <p className={Aboutcss.aboutSectionText}>
              <strong>Vikah Ecotech</strong> is a leading manufacturer of
              innovative and sustainable recycling machinery solutions. We serve
              tyres, metals, plastics, paper, cardboard and e-waste applications
              with a strong focus on reliability and safety.
            </p>
            <p className={Aboutcss.aboutSectionText}>
              Our team brings together <strong>engineering depth</strong> and{" "}
              <strong>hands-on plant experience</strong> to design machines and
              complete lines that match real operating conditions – not just
              catalogue data.
            </p>
          </Col>
        </Row>

        {/* Our Mission – carousel + bullets */}
        <Row
          className={`align-items-center flex-md-row-reverse mb-5 ${Aboutcss.aboutSection}`}
        >
          {/* Carousel */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <div className={Aboutcss.aboutCarouselWrapper}>
              <Carousel
                className={Aboutcss.aboutCarousel}
                interval={2500}
                pause="hover"
                indicators
                controls
              >
                <Carousel.Item>
                  <img
                    src={Baler}
                    alt="Baler machine"
                    className={`${Aboutcss.aboutImg} d-block w-100`}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={shredderhdimg}
                    alt="Shredder machine"
                    className={`${Aboutcss.aboutImg} d-block w-100`}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={shred2}
                    alt="Recycling equipment"
                    className={`${Aboutcss.aboutImg} d-block w-100`}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>

          {/* Mission text */}
          <Col md={6}>
            <h2 className={Aboutcss.sectionHeading}>Our Mission</h2>
            <p className={Aboutcss.aboutSectionText}>
              We provide industry-leading recycling machinery that enhances
              efficiency, minimizes waste and supports long-term environmental
              goals.
            </p>
            <ul className={Aboutcss.aboutList}>
              <li>Design machines for 24/7 industrial operation</li>
              <li>Maximize recovery of rubber, metal, fiber and plastics</li>
              <li>Reduce manual handling and unplanned downtime</li>
              <li>Lower energy consumption and lifecycle costs</li>
            </ul>
            <p className={Aboutcss.aboutSectionText}>
              From concept and layout to commissioning and after-sales, our
              mission is to be a long-term partner in your recycling journey.
            </p>
          </Col>
        </Row>

        {/* Why Vikah Ecotech */}
        <Row className={`mb-5 ${Aboutcss.aboutSection}`}>
          <Col>
            <h2
              className={`${Aboutcss.sectionHeading} text-center mb-4`}
            >
              Why Vikah Ecotech?
            </h2>
          </Col>
        </Row>

        <Row className={`mb-5 ${Aboutcss.aboutFeaturesRow}`}>
          <Col md={4} className="mb-4">
            <div className={Aboutcss.aboutFeatureCard}>
              <div className={Aboutcss.aboutFeatureIcon}>
                <i className="fas fa-cogs" />
              </div>
              <h5>Engineering-led Design</h5>
              <p>
                In-house design team with a focus on realistic throughput,
                service access and long component life.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className={Aboutcss.aboutFeatureCard}>
              <div className={Aboutcss.aboutFeatureIcon}>
                <i className="fas fa-users-cog" />
              </div>
              <h5>End-to-End Support</h5>
              <p>
                Layout design, installation, training and after-sales support to
                keep your plant running at peak performance.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className={Aboutcss.aboutFeatureCard}>
              <div className={Aboutcss.aboutFeatureIcon}>
                <i className="fas fa-seedling" />
              </div>
              <h5>Sustainability First</h5>
              <p>
                Every project is aligned with waste-reduction, safer working
                conditions and circular economy principles.
              </p>
            </div>
          </Col>
        </Row>

        {/* Get in Touch */}
        <Row
          className={`text-center text-white py-5 rounded ${Aboutcss.getInTouchSection} ${Aboutcss.aboutSection}`}
        >
          <Col>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p>
              For more information about our products and services, visit our{" "}
              <Link
                to="/ourproducts"
                className={`fw-bold ${Aboutcss.getInTouchLink}`}
              >
                product range
              </Link>{" "}
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
