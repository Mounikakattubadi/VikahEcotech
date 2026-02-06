import React from "react";
import tyreimg from "../images/baler_bg.png";
import blt150img from "../images/baler4.png";
import blt200img from "../images/baler.png";
import blt250img from "../images/baler1.png";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css";

function Tyrebalerpage() {
  const models = [
    { name: "BLT150", link: "/blt150", img: blt150img },
    { name: "BLT200", link: "/blt200", img: blt200img },
    { name: "BLT250", link: "/blt250", img: blt250img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>Tyre Baler | VikaH Ecotech</title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Explore advanced Tyre Baler machines (BLT150, BLT200, BLT250) for efficient tyre recycling. Learn about bailing process, industrial applications, and contact VikaH Ecotech for pricing."
        />
        <meta
          name="keywords"
          content="Tyre baler, tyre recycling machine, BLT150, BLT200, BLT250, tyre bailing, tyre waste recycling, industrial tyre baler, VikaH Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vikahecotech.com/tyrebalerpage" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tyre Baler | VikaH Ecotech" />
        <meta
          property="og:description"
          content="Explore advanced Tyre Baler machines (BLT150, BLT200, BLT250) for efficient tyre recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/tyrebalerpage"
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="VikaH Ecotech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tyre Baler | VikaH Ecotech" />
        <meta
          name="twitter:description"
          content="Explore advanced Tyre Baler machines (BLT150, BLT200, BLT250) for efficient tyre recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikaHEcotech" />
      </Helmet>

      {/* Header Section */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Tyre Baler Machines</h1>
        <p className="lead">
          Advanced solutions for recycling tyres efficiently and sustainably
        </p>
      </div>

      <div className="container my-5">
        {/* Image and Info Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={tyreimg}
                alt="Tyre Baler"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">About Tyre Balers</h3>
            <p className={styles.infoText}>
              Tyre balers are industrial machines designed to compress and
              recycle used tyres efficiently, reducing environmental waste and
              promoting sustainability. These machines transform bulky tyres
              into compact bales that are easier to store, transport, and
              process further for recycling purposes.
            </p>
            <p className={styles.infoText}>
              The tyre baling process involves shredding or cutting tyres into
              smaller pieces and then applying high pressure to compress them
              into dense, manageable bales. This process not only saves space
              but also improves the efficiency of recycling operations, making
              it ideal for tyre recycling plants, waste management facilities,
              and industrial operations.
            </p>
            <p className={styles.infoText}>
              Our tyre balers are robust, easy to operate, and capable of
              handling large volumes of tyres safely. They are equipped with
              advanced technology to ensure uniform bale size, minimize manual
              labor, and maintain high productivity standards.
            </p>
            <p className={styles.infoText}>
              Using a tyre baler also helps companies comply with environmental
              regulations, reduces landfill usage, and allows recovered
              materials to be reused in manufacturing, energy recovery, or
              rubber-based products. Investing in a tyre baler is not only
              environmentally responsible but also economically beneficial for
              recycling businesses.
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

        {/* Footer / Call to Action */}
        <div className="text-center my-5">
          <a href="/contact" className={styles.btnGradient}>
            Contact Us for Pricing
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tyrebalerpage;
