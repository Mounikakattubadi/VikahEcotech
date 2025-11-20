import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

import plasticImg1 from "./images/Shedder _ Final PNG.png";
import plasticImg2 from "./images/shredder_hd.jpg";
import plasticImg3 from "./images/shredder_hd1.jpg";

function Plasticshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const shredders = [
  {
    name: 'SHP100',
    type: 'Plastic Shredder',
    power: '100 - 140 HP',
    system: 'High Torque Hydraulic System',
    feature: 'Our SHP100 model ensures precise shredding for PET and HDPE plastics with efficient throughput.',
    image: plasticImg1,
  },
  {
    name: 'SHP150',
    type: 'Plastic Shredder',
    power: '140 - 200 HP',
    system: 'Dual Shaft Cutting Mechanism',
    feature: 'SHP150 provides higher cutting efficiency with superior handling for industrial-grade plastics.',
    image: plasticImg2,
  },
  {
    name: 'SHP200',
    type: 'Plastic Shredder',
    power: '200 - 260 HP',
    system: 'Heavy-Duty Hydraulic System',
    feature: 'Our SHP200 delivers unmatched shredding capacity for large-scale plastic recycling facilities.',
    image: plasticImg3,
  },
];


  const [selected, setSelected] = useState(shredders[0]);

  return (
    <div>
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Plastic Shredders</h1>
        </div>
      </header>

      {/* Introduction */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech manufactures advanced plastic shredders designed to handle PET, HDPE, LDPE, and other polymers efficiently.
          Our shredders are built with superior engineering, ensuring smooth operation, long lifespan, and low maintenance.
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

export default Plasticshredder;
