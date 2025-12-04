import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

import shredderhd from "./images/Applications/shredpcb1.jpg";
import shredderhd1 from "./images/Applications/shredpcb4.jpg";
import shredderhdimg from "./images/Applications/shredpcb7.jpg";

function Papershredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: 'SHC6000',
      type: 'Paper & Cardboard Shredder',
      power: '80 - 120 HP',
      system: 'Dual Shaft Hydraulic Cutting System',
      feature: 'The SHC6000 efficiently shreds large volumes of paper and cardboard waste, ideal for recycling operations.',
      image: shredderhd,
    },
    {
      name: 'SHC8000',
      type: 'Paper & Cardboard Shredder',
      power: '120 - 180 HP',
      system: 'Auto-Feed Conveyor System',
      feature: 'The SHC8000 model ensures smooth shredding with automated feeding and robust cutting power.',
      image: shredderhd1,
    },
    {
      name: 'SHC12000',
      type: 'Paper & Cardboard Shredder',
      power: '180 - 240 HP',
      system: 'Heavy-Duty Industrial Build',
      feature: 'The SHC12000 handles high-volume shredding of corrugated sheets, cartons, and other bulky paper materials.',
      image: shredderhdimg,
    },
  ];

  // Shared carousel images (same for every model)
  const carouselImages = [shredderhd, shredderhd1, shredderhdimg];

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
      {/* Header Section */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Paper & Cardboard Shredders</h1>
        </div>
      </header>

      {/* Intro */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech's Paper & Cardboard Shredders are engineered to process office paper waste, corrugated boxes,
          and packaging materials with precision and high output. Our machines promote efficient recycling while minimizing manual effort.
        </p>

        {/* Model Buttons */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {shredders.map((machine, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${selected.name === machine.name ? 'active' : ''}`}
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

export default Papershredder;
