import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Carousel from "react-bootstrap/Carousel";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import shredderhd from "../../images/Applications/shredp1.png";
import shredderhd1 from "../../images/Applications/shredp4.webp";
import shredderhdimg from "../../images/Applications/shredp2.jpeg";
import SEOHelmet from "../../components/SEO/SEOHelmet";

function Plasticshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: "SHP100",
      type: "Plastic Shredder",
      power: "100 – 140 HP",
      system: "High Torque Hydraulic System",
      feature:
        "Designed for precise shredding of PET bottles, LDPE films, and light plastic waste with efficient throughput.",
    },
    {
      name: "SHP150",
      type: "Plastic Shredder",
      power: "140 – 200 HP",
      system: "Dual Shaft Cutting Mechanism",
      feature:
        "Provides higher cutting efficiency and stable performance for industrial-grade plastic scrap recycling.",
    },
    {
      name: "SHP200",
      type: "Heavy-Duty Plastic Shredder",
      power: "200 – 260 HP",
      system: "Heavy-Duty Hydraulic System",
      feature:
        "High-capacity plastic shredder engineered for large-scale plastic recycling and continuous operation.",
    },
  ];

  const products = [
    {
      name: "SHP100",
      description:
        "Plastic Shredder SHP100 with 100–140 HP, suitable for PET bottles and light plastic waste.",
      image: "https://vikahecotech.com/images/Shredder.png",
      url: "https://vikahecotech.com/shp100",
      price: "5000000",
    },
    {
      name: "SHP150",
      description:
        "Plastic Shredder SHP150 with 140–200 HP featuring dual shaft cutting mechanism.",
      image: "https://vikahecotech.com/images/shredder_hd1.jpg",
      url: "https://vikahecotech.com/shp150",
      price: "6200000",
    },
    {
      name: "SHP200",
      description:
        "Heavy-duty Plastic Shredder SHP200 with 200–260 HP for large-scale recycling.",
      image: "https://vikahecotech.com/images/st.jpeg",
      url: "https://vikahecotech.com/shp200",
      price: "7800000",
    },
  ];

  const carouselImages = [shredderhd, shredderhd1, shredderhdimg];

  const [selected, setSelected] = useState(shredders[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <div>
      <SEOHelmet
        title="Plastic Shredder Machines Manufacturer in India | Vikah Ecotech"
        description="Primary plastic shredders designed for recycling PET, HDPE, LDPE and industrial plastic waste."
        keywords="plastic shredder machine, plastic recycling shredder, PET shredder"
        canonical="https://vikahecotech.com/plasticshredder"
        pageName="Plastic Shredder Machines"
        products={products}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          {
            name: "Primary Shredders",
            url: "https://vikahecotech.com/primary-shredder",
          },
          {
            name: "Plastic Shredders",
            url: "https://vikahecotech.com/plasticshredder",
          },
        ]}
      />

      {/* ================= HEADER ================= */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Plastic Shredder Machines</h1>
          <p className="lead">
            Primary Shredders for Plastic Recycling Applications
          </p>
        </div>
      </header>

<div className="container-fluid px-4 px-md-5 my-5">
  {/* ================= INTRO SECTION ================= */}
  <div className="container-fluid py-5">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10 text-center">
        <h2
          className="fw-bold mb-4"
          style={{
            fontSize: "2.2rem",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.3",
          }}
        >
           Plastic Shredders Manufacturer in India
        </h2>

        <p
          className="lead mb-3"
          style={{
            fontSize: "1.125rem",
            fontFamily: "'Open Sans', sans-serif",
            color: "#2d3748",
          }}
        >
          Vikah Ecotech manufactures industrial plastic shredders (SHP100, SHP150, SHP200) 
          designed for efficient size reduction of PET bottles, HDPE containers, LDPE films, 
          packaging plastics, and other industrial plastic scrap.
        </p>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            fontFamily: "'Open Sans', sans-serif",
            color: "#4a5568",
          }}
        >
          Our shredders feature high-torque hydraulic systems, dual shaft cutting mechanisms, 
          and heavy-duty blades to ensure consistent shredding performance, low maintenance, 
          and long service life in demanding recycling operations.
        </p>
      </div>
    </div>
  </div>

  {/* ================= FULL WIDTH MODEL SECTION ================= */}
  <div
    className="py-5 px-3 px-md-5 mb-5"
    style={{
      background: "linear-gradient(135deg, #e6fffa, #f0fdfa)",
      borderTop: "5px solid #22c55e",
      borderBottom: "5px solid #22c55e",
    }}
  >
    <div className="container-fluid">
      <h3
        className="text-center fw-bold mb-4"
        style={{ color: "#166534", fontSize: "1.8rem" }}
      >
        Available Plastic Shredder Models
      </h3>

      {/* ================= MODEL BUTTONS (centered) ================= */}
      <div className="d-flex justify-content-center flex-wrap mb-5">
        {shredders.map((machine, index) => (
          <button
            key={index}
            className="mx-2 my-2 px-4 py-2"
            style={{
              background:
                selected.name === machine.name
                  ? "linear-gradient(135deg, #22c55e, #16a34a)"
                  : "#ccfbf1",
              color: selected.name === machine.name ? "#ffffff" : "#065f46",
              border: "none",
              borderRadius: "50px",
              fontWeight: "600",
              minWidth: "120px",
              boxShadow:
                selected.name === machine.name
                  ? "0 4px 12px rgba(34,197,94,0.4)"
                  : "0 2px 6px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
            onClick={() => setSelected(machine)}
          >
            {machine.name}
          </button>
        ))}
      </div>

      {/* ================= CAROUSEL + SPEC CARD ================= */}
      <div className="row align-items-center">
        {/* ================= CAROUSEL CARD ================= */}
        <div className="col-lg-6 mb-4">
          <div
            className="rounded-4 shadow-lg overflow-hidden p-3"
            style={{
              height: "460px",
              background: "linear-gradient(145deg, #f0fdfa, #ecfeff)",
              border: "1px solid #a7f3d0",
            }}
          >
            <Carousel interval={4000} pause="hover">
              {carouselImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <div
                    style={{
                      height: "430px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img}
                      alt={`${selected.name} plastic shredder ${i + 1}`}
                      style={{
                        maxHeight: "85%",
                        maxWidth: "85%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* ================= SPEC CARD ================= */}
        <div className="col-lg-6">
          <div
            className="shadow-lg rounded-4 p-4"
            style={{
              background: "linear-gradient(145deg, #ecfdf5, #e0f2fe)",
              borderLeft: "6px solid #22c55e",
            }}
          >
            <h4
              className="fw-bold mb-4 text-center"
              style={{ color: "#065f46", fontSize: "1.6rem" }}
            >
              {selected.name} Plastic Shredder
            </h4>

            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent">
                <strong>Type:</strong> {selected.type}
              </li>
              <li className="list-group-item bg-transparent">
                <strong>Power Range:</strong> {selected.power}
              </li>
              <li className="list-group-item bg-transparent">
                <strong>System:</strong> {selected.system}
              </li>
              <li className="list-group-item bg-transparent">
                <strong>Application:</strong> {selected.feature}
              </li>
            </ul>

            <Link
              to={`/${selected.name.toLowerCase()}`}
              className="btn w-100"
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                color: "#ffffff",
                fontWeight: "600",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(34,197,94,0.4)",
              }}
            >
              Read more about {selected.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ================= APPLICATIONS ================= */}
  <div className="container mb-5">
    <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
      Applications of Plastic Shredders
    </h3>
    <p className="text-center mb-4">
      Used in plastic recycling plants, packaging material recycling, and industrial plastic scrap processing
      for size reduction and uniform shredded output.
    </p>

    <div className="row text-center">
      {[
        "PET Bottle Recycling",
        "HDPE & LDPE Scrap Processing",
        "Packaging Material Size Reduction",
        "Industrial Plastic Recycling Plants",
        "Commercial Plastic Scrap Processing",
      ].map((item, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <div
            className="p-4 rounded-4 shadow-sm h-100 bg-white"
            style={{ border: "1px solid #c6f6d5" }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ================= WHY CHOOSE US ================= */}
  <div className="container mb-5">
    <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
      Why Choose Vikah Ecotech Plastic Shredders?
    </h3>

    <p>
      Vikah Ecotech plastic shredders are engineered for high torque, continuous operation, 
      low maintenance, and precision shredding of various plastic waste types.
    </p>

    <ul>
      <li>High-torque hydraulic system for consistent shredding</li>
      <li>Dual shaft cutting mechanism for efficiency (SHP150)</li>
      <li>Heavy-duty construction for long service life (SHP200)</li>
      <li>Precise size reduction for downstream recycling</li>
      <li>Nationwide installation and after-sales support</li>
    </ul>
  </div>

  {/* ================= TECHNICAL FEATURES ================= */}
  <div className="container mb-5">
    <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
      Technical Features
    </h3>

    <p>
      Industrial-grade cutting chambers, robust hydraulic systems, energy-efficient drives, 
      safety interlocks, and durable blades ensure smooth operation, continuous throughput, 
      and minimal downtime. Suitable for PET, HDPE, LDPE, and other plastic scrap materials.
    </p>
  </div>

  {/* ================= FAQ ================= */}
  <div className="container mb-5">
    <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
      Frequently Asked Questions
    </h3>

    <div className="accordion" id="plasticShredderFaq">
      {[
        {
          q: "What is the power range for each plastic shredder model?",
          a: "SHP100: 100–140 HP, SHP150: 140–200 HP, SHP200: 200–260 HP.",
        },
        {
          q: "Which model is suitable for small-scale plastic recycling?",
          a: "SHP100 is ideal for low to medium volume plastic shredding operations.",
        },
        {
          q: "Do these shredders use hydraulic systems?",
          a: "Yes, all models feature high-torque or dual shaft hydraulic cutting systems.",
        },
        {
          q: "Do you provide installation and after-sales support?",
          a: "Yes, nationwide installation guidance and service support are available.",
        },
      ].map((faq, index) => (
        <div
          className="accordion-item mb-3 border-0 shadow-sm rounded-3"
          key={index}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${index}`}
              style={{ backgroundColor: "#f0fff4" }}
            >
              {faq.q}
            </button>
          </h2>
          <div
            id={`faq${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#plasticShredderFaq"
          >
            <div className="accordion-body">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  );
}

export default Plasticshredder;
