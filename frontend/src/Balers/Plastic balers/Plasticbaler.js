import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      note: "Compact design for lightweight plastic waste such as PET bottles and films.",
    },
    {
      name: "BLP40",
      type: "Plastic Baler",
      force: "40 Ton",
      weight: "200-350 kg",
      note: "Ideal for medium-density plastic waste management applications.",
    },
    {
      name: "BLP50",
      type: "Plastic Baler",
      force: "50 Ton",
      weight: "350-500 kg",
      note: "Heavy-duty design for industrial-scale plastic recycling operations.",
    },
  ];

  // Carousel images (same for all models)
  const carouselImages = [mainSpecImage, balerImage, img1];

  const [selected, setSelected] = useState(balers[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <div>
      {/* Header Section */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Plastic Balers</h1>
        </div>
      </header>

      {/* Description */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech manufactures efficient, eco-friendly plastic balers designed for
          PET, HDPE, LDPE, and other types of plastic waste. Our balers ensure optimal compression,
          easy operation, and sustainable recycling solutions for various industries.
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
          {/* CAROUSEL (custom, same idea as Tyrescrapbaler) */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                className="carousel-img baler-carousel-img"
                alt="Plastic Baler"
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
            <h3 className="machine-title">{selected.name}</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Compaction Force:</strong> {selected.force}
              </li>
              <li>
                <strong>Baler Weight:</strong> {selected.weight}
              </li>
              <li>
                <strong>Note:</strong> {selected.note}
              </li>
            </ul>
            <Link
              to={`/${selected.name.toLowerCase()}`}
              className="btn btn-outline-success mt-3"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plasticbaler;
