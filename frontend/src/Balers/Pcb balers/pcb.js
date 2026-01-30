import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import mainSpecImage from "../../images/Applications/apppcb1.jpg";
import balerImage from "../../images/Applications/apppcb6.webp";
import img1 from "../../images/Applications/apppcb3.jpg";

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
      note:
        "Compact paper and cardboard baler suitable for small recycling units and warehouses handling light packaging waste.",
    },
    {
      name: "BLC40",
      type: "Paper & Cardboard Baler",
      force: "40 Ton",
      weight: "200–250 kg",
      note:
        "Mid-capacity baler designed for carton recycling, corrugated boxes, and commercial packaging waste.",
    },
    {
      name: "BLC50",
      type: "Paper & Cardboard Baler",
      force: "50 Ton",
      weight: "250–350 kg",
      note:
        "Heavy-duty industrial baler for high-volume paper and cardboard recycling operations.",
    },
  ];

  const carouselImages = [mainSpecImage, balerImage, img1];

  const [selected, setSelected] = useState(balers[0]);
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
          Paper & Cardboard Baler Machines for Recycling | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures paper and cardboard baler machines for recycling cartons, packaging waste, and corrugated boxes. Durable hydraulic balers for industrial and commercial recycling."
        />

        <meta
          name="keywords"
          content="paper baler machine, cardboard baler machine, paper cardboard baler, carton baler, recycling baler for paper, cardboard baler manufacturer india"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/pcb"
        />

        {/* Category Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Paper & Cardboard Baler Machines",
            url: "https://vikahecotech.com/pcb",
            description:
              "Paper and cardboard baler machines designed for recycling cartons, corrugated boxes, and packaging waste.",
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
            Paper & Cardboard Baler Machines
          </h1>
          <p className="lead">
            Efficient Recycling Solutions for Paper & Packaging Waste
          </p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="container text-center my-5 balerbackimg">
        <h2 className="mb-3">
          Industrial Balers for Paper & Cardboard Recycling
        </h2>

        <p>
          Vikah Ecotech manufactures paper and cardboard baler machines designed
          for efficient recycling of cartons, corrugated cardboard, office paper,
          and packaging waste. Our hydraulic balers deliver high compaction,
          durable construction, and reliable performance for recycling plants,
          warehouses, printing units, and commercial waste management facilities.
        </p>

        {/* ================= MODEL TABS ================= */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {balers.map((baler, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${
                selected.name === baler.name ? "active" : ""
              }`}
              onClick={() => setSelected(baler)}
            >
              {baler.name}
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
                className="carousel-img baler-carousel-img"
                alt={`${selected.name} paper and cardboard baler machine for recycling`}
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

          {/* Info */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">
              {selected.name} Paper & Cardboard Baler
            </h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Compaction Force:</strong>{" "}
                {selected.force}
              </li>
              <li>
                <strong>Baler Weight:</strong>{" "}
                {selected.weight}
              </li>
              <li>
                <strong>Application:</strong>{" "}
                {selected.note}
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

export default Pcb;
