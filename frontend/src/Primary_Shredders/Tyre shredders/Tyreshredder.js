import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import shredderhdimg from "../../images/Shedder _ Final PNG.png";
import shredderhd from "../../images/shredder_hd.jpg";
import shredderhd1 from "../../images/shredder_hd1.jpg";
import { Helmet } from "react-helmet";

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

  return (
    <div>
      <Helmet>
        <title>Tyre Shredder Machine for Recycling | Vikah Ecotech</title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures heavy-duty tyre shredder machines designed for primary shredding of waste tyres in recycling plants. Reliable tyre shredders for industrial applications."
        />

        <meta
          name="keywords"
          content="tyre shredder machine, tyre shredding machine, tyre recycling shredder, primary tyre shredder, industrial tyre shredder"
        />

        <link rel="canonical" href="https://vikahecotech.com/tyreshredder" />
      </Helmet>
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Primary Shredders For Tyres</h1>
        </div>
      </header>
      <div className="container text-center my-4 balerbackimg">
        <p>
          Our primary tyre shredders are engineered for powerful, efficient, and
          continuous tyre shredding operations in recycling plants. Built with
          high horsepower drives and robust hydraulic systems, these industrial
          shredders deliver reliable performance for processing whole tyres into
          uniform shredded material for downstream recycling applications.
        </p>

        {/* Buttons */}
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

        {/* MAIN SECTION */}
        <div className="row justify-content-center align-items-center">
          {/* CAROUSEL (same style as Tyrescrapbaler) */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                alt="Plastic Shredder"
                className="baler-carousel-img carousel-img"
              />
              <button
                type="button"
                className="carousel-btn left"
                onClick={prevSlide}
              >
                ❮
              </button>
              <button
                type="button"
                className="carousel-btn right"
                onClick={nextSlide}
              >
                ❯
              </button>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Power Range:</strong> {selected.power}
              </li>
              {selected.system && (
                <li>
                  <strong>System:</strong> {selected.system}
                </li>
              )}
              <li>
                <strong>Feature:</strong> {selected.feature}
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

export default Tyreshredder;
