import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import mainSpecImage from '../../images/Applications/apppcb1.jpg';
import balerImage from '../../images/Applications/apppcb6.webp';
import img1 from '../../images/Applications/apppcb3.jpg';

function Pcb() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Baler Models
  const balers = [
    {
      name: 'BLC30',
      type: 'Paper & Cardboard Baler',
      force: '30 Ton',
      weight: '120-200 kg',
      note: 'Compact design for small recycling units handling paper and cardboard waste.',
    },
    {
      name: 'BLC40',
      type: 'Paper & Cardboard Baler',
      force: '40 Ton',
      weight: '200-250 kg',
      note: 'Efficient mid-size model ideal for carton and packaging recycling centers.',
    },
    {
      name: 'BLC50',
      type: 'Paper & Cardboard Baler',
      force: '50 Ton',
      weight: '250-350 kg',
      note: 'High-performance industrial baler for heavy-duty paper and cardboard waste.',
    },
  ];

  // Same 3-carousel images for all models
  const carouselImages =  [ mainSpecImage, balerImage, img1];

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
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Paper & Cardboard Balers</h1>
        </div>
      </header>

      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech manufactures reliable and efficient balers for paper, cardboard, and packaging materials.
          Designed for sustainability, our machines help reduce waste volume, transportation costs, and environmental impact.
        </p>

        {/* Model Tabs */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {balers.map((baler, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${selected.name === baler.name ? 'active' : ''}`}
              onClick={() => setSelected(baler)}
            >
              {baler.name}
            </button>
          ))}
        </div>

        {/* MAIN SECTION */}
        <div className="row justify-content-center align-items-center">

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

          {/* INFO SECTION */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>

            <ul className="list-unstyled">
              <li><strong>Type:</strong> {selected.type}</li>
              <li><strong>Compaction Force:</strong> {selected.force}</li>
              <li><strong>Baler Weight:</strong> {selected.weight}</li>
              <li><strong>Note:</strong> {selected.note}</li>
            </ul>

            <Link to={`/${selected.name.toLowerCase()}`} className="btn btn-outline-success mt-3">
              Read More
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pcb;
