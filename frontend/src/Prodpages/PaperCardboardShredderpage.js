import React from "react";
import shredderImg from "../images/Applications/shredpcb1.jpg"; // update with your actual main image
import shc6000Img from "../images/Applications/shredpcb2.jpg";
import shc8000Img from "../images/Applications/shredpcb7.jpg";
import shc12000Img from "../images/Applications/shredpcb4.jpg";

import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css";

function Papercardboardshredderpage() {
  const models = [
    { name: "SHC6000", link: "/shc6000", img: shc6000Img },
    { name: "SHC8000", link: "/shc8000", img: shc8000Img },
    { name: "SHC12000", link: "/shc12000", img: shc12000Img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>
          Paper & Cardboard Shredder | Industrial Shredding Machine Manufacturer in India
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Industrial paper and cardboard shredders for recycling & waste management. Explore high-performance models SHC6000, SHC8000, SHC12000 designed for bulk shredding operations. Manufactured by Vikah Ecotech."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="paper shredder, cardboard shredder, industrial shredding machine, paper recycling shredder, cardboard recycling machine, SHC6000, SHC8000, SHC12000, Vikah Ecotech"
        />

        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://vikahecotech.com/papercardboardshredder"
        />

        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Paper & Cardboard Shredder | Industrial Shredding Machine Manufacturer"
        />
        <meta
          property="og:description"
          content="High-capacity paper & cardboard shredders for recycling. Built for durability and efficiency by Vikah Ecotech."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/papercardboardshredder"
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Paper & Cardboard Shredder | Industrial Shredders"
        />
        <meta
          name="twitter:description"
          content="Explore heavy-duty paper & cardboard shredders for high-volume recycling applications."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
      </Helmet>

      {/* Header */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Paper & Cardboard Shredder Machines</h1>
        <p className="lead">
          Powerful industrial shredders for efficient material recycling
        </p>
      </div>

      <div className="container my-5">
        {/* Main Image + Info */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={shredderImg}
              alt="Paper and Cardboard Shredder"
              className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
            />
          </div>

          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">About Paper & Cardboard Shredders</h3>

            <p className={styles.infoText}>
              Paper & cardboard shredders are essential for converting bulky
              waste sheets, cartons, corrugated boxes, and packaging materials
              into manageable, recyclable pieces.
            </p>

            <p className={styles.infoText}>
              These heavy-duty shredders improve waste handling efficiency and
              support large-scale recycling operations in printing units,
              warehouses, packaging industries, corporate offices, and waste
              processing facilities.
            </p>

            <p className={styles.infoText}>
              Vikah Ecotech shredders are engineered with high torque, durable
              blades, and low-speed cutting systems to ensure long life, reduced
              maintenance, and consistent shredding performance.
            </p>

            <p className={styles.infoText}>
              Our machines help reduce landfill waste and contribute to
              sustainable recycling practices across industries.
            </p>
          </div>
        </div>

        {/* Models Section */}
        <div className="mb-5">
          <h3 className="mb-4 text-center text-success fw-bold">
            Available Models
          </h3>

          <div className="row justify-content-center">
            {models.map((model) => (
              <div key={model.name} className="col-md-4 mb-4">
                <a href={model.link} className="text-decoration-none">
                  <div className={`${styles.modelCard} card h-100 shadow`}>
                    <div className={styles.cardGradient}></div>

                    <img
                      src={model.img}
                      className={`card-img-top ${styles.modelImg}`}
                      alt={model.name}
                    />

                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">{model.name}</h5>
                      <p className={`card-text ${styles.modelText}`}>
                        Click to know more
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center my-5">
          <a href="/contact" className={styles.btnGradient}>
            Contact Us for Pricing
          </a>
        </div>
      </div>
    </div>
  );
}

export default Papercardboardshredderpage;
