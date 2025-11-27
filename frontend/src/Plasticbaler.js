import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

import Plastic1 from './images/baler.png';
import Plastic2 from './images/baler1.png';
import Plastic3 from './images/baler2.png';
import mainSpecImage from './images/Applications/plas14.webp';
import balerImage from './images/Applications/plas16.jpg';
import img1 from './images/Applications/plas18.jpeg';

function Plasticbaler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: 'BLP30',
      type: 'Plastic Baler',
      force: '30 Ton',
      weight: '150-250 kg',
      note: 'Compact design for lightweight plastic waste such as PET bottles and films.',
      image: mainSpecImage,
    },
    {
      name: 'BLP40',
      type: 'Plastic Baler',
      force: '40 Ton',
      weight: '200-350 kg',
      note: 'Ideal for medium-density plastic waste management applications.',
      image: balerImage,
    },
    {
      name: 'BLP50',
      type: 'Plastic Baler',
      force: '50 Ton',
      weight: '350-500 kg',
      note: 'Heavy-duty design for industrial-scale plastic recycling operations.',
      image: img1,
    },
  ];

  const [selected, setSelected] = useState(balers[0]);

  return (
    <div>
      {/* Header Section */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Plastic Balers</h1>
        </div>
      </header>

      {/* Description Section */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech manufactures efficient, eco-friendly plastic balers designed for
          PET, HDPE, LDPE, and other types of plastic waste. Our balers ensure optimal compression,
          easy operation, and sustainable recycling solutions for various industries.
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

        {/* Selected Model Info */}
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

export default Plasticbaler;
