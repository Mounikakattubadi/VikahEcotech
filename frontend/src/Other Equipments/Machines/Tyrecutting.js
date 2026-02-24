import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";
import tyrecimage from "../../images/tyrecutting1.png";
import tyrecimage2 from "../../images/tyrecutting2.webp";
import tyrecimage3 from "../../images/tyrecutting3.jpg";
import SEOHelmet from "../../components/SEO/SEOHelmet";
import RelatedEquipments from "./RelatedEquipments";

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
      url: 'https://vikahecotech.com/tcpcr100',
      description: 'High performance tyre cutting machine for PCR tyres.',
    },
    {
      name: 'TCTB100',
      type: 'Tyre Cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage2,
      url: 'https://vikahecotech.com/tctb100',
      description: 'Efficient tyre cutting solution for truck and bus tyres.',
    },
    {
      name: 'TCOTR100',
      type: 'Tyre Cutting',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrecimage3,
      url: 'https://vikahecotech.com/tcotr100',
      description: 'Heavy-duty OTR tyre cutting machine for industrial applications.',
    },
  ];

  const [selected, setSelected] = useState(machines[0]);

  return (
    <div>

      {/* ===== SEO ===== */}
      <SEOHelmet
        title="Tyre Cutting Manufacturer in India | Vikah Ecotech"
        description="Vikah Ecotech is a leading tyre cutting machine manufacturer in India. We offer high-performance tyre cutting machines for PCR, TBR, and OTR tyres with durable design and industrial efficiency."
        keywords="Tyre cutting machine manufacturer in India, tyre cutter machine, tyre recycling machine India, PCR tyre cutting machine, OTR tyre cutter, rubber processing machines"
        canonical="https://vikahecotech.com/tyrecutting"
        pageName="Tyre Cutting Machines"
        product={{
          name: "Tyre Cutting Machine",
          description: "High-performance industrial tyre cutting machines by Vikah Ecotech, designed for PCR, TBR, and OTR tyres. Durable, precise, and ideal for efficient tyre recycling and rubber processing.",
          image: "https://vikahecotech.com/logo_vk.png", // main image of the first machine
          url: "https://vikahecotech.com/tyrecutting",
          sku: "VKE-TC-01",
          category: "Tyre Recycling Machinery",
        }}

        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com/" },
           { name: "Other Equipment", url: "https://vikahecotech.com/other-equipment" },
          { name: "Tyre Cutting Machines", url: "https://vikahecotech.com/tyrecutting" },
        ]}
      />

      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Tyre Cutting Machines</h1>
        </div>
      </header>

      {/* Description */}
      <div className="container text-center my-4 balerbackimg">
        <p>
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

      {/* ===== INTRO ===== */}
      <div className="tbf-intro container text-center my-4">
        <p className="mt-3 fw-semibold text-center">
          Our Tyre Cutting Machines are part of the{" "}
          <a href="/other-equipment" className="fw-bold text-decoration-none">
            Heavy-Duty Tyre Recycling & Industrial Cutting Equipment
          </a>{" "}
          category, engineered to deliver precise cutting performance for PCR, TBR, and OTR tyres with maximum efficiency and durability.
        </p>
      </div>

      {/* RelatedEquipments */}
      <RelatedEquipments current="/tyrecutting" />

      {/* Get in Touch Section */}
      <Row className="text-center get-in-touch-section text-white py-5 rounded m-5">
        <Col>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            For more information about our products and services, please visit our{' '}
            <a href="/ourproducts" className="fw-bold text-white text-decoration-underline">
              product range
            </a>
            <span> or reach us at </span>
            <a href="mailto:info@vikahecotech.com" className="text-white text-decoration-underline">
              info@vikahecotech.com
            </a>.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Tyrecutting;
