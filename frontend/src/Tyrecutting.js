import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // ✅ Import Link for routing
import './Tyrecutting.css';
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
      type: 'Tyre cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      pressure: '3000 PSI',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage
    },
    {
      name: 'TCTB100',
      type: 'Tyre cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage2
    },
    {
      name: 'TCOTR100',
      type: 'Tyre cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage3
    },
  ];

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Vikah Ecotech Tyre Cutting Machines</h1>
          <p className="lead">
            At Vikah Ecotech, we engineer advanced tyre cutting machines designed for high-performance and precision. 
            Our machines are crafted to meet the industrial demands of efficient rubber processing, ensuring both productivity and durability.
          </p>
        </div>
      </header>

      <section className="balerbackimg">
        <div className="container py-5">
          {machines.map((machine, index) => (
            <div className={`row align-items-center machine-row ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={index}>
              <div className="col-md-6 mb-4 text-center">
                <img src={machine.image} alt={machine.name} className="machine-image" />
              </div>
              <div className="col-md-6 mb-4">
                <div className="machine-content">
                  <h3 className="machine-title">{machine.name}</h3>
                  <ul className="list-unstyled">
                    <li><strong>Type:</strong> {machine.type}</li>
                    <li><strong>Size:</strong> {machine.size}</li>
                    {machine.pressure && <li><strong>Pressure:</strong> {machine.pressure}</li>}
                    {machine.panel && <li><strong>Panel:</strong> {machine.panel}</li>}
                    <li><strong>Power Range:</strong> {machine.power}</li>
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
      <Row className="text-center get-in-touch-section text-white py-5 rounded">
          <Col>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p>
              For more information about our products and services, please visit our{" "}
              <a href="/ourproducts" className="fw-bold">product range</a> or reach us at{" "}
              <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a>.
            </p>
          </Col>
        </Row>
    </div>
  );
}

export default Tyrecutting;
