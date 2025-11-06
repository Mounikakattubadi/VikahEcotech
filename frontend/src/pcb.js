import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

// Importing images (replace with your actual cardboard baler images)
import Cardboard1 from './images/baler.png';
import Cardboard2 from './images/baler1.png';
import Cardboard3 from './images/baler2.png';

function Pcb() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Baler Models Data
  const balers = [
    {
      name: 'BLC30',
      type: 'Paper & Cardboard Baler',
      force: '30 Ton',
      weight: '120-200 kg',
      note: 'Compact design for small recycling units handling paper and cardboard waste.',
      image: Cardboard1,
    },
    {
      name: 'BLC40',
      type: 'Paper & Cardboard Baler',
      force: '40 Ton',
      weight: '200-250 kg',
      note: 'Efficient mid-size model ideal for carton and packaging recycling centers.',
      image: Cardboard2,
    },
    {
      name: 'BLC50',
      type: 'Paper & Cardboard Baler',
      force: '50 Ton',
      weight: '250-350 kg',
      note: 'High-performance industrial baler for heavy-duty paper and cardboard waste.',
      image: Cardboard3,
    },
  ];

  const [selected, setSelected] = useState(balers[0]);

  return (
    <div>
      {/* Header Section */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Paper & Cardboard Balers</h1>
        </div>
      </header>

      {/* Description Section */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech manufactures reliable and efficient balers for paper, cardboard, and packaging materials.
          Designed for sustainability, our machines help reduce waste volume, transportation costs, and environmental impact.
        </p>

        {/* Model Selector Buttons */}
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

        {/* Selected Model Info */}
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
