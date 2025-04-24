import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for routing
import './Tyrecutting.css';
import shredderhdimg from "./images/Shedder _ Final PNG.png";
import shredderhd from "./images/shredder_hd.jpg";
import shredderhd1 from "./images/shredder_hd1.jpg";

function Tyreshredder() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  
  const shredders = [
    {
      name: 'SHT6000',
      type: 'Shredder',
      power: '120 - 160 HP',
      system: 'Robust Hydraulic System',
      feature: 'Our SHT6000 is equipped with user-friendly controls.',
      image: shredderhdimg,
    },
    {
      name: 'SHT8000',
      type: 'Shredder',
      power: '160 - 220 HP',
      feature: 'Our SHT8000 is equipped with user-friendly controls.',
      image: shredderhd,
    },
    {
      name: 'SHT12000',
      type: 'Shredder',
      power: '220 - 280 HP',
      system: 'Robust Hydraulic System',
      feature: 'Our SHT12000 is equipped with user-friendly controls.',
      image: shredderhd1,
    },
  ];

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Vikah Ecotech Primary Shredders</h1>
          <p className="lead">
            Our advanced shredders are engineered for powerful, efficient, and user-friendly tyre shredding operations.
            These machines are built for performance with high horsepower and robust hydraulic systems.
          </p>
        </div>
      </header>

      <section className="balerbackimg">
        <div className="container py-5">
          {shredders.map((machine, index) => (
            <div className={`row align-items-center machine-row ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={index}>
              <div className="col-md-6 mb-4 text-center">
                <img src={machine.image} alt={machine.name} className="machine-image" />
              </div>
              <div className="col-md-6 mb-4">
                <div className="machine-content">
                  <h3 className="machine-title">{machine.name}</h3>
                  <ul className="list-unstyled">
                    <li><strong>Type:</strong> {machine.type}</li>
                    <li><strong>Power Range:</strong> {machine.power}</li>
                    {machine.system && <li><strong>System:</strong> {machine.system}</li>}
                    <li><strong>Feature:</strong> {machine.feature}</li>
                  </ul>
                  <Link to={`/${machine.name.toLowerCase()}`} className="btn btn-outline-success mt-3">
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

export default Tyreshredder;
