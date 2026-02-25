import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SEOHelmet from "../../components/SEO/SEOHelmet";
import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";
import tyrefoldingimg from "../../images/tyre_folding1.png";
import tyrefoldingimg1 from "../../images/tyre folding2.jpg";
import RelatedEquipments from "./RelatedEquipments";

function Tyrefolding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machines = [
    {
      name: 'TFPCR100',
      type: 'Tyre Folding',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrefoldingimg
    },
    {
      name: 'TFTBR100',
      type: 'Tyre Folding',
      size: '1530 mm * 2700 mm * 1200 mm',
      panel: '415v, 3 phase, 50Hz',
      power: '20 HP, 960 RPM, 50HZ, 3 Phase + 2 Phase',
      image: tyrefoldingimg1
    },
  ];

  const [selected, setSelected] = useState(machines[0]);

  return (
    <div>

      {/* ===== SEO ===== */}
      <SEOHelmet
        title="Tyre Folding Manufacturer in India | Vikah Ecotech"
        description="Vikah Ecotech is a leading tyre folding machine manufacturer in India. Our industrial tyre folding machines are designed for efficient tyre waste processing with high performance and durability."
        keywords="Tyre Folding Machine Manufacturer in India, Tyre Folding Machine, Industrial Tyre Folding Machine, Vikah Ecotech Tyre Folding"
        canonical="https://vikahecotech.com/tyrefolding"
        pageName="Tyre Folding Machines"
        product={{
          name: "Tyre Folding Machine",
          description: "Industrial tyre folding machines by Vikah Ecotech designed for efficient tyre waste processing. Robust, durable, and high-performance machines ideal for recycling operations.",
          image: "https://vikahecotech.com/logo_vk.png", // main image of the first machine
          url: "https://vikahecotech.com/tyrefolding",
          sku: "VKE-TF-01",
          category: "Tyre Recycling Machinery",
          price: "250000",
        }}

        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com/" },
           { name: "Other Equipment", url: "https://vikahecotech.com/other-equipment" },
          { name: "Tyre Folding Machines", url: "https://vikahecotech.com/tyrefolding" }
        ]}
      />

      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Tyre Folding Machines</h1>
        </div>
      </header>

      {/* Description */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Vikah Ecotech’s tyre folding machines are designed for robust industrial use,
          helping you optimize tyre waste processing through efficient folding mechanisms.
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

        {/* Selected Machine Details */}
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-4 text-center">
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
              <li><strong>Size:</strong> {selected.size}</li>
              <li><strong>Panel:</strong> {selected.panel}</li>
              <li><strong>Power Range:</strong> {selected.power}</li>
            </ul>

            <Link
              to={`/${selected.name.toLowerCase()}`}
              className="btn btn-outline-success mt-3"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* ===== INTRO ===== */}
      <div className="tbf-intro container text-center my-4">
        <p className="mt-3 fw-semibold text-center">
          Our Tyre Folding Machines are part of the{" "}
          <a href="/other-equipment" className="fw-bold text-decoration-none">
            Advanced Tyre Processing & Recycling Equipment
          </a>{" "}
          range, expertly engineered to reduce tyre volume, optimize storage efficiency, and support seamless downstream recycling operations with consistent industrial performance.
        </p>
      </div>

      {/* RelatedEquipments */}
      <RelatedEquipments current="/tyrefolding" />

      {/* Contact Section */}
      <Row className="text-center get-in-touch-section text-white py-5 rounded m-5">
        <Col>
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p>
            For more information about our products and services, please visit our{" "}
            <a
              href="#/ourproducts"
              className="fw-bold text-white text-decoration-underline"
            >
              product range
            </a>{" "}
            or contact us at{" "}
            <a
              href="mailto:info@vikahecotech.com"
              className="text-white text-decoration-underline"
            >
              info@vikahecotech.com
            </a>.
          </p>
        </Col>
      </Row>

    </div>
  );
}

export default Tyrefolding;
