import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../OtherEqp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import stripcutter from '../../images/stripcutter1.png';
import SEOHelmet from "../../components/SEO/SEOHelmet";
import RelatedEquipments from "./RelatedEquipments";

const StripCutter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Precision Cutting', description: 'Designed to deliver clean and accurate cuts for various waste rubber materials.' },
    { title: 'Heavy-Duty Construction', description: 'Built with robust components to withstand continuous industrial use.' },
    { title: 'Adjustable Cutting Lengths', description: 'Easily adjustable settings to accommodate different strip sizes and thicknesses.' },
    { title: 'User-Friendly Controls', description: 'Intuitive interface for smooth operation and minimal training required.' },
    { title: 'Low Maintenance', description: 'Simple design for easy cleaning and maintenance, reducing downtime.' },
    { title: 'Safety Mechanisms', description: 'Equipped with safety guards and emergency stops to protect operators.' },
    { title: 'High Throughput', description: 'Capable of processing large volumes efficiently to meet production demands.' },
    { title: 'Versatile Applications', description: 'Suitable for cutting strips in recycling, manufacturing, and packaging industries.' }
  ];

  const applications = [
    'Recycling Facilities',
    'Waste Management',
    'Rubber Recycling',
  ];

  const specs = [
    { label: 'Strip Width', value: '2–6 cm (adjustable)' },
    { label: 'Motor Power', value: '10 HP' },
    { label: 'Capacity', value: '1 TON/Hour' },
    { label: 'Tyre Diameter Compatibility', value: 'Up to 1200 mm' },
    { label: 'Machine Size (L x W x H)', value: '1.5 M x 1.0 M x 1.2 M' },
    { label: 'Weight', value: '800–850 kg' }
  ];

  const productData = {
    name: "Strip Cutter Machine",
    description:
      "Industrial-grade Strip Cutter manufacturer in India offering precision rubber strip cutting with heavy-duty construction and high throughput performance.",
    image: "https://vikahecotech.com/logo_vk.png",
    url: "https://vikahecotech.com/strip-cutter",
    sku: "VK-SC-01",
    category: "Rubber Recycling Machinery",
    price: "0"
  };

  const breadcrumbData = [
    { name: "Home", url: "https://vikahecotech.com/" },
    { name: "Strip Cutter", url: "https://vikahecotech.com/strip-cutter" }
  ];

  return (
    <div className="tbf-page">

      {/* ===== SEO ===== */}
      <SEOHelmet
        title="StripCutter Manufacturer in India | Vikah Ecotech"
        description="Vikah Ecotech is a leading StripCutter manufacturer in India offering industrial-grade rubber strip cutting machines with high precision, durability, and efficiency."
        keywords="Strip Cutter manufacturer in India, rubber strip cutting machine, tyre strip cutter, industrial strip cutter, rubber recycling machinery"
        canonical="https://vikahecotech.com/strip-cutter"
        pageName="Strip Cutter"
        product={productData}
        breadcrumb={breadcrumbData}
      />

      {/* ===== HEADER ===== */}
      <header className="tbf-header-enhanced text-white py-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="tbf-heading display-5 fw-bold">Strip Cutter</h1>
              <p className="lead mt-3">
                A high-precision Strip Cutter Machine engineered to cut rubber into uniform strips
                with consistent accuracy and high output. Built with a durable frame and powerful
                cutting mechanism, it ensures smooth operation, reduced manual effort, and enhanced
                productivity for rubber recycling plants, tire processing units, and industrial
                manufacturing applications.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img src={stripcutter} alt="Strip Cutter Machine" className="stripcutter-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* ===== TECHNICAL OVERVIEW ===== */}
      <div className="specs-box shadow container my-4">
        <h5 className="fw-bold mb-3">Technical Overview</h5>
        <ul className="list-unstyled mb-0">
          {specs.map((item, idx) => (
            <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
          ))}
        </ul>
      </div>

      {/* ===== FEATURES ===== */}
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

      {/* ===== APPLICATIONS ===== */}
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

      {/* ===== INTRO ===== */}
      <div className="tbf-intro container text-center my-4">
        <p className="mt-3 fw-semibold text-center">
          Our Strip Cutter is part of the{" "}
          <a href="/other-equipment" className="fw-bold text-decoration-none">
            Rubber Processing & Precision Cutting Equipment
          </a>{" "}
          category, designed to deliver accurate rubber strip cutting for enhanced productivity, higher material recovery, and efficient tyre recycling operations.
        </p>
      </div>

      {/* RelatedEquipments */}
      <RelatedEquipments current="/strip-cutter" />

      {/* ===== CONTACT ===== */}
      <section className="tbf-contact-section text-white text-center py-5 m-5">
        <Container>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p className="mb-0">
            For more information about our Strip Cutter, please contact us at{" "}
            <a href="mailto:info@vikahecotech.com" className="fw-bold text-white">
              info@vikahecotech.com
            </a>.
          </p>
        </Container>
      </section>

    </div>
  );
};

export default StripCutter;
