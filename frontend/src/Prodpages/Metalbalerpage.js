import React from "react";
import metalImg from "../images/baler_bg.png"; // main header image
import blm150img from "../images/baler1.png";
import blm200img from "../images/baler4.png";
import blm250img from "../images/baler1.png";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css"; // reuse Tyre Baler CSS

function Metalbalerpage() {
  const models = [
    { name: "BLM150", link: "/blm150", img: blm150img },
    { name: "BLM200", link: "/blm200", img: blm200img },
    { name: "BLM250", link: "/blm250", img: blm250img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>Metal Baler | VikaH Ecotech</title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Explore advanced Metal Baler machines (BLM150, BLM200, BLM250) for efficient metal waste recycling. Learn about metal bailing process, industrial applications, and contact VikaH Ecotech for pricing."
        />
        <meta
          name="keywords"
          content="Metal baler, metal recycling machine, BLM150, BLM200, BLM250, metal bailing, industrial metal baler, scrap metal recycling, VikaH Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vikahecotech.com/metalbalerpage" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Metal Baler | VikaH Ecotech" />
        <meta
          property="og:description"
          content="Explore advanced Metal Baler machines (BLM150, BLM200, BLM250) for efficient metal recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/metalbalerpage"
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="VikaH Ecotech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Metal Baler | VikaH Ecotech" />
        <meta
          name="twitter:description"
          content="Explore advanced Metal Baler machines (BLM150, BLM200, BLM250) for efficient metal recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikaHEcotech" />
      </Helmet>

      {/* Header Section */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Metal Baler Machines</h1>
        <p className="lead">
          High-efficiency solutions for compressing and recycling metal waste
        </p>
      </div>

      <div className="container my-5">
        {/* Image and Info Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={metalImg}
                alt="Metal Baler"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">About Metal Balers</h3>
            <p className={styles.infoText}>
              Metal balers are industrial machines designed to compress scrap metal into compact bales for easier handling, storage, and transportation. They help recycling facilities, scrap yards, and industrial plants manage metal waste efficiently.
            </p>
            <p className={styles.infoText}>
              The metal bailing process involves feeding scrap metals such as aluminum, steel, or copper into the baler, where high pressure compresses the material into dense, uniform bales. This saves space, reduces handling costs, and improves overall recycling efficiency.
            </p>
            <p className={styles.infoText}>
              Our metal balers are robust, easy to operate, and built to handle large volumes safely. They are equipped with advanced hydraulic systems for consistent bale sizes and optimized productivity.
            </p>
            <p className={styles.infoText}>
              Using a metal baler allows companies to recover valuable materials, comply with environmental regulations, and reduce landfill usage. Investing in a metal baler is environmentally responsible and economically beneficial for scrap metal recycling businesses.
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

export default Metalbalerpage;
