import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom
import './Tyrecutting.css';
import Balerimg from "./images/baler.png";
import Baler1 from "./images/baler1.png";
import Baler2 from "./images/baler2.png";

function Tyrescrapbaler() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
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

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Vikah Ecotech Tyre Scrap Balers</h1>
          <p className="lead">
            Our powerful balers are engineered to handle high compaction requirements for tyre scrap and other heavy-duty recycling processes.
            Built for safety, efficiency, and durability, these machines deliver unmatched performance in industrial environments.
          </p>
        </div>
      </header>

      <section className="balerbackimg">
        <div className="container py-5">
          {balers.map((baler, index) => (
            <div className={`row align-items-center machine-row ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={index}>
              <div className="col-md-6 mb-4 text-center">
                <img src={baler.image} alt={baler.name} className="machine-image" />
              </div>
              <div className="col-md-6 mb-4">
                <div className="machine-content">
                  <h3 className="machine-title">{baler.name}</h3>
                  <ul className="list-unstyled">
                    <li><strong>Type:</strong> {baler.type}</li>
                    <li><strong>Compaction Force:</strong> {baler.force}</li>
                    <li><strong>Baler Weight:</strong> {baler.weight}</li>
                    <li><strong>Note:</strong> {baler.note}</li>
                  </ul>
                  <Link to={`/${baler.name.toLowerCase()}`} className="btn btn-outline-success mt-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tyrescrapbaler;
