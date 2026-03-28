import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";
import Carousel from "react-bootstrap/Carousel";
import shredderhdimg from "../../images/Shedder _ Final PNG.png";
import shredderhd from "../../images/shredder_hd.jpg";
import shredderhd1 from "../../images/shredder_hd1.jpg";
import { Helmet } from "react-helmet";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import styles from "../../Styles/Topheadings.module.css";

function Tyreshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: "SHT6000",
      type: "Shredder",
      power: "120 - 160 HP",
      system: "Robust Hydraulic System",
      feature: "Our SHT6000 is equipped with user-friendly controls.",
    },
    {
      name: "SHT8000",
      type: "Shredder",
      power: "160 - 220 HP",
      feature: "Our SHT8000 is equipped with user-friendly controls.",
    },
    {
      name: "SHT12000",
      type: "Shredder",
      power: "220 - 280 HP",
      system: "Robust Hydraulic System",
      feature: "Our SHT12000 is equipped with user-friendly controls.",
    },
  ];

  // Shared carousel images
  const carouselImages = [shredderhdimg, shredderhd, shredderhd1];

  const [selected, setSelected] = useState(shredders[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const products = [
    {
      name: "SHT6000",
      description:
        "Primary tyre shredder SHT6000 with 120-160 HP power and robust hydraulic system.",
      image: "https://vikahecotech.com/images/sht6000.png",
      url: "https://vikahecotech.com/sht6000",
      price: "6500000",
    },
    {
      name: "SHT8000",
      description:
        "Primary tyre shredder SHT8000 with 160-220 HP power for industrial tyre recycling.",
      image: "https://vikahecotech.com/images/sht8000.jpg",
      url: "https://vikahecotech.com/sht8000",
      price: "7500000",
    },
    {
      name: "SHT12000",
      description:
        "Primary tyre shredder SHT12000 with 220-280 HP for high-performance tyre shredding.",
      image: "https://vikahecotech.com/images/sht12000.jpeg",
      url: "https://vikahecotech.com/sht12000",
      price: "9000000",
    },
  ];

  return (
    <div>
      <SEOHelmet
        title="Tyre Shredder Machine for Recycling | Vikah Ecotech"
        description="Vikah Ecotech manufactures heavy-duty tyre shredder machines designed for primary shredding of waste tyres in recycling plants."
        keywords="tyre shredder machine, tyre shredding machine, tyre recycling shredder"
        canonical="https://vikahecotech.com/tyreshredder"
        pageName="Primary Tyre Shredder Machines"
        products={products}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          {
            name: "Primary Shredders",
            url: "https://vikahecotech.com/primary-shredder",
          },
          {
            name: "Tyre Shredders",
            url: "https://vikahecotech.com/tyreshredder",
          },
        ]}
      />

      {/* Header */}
      {/* HERO CAROUSEL */}

      <div className={styles.heroWrapper}>
        <Carousel controls indicators interval={4000}>
          {/* Slide 1 */}

          <Carousel.Item>
            <img
              className={styles.heroImage}
              style={{ objectFit: "contain" }}
              src={shredderhdimg}
              alt="Primary Tyre Shredder Machine"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Primary Tyre Shredders</h1>

                <p className={styles.heroSubtitle}>
                  Heavy-duty tyre shredders engineered for primary shredding of
                  whole tyres in recycling plants, delivering consistent and
                  efficient material processing.
                </p>

                <button
                  className={styles.heroButton}
                  onClick={() =>
                    document
                      .getElementById("modelsSection")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Models
                </button>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 2 */}

          <Carousel.Item>
            <img
              className={styles.heroImage}
              style={{ objectFit: "contain" }}
              src={shredderhd1}
              alt="Industrial Tyre Shredder"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Industrial Tyre Shredding</h1>

                <p className={styles.heroSubtitle}>
                  Powerful shredding systems designed for tyre recycling plants
                  to process large volumes of scrap tyres with high efficiency
                  and durability.
                </p>

                <button
                  className={styles.heroButton}
                  onClick={() =>
                    document
                      .getElementById("modelsSection")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Models
                </button>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 3 */}

          <Carousel.Item>
            <img
              className={styles.heroImage}
              style={{ objectFit: "contain" }}
              src={shredderhd}
              alt="Hydraulic Tyre Shredder"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>High Performance Shredders</h1>

                <p className={styles.heroSubtitle}>
                  Advanced tyre shredders equipped with powerful hydraulic
                  systems and high horsepower drives for reliable continuous
                  operation.
                </p>

                <button
                  className={styles.heroButton}
                  onClick={() =>
                    document
                      .getElementById("modelsSection")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Models
                </button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

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
                Tyre Shredders Manufacturer in India
              </h2>

              <p
                className="lead mb-3"
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#2d3748",
                }}
              >
                Vikah Ecotech designs and manufactures high-performance primary
                tyre shredders (SHT6000, SHT8000, SHT12000) for efficient
                shredding of whole tyres in recycling plants. These industrial
                machines are engineered for continuous operation, delivering
                uniform shredded material for downstream recycling processes.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#4a5568",
                }}
              >
                Built with heavy-duty frames, high horsepower drives, and robust
                hydraulic systems, our shredders provide reliable performance,
                low maintenance, and high operational efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* ================= FULL WIDTH MODEL SECTION ================= */}
        <div
          id="modelsSection"
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
              Available Primary Tyre Shredder Models
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
                    color:
                      selected.name === machine.name ? "#ffffff" : "#065f46",
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
                            alt={`${selected.name} primary tyre shredder ${i + 1}`}
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
                    {selected.name} Primary Tyre Shredder
                  </h4>

                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item bg-transparent">
                      <strong>Type:</strong> {selected.type}
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Power Range:</strong> {selected.power}
                    </li>
                    {selected.system && (
                      <li className="list-group-item bg-transparent">
                        <strong>System:</strong> {selected.system}
                      </li>
                    )}
                    <li className="list-group-item bg-transparent">
                      <strong>Feature:</strong> {selected.feature}
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
                    Read more about {selected.name} Shredder
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= APPLICATIONS ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Applications of Primary Tyre Shredders
          </h3>
          <p className="text-center mb-4">
            Used in tyre recycling plants, scrap yards, and commercial recycling
            facilities for shredding whole tyres into manageable and uniform
            pieces.
          </p>

          <div className="row text-center">
            {[
              "Tyre Recycling Plants",
              "Automobile Scrap Yards",
              "Industrial Recycling Facilities",
              "Commercial Recycling Units",
              "Downstream Recycling Material Preparation",
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
            Why Choose Vikah Ecotech Shredders?
          </h3>

          <p>
            Vikah Ecotech primary tyre shredders are trusted for robust design,
            continuous industrial operation, high throughput, and long-lasting
            hydraulic systems.
          </p>

          <ul>
            <li>Heavy-duty two-shaft hydraulic system for high compaction</li>
            <li>Energy-efficient operation with low maintenance</li>
            <li>Available in SHT6000, SHT8000, SHT12000 models</li>
            <li>Uniform shredding for downstream recycling processes</li>
            <li>Nationwide installation and after-sales support</li>
          </ul>
        </div>

        {/* ================= TECHNICAL FEATURES ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Technical Features
          </h3>

          <p>
            Industrial-grade frames, high horsepower drives, heavy-duty blades,
            and safety interlocks ensure continuous operation, uniform shred
            size, and efficient tyre processing. Suitable for car, truck, and
            bus tyres.
          </p>
        </div>

        {/* ================= FAQ ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Frequently Asked Questions
          </h3>

          <div className="accordion" id="shredderFaq">
            {[
              {
                q: "What is the power range for each shredder model?",
                a: "SHT6000: 120-160 HP, SHT8000: 160-220 HP, SHT12000: 220-280 HP.",
              },
              {
                q: "Which shredder is suitable for small-scale tyre recycling plants?",
                a: "SHT6000 is ideal for medium-volume shredding operations.",
              },
              {
                q: "Do these shredders have hydraulic systems?",
                a: "Yes, SHT6000 and SHT12000 are equipped with robust hydraulic systems; SHT8000 has a standard design.",
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
                  data-bs-parent="#shredderFaq"
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

export default Tyreshredder;
