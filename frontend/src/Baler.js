import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Baler.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

// Original product card images
import Balerimg from "./images/baler8.jpg";
import Baler1 from "./images/baler1.png";
import Baler2 from "./images/baler2.png";

// Carousel Images
// Tyre Scrap Baler
import TyreBaler1 from "./images/Applications/tyrebaler1.webp";
import TyreBaler2 from "./images/Applications/tyrebaler2.webp";

// Plastic Baler
import PlasticBaler1 from "./images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "./images/Applications/plasticbaler2.jpg";

// Cardboard
import PCB1 from "./images/Applications/pcb1.webp";
import PCB2 from "./images/Applications/pcb2.jpg";
import PCB3 from "./images/Applications/pcb3.webp";

// Metal
import MetalBaler1 from "./images/Applications/metalbaler1.jpg";
import MetalBaler2 from "./images/Applications/metalbaler2.jpg";
import styles from "./pss.module.css";

import img1 from "./images/Applications/tyreshred1.jpg";
import img2 from "./images/Applications/pss1.png";

function Baler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Durable Construction",
      description:
        "Built using robust materials and cutting-edge technology for long-term performance.",
    },
    {
      title: "Versatile Design",
      description:
        "Offers solutions for OCC, Paper, Plastic, Waste Tyres, Light Metal Scrap and more.",
    },
    {
      title: "Efficiency and Productivity",
      description:
        "Designed for high throughput to optimize processes and reduce labor costs.",
    },
    {
      title: "Safety Features",
      description:
        "Equipped with advanced safety features for secure operations.",
    },
    {
      title: "User-Friendly Interface",
      description: "Simple and intuitive controls for a smooth user experience.",
    },
    {
      title: "Cost Savings",
      description:
        "Lower disposal costs and potential revenue from compacted materials.",
    },
    {
      title: "Environmental Sustainability",
      description: "Reduces landfill waste and promotes conservation.",
    },
    {
      title: "Compliance and Regulations",
      description: "Meets industry standards and safety regulations.",
    },
  ];

  const applications = [
    "Recycling Centers",
    "Manufacturing Facilities",
    "Distribution Centers",
    "Retail Stores",
    "Hospitality Industry",
    "Warehouses & Logistics",
    "Municipal Waste Facilities",
    "And more",
  ];

  const productCarousels = {
    tyrescrapbaler: [Balerimg, TyreBaler1, TyreBaler2],
    plasticbaler: [PlasticBaler1, PlasticBaler2],
    pcb: [PCB1, PCB2, PCB3],
    metalbaler: [MetalBaler1, MetalBaler2],
  };

  const renderCarousel = (images) => (
    <div className="carousel-wrapper">
      <Carousel interval={null} pause={false}>
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img className="carousel-img" src={img} alt={`slide-${idx}`} />
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
              <p className={styles.subText}>Turning Waste into Value through Smart Baling Technology</p>
              <h1 className={styles.heading}>Balers</h1>
              <p className={styles.description}>
                At Vikah Ecotech, we specialize in designing and manufacturing high-quality recycling balers machinery that is tailored to meet the diverse needs of industries 
                and facilities involved in waste management and recycling processes. Our balers are engineered to streamline waste handling, increase operational efficiency, and 
                promote sustainable practices.
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
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className={styles.overlay}></div>

            <div className={styles.contentBox}>
              <p className={styles.subText}>Efficient Compaction. Cleaner Operations.</p>
<h1 className={styles.heading}>Balers</h1>
<p className={styles.description}>
  Our balers compact recyclable materials like cardboard, plastic, metal, and paper into dense, stackable bales—reducing waste volume, saving space, and improving handling efficiency.
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

      <section className="features-applications-section py-5 balerbackimg">
        <Container>
          <Row>
            {/* OLD STYLE FOR KEY FEATURES (LEFT COLUMN) */}
            <Col lg={6} className="mb-4">
              <h2 className="section-headingbaler mb-4">Key Features</h2>
              <ul className="feature-list">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="feature-item d-flex align-items-start mb-3"
                  >
                    <div className="feature-icon me-3">
                      <span className="badge bg-primary rounded-circle p-2">
                        <i className="bi bi-check-lg text-white"></i>
                      </span>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title mb-1">{feature.title}</h6>
                      <p className="feature-desc mb-0">
                        {feature.description}
                      </p>
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

      {/* Products with Carousel */}
      <div className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading">Applications</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/tyrescrapbaler">
                {renderCarousel(productCarousels.tyrescrapbaler)}
                <div className="product-label mt-2">Tyre Scrap Balers</div>
              </Link>
            </div>

            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/plasticbaler">
                {renderCarousel(productCarousels.plasticbaler)}
                <div className="product-label mt-2">Plastic Balers</div>
              </Link>
            </div>

            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/pcb">
                {renderCarousel(productCarousels.pcb)}
                <div className="product-label mt-2">Card Board</div>
              </Link>
            </div>

            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/metalbaler">
                {renderCarousel(productCarousels.metalbaler)}
                <div className="product-label mt-2">Metal Baler</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default Baler;
