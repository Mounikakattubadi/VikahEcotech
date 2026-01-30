import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import mainSpecImage from "../../images/Applications/plas14.webp";
import balerImage from "../../images/Applications/plas16.jpg";
import img1 from "../../images/Applications/plas18.jpeg";

function Plasticbaler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: "BLP30",
      type: "Plastic Baler",
      force: "30 Ton",
      weight: "150-250 kg",
      note:
        "Compact design for lightweight plastic waste such as PET bottles, LDPE films, and packaging plastics.",
    },
    {
      name: "BLP40",
      type: "Plastic Baler",
      force: "40 Ton",
      weight: "200-350 kg",
      note:
        "Ideal for medium-density plastic waste including HDPE containers and mixed plastic scrap.",
    },
    {
      name: "BLP50",
      type: "Plastic Baler",
      force: "50 Ton",
      weight: "350-500 kg",
      note:
        "Heavy-duty plastic baler designed for industrial-scale recycling and waste management operations.",
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
      <Helmet>
        <title>
          Plastic Baler Machines Manufacturer in India | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Industrial plastic baler machines for PET, HDPE, LDPE and plastic waste recycling. Vikah Ecotech manufactures durable, hydraulic plastic balers for commercial and industrial use."
        />

        <meta
          name="keywords"
          content="plastic baler machine, plastic balers, plastic recycling baler, PET baler, HDPE baler, LDPE baler, plastic waste baler machine, plastic baler manufacturer in india"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/plasticbaler"
        />

        {/* Product Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Plastic Baler Machine",
            brand: {
              "@type": "Brand",
              name: "Vikah Ecotech",
            },
            description:
              "Industrial plastic baler machines for PET, HDPE, LDPE and plastic waste recycling.",
            category: "Recycling Machinery",
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">
            Plastic Baler Machines
          </h1>
          <p className="lead">
            Efficient Plastic Waste Recycling Solutions
          </p>
        </div>
      </header>

      <div className="container text-center my-5 balerbackimg">
        {/* Intro */}
        <h2 className="mb-3">
          Industrial Plastic Balers for Recycling
        </h2>

        <p>
          Vikah Ecotech manufactures high-performance plastic
          baler machines designed for efficient recycling of
          PET bottles, HDPE containers, LDPE films, packaging
          waste, and other plastic scrap materials. Our hydraulic
          plastic balers deliver consistent compression, durable
          construction, and easy operation for industrial recycling plants, commercial facilities, and waste management operations.
        </p>

        {/* Model Tabs */}
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

        {/* Main Section */}
        <div className="row justify-content-center align-items-center">
          {/* Carousel */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                className="carousel-img baler-carousel-img"
                alt={`${selected.name} plastic baler machine for recycling`}
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
              {selected.name} Plastic Baler Machine
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
              Read more about {selected.name} Plastic Baler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plasticbaler;
