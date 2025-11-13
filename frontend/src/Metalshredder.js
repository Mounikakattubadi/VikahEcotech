import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

// 👉 Replace with real images
import metalImg1 from "./images/Shedder _ Final PNG.png";
import metalImg2 from "./images/shredder_hd.jpg";
import metalImg3 from "./images/shredder_hd1.jpg";

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
      image: metalImg1,
    },
    {
      name: 'SHM2200',
      type: 'Metal Shredder',
      power: '70 - 90 HP',
      system: 'High Torque Hydraulic System',
      feature: 'SHM2200 offers increased chamber size and shredding capacity for industrial metal processing.',
      image: metalImg2,
    },
    {
      name: 'SHM2600',
      type: 'Metal Shredder',
      power: '90 - 120 HP',
      system: 'Dual Shaft Cutting + Heavy Duty Rotor',
      feature: 'SHM2600 is designed for large-scale shredding of ferrous & non-ferrous scrap metals.',
      image: metalImg3,
    },
  ];

  const [selected, setSelected] = useState(shredders[0]);

  return (
    <div>
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Metal Shredders</h1>
        </div>
      </header>

      {/* Introduction */}
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

        {/* Selected Model Details */}
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src={selected.image}
              alt={selected.name}
              className="img-fluid rounded machine-image"
            />
          </div>

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
