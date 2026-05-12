import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../OtherEqp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import hopperimg from "../../images/Machinery images/Hopper1.png";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import RelatedEquipments from "./RelatedEquipments";

const VibroHopper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Vibration Assisted Feeding",
      description:
        "Ensures smooth and continuous material flow through controlled vibration technology.",
    },
    {
      title: "Anti-Blockage System",
      description:
        "Prevents material bridging, clogging, and uneven discharge during processing.",
    },
    {
      title: "Heavy Duty Build",
      description:
        "Designed for handling bulk and abrasive materials in demanding industrial environments.",
    },
    {
      title: "Controlled Discharge",
      description:
        "Regulates material output for efficient downstream processing and improved productivity.",
    },
    {
      title: "Low Maintenance",
      description:
        "Simple and robust design reduces wear and minimizes maintenance downtime.",
    },
    {
      title: "Wide Compatibility",
      description:
        "Suitable for rubber, plastic, mixed waste, and other bulk industrial materials.",
    },
    {
      title: "High Storage Capacity",
      description:
        "Stores and feeds large quantities of material for uninterrupted plant operation.",
    },
    {
      title: "Easy Integration",
      description:
        "Can be seamlessly integrated into shredding, conveying, and recycling lines.",
    },
  ];

  const applications = [
    "Tyre Recycling Plants",
    "Plastic Processing Units",
    "Bulk Material Handling",
    "Industrial Feeding Systems",
    "Waste Processing Plants",
  ];

  const specs = [
    { label: "Capacity", value: "Up to 15 Tons/Hour" },
    { label: "Material Type", value: "Bulk Solid Waste" },
    { label: "Power Requirement", value: "3 kW (Optional Vibrator)" },
    { label: "Construction", value: "Mild Steel / Stainless Steel" },
    { label: "Weight", value: "750 kg" },
  ];

  return (
    <div className="tbf-page">
      {/* SEO */}
      <SEOHelmet
        title="Vibro Hopper Manufacturer in India"
        description="Vikah Ecotech provides high-performance Vibro Hoppers for efficient material storage, vibration-assisted feeding, and continuous flow in tyre recycling and industrial processing systems."
        keywords="Vibro Hopper, industrial vibro hopper, vibrating hopper machine, material feeding hopper, tyre recycling hopper"
        canonical="https://vikahecotech.com/vibro-hopper"
        pageName="Vibro Hopper"
        product={{
          name: "Industrial Vibro Hopper",
          description:
            "Heavy-duty Vibro Hopper designed for storage and vibration-assisted feeding of raw materials in recycling and industrial processing lines.",
          image: "https://vikahecotech.com/logo_vk.png",
          url: "https://vikahecotech.com/vibro-hopper",
          sku: "VK-VH-01",
          category: "Industrial Feeding Equipment",
          price: "280000",
        }}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com/" },
          {
            name: "Other Equipment",
            url: "https://vikahecotech.com/other-equipment",
          },
          {
            name: "Vibro Hopper",
            url: "https://vikahecotech.com/vibro-hopper",
          },
        ]}
      />

      {/* Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Vibro Hopper</h1>
              <p className="lead mt-3">
                Heavy-duty Vibro Hopper designed for efficient storage and
                vibration-assisted feeding of raw materials into shredders,
                conveyors, and recycling systems. Ensures continuous material
                flow, prevents clogging, and improves plant productivity with
                reduced manual intervention.
              </p>
            </Col>

            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src={hopperimg}
                alt="Vibro Hopper Machine"
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
                  <i className="bi bi-box-seam-fill"></i>
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
                <i className="bi bi-truck"></i>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Intro */}
      <div className="tbf-intro container text-center my-4">
        <p className="mt-3 fw-semibold text-center">
          The Vibro Hopper is an essential part of our industrial material
          handling line under the{" "}
          <a
            href="/other-equipment"
            className="fw-bold text-decoration-none"
          >
            Feeding & Handling Equipment
          </a>{" "}
          category, ensuring smooth and controlled material feeding for
          efficient downstream processing.
        </p>
      </div>

      {/* Related Equipment */}
      <RelatedEquipments current="/vibro-hopper" />

      {/* Contact */}
      <section className="tbf-contact-section text-white text-center py-5 m-5">
        <Container>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p className="mb-0">
            For more information about our Vibro Hopper or to request a quote,
            please contact us at{" "}
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

export default VibroHopper;