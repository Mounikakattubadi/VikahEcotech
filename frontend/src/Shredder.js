import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Baler.css'; // Reusing the same CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import shredderhd from "./images/st.jpeg"
import shredderhd1 from "./images/shredder_hd1.jpg"
import shredderhdimg from "./images/Shedder _ Final PNG.png"


function Shredder() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
  const features = [
    { title: 'Robust Construction', description: 'Built with high-quality materials and advanced technology for durability and consistent performance.' },
    { title: 'Versatile Shredding Options', description: 'Available in single-shaft and dual-shaft models to handle a wide range of materials such as plastic, paper, cardboard, wood, metals, tyres, and more.' },
    { title: 'High Efficiency', description: 'Engineered for high-speed shredding with adjustable cutting mechanisms and automated controls for optimized material processing.' },
    { title: 'Advanced Safety Features', description: 'Includes emergency stop buttons, safety locks, PLC systems, and protective guards for safe operation.' },
    { title: 'Easy Maintenance', description: 'Designed with accessible components and user-friendly interfaces for simple cleaning and routine upkeep.' }
  ];

  const benefits = [
    { title: 'Waste Volume Reduction', description: 'Efficiently shreds materials into smaller pieces, making recycling and disposal easier and more cost-effective.' },
    { title: 'Resource Recovery', description: 'Enables effective recycling by producing uniform particles that support downstream recovery processes.' },
    { title: 'Environmental Sustainability', description: 'Helps reduce landfill waste and conserves natural resources by supporting eco-friendly recycling practices.' },
    { title: 'Operational Safety', description: 'Prioritizes operator safety with comprehensive protective systems.' },
    { title: 'User-Friendly Operation', description: 'Features intuitive controls for a smooth shredding process with minimal operator effort.' },
    { title: 'Cost Efficiency', description: 'Lowers operational costs by reducing waste volume and supporting material resale.' },
    { title: 'Compliance Ready', description: 'Manufactured to meet industry regulations and standards.' }
  ];

  const applications = [
    'Recycling Facilities',
    'Document Destruction Services',
    'E-Waste Recycling Centers',
    'Manufacturing Plants',
    'Waste-to-Energy Facilities'
  ];

  return (
    <div className="baler-page">
      <header className="baler-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Vikah Ecotech Recycling Shredders</h1>
          <p className="lead">
            At Vikah Ecotech, we are dedicated to providing top-of-the-line recycling shredders designed to meet the diverse needs of industries and facilities involved in waste management. Our shredders efficiently process various materials, supporting waste reduction, resource recovery, and environmental sustainability.
          </p>
        </div>
      </header>

      {/* Key Features and Applications */}
      <section className="features-applications-section py-5 balerbackimg">
        <div className="container">
          <div className="row">
            {/* Features */}
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

            {/* Applications */}
            <div className="col-lg-6">
              <h2 className="section-headingbaler mb-4">Applications</h2>
              <ul className="list-group list-group-flush app-list">
                {applications.map((app, idx) => (
                  <li key={idx} className="list-group-item">{app}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

{/* Product Section */}
<div className="products-section-bg py-5">
  <div className="container text-center">
    <h2 className="green-heading mb-4">Primary Shredder Products</h2>
    <div className="row justify-content-center">
      <div className="col-6 col-md-3 mb-4">
        <Link to="/tyreshredder">
          <div className="product-card">
            <img src={shredderhdimg} alt="Tyre Shredder" className="product-img" />
            <div className="product-label">Tyre Shredder</div>
          </div>
        </Link>
      </div>
      <div className="col-6 col-md-3 mb-4">
      <Link to="/rasper">
        <div className="product-card">
          <img src={shredderhd1} alt="Rasper" className="product-img" />
          <div className="product-label">Rasper</div>
        </div></Link>
      </div>
      <div className="col-6 col-md-3 mb-4">
      <Link to="/metalshredder">
        <div className="product-card">
          <img src={shredderhdimg} alt="Metal Shredder" className="product-img" />
          <div className="product-label">Metal Shredder</div>
        </div></Link>
      </div>
      <div className="col-6 col-md-3 mb-4">
      <Link to="/plasticshredder">
        <div className="product-card">
          <img src={shredderhd} alt="Plastic Shredder" className="product-img" />
          <div className="product-label">Plastic Shredder</div>
        </div></Link>
      </div>
      <div className="col-6 col-md-3 mb-4">
      <Link to="/papershredder">
        <div className="product-card">
          <img src={shredderhd1} alt="Paper and Cardboard" className="product-img" />
          <div className="product-label">Paper & Cardboard</div>
        </div></Link>
      </div>
    </div>
  </div>
</div>
<Row className="text-center get-in-touch-section text-white py-5 rounded">
          <Col>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p>
              For more information about our products and services, please visit our{" "}
              <a href="/ourproducts" className="fw-bold">product range</a> or reach us at{" "}
              <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a>.
            </p>
          </Col>
        </Row>
    </div>
  );
}

export default Shredder;
