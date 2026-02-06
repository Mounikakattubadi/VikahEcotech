import React from "react";
import plasticImg from "../images/baler_bg.png"; // main header image
import blp30img from "../images/baler1.png";
import blp40img from "../images/baler4.png";
import blp50img from "../images/baler1.png";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css";

function Plasticbalerpage() {
  const models = [
    { name: "BLP30", link: "/blp30", img: blp30img },
    { name: "BLP40", link: "/blp40", img: blp40img },
    { name: "BLP50", link: "/blp50", img: blp50img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>Plastic Baler | VikaH Ecotech</title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Explore advanced Plastic Baler machines (BLP30, BLP40, BLP50) for efficient plastic waste recycling. Learn about bailing process, industrial applications, and contact VikaH Ecotech for pricing."
        />
        <meta
          name="keywords"
          content="Plastic baler, plastic recycling machine, BLP30, BLP40, BLP50, plastic bailing, industrial plastic baler, waste management, VikaH Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vikahecotech.com/plasticbalerpage" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plastic Baler | VikaH Ecotech" />
        <meta
          property="og:description"
          content="Explore advanced Plastic Baler machines (BLP30, BLP40, BLP50) for efficient plastic recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/plasticbalerpage"
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="VikaH Ecotech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plastic Baler | VikaH Ecotech" />
        <meta
          name="twitter:description"
          content="Explore advanced Plastic Baler machines (BLP30, BLP40, BLP50) for efficient plastic recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikaHEcotech" />
      </Helmet>

      {/* Header Section */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Plastic Baler Machines</h1>
        <p className="lead">
          Efficient solutions for compressing and recycling plastic waste
        </p>
      </div>

      <div className="container my-5">
        {/* Image and Info Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={plasticImg}
                alt="Plastic Baler"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">About Plastic Balers</h3>
            <p className={styles.infoText}>
              Plastic balers are industrial machines used to compress plastic
              waste into compact bales for easier storage, transport, and
              recycling. They help reduce landfill usage and promote
              sustainable waste management practices.
            </p>
            <p className={styles.infoText}>
              The bailing process involves collecting, sorting, and feeding
              plastic materials into the baler, where high pressure compresses
              them into dense bales. This process increases recycling
              efficiency and reduces handling costs for industrial facilities.
            </p>
            <p className={styles.infoText}>
              Our plastic balers are user-friendly, robust, and designed to
              handle high volumes of plastic waste safely. They ensure uniform
              bale size, reduce labor, and maintain high productivity.
            </p>
            <p className={styles.infoText}>
              By using a plastic baler, companies can recover valuable
              recyclable materials, comply with environmental regulations, and
              contribute to a circular economy. Investing in a plastic baler
              is both environmentally responsible and economically advantageous.
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

export default Plasticbalerpage;
