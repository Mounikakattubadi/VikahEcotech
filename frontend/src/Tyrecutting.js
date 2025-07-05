import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tyrecutting.css';
import './Models.css'; // Shared styles
import tyrecimage from "./images/tyrecutting1.jpg";
import tyrecimage2 from "./images/tyrecutting2.webp";
import tyrecimage3 from "./images/tyrecutting3.jpg";

function Tyrecutting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machines = [
    {
      name: 'TCPCR100',
      type: 'Tyre Cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      pressure: '3000 PSI',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage,
    },
    {
      name: 'TCTB100',
      type: 'Tyre Cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage2,
    },
    {
      name: 'TCOTR100',
      type: 'Tyre Cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage3,
    },
  ];

  const [selected, setSelected] = useState(machines[0]);

  return (
    <div>
      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Tyre Cutting Machines</h1>
        </div>
      </header>

      {/* Description */}
      <div className="container text-center my-4 balerbackimg">
        <p className="">
          At Vikah Ecotech, we engineer advanced tyre cutting machines designed for high-performance and precision.
          Our machines are crafted to meet the industrial demands of efficient rubber processing, ensuring both productivity and durability.
        </p>

        {/* Tab Buttons */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {machines.map((machine, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${selected.name === machine.name ? 'active' : ''}`}
              onClick={() => setSelected(machine)}
            >
              {machine.name}
            </button>
          ))}
        </div>

        {/* Selected Machine Info */}
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-4 text-center">
            <img src={selected.image} alt={selected.name} className="img-fluid rounded machine-image" />
          </div>
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>
            <ul className="list-unstyled">
              <li><strong>Type:</strong> {selected.type}</li>
              <li><strong>Size:</strong> {selected.size}</li>
              {selected.pressure && <li><strong>Pressure:</strong> {selected.pressure}</li>}
              {selected.panel && <li><strong>Panel:</strong> {selected.panel}</li>}
              <li><strong>Power Range:</strong> {selected.power}</li>
            </ul>
            <Link to={`/${selected.name.toLowerCase()}`} className="btn btn-outline-success mt-3">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <Row className="text-center get-in-touch-section text-white py-5 rounded m-0">
        <Col>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            For more information about our products and services, please visit our{' '}
            <Link to="/ourproducts" className="fw-bold text-white text-decoration-underline">product range</Link> or reach us at{' '}
            <a href="mailto:info@vikahecotech.com" className="text-white text-decoration-underline">info@vikahecotech.com</a>.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Tyrecutting;
