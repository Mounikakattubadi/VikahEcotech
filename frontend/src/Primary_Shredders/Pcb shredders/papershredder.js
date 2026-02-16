import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import shredderhd from "../../images/Applications/shredpcb1.jpg";
import shredderhd1 from "../../images/Applications/shredpcb4.jpg";
import shredderhdimg from "../../images/Applications/shredpcb7.jpg";
import SEOHelmet from "../../components/SEO/SEOHelmet";

function Papershredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: "SHC6000",
      type: "Paper & Cardboard Shredder",
      power: "80 – 120 HP",
      system: "Dual Shaft Hydraulic Cutting System",
      feature:
        "Efficiently shreds office paper, cartons, and cardboard waste for recycling operations.",
    },
    {
      name: "SHC8000",
      type: "Paper & Cardboard Shredder",
      power: "120 – 180 HP",
      system: "Auto-Feed Conveyor System",
      feature:
        "Provides smooth, continuous shredding with automated feeding for commercial recycling facilities.",
    },
    {
      name: "SHC12000",
      type: "Heavy-Duty Paper & Cardboard Shredder",
      power: "180 – 240 HP",
      system: "Heavy-Duty Industrial Build",
      feature:
        "Designed for high-volume shredding of corrugated sheets, cartons, and bulky packaging waste.",
    },
  ];

  const carouselImages = [shredderhd, shredderhd1, shredderhdimg];

  const [selected, setSelected] = useState(shredders[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

    const products = [
    {
      name: "SHC6000",
      description:
        "Paper & Cardboard Shredder SHC6000 with 80–120 HP, ideal for office paper, cartons, and cardboard waste.",
      image: "https://vikahecotech.com/images/shredder_hd1.jpg",
      url: "https://vikahecotech.com/shc6000",
      price: "4500000",
    },
    {
      name: "SHC8000",
      description:
        "Paper & Cardboard Shredder SHC8000 with 120–180 HP featuring auto-feed conveyor system for commercial recycling.",
      image: "https://vikahecotech.com/images/st.jpeg",
      url: "https://vikahecotech.com/shc8000",
      price: "5800000",
    },
    {
      name: "SHC12000",
      description:
        "Heavy-duty Paper & Cardboard Shredder SHC12000 with 180–240 HP for high-volume shredding.",
      image: "https://vikahecotech.com/images/Shredder.png",
      url: "https://vikahecotech.com/shc12000",
      price: "7200000",
    },
  ];

  return (
    <div>
      {/* ================= SEO HELMET ================= */}
<SEOHelmet
        title="Paper & Cardboard Shredder Machines Manufacturer in India | Vikah Ecotech"
        description="Vikah Ecotech manufactures paper and cardboard shredder machines for recycling cartons, office paper and packaging waste."
        keywords="paper shredder machine, cardboard shredder machine, paper recycling shredder"
        canonical="https://vikahecotech.com/papershredder"
        pageName="Paper & Cardboard Shredder Machines"
        products={products}
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          { name: "Primary Shredders", url: "https://vikahecotech.com/primary-shredder" },
          { name: "Paper & Cardboard Shredders", url: "https://vikahecotech.com/papershredder" },
        ]}
      />

      {/* ================= HEADER ================= */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Paper & Cardboard Shredder Machines</h1>
          <p className="lead">
            Primary Shredders for Paper & Packaging Recycling
          </p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="container text-center my-5 balerbackimg">
        <h2 className="mb-3">
          Industrial Paper & Cardboard Shredders for Recycling
        </h2>

        <p>
          Vikah Ecotech manufactures primary paper and cardboard shredder
          machines designed to efficiently process office paper, corrugated
          cartons, packaging waste, and bulk cardboard materials. Our shredders
          feature high-torque hydraulic systems, robust cutting shafts, and
          durable industrial construction to ensure consistent performance, low
          maintenance, and long service life in demanding recycling
          environments.
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
                alt={`${selected.name} paper and cardboard shredder machine for recycling`}
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
              {selected.name} Paper & Cardboard Shredder
            </h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Power Range:</strong> {selected.power}
              </li>
              <li>
                <strong>System:</strong> {selected.system}
              </li>
              <li>
                <strong>Application:</strong> {selected.feature}
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

export default Papershredder;
