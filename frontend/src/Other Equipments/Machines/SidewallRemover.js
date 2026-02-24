import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import '../OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import sidewallremover from "../../images/sidewallremover.png";
import RelatedEquipments from "./RelatedEquipments";

const SidewallRemover = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Efficient Sidewall Removal', description: 'Effectively removes sidewall materials for cleaner processing and reduced contamination.' },
    { title: 'Robust Construction', description: 'Made with durable materials to withstand industrial wear and tear.' },
    { title: 'Adjustable Settings', description: 'Easily adjustable for different sidewall thicknesses and materials.' },
    { title: 'User-Friendly Operation', description: 'Simple controls ensure smooth and safe operation.' },
    { title: 'Low Maintenance', description: 'Designed for minimal upkeep and long-lasting performance.' },
    { title: 'Compact Design', description: 'Space-saving design fits well within existing production lines.' },
    { title: 'Safety Features', description: 'Incorporates safety guards and emergency stop functions.' },
    { title: 'Versatile Applications', description: 'Suitable for use in recycling, manufacturing, and waste rubber management industries.' }
  ];

  const applications = [
    'Rubber Recycling',
  ];

  const specs = [
    { label: 'Machine Size (L x W x H)', value: 'TBD' },
    { label: 'Weight', value: 'TBD' },
    { label: 'Power Requirements', value: 'TBD' },
  ];

  const productData = {
    name: "Sidewall Remover Machine",
    description:
      "Sidewall Remover Machine for efficient removal of tyre sidewalls from passenger car tyres and truck/bus tyres. Designed for rubber recycling and waste tyre processing industries.",
    image: "https://vikahecotech.com/logo_vk.png",
    url: "https://vikahecotech.com/sidewall-remover",
    sku: "VET-SWR-01",
    category: "Tyre Recycling Machinery",
    price: "0",
  };

  const breadcrumbData = [
    { name: "Home", url: "https://vikahecotech.com/" },
    { name: "Other Equipment", url: "https://vikahecotech.com/other-equipment" },
    { name: "Sidewall Remover", url: "https://vikahecotech.com/sidewall-remover" },
  ];

  return (
    <>
      {/* ===== SEO SECTION ===== */}
      <SEOHelmet
        title="Sidewall Remover Manufacturer in India"
        description="Vikah Ecotech Pvt Ltd is a leading Sidewall Remover manufacturer in India offering high-performance tyre sidewall removing machines for rubber recycling industries."
        keywords="Sidewall Remover Manufacturer in India, Tyre Sidewall Remover Machine, Rubber Recycling Machine, Tyre Recycling Equipment"
        canonical="https://vikahecotech.com/sidewall-remover"
        pageName="Sidewall Remover"
        product={productData}
        breadcrumb={breadcrumbData}
      />

      <div className="tbf-page">

        {/* Header */}
        <header className="tbf-header-enhanced text-white py-5 position-relative">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start">
                <h1 className="tbf-heading display-5 fw-bold">Side Wall Remover</h1>
                <p className="lead mt-3">
                  A high-efficiency Side Wall Remover engineered to cut and separate sidewalls from
                  passenger car tires, truck tires, and bus tires with precision. Designed for strong
                  performance and long-term durability, it enhances material recovery, reduces manual
                  labor, and ensures smoother downstream processing for tire recycling plants and
                  rubber manufacturing industries.
                </p>
              </Col>
              <Col md={6} className="text-center mt-4 mt-md-0">
                <img
                  src={sidewallremover}
                  alt="Side Wall Remover Machine"
                  className="stripcutter-image img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </header>

        {/* Technical Overview */}
        {specs && specs.length > 0 && (
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
        )}

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

        {/* Intro */}
        <div className="tbf-intro container text-center my-4">
          <p className="mt-3 fw-semibold text-center">
            Our Sidewall Remover is part of the{" "}
            <a href="/other-equipment" className="fw-bold text-decoration-none">
              Tyre Recycling & Pre-Cutting Equipment
            </a>{" "}
            category, engineered to deliver precise sidewall separation for higher-quality rubber recovery and smoother downstream recycling processes.
          </p>
        </div>

        {/* RelatedEquipments */}
        <RelatedEquipments current="/sidewall-remover" />

        {/* Contact Section */}
        <section className="tbf-contact-section text-white text-center py-5 m-5">
          <Container>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p className="mb-0">
              For more information about our Side Wall Remover or to request a quote, please contact us at{" "}
              <a
                href="mailto:info@vikahecotech.com"
                className="fw-bold text-white"
              >
                info@vikahecotech.com
              </a>.
            </p>
          </Container>
        </section>

      </div>
    </>
  );
};

export default SidewallRemover;
