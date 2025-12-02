import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

import shredderhd from "./images/R1.png";
import shredderhd1 from "./images/R2.png";
import shredderhdimg from "./images/R4.jpg";

function Rasper_secondaryshredders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: 'RST4000',
      type: 'Secondary Shredder',
      power: '180 HP (132 kW)',
      Voltage: 'As per Customers Requirement',
      Drive: 'ABB 160kW (H.D.), ACS580, 363A SIZE: R9 ,580-01-360A-4+P944+3B SDT.',
    },
    {
      name: 'RST6000',
      type: 'Secondary Shredder',
      power: '180 - 200 HP',
      Voltage: 'As per Customers Requirement',
    },
  ];

  // Shared carousel images
  const carouselImages = [shredderhd, shredderhd1, shredderhdimg];

  const [selected, setSelected] = useState(shredders[0]);

  return (
    <div>
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Secondary Shredders</h1>
        </div>
      </header>

      <div className="container text-center my-4 balerbackimg">
        <p>
          The Rasper Models are advanced tyre processing machines designed for efficient recycling of shredded tyres.
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

          {/* CAROUSEL */}
          <div className="col-md-6 mb-4">
            <div id="rasperCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {carouselImages.map((img, idx) => (
                  <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                    <img src={img} className="d-block w-100 rasper-carousel-img" alt="Shredder" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#rasperCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#rasperCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>

          {/* INFO */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>

            <ul className="list-unstyled">
              <li><strong>Type:</strong> {selected.type}</li>
              <li><strong>Power Range:</strong> {selected.power}</li>
              {selected.Voltage && <li><strong>Voltage:</strong> {selected.Voltage}</li>}
              {selected.Drive && <li><strong>Drive:</strong> {selected.Drive}</li>}
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

export default Rasper_secondaryshredders;
