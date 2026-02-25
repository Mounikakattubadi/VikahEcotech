import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import '../OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import fdconveyer from "../../images/fdconveyer.png";
import RelatedEquipments from "./RelatedEquipments";

const Conveyers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Durable Construction', description: 'Made from high-quality materials for long-lasting performance in tough environments.' },
    { title: 'Versatile Designs', description: 'Suitable for feeding and discharging a wide range of materials across industries.' },
    { title: 'Efficient Material Handling', description: 'Optimizes throughput and minimizes material spillage for smooth operation.' },
    { title: 'Customizable Length & Speed', description: 'Easily adjustable to meet specific process requirements.' },
    { title: 'Energy Efficient Motors', description: 'Equipped with low power consumption drives to reduce operational costs.' },
    { title: 'Low Maintenance', description: 'Simple design reduces downtime and maintenance needs.' },
    { title: 'Safety Features', description: 'Includes protective guards and emergency stop systems for operator safety.' },
    { title: 'Easy Integration', description: 'Seamlessly integrates with existing processing lines and machinery.' }
  ];

  const applications = [
    'Recycling Centers',
    'Manufacturing Plants',
    'Food Processing Facilities',
    'Packaging Lines',
    'Mining Operations',
    'Warehousing & Distribution',
  ];

  const specs = [
    { label: 'Conveyor Length', value: 'Customizable (up to 30 meters)' },
    { label: 'Belt Width', value: '0.5m – 2.0m' },
    { label: 'Motor Power', value: '0.5 – 5 HP' },
    { label: 'Speed Range', value: '0.5 – 3 m/s' },
    { label: 'Material Compatibility', value: 'Bulk solids, recyclables, packaged goods' },
    { label: 'Frame Material', value: 'Carbon steel with protective coating' }
  ];

  return (
    <>
      <SEOHelmet
        title="Conveyors Manufacturer in India | Feeding & Discharge Conveyors"
        description="Vikah Ecotech is a leading conveyors manufacturer in India offering high-performance feeding and discharge conveyors for recycling, manufacturing, mining, and industrial applications."
        keywords="conveyors manufacturer in india, feeding conveyor, discharge conveyor, belt conveyor india, industrial conveyors, recycling conveyor systems"
        canonical="https://vikahecotech.com/feeding-discharge-conveyers"
        pageName="Feeding & Discharge Conveyors"
        product={{
          name: "Feeding & Discharge Conveyors",
          description: "Heavy-duty industrial feeding and discharge conveyors designed for efficient material handling across recycling and manufacturing industries.",
          image: "https://vikahecotech.com/logo_vk.png",
          url: "https://vikahecotech.com/feeding-discharge-conveyers",
          sku: "VET-FDC-01",
          category: "Industrial Conveyors",
          price: "285000"
        }}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com/" },
          { name: "Other Equipment", url: "https://vikahecotech.com/other-equipment" },
          { name: "Feeding & Discharge Conveyors", url: "https://vikahecotech.com/feeding-discharge-conveyers" }
        ]}
      />

      <div className="tbf-page">

        {/* Header Section */}
        <header className="tbf-header-enhanced text-white py-5 position-relative">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start">
                <h1 className="tbf-heading display-5 fw-bold">
                  Feeding & Discharge Conveyors
                </h1>
                <p className="lead mt-3">
                  High-efficiency Feeding & Discharge Conveyors engineered to transport materials
                  smoothly across every stage of your production or recycling line. Designed with
                  durable components and stable performance, these conveyors reduce manual handling,
                  improve workflow consistency, and support continuous, reliable operation in
                  rubber recycling plants, manufacturing facilities, and industrial processing units.
                </p>
              </Col>
              <Col md={6} className="text-center mt-4 mt-md-0">
                <img
                  src={fdconveyer}
                  alt="Feeding & Discharge Conveyors Manufacturer in India"
                  className="stripcutter-image img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </header>

        {/* Technical Overview */}
        <div className="specs-box shadow">
          <h5 className="fw-bold mb-3">Technical Overview</h5>
          <ul className="list-unstyled mb-0">
            {specs.map((item, idx) => (
              <li key={idx}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <section className="tbf-section tbf-features">
          <Container>
            <h2 className="section-title text-center mb-5">Key Features</h2>
            <div className="feature-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card shadow-sm">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h5 className="feature-title">{feature.title}</h5>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Applications Section */}
        <section className="tbf-section tbf-applications">
          <Container>
            <h2 className="section-title text-center mb-5">Applications</h2>
            <div className="applications-grid">
              {applications.map((app, idx) => (
                <div key={idx} className="application-card shadow-sm">
                  <i className="bi bi-box-seam"></i>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <div className="tbf-intro container text-center my-4">
          <p className="mt-3 fw-semibold text-center">
            Our Feeding &amp; Discharge Conveyors fall under the{" "}
            <a href="/other-equipment" className="fw-bold text-decoration-none">
              Feeding &amp; Handling Systems
            </a>{" "}
            category, designed to ensure smooth, continuous material flow and support efficient upstream and downstream processing.
          </p>
        </div>

        {/* RelatedEquipments */}
        <RelatedEquipments current="/feeding-discharge-conveyers" />

        {/* Contact Section */}
        <section className="tbf-contact-section text-white text-center py-5 m-5">
          <Container>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p className="mb-0">
              For more information about our Feeding & Discharge Conveyors, please contact us at{" "}
              <a
                href="mailto:info@vikahecotech.com"
                className="fw-bold text-white"
              >
                info@vikahecotech.com
              </a>
            </p>
          </Container>
        </section>

      </div>
    </>
  );
};

export default Conveyers;
