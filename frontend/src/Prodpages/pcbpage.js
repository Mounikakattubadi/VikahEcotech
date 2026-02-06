import React from "react";
import pcbImg from "../images/baler_bg.png"; // main header image
import blc30img from "../images/baler1.png";
import blc40img from "../images/baler4.png";
import blc50img from "../images/baler1.png";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css"; // reuse Tyre Baler CSS

function PCBpage() {
  const models = [
    { name: "BLC30", link: "/blc30", img: blc30img },
    { name: "BLC40", link: "/blc40", img: blc40img },
    { name: "BLC50", link: "/blc50", img: blc50img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>Paper & Cardboard Baler | VikaH Ecotech</title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Explore advanced Paper & Cardboard Baler machines (BLC30, BLC40, BLC50) for efficient paper recycling. Learn about bailing process, industrial applications, and contact VikaH Ecotech for pricing."
        />
        <meta
          name="keywords"
          content="Paper baler, cardboard baler, BLC30, BLC40, BLC50, paper bailing, cardboard recycling, industrial paper baler, VikaH Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vikahecotech.com/pcbpage" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Paper & Cardboard Baler | VikaH Ecotech" />
        <meta
          property="og:description"
          content="Explore advanced Paper & Cardboard Baler machines (BLC30, BLC40, BLC50) for efficient recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta property="og:url" content="https://vikahecotech.com/pcbpage" />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="VikaH Ecotech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paper & Cardboard Baler | VikaH Ecotech" />
        <meta
          name="twitter:description"
          content="Explore advanced Paper & Cardboard Baler machines (BLC30, BLC40, BLC50) for efficient recycling. Learn about bailing process and industrial applications with VikaH Ecotech."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikaHEcotech" />
      </Helmet>

      {/* Header Section */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Paper & Cardboard Baler Machines</h1>
        <p className="lead">
          Efficient solutions for compressing and recycling paper & cardboard waste
        </p>
      </div>

      <div className="container my-5">
        {/* Image and Info Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={pcbImg}
                alt="Paper & Cardboard Baler"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">About Paper & Cardboard Balers</h3>
            <p className={styles.infoText}>
              Paper and cardboard balers are industrial machines designed to compress paper, cardboard, and other recyclable fibers into dense bales. They help facilities manage waste efficiently and promote sustainable recycling practices.
            </p>
            <p className={styles.infoText}>
              The baling process involves feeding loose paper or cardboard into the baler, where hydraulic pressure compacts it into uniform bales. These bales are easier to store, transport, and recycle, reducing operational costs and environmental impact.
            </p>
            <p className={styles.infoText}>
              Our paper & cardboard balers are built to handle large volumes safely and efficiently. They ensure consistent bale sizes, minimize manual handling, and improve productivity in recycling centers, warehouses, and industrial facilities.
            </p>
            <p className={styles.infoText}>
              Using a paper baler reduces landfill usage, supports environmental compliance, and allows recovered materials to be reused in packaging, paper products, or energy recovery. Investing in a paper & cardboard baler is both eco-friendly and economically advantageous.
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

export default PCBpage;
