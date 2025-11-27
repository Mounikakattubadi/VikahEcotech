import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Baler.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

// Original product card images
import Balerimg from "./images/baler8.jpg";
import Baler1 from "./images/baler1.png";
import Baler2 from "./images/baler2.png";

// Carousel Images
// Tyre Scrap Baler
import TyreBaler1 from "./images/Applications/tyrebaler1.webp";
import TyreBaler2 from "./images/Applications/tyrebaler2.webp";

// Plastic Baler
import PlasticBaler1 from "./images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "./images/Applications/plasticbaler2.jpg";

// Cardboard
import PCB1 from "./images/Applications/pcb1.webp";
import PCB2 from "./images/Applications/pcb2.jpg";
import PCB3 from "./images/Applications/pcb3.webp";

// Metal
import MetalBaler1 from "./images/Applications/metalbaler1.jpg";
import MetalBaler2 from "./images/Applications/metalbaler2.jpg";

function Baler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Durable Construction', description: 'Built using robust materials and cutting-edge technology for long-term performance.' },
    { title: 'Versatile Design', description: 'Offers solutions for OCC, Paper, Plastic, Waste Tyres, Light Metal Scrap and more.' },
    { title: 'Efficiency and Productivity', description: 'Designed for high throughput to optimize processes and reduce labor costs.' },
    { title: 'Safety Features', description: 'Equipped with advanced safety features for secure operations.' },
    { title: 'User-Friendly Interface', description: 'Simple and intuitive controls for a smooth user experience.' },
    { title: 'Cost Savings', description: 'Lower disposal costs and potential revenue from compacted materials.' },
    { title: 'Environmental Sustainability', description: 'Reduces landfill waste and promotes conservation.' },
    { title: 'Compliance and Regulations', description: 'Meets industry standards and safety regulations.' }
  ];

  const applications = [
    'Recycling Centers',
    'Manufacturing Facilities',
    'Distribution Centers',
    'Retail Stores',
    'Hospitality Industry',
    'And more'
  ];

  // Carousel data
  const productCarousels = {
    tyrescrapbaler: [Balerimg,TyreBaler1,TyreBaler2],
    plasticbaler: [PlasticBaler1, PlasticBaler2],
    pcb: [PCB1, PCB2, PCB3],
    metalbaler: [MetalBaler1, MetalBaler2]
  };

const renderCarousel = (images) => (
  <div className="carousel-wrapper">
    <Carousel interval={null} pause={false}>
      {images.map((img, idx) => (
        <Carousel.Item key={idx}>
          <img className="carousel-img" src={img} alt={`slide-${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);


  return (
    <div className="baler-page">

      <header className="baler-header text-white text-center py-5">
        <Container>
          <h1 className="shredder-heading-alt">Balers</h1>
        </Container>
      </header>

      <div className="container text-center my-4">
        <p className="lead description-below-heading">
          At Vikah Ecotech, we specialize in designing and manufacturing high-quality recycling balers machinery that is tailored to meet the diverse needs of industries and facilities involved in waste management and recycling processes. Our balers are engineered to streamline waste handling, increase operational efficiency, and promote sustainable practices.
        </p>
      </div>

      <section className="features-applications-section py-5 balerbackimg">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
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
            </Col>
            <Col lg={6}>
              <h2 className="section-headingbaler mb-4">Applications</h2>
              <ul className="list-group list-group-flush app-list">
                {applications.map((app, idx) => (
                  <li key={idx} className="list-group-item">{app}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products with Carousel */}
      <div className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading">Applications</h2>
          <div className="row justify-content-center">

            {/* Tyre Scrap Baler */}
            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/tyrescrapbaler">
                {renderCarousel(productCarousels.tyrescrapbaler)}
                <div className="product-label mt-2">Tyre Scrap Balers</div>
              </Link>
            </div>

            {/* Plastic Baler */}
            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/plasticbaler">
                {renderCarousel(productCarousels.plasticbaler)}
                <div className="product-label mt-2">Plastic Balers</div>
              </Link>
            </div>

            {/* Cardboard */}
            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/pcb">
                {renderCarousel(productCarousels.pcb)}
                <div className="product-label mt-2">Card Board</div>
              </Link>
            </div>

            {/* Metal */}
            <div className="col-6 col-md-3 mb-4 app-item">
              <Link to="/metalbaler">
                {renderCarousel(productCarousels.metalbaler)}
                <div className="product-label mt-2">Metal Baler</div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Row className="text-center get-in-touch-section text-white py-5 rounded">
        <Col>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            For more information about our products and services, please visit our <a href="#/ourproducts" className="fw-bold">product range</a> or reach us at <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a>.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Baler;
