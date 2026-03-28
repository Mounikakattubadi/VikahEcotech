import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";
import Carousel from "react-bootstrap/Carousel";
import mainSpecImage from "../../images/Applications/apppcb1.jpg";
import balerImage from "../../images/Applications/apppcb6.webp";
import img1 from "../../images/Applications/apppcb3.jpg";

import SEOHelmet from "../../components/SEO/SEOHelmet";
import styles from "../../Styles/Topheadings.module.css";

function Pcb() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: "BLC30",
      type: "Paper & Cardboard Baler",
      force: "30 Ton",
      weight: "120–200 kg",
      note: "Compact paper and cardboard baler suitable for small recycling units and warehouses handling light packaging waste.",
    },
    {
      name: "BLC40",
      type: "Paper & Cardboard Baler",
      force: "40 Ton",
      weight: "200–250 kg",
      note: "Mid-capacity baler designed for carton recycling, corrugated boxes, and commercial packaging waste.",
    },
    {
      name: "BLC50",
      type: "Paper & Cardboard Baler",
      force: "50 Ton",
      weight: "250–350 kg",
      note: "Heavy-duty industrial baler for high-volume paper and cardboard recycling operations.",
    },
  ];

  const products = [
    {
      name: "BLC30",
      description:
        "Paper & Cardboard Baler BLC30 with 30 Ton force for light packaging waste.",
      image: "https://vikahecotech.com/images/baler_bg.png",
      url: "https://vikahecotech.com/blc30",
      price: "2200000",
    },
    {
      name: "BLC40",
      description:
        "Paper & Cardboard Baler BLC40 ideal for carton recycling and packaging waste.",
      image: "https://vikahecotech.com/images/baler.png",
      url: "https://vikahecotech.com/blc40",
      price: "2800000",
    },
    {
      name: "BLC50",
      description:
        "Heavy-duty Paper & Cardboard Baler BLC50 for high-volume recycling.",
      image: "https://vikahecotech.com/images/baler.png",
      url: "https://vikahecotech.com/blc50",
      price: "3200000",
    },
  ];

  const carouselImages = [mainSpecImage, balerImage, img1];

  const [selected, setSelected] = useState(balers[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <div>
      <SEOHelmet
        title="Paper & Cardboard Baler Machines for Recycling | Vikah Ecotech"
        description="Vikah Ecotech manufactures paper and cardboard baler machines for recycling cartons and packaging waste."
        keywords="paper baler machine, cardboard baler machine, carton baler"
        canonical="https://vikahecotech.com/pcb"
        pageName="Paper & Cardboard Baler Machines"
        products={products}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          { name: "Balers", url: "https://vikahecotech.com/balers" },
          {
            name: "Paper & Cardboard Balers",
            url: "https://vikahecotech.com/pcb",
          },
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
              src={mainSpecImage}
              alt="Paper Cardboard Baler Machine"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Paper & Cardboard Balers</h1>

                <p className={styles.heroSubtitle}>
                  Efficient baler machines designed to compress paper, cartons,
                  and cardboard waste into compact bales for easy recycling and
                  transportation.
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
              src={balerImage}
              alt="Industrial Cardboard Baler"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Industrial Cardboard Balers
                </h1>

                <p className={styles.heroSubtitle}>
                  Heavy-duty balers ideal for recycling warehouses, packaging
                  industries, and large-scale carton waste management.
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
              src={img1}
              alt="Hydraulic Paper Baler"
            />

            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Hydraulic Paper Balers</h1>

                <p className={styles.heroSubtitle}>
                  Advanced hydraulic compression technology designed for
                  high-volume paper and packaging waste recycling.
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
                Paper & Cardboard Baler Machines Manufacturer in India
              </h2>

              <p
                className="lead mb-3"
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#2d3748",
                }}
              >
                Vikah Ecotech manufactures hydraulic paper & cardboard baler
                machines for efficient recycling of cartons, corrugated
                cardboard, office paper, and packaging waste. Our balers are
                engineered for high performance, durability, and reliable
                operation in industrial recycling plants and commercial waste
                management facilities.
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
                Built with reinforced steel and high-pressure hydraulic systems,
                our balers provide consistent compression, reduce storage
                requirements, and improve recycling efficiency. They are
                suitable for warehouses, printing units, recycling plants, and
                large commercial operations.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#4a5568",
                }}
              >
                Available in multiple tonnage options including 30 Ton, 40 Ton,
                and 50 Ton models (BLC30, BLC40, BLC50), Vikah Ecotech paper
                balers ensure reliable performance, low maintenance, and long
                service life in demanding environments.
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
              Available Paper & Cardboard Baler Models
            </h3>

            {/* ================= MODEL BUTTONS (centered, single row) ================= */}
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {[
                {
                  name: "BLC30",
                  type: "Paper & Cardboard Baler",
                  force: "30 Ton",
                  weight: "120–200 kg",
                  note: "Compact paper and cardboard baler suitable for small recycling units and warehouses handling light packaging waste.",
                },
                {
                  name: "BLC40",
                  type: "Paper & Cardboard Baler",
                  force: "40 Ton",
                  weight: "200–250 kg",
                  note: "Mid-capacity baler designed for carton recycling, corrugated boxes, and commercial packaging waste.",
                },
                {
                  name: "BLC50",
                  type: "Paper & Cardboard Baler",
                  force: "50 Ton",
                  weight: "250–350 kg",
                  note: "Heavy-duty industrial baler for high-volume paper and cardboard recycling operations.",
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
                    minWidth: "100px",
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
                            alt={`${selected.name} paper & cardboard baler ${i + 1}`}
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
                    {selected.name} Paper & Cardboard Baler
                  </h4>

                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item bg-transparent">
                      <strong>Type:</strong> {selected.type}
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Compaction Force:</strong> {selected.force}
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Baler Weight:</strong> {selected.weight}
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
                    Read more about {selected.name} Paper & Cardboard Baler
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= APPLICATIONS ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Applications of Paper & Cardboard Balers
          </h3>
          <p className="text-center mb-4">
            Our hydraulic paper & cardboard balers are widely used in recycling
            plants, warehouses, printing units, commercial facilities, and
            municipal paper waste collection centers where high-density
            compaction is required.
          </p>

          <div className="row text-center">
            {[
              "Cardboard Recycling Plants",
              "Printing & Packaging Units",
              "Office Paper Waste Management",
              "Warehouses & Storage Facilities",
              "Commercial Paper & Packaging Recycling",
              "Municipal Collection Centers",
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
            Why Choose Vikah Ecotech Paper & Cardboard Balers?
          </h3>

          <p>
            Vikah Ecotech stands out as a trusted paper & cardboard baler
            manufacturer in India due to our commitment to quality engineering,
            durability, and industrial performance. Our machines are designed
            for continuous operation, low maintenance, and high-density baling.
          </p>

          <ul>
            <li>Heavy-duty hydraulic cylinders for powerful compaction</li>
            <li>Energy-efficient and low power consumption design</li>
            <li>Available in BLC30, BLC40 & BLC50 models</li>
            <li>
              Customizable bale dimensions for various paper/cardboard types
            </li>
            <li>Strong nationwide installation and after-sales support</li>
          </ul>
        </div>

        {/* ================= TECHNICAL FEATURES ================= */}
        <div className="container mb-5">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#2f855a" }}>
            Technical Features
          </h3>

          <p>
            Our paper & cardboard balers are engineered with precision hydraulic
            systems that ensure uniform pressure distribution and high-density
            bale formation. The reinforced steel frame construction provides
            structural stability during heavy compaction cycles. These balers
            are suitable for compressing office paper, cartons, corrugated
            cardboard, and packaging scrap.
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
                q: "What is the price of a paper & cardboard baler machine?",
                a: "The price depends on tonnage, compaction force, automation, and customization requirements. Contact us for a detailed quotation.",
              },
              {
                q: "Which model is suitable for office & small commercial units?",
                a: "BLC30 is ideal for smaller volumes of paper & cardboard recycling.",
              },
              {
                q: "Can the baler handle large corrugated cardboard cartons?",
                a: "Yes, BLC40 and BLC50 are suitable for high-volume industrial cardboard scrap.",
              },
              {
                q: "Do you provide installation and after-sales support?",
                a: "Yes, we provide nationwide installation guidance and long-term service support across India.",
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

export default Pcb;
