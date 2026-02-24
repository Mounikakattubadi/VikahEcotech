import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import blockcutter from "../../images/blockcutter.png";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import RelatedEquipments from "./RelatedEquipments";

const BlockCutter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'High Precision Cutting', description: 'Equipped with advanced cutting technology to ensure accurate and clean cuts.' },
    { title: 'Versatile Applications', description: 'Suitable for cutting waste rubber materials including concrete, stone, and bricks.' },
    { title: 'Durable Construction', description: 'Built with high-quality materials to withstand rigorous industrial use.' },
    { title: 'User-Friendly Operation', description: 'Designed for ease of use, reducing operator training time.' },
    { title: 'Safety Features', description: 'Incorporates safety mechanisms to protect operators during operation.' },
    { title: 'Low Maintenance', description: 'Features a simple design that requires minimal maintenance, ensuring long-term reliability.' },
    { title: 'Energy Efficient', description: 'Operates with low power consumption, reducing operational costs.' },
    { title: 'Compact Design', description: 'Space-saving design suitable for various workshop sizes.' }
  ];

  const applications = [
    'Rubber Recycling',
  ];

  const specs = [
    { label: 'Cutting Capacity', value: 'Up to 200 mm thickness' },
    { label: 'Motor Power', value: '15 HP' },
    { label: 'Machine Dimensions', value: '2.0 m x 1.2 m x 1.5 m' },
    { label: 'Weight', value: '950 kg' },
  ];

  return (
    <>
      {/* ===== SEO HELMET ===== */}
      <SEOHelmet
        title="BlockCutter manufacturer in india"
        description="Vikah Ecotech is a leading Block Cutter manufacturer in India offering high precision rubber cutting machines with durable construction and energy efficient performance."
        keywords="Block Cutter manufacturer in India, Rubber block cutting machine, Industrial rubber cutter, Rubber recycling machinery, Vikah Ecotech"
        canonical="https://vikahecotech.com/block-cutter"
        pageName="Block Cutter"
        product={{
          name: "Block Cutter Machine",
          description: "High precision industrial block cutter machine designed for rubber recycling and waste rubber cutting applications.",
          image: "https://vikahecotech.com/logo_vk.png",
          url: "https://vikahecotech.com/block-cutter",
          sku: "VIKA-BLC-01",
          category: "Rubber Recycling Machinery",
          price: "0"
        }}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          { name: "Block Cutter", url: "https://vikahecotech.com/block-cutter" }
        ]}
      />

      <div className="tbf-page">

        {/* Header */}
        <header className="tbf-header-enhanced text-white py-5 position-relative">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start">
                <h1 className="tbf-heading display-5 fw-bold">Block Cutter</h1>
                <p className="lead mt-3">
                  A heavy-duty Block Cutter Machine designed to cut rubber blocks into accurate and
                  consistent sizes with ease. Built with a robust frame and precision cutting system,
                  it ensures smooth operation, high productivity, and long-term durability, making it
                  ideal for rubber processing units, recycling plants, and industrial manufacturing
                  applications.
                </p>
              </Col>
              <Col md={6} className="text-center mt-4 mt-md-0">
                <img src={blockcutter} alt="Block Cutter Machine" className="stripcutter-image img-fluid" />
              </Col>
            </Row>
          </Container>
        </header>

        {/* Technical Overview */}
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
          <p className="mt-3 fw-semibold text-center">
            The Block Cutter is a key part of our heavy-duty tyre-processing lineup under the{" "}
            <a href="/other-equipment" className="fw-bold text-decoration-none">
              Cutting &amp; Preparation Equipment
            </a>{" "}
            category, engineered to support efficient rubber sizing operations during early-stage recycling.
          </p>
        </div>

        {/* RelatedEquipments */}
        <RelatedEquipments current="/block-cutter" />

        {/* Contact */}
        <section className="tbf-contact-section text-white text-center py-5 m-5">
          <Container>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p className="mb-0">
              For more information about our Block Cutter machines or to request a quote, please contact us at{" "}
              <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">
                info@vikahecotech.com
              </a>.
            </p>
          </Container>
        </section>

      </div>
    </>
  );
};

export default BlockCutter;
