import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import shredderhd from "../../images/Applications/shredp1.png";
import shredderhd1 from "../../images/Applications/shredp4.webp";
import shredderhdimg from "../../images/Applications/shredp2.jpeg";

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

  const carouselImages = [shredderhd, shredderhd1, shredderhdimg];

  const [selected, setSelected] = useState(shredders[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );

  return (
    <div>
      {/* ================= SEO HELMET ================= */}
      <Helmet>
        <title>
          Plastic Shredder Machines Manufacturer in India | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures plastic shredder machines for recycling PET, HDPE, LDPE, and industrial plastic waste. Primary plastic shredders designed for high performance and durability."
        />

        <meta
          name="keywords"
          content="plastic shredder machine, plastic recycling shredder, primary plastic shredder, PET shredder, HDPE shredder, plastic shredder manufacturer india"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/plasticshredder"
        />

        {/* Category Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Plastic Shredder Machines",
            url: "https://vikahecotech.com/plasticshredder",
            description:
              "Primary plastic shredder machines designed for recycling PET, HDPE, LDPE, and industrial plastic waste.",
            isPartOf: {
              "@type": "WebSite",
              name: "Vikah Ecotech",
              url: "https://vikahecotech.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Vikah Ecotech",
              logo: {
                "@type": "ImageObject",
                url: "https://vikahecotech.com/favicon.ico",
              },
            },
          })}
        </script>
      </Helmet>

      {/* ================= HEADER ================= */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">
            Plastic Shredder Machines
          </h1>
          <p className="lead">
            Primary Shredders for Plastic Recycling Applications
          </p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="container text-center my-5 balerbackimg">
        <h2 className="mb-3">
          Industrial Plastic Shredders for Recycling
        </h2>

        <p>
          Vikah Ecotech manufactures primary plastic shredder machines designed
          for efficient size reduction of PET bottles, HDPE containers, LDPE
          films, packaging plastics, and industrial plastic scrap. Our plastic
          shredders feature high-torque hydraulic systems, robust cutting
          chambers, and durable blades to ensure consistent performance, low
          maintenance, and long service life in demanding recycling operations.
        </p>

        {/* ================= MODEL TABS ================= */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {shredders.map((machine, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${
                selected.name === machine.name ? "active" : ""
              }`}
              onClick={() => setSelected(machine)}
            >
              {machine.name}
            </button>
          ))}
        </div>

        {/* ================= MAIN SECTION ================= */}
        <div className="row justify-content-center align-items-center">
          {/* Carousel */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                alt={`${selected.name} plastic shredder machine for recycling`}
                className="baler-carousel-img carousel-img"
                loading="lazy"
              />
              <button
                type="button"
                className="carousel-btn left"
                onClick={prevSlide}
                aria-label="Previous image"
              >
                ❮
              </button>
              <button
                type="button"
                className="carousel-btn right"
                onClick={nextSlide}
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
          </div>

          {/* INFO */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">
              {selected.name} Plastic Shredder
            </h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Power Range:</strong>{" "}
                {selected.power}
              </li>
              <li>
                <strong>System:</strong>{" "}
                {selected.system}
              </li>
              <li>
                <strong>Application:</strong>{" "}
                {selected.feature}
              </li>
            </ul>

            <Link
              to={`/${selected.name.toLowerCase()}`}
              className="btn btn-outline-success mt-3"
            >
              Read more about {selected.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plasticshredder;
