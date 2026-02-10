import React from "react";
import metalMainImg from "../images/Applications/shredm1.jpg";
import shm4000Img from "../images/Applications/shredm2.jpg"; 
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css"; 

function Metalshredderpage() {
  const models = [
    { name: "SHM4000", link: "/shm4000", img: shm4000Img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>
          Metal Shredder | SHM4000 Heavy-Duty Metal Shredding Machine Manufacturer in India
        </title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="High-performance SHM4000 metal shredder for processing heavy metal scrap. Trusted metal shredding machine manufacturer in India."
        />
        <meta
          name="keywords"
          content="Metal shredder, SHM4000, metal shredding machine, industrial shredder, metal scrap shredder, shredding machine India, Vikah Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vikahecotech.com/metalshredderpage"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Metal Shredder | SHM4000 Heavy-Duty Metal Shredding Machine Manufacturer in India"
        />
        <meta
          property="og:description"
          content="SHM4000 metal shredder engineered for high torque and continuous industrial scrap recycling."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/metalshredderpage"
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="Vikah Ecotech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Metal Shredder | SHM4000 Heavy-Duty Metal Shredding Machine Manufacturer in India"
        />
        <meta
          name="twitter:description"
          content="Durable and powerful SHM4000 metal shredder designed for continuous industrial scrap processing."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikaHEcotech" />
      </Helmet>

      {/* Header Section */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Metal Shredder Machines</h1>
        <p className="lead">
          High-torque shredders for ferrous & non-ferrous scrap processing
        </p>
      </div>

      <div className="container my-5">

        {/* Image + Info Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={metalMainImg}
                alt="Metal Shredder Machine"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">About Metal Shredders</h3>

            <p className={styles.infoText}>
              Metal shredders are heavy-duty machines built to cut, crush, and
              break down bulky metal scrap into smaller uniform pieces suitable
              for recycling and further processing.
            </p>

            <p className={styles.infoText}>
              They efficiently handle ferrous and non-ferrous materials such as
              steel scrap, aluminium scrap, iron blocks, and mixed metal waste.
            </p>

            <p className={styles.infoText}>
              The SHM4000 model from Vikah Ecotech is engineered to deliver
              high torque at low speed, ensuring maximum durability and
              long-term reliable performance in industrial environments.
            </p>

            <p className={styles.infoText}>
              Designed to support sustainable recycling, our shredders help
              industries reduce waste, improve processing efficiency, and
              comply with environmental standards.
            </p>
          </div>
        </div>

        {/* Only one model */}
        <div className="mb-5">
          <h3 className="mb-4 text-center text-success fw-bold">
            Available Model
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

        {/* CTA Button */}
        <div className="text-center my-5">
          <a href="/contact" className={styles.btnGradient}>
            Contact Us for Pricing
          </a>
        </div>
      </div>
    </div>
  );
}

export default Metalshredderpage;
