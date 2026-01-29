import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "../Balers/Baler.css";
import styles from "../pss.module.css";

// Images
// Tyre
import tyreshred1 from "../images/Applications/tyreshred1.jpg";
import tyreshred2 from "../images/Applications/tyreshred2.jpg";

// Plastic
import plasticbaler2 from "../images/Applications/plasticbaler2.jpg";
import plasticshred1 from "../images/Applications/plasticshred1.webp";

// Metal
import metalbaler1 from "../images/Applications/metalbaler1.jpg";
import metalshred1 from "../images/Applications/metalshred1.webp";

// Paper & Cardboard
import pcbshred1 from "../images/Applications/pcbshred1.jpg";
import pcbshred2 from "../images/Applications/pcbshred2.jpg";

// E-waste
import ewaste1 from "../images/Applications/ewaste.jpg";
import ewaste2 from "../images/Applications/ewaste2.webp";

// Hero images
import img1 from "../images/Applications/tyreshred1.jpg";
import img2 from "../images/Applications/ewaste.jpg";
import img3 from "../images/Applications/shredpcb6.jpg";
import img4 from "../images/Applications/metalbaler1.jpg";
import img5 from "../images/Applications/plas1.webp";
import { Helmet } from "react-helmet";

function Shredder() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Robust Construction",
      description:
        "Built with high-quality materials and advanced technology for durability and consistent performance.",
    },
    {
      title: "Versatile Shredding Options",
      description:
        "Available in  Dual-shaft models to handle a wide range of materials such as plastic, paper, cardboard, wood, metals, tyres, and more.",
    },
    {
      title: "High Efficiency",
      description:
        "Engineered for high-speed shredding with adjustable cutting mechanisms and automated controls for optimized material processing.",
    },
    {
      title: "Advanced Safety Features",
      description:
        "Includes emergency stop buttons, safety locks, PLC systems, and protective guards for safe operation.",
    },
    {
      title: "Easy Maintenance",
      description:
        "Designed with accessible components and user-friendly interfaces for simple cleaning and routine upkeep.",
    },
  ];

  const benefits = [
    {
      title: "Waste Volume Reduction",
      description:
        "Efficiently shreds materials into smaller pieces, making recycling and disposal easier and more cost-effective.",
    },
    {
      title: "Resource Recovery",
      description:
        "Enables effective recycling by producing uniform particles that support downstream recovery processes.",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Helps reduce landfill waste and conserves natural resources by supporting eco-friendly recycling practices.",
    },
    {
      title: "Operational Safety",
      description:
        "Prioritizes operator safety with comprehensive protective systems.",
    },
    {
      title: "User-Friendly Operation",
      description:
        "Features intuitive controls for a smooth shredding process with minimal operator effort.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Lowers operational costs by reducing waste volume and supporting material resale.",
    },
    {
      title: "Compliance Ready",
      description: "Manufactured to meet industry regulations and standards.",
    },
  ];

  // 🔹 Applications beside Key Features (timeline)
  const applicationAreas = [
    "Recycling Facilities",
    "Document Destruction Services",
    "E-Waste Recycling Centers",
    "Manufacturing Plants",
    "Waste-to-Energy Facilities",
  ];

  // 🔹 Product / machine applications (cards & carousel)
  const applications = [
    {
      name: "Tyre Shredder",
      route: "/tyreshredder",
      images: [tyreshred1, tyreshred2],
    },
    {
      name: "Metal Shredder",
      route: "/shm4000",
      images: [metalbaler1, metalshred1],
    },
    {
      name: "Plastic Shredder",
      route: "/plasticshredder",
      images: [plasticbaler2, plasticshred1],
    },
    {
      name: "Paper & Cardboard",
      route: "/papershredder",
      images: [pcbshred1, pcbshred2],
    },
    {
      name: "E-Waste Shredder",
      route: "/ewaste",
      images: [ewaste1, ewaste2],
    },
  ];

  // 🔹 Scroll to Applications section on same page
  const handleScrollToApplications = () => {
    const section = document.getElementById("shredder-applications-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="baler-page">
      <Helmet>
        <title>
          Primary Shredder Machine Manufacturer in India | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech is a leading manufacturer of primary shredder machines for tyre recycling, e-waste, metal, plastic, and paper waste processing in India. High-performance industrial shredders for reliable waste management."
        />

        <meta
          name="keywords"
          content="primary shredder, primary shredder machine, tyre shredder, metal shredder, plastic shredder, paper shredder, e-waste shredder, industrial shredder, waste shredder, shredder manufacturer india"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/primary-shredder"
        />
      </Helmet>

      {/* HERO CAROUSEL */}
      <div className={styles.heroWrapper}>
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
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
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="4"
            />
          </div>
          <div className="carousel-inner h-100">
            {/* Slide 1 – Tyre Shredders */}
            <div
              className={`carousel-item active ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className={styles.overlay}></div>

              {/* ⭐ TOP-CENTER MAIN HEADING */}
              <h2 className={styles.mainHeadingTop}>PRIMARY SHREDDERS</h2>

              <div className={styles.contentBox}>
                <h1 className={styles.heading}>Tyre Shredders</h1>

                <p className={styles.description}>
                  Heavy-duty shredders designed to break down tyres into uniform
                  pieces for efficient recycling.
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

            {/* Slide 2 – E-Waste Shredders */}
            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className={styles.overlay}></div>

              {/* ⭐ TOP-CENTER MAIN HEADING */}
              <h2 className={styles.mainHeadingTop}>PRIMARY SHREDDERS</h2>

              <div className={styles.contentBox}>
                <h1 className={styles.heading}>E-Waste Shredders</h1>

                <p className={styles.description}>
                  Powerful shredders built to process electronic waste safely
                  and prepare materials for recycling.
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

            {/* Slide 3 – Paper & Cardboard Shredders */}
            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className={styles.overlay}></div>

              {/* ⭐ TOP-CENTER MAIN HEADING */}
              <h2 className={styles.mainHeadingTop}>PRIMARY SHREDDERS</h2>

              <div className={styles.contentBox}>
                <h1 className={styles.heading}>Paper & Cardboard Shredders</h1>

                <p className={styles.description}>
                  Designed to shred bulk paper and cartons into manageable
                  particles for recycling workflows.
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

            {/* Slide 4 – Metal Shredders */}
            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className={styles.overlay}></div>

              {/* ⭐ TOP-CENTER MAIN HEADING */}
              <h2 className={styles.mainHeadingTop}>PRIMARY SHREDDERS</h2>

              <div className={styles.contentBox}>
                <h1 className={styles.heading}>Metal Shredders</h1>

                <p className={styles.description}>
                  High-torque shredders capable of reducing metal scrap into
                  smaller, recyclable fragments.
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

            {/* Slide 5 – Plastic Shredders */}
            <div
              className={`carousel-item ${styles.carouselItem}`}
              style={{ backgroundImage: `url(${img5})` }}
            >
              <div className={styles.overlay}></div>

              {/* ⭐ TOP-CENTER MAIN HEADING */}
              <h2 className={styles.mainHeadingTop}>PRIMARY SHREDDERS</h2>

              <div className={styles.contentBox}>
                <h1 className={styles.heading}>Plastic Shredders</h1>

                <p className={styles.description}>
                  Efficient shredders that break down plastic waste into uniform
                  pieces for further processing.
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

      {/* Features & Industries Served */}
      <section className="features-applications-section py-5 balerbackimg">
        <div className="container">
          <div className="row">
            {/* Key Features – Vertical Modern Timeline */}
            <div className="col-lg-6 mb-4">
              <h2 className="section-headingbaler mb-3">Key Features</h2>
              <p className="features-subtitle mb-4">
                Core capabilities that make our primary shredders reliable,
                efficient, and safe for intensive industrial use.
              </p>

              <div className="kf-vertical">
                {features.map((feature, idx) => (
                  <div className="kf-item" key={idx}>
                    {/* Left line + icon column */}
                    <div className="kf-icon-col">
                      {/* line */}
                      <span className="kf-line" />
                      {/* node */}
                      <div className="kf-node">
                        <span className="kf-node-inner">
                          <i className="bi bi-shield-lock" />
                        </span>
                      </div>
                    </div>

                    {/* Text content */}
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
            </div>

            {/* Applications – semi-circle timeline (use-case areas) */}
            <Col lg={6} className="mb-4">
              <div className="key-features-outer">
                <h2 className="key-features-title">Industries Served</h2>

                <div className="kf2-timeline">
                  {applicationAreas.map((label, idx) => {
                    const isLeftText = idx % 2 === 0; // alternate L/R
                    const stepNumber = String(idx + 1).padStart(2, "0");

                    return (
                      <div
                        key={idx}
                        className={`kf2-row ${isLeftText ? "left" : "right"}`}
                      >
                        {/* LEFT text */}
                        {isLeftText ? (
                          <div className="kf2-text">
                            <h6 className="kf2-text-title">{label}</h6>
                          </div>
                        ) : (
                          <div className="kf2-empty" />
                        )}

                        {/* Center circle + connector */}
                        <div className="kf2-center">
                          <span className="kf2-connector" />
                          <div className="kf2-circle-outer">
                            <div className="kf2-circle-inner">{stepNumber}</div>
                          </div>
                        </div>

                        {/* RIGHT text */}
                        {!isLeftText ? (
                          <div className="kf2-text">
                            <h6 className="kf2-text-title">{label}</h6>
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
          </div>
        </div>
      </section>

      {/* Benefits – Modern Card Grid */}
      <section className="py-5 benefits-wrapper">
        <div className="container">
          <h2 className="section-headingbaler text-center mb-4">
            Benefits of Using Our Primary Shredders
          </h2>
          <p className="benefits-subtitle text-center mb-5">
            Designed to optimize waste handling, reduce costs, and support
            sustainable operations across diverse industries.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div className="benefit-card" key={idx}>
                <div className="benefit-number">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="benefit-icon">
                  <i className="bi bi-recycle" />
                </div>

                <h5 className="benefit-title-modern">{benefit.title}</h5>
                <p className="benefit-desc-modern">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel Section – Applications (scroll target) */}
      <div
        className="products-section-bg py-5"
        id="shredder-applications-section" // 👈 scroll target
      >
        <div className="container text-center">
          <h2 className="green-heading mb-4">Applications</h2>
          <div className="row justify-content-center">
            {applications.map((app, idx) => (
              <div className="col-6 col-md-3 mb-4" key={idx}>
                <Link to={app.route}>
                  <Carousel
                    interval={null}
                    indicators={false}
                    controls={true}
                    pause={false}
                  >
                    {app.images.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={img}
                          alt={app.name}
                          className="product-img"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <div className="product-label">{app.name}</div>
                </Link>
              </div>
            ))}
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

export default Shredder;
