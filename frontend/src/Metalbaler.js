import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css';

// 👉 Replace with your real metal baler images
import Metal1 from './images/baler.png';
import Metal2 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg';
import Metal3 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg';
import metalImg1 from './images/Applications/appm1.jpg';
import metalImg2 from './images/Applications/appm4.jpg';
import metalImg3 from './images/Applications/appm6.jpg';

function Metalbaler() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const balers = [
    {
      name: 'BLM150',
      type: 'Metal Baler',
      force: '150 Ton',
      weight: '200–350 kg (per bale)',
      note: 'Designed for compressing light-to-medium ferrous & non-ferrous metal scrap.',
      image: metalImg1,
    },
    {
      name: 'BLM200',
      type: 'Metal Baler',
      force: '200 Ton',
      weight: '250–450 kg (per bale)',
      note: 'Ideal for medium-density steel scrap, alloy scrap, and industrial metal recycling.',
      image: metalImg2,
    },
    {
      name: 'BLM250',
      type: 'Metal Baler',
      force: '250 Ton',
      weight: '300–500 kg (per bale)',
      note: 'Heavy-duty baler engineered for high-volume ferrous & non-ferrous metal compaction.',
      image: metalImg3,
    },
  ];

  const [selected, setSelected] = useState(balers[0]);

  return (
    <div>
      {/* Header Section */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Metal Balers</h1>
        </div>
      </header>

      {/* Description Section */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech manufactures premium-grade metal scrap balers engineered for performance, durability, 
          and maximum compaction efficiency. Our machines are suitable for ferrous & non-ferrous metals such as 
          aluminum, copper, brass, mild steel, and stainless steel.
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
              <li><strong>Bale Weight:</strong> {selected.weight}</li>
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

export default Metalbaler;
