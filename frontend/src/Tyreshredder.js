import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

import shredderhdimg from "./images/Shedder _ Final PNG.png";
import shredderhd from "./images/shredder_hd.jpg";
import shredderhd1 from "./images/shredder_hd1.jpg";

function Tyreshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: 'SHT6000',
      type: 'Shredder',
      power: '120 - 160 HP',
      system: 'Robust Hydraulic System',
      feature: 'Our SHT6000 is equipped with user-friendly controls.',
    },
    {
      name: 'SHT8000',
      type: 'Shredder',
      power: '160 - 220 HP',
      feature: 'Our SHT8000 is equipped with user-friendly controls.',
    },
    {
      name: 'SHT12000',
      type: 'Shredder',
      power: '220 - 280 HP',
      system: 'Robust Hydraulic System',
      feature: 'Our SHT12000 is equipped with user-friendly controls.',
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
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Primary Shredders For Tyres</h1>
        </div>
      </header>

      <div className="container text-center my-4 balerbackimg">
        <p>
          Our advanced shredders are engineered for powerful, efficient, and user-friendly tyre shredding operations.
          These machines are built for performance with high horsepower and robust hydraulic systems.
        </p>

        {/* Buttons */}
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

export default Tyreshredder;
