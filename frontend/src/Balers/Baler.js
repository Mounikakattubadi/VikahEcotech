import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Baler.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

// Original product card images
import Balerimg from "../images/baler8.jpg";

// Carousel Images
// Tyre Scrap Baler
import TyreBaler1 from "../images/Applications/tyrebaler1.webp";
import TyreBaler2 from "../images/Applications/tyrebaler2.webp";

// Plastic Baler
import PlasticBaler1 from "../images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "../images/Applications/plasticbaler2.jpg";

// Cardboard
import PCB1 from "../images/Applications/pcb1.webp";
import PCB2 from "../images/Applications/pcb2.jpg";
import PCB3 from "../images/Applications/pcb3.webp";

// Metal
import MetalBaler1 from "../images/Applications/metalbaler1.jpg";
import MetalBaler2 from "../images/Applications/metalbaler2.jpg";

import styles from "./pss.module.css";

import img1 from "../images/Applications/tyreshred1.jpg";
import img2 from "../images/Applications/plas13.webp";
import img3 from "../images/Applications/metalbaler2.jpg";
import img4 from "../images/Applications/pcb1.webp";
import { Helmet } from "react-helmet";

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
      description:
        "Simple and intuitive controls for a smooth user experience.",
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

  // 🔹 Scroll to Applications section on the same page
  const handleScrollToApplications = () => {
    const section = document.getElementById("baler-applications-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="baler-page">
      <Helmet>
        {/* ===== BASIC SEO ===== */}
        <title>
          Industrial Baler Machines in India | Tyre, Plastic, Metal & Paper Balers | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech Pvt Ltd manufactures industrial baler machines in Hyderabad, India. Explore tyre scrap balers, plastic balers, metal balers, and paper & cardboard balers for efficient recycling."
        />

        <meta
          name="keywords"
          content="industrial baler machine, tyre scrap baler, plastic baler machine, metal baler, paper baler, cardboard baler, recycling machinery, baler manufacturer India, balers Hyderabad"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link rel="canonical" href="https://vikahecotech.com/balers" />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Industrial Baler Machines | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="Manufacturer of tyre, plastic, metal and paper/cardboard baler machines in India for recycling industries."
        />
        <meta property="og:url" content="https://vikahecotech.com/balers" />
        <meta
          property="og:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industrial Baler Machines | Vikah Ecotech"
        />
        <meta
          name="twitter:description"
          content="Tyre, plastic, metal and paper/cardboard baler machines manufacturer in India."
        />
        <meta
          name="twitter:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== LOCAL BUSINESS SCHEMA ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vikah Ecotech Pvt Ltd",
      "image": "https://vikahecotech.com/logo_vk.png",
      "url": "https://vikahecotech.com",
      "telephone": "+91-4049471616",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "406, 4th Floor, Patel Towers, Above EasyBuy, Beside Nagole RTO Office, Nagole",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500068",
        "addressCountry": "IN"
      },
      "areaServed": "India"
    }
    `}
        </script>

        {/* ===== ORGANIZATION SCHEMA ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Vikah Ecotech Pvt Ltd",
      "url": "https://vikahecotech.com",
      "logo": "https://vikahecotech.com/logo_vk.png"
    }
    `}
        </script>

        {/* ===== ITEM LIST SCHEMA FOR ALL BALERS WITH LINKS ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Industrial Baler Machines",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Tyre Scrap Balers",
          "url": "https://vikahecotech.com/tyre-scrap-balers"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Plastic Balers",
          "url": "https://vikahecotech.com/plasticbaler"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Paper and Cardboard Balers",
          "url": "https://vikahecotech.com/pcb"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Metal Balers",
          "url": "https://vikahecotech.com/metalbaler"
        }
      ]
    }
    `}
        </script>

        {/* ===== BREADCRUMB SCHEMA ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vikahecotech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Balers",
          "item": "https://vikahecotech.com/balers"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      {/* HERO CAROUSEL */}
      <div className={styles.heroWrapper}>
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="6000"
        >
          {/* Indicators */}
          <div className={`carousel-indicators ${styles.indicators}`}>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="3"
            />
          </div>
          <div className="carousel-inner h-100">
            {/* Slide 1 */}
            <div
              className={`carousel-item active ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.contentBox}>
                <p className={styles.subText}>
                  Our Balers turns Waste into Value through Smart Baling
                  Technology
                </p>
                <h1 className={styles.heading}>Tyre Scrap Balers</h1>

                <p className={styles.description}>
                  Heavy-duty balers designed to compress used tyres into compact
                  bales, saving space and improving recycling efficiency.
                </p>

                <div className={styles.btnRow}>
                  <button
                    className={`btn ${styles.greenBtn}`}
                    onClick={handleScrollToApplications}
                  >
                    Explore Our Services ↗
                  </button>
                  <Link to="/ourproducts" className={`btn ${styles.whiteBtn}`}>
                    More Our Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.contentBox}>
                <p className={styles.subText}>
                  Efficient Compaction. Cleaner Operations.
                </p>
                <h1 className={styles.heading}>Plastic Balers</h1>

                <p className={styles.description}>
                  Compact all types of plastic waste into dense, stackable
                  bales—reducing volume and improving handling.
                </p>

                <div className={styles.btnRow}>
                  <button
                    className={`btn ${styles.greenBtn}`}
                    onClick={handleScrollToApplications}
                  >
                    See Machines ↗
                  </button>
                  <Link to="/Contact" className={`btn ${styles.whiteBtn}`}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.contentBox}>
                <h1 className={styles.heading}>Metal Balers</h1>

                <p className={styles.description}>
                  High-power balers that compress ferrous and non-ferrous metal
                  scrap into solid, transport-ready bales.
                </p>

                <div className={styles.btnRow}>
                  <button
                    className={`btn ${styles.greenBtn}`}
                    onClick={handleScrollToApplications}
                  >
                    See Machines ↗
                  </button>
                  <Link to="/Contact" className={`btn ${styles.whiteBtn}`}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.contentBox}>
                <h1 className={styles.heading}>Paper & Cardboard Balers</h1>

                <p className={styles.description}>
                  Efficiently compress paper waste and cartons into clean,
                  uniform bales for easy storage and recycling.
                </p>

                <div className={styles.btnRow}>
                  <button
                    className={`btn ${styles.greenBtn}`}
                    onClick={handleScrollToApplications}
                  >
                    See Machines ↗
                  </button>
                  <Link to="/Contact" className={`btn ${styles.whiteBtn}`}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow controls */}
          <button
            className={`carousel-control-prev ${styles.ctrl}`}
            type="button"
            data-bs-slide="prev"
            data-bs-target="#heroCarousel"
          >
            <span className={styles.ctrlIcon}>‹</span>
          </button>

          <button
            className={`carousel-control-next ${styles.ctrl}`}
            type="button"
            data-bs-slide="next"
            data-bs-target="#heroCarousel"
          >
            <span className={styles.ctrlIcon}>›</span>
          </button>
        </div>
      </div>
      {/* Features + Industries Served */}
      <section className="features-applications-section py-5 balerbackimg">
        <Container>
          <Row>
            {/* Key Features – Vertical Modern Timeline */}
            <Col lg={6} className="mb-4">
              <h2 className="section-headingbaler mb-3">Key Features</h2>
              <p className="features-subtitle mb-4">
                Core features that make our balers robust, efficient, and ideal
                for high-volume waste handling and recycling operations.
              </p>

              <div className="kf-vertical">
                {features.map((feature, idx) => (
                  <div className="kf-item" key={idx}>
                    {/* Left line + icon */}
                    <div className="kf-icon-col">
                      <span className="kf-line" />
                      <div className="kf-node">
                        <span className="kf-node-inner">
                          <i className="bi bi-gear-fill" />
                        </span>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="kf-content">
                      <div className="kf-label">
                        FEATURE {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h5 className="kf-title">{feature.title}</h5>
                      <p className="kf-desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            {/* Industries Served – Timeline */}
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
                            <div className="kf2-circle-inner">{stepNumber}</div>
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
      {/* Products with Carousel – Applications Section */}
      <div
        className="products-section-bg py-5"
        id="baler-applications-section" // 👈 target for scroll
      >
        <div className="container text-center">
          <h2 className="green-heading">Applications</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/tyre-scrap-balers">
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
                <div className="product-label mt-2">
                  Paper and Card Board Baler
                </div>
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
      {/* Contact Section 
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
      </Row>*/}
    </div>
  );
}

export default Baler;
