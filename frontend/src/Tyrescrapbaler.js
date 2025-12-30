import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel"; // ✅ add this
import "bootstrap/dist/css/bootstrap.min.css"; // (already likely in index.js, but safe here too)
import "./Tyrecutting.css";
import "./Models.css";
import Balerimg from "./images/baler.png";
import Baler1 from "./images/baler1.png";
import Baler2 from "./images/baler2.png";
import { Helmet } from "react-helmet";

function Tyrescrapbaler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: "BLT150",
      type: "Baler",
      force: "150 Ton",
      weight: "9000 kg",
      note: "Operators can easily and safely operate the BLT-150.",
    },
    {
      name: "BLT200",
      type: "Baler",
      force: "200 Ton",
      weight: "9000 kg",
      note: "Our BLT-200 is engineered to efficiently compress.",
    },
    {
      name: "BLT250",
      type: "Baler",
      force: "250 Ton",
      weight: "11000 kg",
      note: "Operators can easily and safely operate the BLT-250.",
    },
  ];

  const carouselImages = [Balerimg, Baler1, Baler2];

  const [selected, setSelected] = useState(balers[0]);

  return (
    <div>
      <Helmet>
        <title>
          Tyre Scrap Baler Machine Manufacturer in Hyderabad | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures heavy-duty tyre scrap baler machines for compacting scrap tyres in recycling and waste management industries across India."
        />

        <meta
          name="keywords"
          content="tyre scrap baler, scrap tyre baler machine, tyre recycling baler, industrial baler for tyres"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/tyre-scrap-balers"
        />
      </Helmet>

      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Tyre Scrap Balers</h1>
        </div>
      </header>

      <div className="container text-center my-4 balerbackimg">
        <p>
          <p>
            Our powerful tyre scrap balers are engineered to handle high
            compaction requirements for scrap tyres and other heavy-duty
            recycling processes. These industrial baling machines are widely
            used in tyre recycling, industrial baling,tyre baler, and waste
            management applications across India.
          </p>
        </p>

        {/* Tab Buttons */}
        <div className="btn-group flex-wrap mb-4">
          {balers.map((baler, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${
                selected.name === baler.name ? "active" : ""
              }`}
              onClick={() => setSelected(baler)}
            >
              {baler.name}
            </button>
          ))}
        </div>

        {/* MAIN DISPLAY */}
        <div className="row justify-content-center align-items-center">
          {/* CAROUSEL – now react-bootstrap */}
          <div className="col-md-6 mb-4">
            <Carousel
              interval={4000}
              pause="hover"
              className="baler-carousel-wrapper"
            >
              {carouselImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    src={img}
                    className="d-block w-100 baler-carousel-img"
                    alt={`Baler ${i + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* INFO */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Compaction Force:</strong> {selected.force}
              </li>
              <li>
                <strong>Baler Weight:</strong> {selected.weight}
              </li>
              <li>
                <strong>Note:</strong> {selected.note}
              </li>
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
    </div>
  );
}

export default Tyrescrapbaler;
