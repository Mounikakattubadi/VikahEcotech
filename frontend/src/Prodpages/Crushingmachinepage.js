import React from "react";
import crushMainImg from "../images/Applications/shredm1.jpg"; // your image
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css";

function Crushingmachinepage() {
  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>
          Crushing Machine | Industrial Crusher Manufacturer in India | Vikah Ecotech
        </title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="High-efficiency industrial crushing machines designed for metal scrap, rubber scrap, and industrial waste processing. Trusted crushing machine manufacturer in India."
        />
        <meta
          name="keywords"
          content="crushing machine, industrial crusher, scrap crusher, crusher machine India, waste crushing machine, Vikah Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://vikahecotech.com/crushingmachinepage" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Crushing Machine | Industrial Crusher Manufacturer in India"
        />
        <meta
          property="og:description"
          content="Industrial crushing machines for efficient scrap size reduction. Built with high torque and long-lasting performance for recycling applications."
        />
        <meta property="og:url" content="https://vikahecotech.com/crushingmachinepage" />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="Vikah Ecotech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Crushing Machine | Industrial Crusher Manufacturer in India"
        />
        <meta
          name="twitter:description"
          content="High-torque crushing machines engineered for efficient scrap processing and recycling."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikahEcotech" />
      </Helmet>

      {/* Header */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Crushing Machines</h1>
        <p className="lead">
          Industrial crushing solutions for efficient scrap size reduction
        </p>
      </div>

      <div className="container my-5">

        {/* Image + Description */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={crushMainImg}
                alt="Crushing Machine"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">About Crushing Machines</h3>

            <p className={styles.infoText}>
              Crushing machines are powerful industrial systems designed to break down bulky waste materials into smaller, manageable pieces for recycling and further processing.
            </p>

            <p className={styles.infoText}>
              These machines are widely used for crushing metal scrap, rubber scrap, industrial blocks, construction waste, and various hard materials, improving handling efficiency and reducing storage space.
            </p>

            <p className={styles.infoText}>
              Vikah Ecotech crushing machines operate at high torque with low-speed precision, delivering maximum durability and reduced operational wear even under continuous industrial use.
            </p>

            <p className={styles.infoText}>
              Designed and manufactured in India, our crushing systems support sustainable recycling practices, enabling industries to minimize waste and comply with environmental standards.
            </p>
          </div>
        </div>

        {/* CTA Only */}
        <div className="text-center my-5">
          <a href="/contact" className={styles.btnGradient}>
            Contact Us for Pricing
          </a>
        </div>
      </div>
    </div>
  );
}

export default Crushingmachinepage;
