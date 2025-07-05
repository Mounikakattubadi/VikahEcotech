import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';
import Balerimg from "./images/baler.png";
import Baler1 from "./images/baler1.png";
import Baler2 from "./images/baler2.png";

function Tyrescrapbaler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: 'BLT150',
      type: 'Baler',
      force: '150 Ton',
      weight: '9000 kg',
      note: 'Operators can easily and safely operate the BLT-150.',
      image: Balerimg,
    },
    {
      name: 'BLT200',
      type: 'Baler',
      force: '200 Ton',
      weight: '9000 kg',
      note: 'Our BLT-200 is engineered to efficiently compress.',
      image: Baler1,
    },
    {
      name: 'BLT250',
      type: 'Baler',
      force: '250 Ton',
      weight: '11000 kg',
      note: 'Operators can easily and safely operate the BLT-250.',
      image: Baler2,
    },
  ];

  const [selected, setSelected] = useState(balers[0]);

  return (
    <div>
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Tyre Scrap Balers</h1>
        </div>
      </header>

      {/* Description */}
      <div className="container text-center my-4 balerbackimg">
        <p className=" ">
          Our powerful balers are engineered to handle high compaction requirements for tyre scrap and other heavy-duty recycling processes.
          Built for safety, efficiency, and durability, these machines deliver unmatched performance in industrial environments.
        </p>

        {/* Tab Buttons */}
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

        {/* Selected Baler Info */}
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-4">
            <img src={selected.image} alt={selected.name} className="img-fluid rounded machine-image" />
          </div>
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

export default Tyrescrapbaler;
