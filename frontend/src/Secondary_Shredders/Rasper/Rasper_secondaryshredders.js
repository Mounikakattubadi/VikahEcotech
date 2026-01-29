import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import shredderhd from "../../images/R1.png";
import shredderhd1 from "../../images/R2.png";
import shredderhdimg from "../../images/R4.jpg";

function RasperSecondaryshredders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: "RST4000",
      type: "Secondary Shredder (Rasper)",
      power: "180 HP (132 kW)",
      Voltage: "As per customer requirement",
      Drive:
        "ABB 160kW (H.D.), ACS580, 363A SIZE: R9, 580-01-360A-4+P944+3B SDT",
    },
    {
      name: "RST6000",
      type: "Secondary Shredder (Rasper)",
      power: "180 – 200 HP",
      Voltage: "As per customer requirement",
    },
  ];

  const carouselImages = [shredderhd, shredderhd1, shredderhdimg];

  const [selected, setSelected] = useState(shredders[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* ================= SEO HELMET ================= */}
      <Helmet>
        <title>
          Secondary Shredders for Tyre Recycling (Rasper Machines) | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures secondary shredder machines, also known as rasper shredders, designed for tyre recycling plants. These machines perform fine shredding of pre-processed tyres for granulation and material recovery."
        />

        <meta
          name="keywords"
          content="secondary shredder, rasper machine, tyre recycling rasper, secondary tyre shredder, rasper shredder machine"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/rasper_secondaryshredders"
        />
      </Helmet>

      {/* ================= PAGE HEADER ================= */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">
            Secondary Shredders for Tyre Recycling
          </h1>
        </div>
      </header>

      {/* ================= INTRO CONTENT ================= */}
      <div className="container text-center my-4 balerbackimg">
        <p>
          Our secondary shredder machines, also known as rasper shredders, are
          engineered for efficient fine shredding of tyres in tyre recycling
          plants. These machines process material after primary shredding and
          prepare rubber for downstream granulation, separation, and recovery
          processes.
        </p>

        <p>
          These rasper machines form a critical part of our
          <a href="/secondary-shredder"> secondary shredder systems</a>, helping
          recycling plants achieve consistent particle sizing, higher recovery
          efficiency, and stable long-term operation.
        </p>

        {/* ================= MODEL SELECTION ================= */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {shredders.map((machine, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${
                selected.name === machine.name ? "active" : ""
              }`}
              onClick={() => setSelected(machine)}
            >
              {machine.name}
            </button>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="row justify-content-center align-items-center">
          {/* IMAGE CAROUSEL */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                className="carousel-img baler-carousel-img"
                alt={`${selected.name} secondary shredder machine by Vikah Ecotech`}
              />

              <button
                type="button"
                className="carousel-btn left"
                onClick={prevSlide}
                aria-label="Previous image"
              >
                ❮
              </button>

              <button
                type="button"
                className="carousel-btn right"
                onClick={nextSlide}
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
          </div>

          {/* MACHINE DETAILS */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Power Range:</strong> {selected.power}
              </li>
              {selected.Voltage && (
                <li>
                  <strong>Voltage:</strong> {selected.Voltage}
                </li>
              )}
              {selected.Drive && (
                <li>
                  <strong>Drive:</strong> {selected.Drive}
                </li>
              )}
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
    </>
  );
}

export default RasperSecondaryshredders;
