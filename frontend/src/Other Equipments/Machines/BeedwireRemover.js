import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import beedwireremover from "../../images/beedwireremover.png";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import RelatedEquipments from "./RelatedEquipments";

const BeadwireRemover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'High Efficiency', description: 'Capable of processing 40 to 120 tires per hour, depending on the model.' },
    { title: 'Durable Construction', description: 'Built with robust materials to withstand the rigors of tire recycling operations.' },
    { title: 'User-Friendly Operation', description: 'Designed for ease of use, reducing operator training time.' },
    { title: 'Low Maintenance', description: 'Simple design requiring minimal maintenance for long-term reliability.' },
    { title: 'Energy Efficient', description: 'Runs with low power consumption, reducing operational costs.' },
    { title: 'Versatile Applications', description: 'Suitable for various tire sizes like passenger, truck & OTR tires.' },
    { title: 'Clean Steel Wire Output', description: 'Outputs high-quality bead wire suitable for resale or further use.' },
    { title: 'Safety Features', description: 'Equipped with safety mechanisms for safe operation.' }
  ];

  const applications = [
    'Tire Recycling Plants',
    'Rubber Processing Facilities',
    'Steel Wire Recovery Operations',
    'Environmental Waste Management',
  ];

  const specs = [
    { label: 'Processing Capacity', value: '40 to 120 tires per hour' },
    { label: 'Applicable Tire Types', value: 'Passenger, Truck, OTR Tires' },
    { label: 'Power Consumption', value: 'Low Energy Usage' },
    { label: 'Machine Dimensions', value: 'Varies by model' },
    { label: 'Weight', value: 'Model dependent' },
  ];

  return (
    <div className="tbf-page">

      {/* ===== SEO ===== */}
      <SEOHelmet
        title="Beadwire Remover Manufacturer in India"
        description="High-performance Beadwire Remover machine designed for efficient steel bead wire extraction from waste tyres. Built for durability, low energy consumption, and clean steel wire recovery—ideal for tyre recycling plants and rubber processing units."
        keywords="beadwire remover, bead wire extractor, tyre recycling machine, bead wire removal equipment, tyre processing equipment India"
        canonical="https://vikahecotech.com/beedwire-remover"
        pageName="Beadwire Remover"
        product={{
          name: "Beadwire Remover Machine",
          description: "Industrial-grade Beadwire Remover engineered for precise extraction of steel bead wires from waste tyres. Ensures high efficiency, low maintenance, and seamless integration into tyre recycling lines.",
          image: "https://vikahecotech.com/logo_vk.png",
          url: "https://vikahecotech.com/beedwire-remover",
          sku: "VIKA-BWR-01",
          category: "Tire Recycling Machinery",
          price: "0"
        }}

        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          { name: "Other Equipment", url: "https://vikahecotech.com/other-equipment" },
          { name: "Beadwire Remover", url: "https://vikahecotech.com/beedwire-remover" }
        ]}
      />

      {/* Header */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Beadwire Remover</h1>
              <p className="lead mt-3">
                A high-performance Beadwire Remover Machine designed to safely and efficiently extract
                steel bead wires from all types of waste tires. Engineered for maximum durability and
                precision, this machine improves recycling output, enhances material recovery, reduces
                manual labor, and supports smooth downstream processing in tire recycling plants,
                pyrolysis units, and rubber manufacturing industries.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={beedwireremover} alt="Beadwire Remover Machine" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Technical Specs Floating Box */}
      <div className="specs-box shadow">
        <h5 className="fw-bold mb-3">Technical Overview</h5>
        <ul className="list-unstyled mb-0">
          {specs.map((item, idx) => (
            <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
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
                  <i className="bi bi-check-circle-fill"></i>
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
                <i className="bi bi-box-seam"></i>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="tbf-intro container text-center my-4">
        {/* Category Sentence (as you requested) */}
        <p className="mt-3 fw-semibold">
          The Beadwire Remover is part of our advanced tyre-processing machinery under the{" "}
          <a href="/other-equipment" className="fw-bold text-decoration-none">
            Cutting &amp; Preparation Equipment
          </a>{" "}
          category, designed to streamline tyre recycling operations and ensure clean steel wire separation.
        </p>
      </div>

      {/* RelatedEquipments */}
      <RelatedEquipments current="/beedwire-remover" />

      {/* Contact */}
      <section className="tbf-contact-section text-white text-center py-5 m-5">
        <Container>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p className="mb-0">
            For more information about our Beadwire Remover machines or to request a quote, contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">
              info@vikahecotech.com
            </a>.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default BeadwireRemover;
