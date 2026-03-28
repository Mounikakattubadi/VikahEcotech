import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import metalImg1 from "../../images/Applications/appm1.jpg";
import metalImg2 from "../../images/Applications/appm4.jpg";
import metalImg3 from "../../images/Applications/appm6.jpg";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../Styles/Topheadings.module.css";

function Metalbaler() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const balers = [
    {
      name: "BLM150",
      type: "Metal Scrap Baler",
      force: "150 Ton",
      weight: "200–350 kg per bale",
      note: "Suitable for compacting light to medium ferrous and non-ferrous metal scrap such as aluminum and mild steel.",
    },
    {
      name: "BLM200",
      type: "Metal Scrap Baler",
      force: "200 Ton",
      weight: "250–450 kg per bale",
      note: "Designed for medium-density steel scrap, alloy scrap, and industrial metal recycling applications.",
    },
    {
      name: "BLM250",
      type: "Heavy-Duty Metal Baler",
      force: "250 Ton",
      weight: "300–500 kg per bale",
      note: "High-performance baler engineered for high-volume ferrous and non-ferrous metal compaction.",
    },
  ];

  const products = [
    {
      name: "BLM150",
      description:
        "Metal Scrap Baler BLM150 for light to medium ferrous and non-ferrous metals.",
      image: "https://vikahecotech.com/images/baler4.png",
      url: "https://vikahecotech.com/blm150",
      price: "3500000",
    },
    {
      name: "BLM200",
      description:
        "Metal Scrap Baler BLM200 for industrial metal recycling operations.",
      image: "https://vikahecotech.com/images/baler.png",
      url: "https://vikahecotech.com/blm200",
      price: "4200000",
    },
    {
      name: "BLM250",
      description:
        "Heavy-duty Metal Scrap Baler BLM250 for high-volume compaction.",
      image: "https://vikahecotech.com/images/baler_bg.png",
      url: "https://vikahecotech.com/blm250",
      price: "5000000",
    },
  ];

  const carouselImages = [metalImg1, metalImg2, metalImg3];

  const [selected, setSelected] = useState(balers[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <div>
      <SEOHelmet
        title="Metal Scrap Baler Machines Manufacturer in India | Vikah Ecotech"
        description="Heavy-duty hydraulic metal scrap baler machines for ferrous and non-ferrous metal recycling."
        keywords="metal baler machine, metal scrap baler, hydraulic metal baler"
        canonical="https://vikahecotech.com/metalbaler"
        pageName="Metal Scrap Baler Machines"
        products={products}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          { name: "Balers", url: "https://vikahecotech.com/balers" },
          { name: "Metal Balers", url: "https://vikahecotech.com/metalbaler" },
        ]}
      />

      {/* ================= HEADER ================= */}
      {/* HERO CAROUSEL */}

      <div className={styles.heroWrapper}>
        <Carousel controls indicators interval={4000}>
          {/* Slide 1 */}

          <Carousel.Item>
            <img
              className={styles.heroImage}
              src={metalImg1}
              alt="Metal Scrap Baler Machine"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Metal Scrap Balers</h1>

                <p className={styles.heroSubtitle}>
                  Heavy-duty hydraulic baler machines designed for compressing
                  ferrous and non-ferrous metal scrap into dense bales for
                  efficient recycling.
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
              src={metalImg2}
              alt="Industrial Metal Baler"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Industrial Metal Balers</h1>

                <p className={styles.heroSubtitle}>
                  Engineered for metal recycling plants and scrap yards,
                  delivering powerful compression for aluminum, steel, and alloy
                  scrap materials.
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
              src={metalImg3}
              alt="Hydraulic Metal Scrap Baler"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Hydraulic Metal Compaction</h1>

                <p className={styles.heroSubtitle}>
                  Advanced hydraulic technology providing high compaction force
                  for heavy metal scrap recycling and waste volume reduction.
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
                Metal Scrap Baler Machines Manufacturer in India
              </h2>

              <p
                className="lead mb-3"
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#2d3748",
                }}
              >
                Vikah Ecotech manufactures hydraulic metal scrap balers for
                efficient recycling of ferrous and non-ferrous metals including
                aluminum, copper, brass, mild steel, and stainless steel. Our
                machines are engineered for high compaction, durability, and
                consistent performance in scrap yards, foundries, and industrial
                recycling plants.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#4a5568",
                  marginBottom: "1rem",
                }}
              >
                Built with heavy-duty steel frames and high-pressure hydraulic
                systems, our metal balers reduce storage space, improve handling
                efficiency, and provide uniform bale formation for metal scrap.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#4a5568",
                }}
              >
                Available in 150 Ton, 200 Ton, and 250 Ton models (BLM150,
                BLM200, BLM250), Vikah Ecotech metal balers guarantee reliable
                operation, low maintenance, and long-term industrial
                performance.
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
              Available Metal Scrap Baler Models
            </h3>

            {/* ================= MODEL BUTTONS (centered) ================= */}
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {[
                {
                  name: "BLM150",
                  type: "Metal Scrap Baler",
                  force: "150 Ton",
                  weight: "200–350 kg per bale",
                  note: "Suitable for compacting light to medium ferrous and non-ferrous metal scrap such as aluminum and mild steel.",
                },
                {
                  name: "BLM200",
                  type: "Metal Scrap Baler",
                  force: "200 Ton",
                  weight: "250–450 kg per bale",
                  note: "Designed for medium-density steel scrap, alloy scrap, and industrial metal recycling applications.",
                },
                {
                  name: "BLM250",
                  type: "Heavy-Duty Metal Baler",
                  force: "250 Ton",
                  weight: "300–500 kg per bale",
                  note: "High-performance baler engineered for high-volume ferrous and non-ferrous metal compaction.",
                },
              ].map((baler, index) => (
                <button
                  key={index}
                  className="mx-2 my-2 px-4 py-2"
                  style={{
                    background:
                      selected.name === baler.name
                        ? "linear-gradient(135deg, #22c55e, #16a34a)"
                        : "#ccfbf1",
                    color: selected.name === baler.name ? "#ffffff" : "#065f46",
                    border: "none",
                    borderRadius: "50px",
                    fontWeight: "600",
                    minWidth: "120px",
                    boxShadow:
                      selected.name === baler.name
                        ? "0 4px 12px rgba(34,197,94,0.4)"
                        : "0 2px 6px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => setSelected(baler)}
                >
                  {baler.name}
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
                            alt={`${selected.name} metal baler ${i + 1}`}
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
                    {selected.name} Metal Scrap Baler
                  </h4>

                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item bg-transparent">
                      <strong>Type:</strong> {selected.type}
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Compaction Force:</strong> {selected.force}
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Bale Weight:</strong> {selected.weight}
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Application:</strong> {selected.note}
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
                    Read more about {selected.name} Metal Scrap Baler
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= APPLICATIONS ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Applications of Metal Scrap Balers
          </h3>
          <p className="text-center mb-4">
            Our hydraulic metal scrap balers are widely used in recycling
            plants, foundries, metal scrap yards, industrial warehouses, and
            commercial metal collection centers for high-density metal
            compaction.
          </p>

          <div className="row text-center">
            {[
              "Ferrous Metal Recycling Plants",
              "Non-Ferrous Scrap Processing Units",
              "Industrial Scrap Yards",
              "Metal Foundries",
              "Commercial Metal Collection Centers",
              "Warehouse & Storage Optimization",
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
            Why Choose Vikah Ecotech Metal Balers?
          </h3>

          <p>
            Vikah Ecotech is a trusted metal baler manufacturer in India due to
            our robust design, reliable hydraulic systems, and long-lasting
            performance. Our balers are designed for continuous industrial
            operations and maximum compaction efficiency.
          </p>

          <ul>
            <li>
              Heavy-duty hydraulic cylinders for powerful metal compression
            </li>
            <li>Energy-efficient design with low operational cost</li>
            <li>Available in BLM150, BLM200, BLM250 models</li>
            <li>Customizable bale dimensions for various metal scrap types</li>
            <li>Nationwide installation and after-sales support</li>
          </ul>
        </div>

        {/* ================= TECHNICAL FEATURES ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Technical Features
          </h3>

          <p>
            Our metal scrap balers are built with high-pressure hydraulic
            systems, reinforced steel frames, and safety features to ensure
            uniform pressure distribution and high-density bales. Suitable for
            aluminum, copper, brass, steel, and other ferrous/non-ferrous metal
            scrap.
          </p>
        </div>

        {/* ================= FAQ ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Frequently Asked Questions
          </h3>

          <div className="accordion" id="balerFaq">
            {[
              {
                q: "What is the price of a metal scrap baler?",
                a: "Prices depend on model, compaction force, and customization. Contact us for a quotation.",
              },
              {
                q: "Which model is suitable for small scrap yards?",
                a: "BLM150 is ideal for medium volume operations.",
              },
              {
                q: "Can the baler handle heavy industrial scrap?",
                a: "Yes, BLM200 and BLM250 are designed for high-volume industrial metal scrap.",
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
                  data-bs-parent="#balerFaq"
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

export default Metalbaler;
