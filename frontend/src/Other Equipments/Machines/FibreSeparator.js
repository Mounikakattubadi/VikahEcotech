import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../OtherEqp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import fibreimg from "../../images/Machinery images/Fibre Seperator.png";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import RelatedEquipments from "./RelatedEquipments";

const FibreSeparator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Efficient Fibre Separation",
      description:
        "Effectively removes textile fibres and lightweight contaminants from rubber granules and powder.",
    },
    {
      title: "Improved Product Purity",
      description:
        "Enhances final rubber quality by reducing fibre contamination in processed material.",
    },
    {
      title: "Continuous Processing",
      description:
        "Supports uninterrupted operation for high-throughput recycling lines.",
    },
    {
      title: "Low Energy Consumption",
      description:
        "Optimized system design ensures efficient separation with minimal power usage.",
    },
    {
      title: "Durable Construction",
      description:
        "Manufactured using robust industrial-grade materials for long operational life.",
    },
    {
      title: "Compact Design",
      description:
        "Space-saving layout suitable for integration into existing recycling plants.",
    },
    {
      title: "Low Maintenance",
      description:
        "Simple mechanism reduces maintenance effort and operational downtime.",
    },
    {
      title: "Easy Integration",
      description:
        "Can be connected seamlessly with granulators, pulverizers, and conveying systems.",
    },
  ];

  const applications = [
    "Tyre Recycling Plants",
    "Rubber Powder Processing",
    "Granule Cleaning Systems",
    "Textile Waste Separation",
    "Industrial Recycling Plants",
  ];

  const specs = [
    { label: "Separation Efficiency", value: "Up to 98%" },
    { label: "Capacity", value: "Up to 1000 kg/hr" },
    { label: "Power Consumption", value: "5 kW" },
    { label: "Construction", value: "Mild Steel / Stainless Steel" },
    { label: "Weight", value: "550 kg" },
  ];

  return (
    <div className="tbf-page">
      {/* SEO */}
      <SEOHelmet
        title="Fibre Separator Manufacturer in India"
        description="Vikah Ecotech manufactures industrial Fibre Separators for efficient textile fibre removal from rubber granules and powders in tyre recycling plants."
        keywords="Fibre Separator, rubber fibre separator, textile separator machine, tyre recycling fibre removal machine"
        canonical="https://vikahecotech.com/fibre-separator"
        pageName="Fibre Separator"
        product={{
          name: "Industrial Fibre Separator",
          description:
            "Industrial Fibre Separator for removing textile fibres and lightweight impurities from rubber granules and powders.",
          image: "https://vikahecotech.com/logo_vk.png",
          url: "https://vikahecotech.com/fibre-separator",
          sku: "VK-FS-01",
          category: "Industrial Separation Equipment",
          price: "320000",
        }}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com/" },
          {
            name: "Other Equipment",
            url: "https://vikahecotech.com/other-equipment",
          },
          {
            name: "Fibre Separator",
            url: "https://vikahecotech.com/fibre-separator",
          },
        ]}
      />

      {/* Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">
                Fibre Separator
              </h1>
              <p className="lead mt-3">
                High-performance Fibre Separator designed to remove textile
                fibres and lightweight contaminants from rubber granules and
                powders. Improves final product purity, enhances recycling
                efficiency, and ensures premium quality output in tyre recycling
                plants.
              </p>
            </Col>

            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src={fibreimg}
                alt="Fibre Separator Machine"
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

      {/* Features */}
      <section className="tbf-section tbf-features">
        <Container>
          <h2 className="section-title text-center mb-5">Key Features</h2>
          <div className="feature-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card shadow-sm">
                <div className="feature-icon">
                  <i className="bi bi-filter-circle-fill"></i>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="tbf-section tbf-applications">
        <Container>
          <h2 className="section-title text-center mb-5">Applications</h2>
          <div className="applications-grid">
            {applications.map((app, idx) => (
              <div key={idx} className="application-card shadow-sm">
                <i className="bi bi-gear-fill"></i>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Intro */}
      <div className="tbf-intro container text-center my-4">
        <p className="mt-3 fw-semibold text-center">
          The Fibre Separator is an essential component of our{" "}
          <a
            href="/other-equipment"
            className="fw-bold text-decoration-none"
          >
            Screening & Separation Equipment
          </a>{" "}
          line, helping improve rubber purity and enhance downstream processing
          efficiency in recycling plants.
        </p>
      </div>

      {/* Related */}
      <RelatedEquipments current="/fibre-separator" />

      {/* Contact */}
      <section className="tbf-contact-section text-white text-center py-5 m-5">
        <Container>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p className="mb-0">
            For more information about our Fibre Separator or to request a
            quote, please contact us at{" "}
            <a
              href="mailto:info@vikahecotech.com"
              className="fw-bold text-white"
            >
              info@vikahecotech.com
            </a>
            .
          </p>
        </Container>
      </section>
    </div>
  );
};

export default FibreSeparator;