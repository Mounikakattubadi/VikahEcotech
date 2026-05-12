import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../OtherEqp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dustcollector from "../../images/Machinery images/DustCollector.png";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import RelatedEquipments from "./RelatedEquipments";

const DustCollector = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "High Dust Removal Efficiency", description: "Captures fine and coarse dust particles effectively from industrial processes." },
    { title: "Improved Air Quality", description: "Ensures cleaner working environment by reducing airborne pollutants." },
    { title: "Energy Efficient Operation", description: "Optimized design reduces power consumption while maintaining high suction performance." },
    { title: "Heavy Duty Construction", description: "Built for continuous industrial usage with durable components." },
    { title: "Low Maintenance System", description: "Easy filter cleaning and replacement system reduces downtime." },
    { title: "Multi-Industry Usage", description: "Suitable for recycling, cement, rubber, plastic, and manufacturing industries." },
    { title: "Compact Design", description: "Space-efficient structure for easy installation in existing plants." },
    { title: "Safety Compliant", description: "Designed with industrial safety standards to protect operators and machinery." }
  ];

  const applications = [
    "Rubber Recycling Plants",
    "Plastic Processing Units",
    "Cement Industries",
    "Metal Grinding Units",
    "Wood Processing Industries"
  ];

  const specs = [
    { label: "Air Flow Capacity", value: "Up to 10,000 m³/hr" },
    { label: "Filtration Efficiency", value: "99% up to 5 microns" },
    { label: "Power Consumption", value: "7.5 kW" },
    { label: "Dust Storage Capacity", value: "200 Liters" },
    { label: "Weight", value: "600 kg" }
  ];

  return (
    <div className="tbf-page">

      <SEOHelmet
        title="Dust Collector Manufacturer in India"
        description="Vikah Ecotech offers high-efficiency Dust Collectors for industrial applications ensuring clean air and safe working environments."
        keywords="Dust Collector, industrial dust collector, air filtration system, dust extraction unit"
        canonical="https://vikahecotech.com/dust-collector"
      />

      {/* Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="tbf-heading display-5 fw-bold">Dust Collector</h1>
              <p className="lead mt-3">
                High-efficiency Dust Collector systems designed to capture airborne dust particles
                generated during industrial processing. Ensures clean air, safe working conditions,
                and improved machine performance in recycling and manufacturing plants.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={dustcollector} alt="Dust Collector" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Specs */}
      <div className="specs-box shadow">
        <h5 className="fw-bold mb-3">Technical Overview</h5>
        <ul className="list-unstyled mb-0">
          {specs.map((item, idx) => (
            <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
          ))}
        </ul>
      </div>

      {/* Features */}
      <section className="tbf-section">
        <Container>
          <h2 className="section-title text-center mb-5">Key Features</h2>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card shadow-sm">
                <i className="bi bi-wind"></i>
                <h5>{f.title}</h5>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="tbf-section">
        <Container>
          <h2 className="section-title text-center mb-5">Applications</h2>
          <div className="applications-grid">
            {applications.map((a, i) => (
              <div key={i} className="application-card shadow-sm">
                <i className="bi bi-funnel"></i>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <RelatedEquipments current="/dust-collector" />

      <section className="tbf-contact-section text-white text-center py-5 m-5">
        <Container>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            Contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">
              info@vikahecotech.com
            </a>
          </p>
        </Container>
      </section>

    </div>
  );
};

export default DustCollector;