import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import metalImg1 from "../../images/Applications/appm1.jpg";
import metalImg2 from "../../images/Applications/appm4.jpg";
import metalImg3 from "../../images/Applications/appm6.jpg";
import SEOHelmet from "../../components/SEO/SEOHelmet";


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
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Metal Scrap Baler Machines</h1>
          <p className="lead">High-Compaction Solutions for Metal Recycling</p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="container text-center my-5 balerbackimg">
        <h2 className="mb-3">Industrial Metal Balers for Scrap Recycling</h2>

        <p>
          Vikah Ecotech manufactures metal scrap baler machines designed to
          efficiently compress ferrous and non-ferrous metals such as aluminum,
          copper, brass, mild steel, and stainless steel. Our hydraulic metal
          balers deliver high compaction force, rugged construction, and
          consistent performance for metal recycling plants, foundries, and
          industrial scrap yards.
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
                alt={`${selected.name} metal scrap baler machine for recycling`}
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
            <h3 className="machine-title">{selected.name} Metal Scrap Baler</h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Compaction Force:</strong> {selected.force}
              </li>
              <li>
                <strong>Bale Weight:</strong> {selected.weight}
              </li>
              <li>
                <strong>Application:</strong> {selected.note}
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

export default Metalbaler;
