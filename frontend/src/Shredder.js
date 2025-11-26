import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./Baler.css";

// Images
// Tyre
import tyreshred1 from "./images/Applications/tyreshred1.jpg";
import tyreshred2 from "./images/Applications/tyreshred2.jpg";

// Plastic
import plasticbaler2 from "./images/Applications/plasticbaler2.jpg";
import plasticshred1 from "./images/Applications/plasticshred1.webp";

// Metal
import metalbaler1 from "./images/Applications/metalbaler1.jpg";
import metalshred1 from "./images/Applications/metalshred1.webp";

// Paper & Cardboard
import pcbshred1 from "./images/Applications/pcbshred1.jpg";
import pcbshred2 from "./images/Applications/pcbshred2.jpg";

// E-waste
import ewaste1 from "./images/Applications/ewaste.jpg";
import ewaste2 from "./images/Applications/ewaste2.webp";

function Shredder() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const features = [
    { title: "Robust Construction", description: "Built with high-quality materials and advanced technology for durability and consistent performance." },
    { title: "Versatile Shredding Options", description: "Available in single-shaft and dual-shaft models to handle a wide range of materials such as plastic, paper, cardboard, wood, metals, tyres, and more." },
    { title: "High Efficiency", description: "Engineered for high-speed shredding with adjustable cutting mechanisms and automated controls for optimized material processing." },
    { title: "Advanced Safety Features", description: "Includes emergency stop buttons, safety locks, PLC systems, and protective guards for safe operation." },
    { title: "Easy Maintenance", description: "Designed with accessible components and user-friendly interfaces for simple cleaning and routine upkeep." }
  ];

  const benefits = [
    { title: "Waste Volume Reduction", description: "Efficiently shreds materials into smaller pieces, making recycling and disposal easier and more cost-effective." },
    { title: "Resource Recovery", description: "Enables effective recycling by producing uniform particles that support downstream recovery processes." },
    { title: "Environmental Sustainability", description: "Helps reduce landfill waste and conserves natural resources by supporting eco-friendly recycling practices." },
    { title: "Operational Safety", description: "Prioritizes operator safety with comprehensive protective systems." },
    { title: "User-Friendly Operation", description: "Features intuitive controls for a smooth shredding process with minimal operator effort." },
    { title: "Cost Efficiency", description: "Lowers operational costs by reducing waste volume and supporting material resale." },
    { title: "Compliance Ready", description: "Manufactured to meet industry regulations and standards." }
  ];

  const applications = [
    {
      name: "Tyre Shredder",
      route: "/tyreshredder",
      images: [tyreshred1, tyreshred2]
    },
    {
      name: "Metal Shredder",
      route: "/metalshredder",
      images: [metalbaler1, metalshred1]
    },
    {
      name: "Plastic Shredder",
      route: "/plasticshredder",
      images: [plasticbaler2, plasticshred1]
    },
    {
      name: "Paper & Cardboard",
      route: "/papershredder",
      images: [pcbshred1, pcbshred2]
    },
    {
      name: "E-Waste Shredder",
      route: "/ewasteshredder",
      images: [ewaste1, ewaste2]
    }
  ];

  return (
    <div className="baler-page">
      <header className="baler-header text-white text-center py-5">
        <div className="container">
          <h1 className="shredder-heading-alt">Primary Shredders</h1>
        </div>
      </header>

      <div className="container text-center my-4">
        <p className="lead description-below-heading">
          At Vikah Ecotech, we provide high-performance shredders engineered for efficient material processing,
          waste reduction, and sustainable recycling operations.
        </p>
      </div>

      {/* Features & Applications */}
      <section className="features-applications-section py-5 balerbackimg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
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
            </div>

            <div className="col-lg-6">
              <h2 className="section-headingbaler mb-4">Applications</h2>
              <ul className="list-group list-group-flush app-list">
                <li className="list-group-item">Recycling Facilities</li>
                <li className="list-group-item">Document Destruction Services</li>
                <li className="list-group-item">E-Waste Recycling Centers</li>
                <li className="list-group-item">Manufacturing Plants</li>
                <li className="list-group-item">Waste-to-Energy Facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-headingbaler text-center mb-5">Benefits of Using Our Shredders</h2>
          <div className="row">
            {benefits.map((benefit, idx) => (
              <div className="col-md-6 mb-4" key={idx}>
                <div className="feature-item d-flex align-items-start">
                  <div className="feature-icon me-3">
                    <span className="badge bg-success rounded-circle p-2">
                      <i className="bi bi-star-fill text-white"></i>
                    </span>
                  </div>
                  <div className="feature-content">
                    <h5 className="feature-title mb-1">{benefit.title}</h5>
                    <p className="feature-desc mb-0">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <div className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading mb-4">Applications</h2>
          <div className="row justify-content-center">
            {applications.map((app, idx) => (
              <div className="col-6 col-md-3 mb-4" key={idx}>
                <Link to={app.route}>
                    <Carousel interval={2000} indicators={false} controls={true}>
                      {app.images.map((img, index) => (
                        <Carousel.Item key={index}>
                          <img
                            src={img}
                            alt={app.name}
                            className="product-img"
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
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

      {/* Contact Section */}
      <Row className="text-center get-in-touch-section text-white py-5 rounded">
        <Col>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            For more information about our products and services, please visit our{" "}
            <a href="#/ourproducts" className="fw-bold">product range</a> or reach us at{" "}
            <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a>.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Shredder;