import React, { useEffect } from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Baler.css';
import './SecondaryShredder.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

// Image imports
import img2 from "./images/R1.png";
import shredderhd1 from "./images/shredder_hd1.jpg";
import shredderhdimg from "./images/R4.png";
import shredderhdimg1 from "./images/Shedder _ Final PNG.png";

import tyreshred2 from "./images/Applications/tyreshred2.jpg";
import sectyre from "./images/Applications/sectyre.jpg";

import metalshred1 from "./images/Applications/metalshred1.webp";
import secmetal from "./images/Applications/secmetal.webp";

import plasticshred1 from "./images/Applications/plasticshred1.webp";
import secplas from "./images/Applications/secplas.jpg";

import pcbshred1 from "./images/Applications/pcbshred1.jpg";
import secpcb from "./images/Applications/secpcb.webp";
import pcbshred2 from "./images/Applications/pcbshred2.jpg";
import styles from "./pss.module.css";

import img1 from "./images/Applications/tyreshred2.jpg";
import img22 from "./images/Applications/sectyre.jpg";
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
    { title: 'Easy Maintenance', description: 'Our Machineries is designed with easy maintenance in mind to ensure smooth operation, reduce downtime and extends the equipments lifespan.' },
    { title: 'Dust and Noise Control', description: 'Equipped with features to minimize dust and noise during operation.' },
    { title: 'Integration Ready', description: 'Easily integrates into existing tyre recycling systems.' }
  ];

 const applications = [
  'Feedstock for crumb rubber production.',
  'Tire-derived fuel (TDF).',
  'Rubber mulch or playground surfacing.',
  'Asphalt and road construction (rubberized asphalt).',
  'Shock-absorbing mats and sports track surfaces.',
  'Automotive parts and molded rubber products.',
  
];

  const applicationImages = {
    tyre: [tyreshred2, sectyre],
    metal: [metalshred1, secmetal],
    plastic: [plasticshred1, secplas],
    pcb: [pcbshred1, secpcb, pcbshred2]
  };

  const renderCarousel = (images) => (
    <div className="carousel-wrapper">
      <Carousel indicators={false} controls={true} interval={null} pause={false}>
        {images.map((imgSrc, idx) => (
          <Carousel.Item key={idx}>
            <img src={imgSrc} alt={`slide-${idx}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );


  return (
    <div className="baler-page">
      <div className={styles.heroWrapper}>
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="6000"
        >
          {/* Indicators */}
          <div className={`carousel-indicators ${styles.indicators}`}>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" />
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" />
          </div>

          <div className="carousel-inner h-100">
            <div
              className={`carousel-item active ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.contentBox}>
                <p className={styles.subText}>Engineered for Secondary Stage Shredding & Material Refinement</p>
                <h1 className={styles.heading}>Secondary Shedders</h1>
                <p className={styles.description}>
  The secondary shredder (tyre rasper) refines tyre chips from the primary shredder into smaller, uniform pieces for further granulation and industrial use.
</p>


                <div className={styles.btnRow}>
                  <button className={`btn ${styles.greenBtn}`}>
                    Explore Our Services ↗
                  </button>
                  <button className={`btn ${styles.whiteBtn}`}>More About Us</button>
                </div>
              </div>
            </div>

            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img22})` }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.contentBox}>
                <p className={styles.subText}>
Refining Shreds into High-Value Recyclable Material
</p>
<h1 className={styles.heading}>Secondary Shredders</h1>
<p className={styles.description}>
  Designed for precision processing, secondary shredders convert coarse tyre chips into clean, uniform material ready for granulation and resource recovery.
</p>


                <div className={styles.btnRow}>
                  <button className={`btn ${styles.greenBtn}`}>See Machines ↗</button>
                  <button className={`btn ${styles.whiteBtn}`}>Contact Sales</button>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow controls */}
          <button className={`carousel-control-prev ${styles.ctrl}`} type="button" data-bs-slide="prev" data-bs-target="#heroCarousel">
            <span className={styles.ctrlIcon}>‹</span>
          </button>

          <button className={`carousel-control-next ${styles.ctrl}`} type="button" data-bs-slide="next" data-bs-target="#heroCarousel">
            <span className={styles.ctrlIcon}>›</span>
          </button>
        </div>
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

            {/* NEW SEMI-CIRCLE TIMELINE FOR APPLICATIONS (RIGHT COLUMN) */}
            <Col lg={6} className="mb-4">
              <div className="key-features-outer">
                <h2 className="key-features-title">Industries Served</h2>

                <div className="kf2-timeline">
                  {applications.map((app, idx) => {
                    const isLeftText = idx % 2 === 0; // alternate L/R
                    const stepNumber = String(idx + 1).padStart(2, "0");

                    return (
                      <div
                        key={idx}
                        className={`kf2-row ${isLeftText ? "left" : "right"}`}
                      >
                        {/* LEFT column */}
                        {isLeftText ? (
                          <div className="kf2-text">
                            <h6 className="kf2-text-title">{app}</h6>
                          </div>
                        ) : (
                          <div className="kf2-empty" />
                        )}

                        {/* CENTER circle + connector */}
                        <div className="kf2-center">
                          <span className="kf2-connector" />
                          <div className="kf2-circle-outer">
                            <div className="kf2-circle-inner">
                              {stepNumber}
                            </div>
                          </div>
                        </div>

                        {/* RIGHT column */}
                        {!isLeftText ? (
                          <div className="kf2-text">
                            <h6 className="kf2-text-title">{app}</h6>
                          </div>
                        ) : (
                          <div className="kf2-empty" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Applications Cards with Carousel */}
      <div className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading mb-4">Applications</h2>
          <div className="row justify-content-center">

            {/* Tyre */}
            <div className="col-6 col-md-3 mb-4">
              <Link to="/rasper_secondaryshredders">
                {renderCarousel(applicationImages.tyre)}
                <div className="product-label">Secondary Shredder / Rasper</div>
                <div className="product-label">(Tyres)</div>
              </Link>
            </div>

            {/* Metal */}
            <div className="col-6 col-md-3 mb-4">
              <Link to="/secondarymetalshredder">
                {renderCarousel(applicationImages.metal)}
                <div className="product-label">Metal Shredder</div>
              </Link>
            </div>

            {/* Plastic */}
            <div className="col-6 col-md-3 mb-4">
              <Link to="/secondaryplasticshredder">
                {renderCarousel(applicationImages.plastic)}
                <div className="product-label">Plastic Shredder</div>
              </Link>
            </div>

            {/* Paper & Cardboard */}
            <div className="col-6 col-md-3 mb-4">
              <Link to="/secondarypcb">
                {renderCarousel(applicationImages.pcb)}
                <div className="product-label">Paper & Cardboard</div>
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
