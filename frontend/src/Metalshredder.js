import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

// Model-specific main images
import shm_main from "./images/Applications/shredm1.jpg";
import shm_angle1 from "./images/Applications/shredm2.jpg";
import shm_angle2 from "./images/Applications/shredm3.jpg";

function Metalshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: 'SHM2000',
      type: 'Metal Shredder',
      power: '50 - 70 HP',
      system: 'Twin Shaft Heavy Duty System',
      feature: 'SHM2000 is ideal for small to mid-scale metal scrap shredding operations with high torque output.',
      image: shm_main,
    },
    {
      name: 'SHM4000',
      type: 'Metal Shredder',
      power: '70 - 90 HP',
      system: 'High Torque Hydraulic System',
      feature: 'SHM2400 offers increased chamber size and shredding capacity for industrial metal processing.',
      image: shm_angle1,
    },
  ];

  // SAME carousel images for every model (consistent design)
  const carouselImages = [shm_main, shm_angle1, shm_angle2];

  const [selected, setSelected] = useState(shredders[0]);

  return (
    <div>
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Metal Shredders</h1>
        </div>
      </header>

      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech manufactures high-performance metal shredders engineered for both ferrous
          and non-ferrous materials. Our shredders are built for strength, durability, and consistent
          shredding output for recycling yards and industrial applications.
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

          {/* CAROUSEL */}
          <div className="col-md-6 mb-4">
            <div id="metalShredCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {carouselImages.map((img, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={img} className="d-block w-100 baler-carousel-img" alt="Metal Shredder" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#metalShredCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#metalShredCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>

            <ul className="list-unstyled">
              <li><strong>Type:</strong> {selected.type}</li>
              <li><strong>Power Range:</strong> {selected.power}</li>
              {selected.system && <li><strong>System:</strong> {selected.system}</li>}
              <li><strong>Feature:</strong> {selected.feature}</li>
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

export default Metalshredder;
