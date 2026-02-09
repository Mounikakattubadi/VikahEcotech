import React from "react";
import plasticShredderImg from "../images/Shedder _ Final PNG.png";
import shp100Img from "../images/Applications/shredtyre6.jpg";
import shp150Img from "../images/shredder_hd1.jpg";
import shp200Img from "../images/st.jpeg";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css";

function Plasticshredderpage() {
  const models = [
    { name: "SHP100", link: "/shp100", img: shp100Img },
    { name: "SHP150", link: "/shp150", img: shp150Img },
    { name: "SHP200", link: "/shp200", img: shp200Img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>
          Plastic Shredder | plastic Shredding Machine Manufacturer in India
        </title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Plastic shredder machine manufacturer in India offering high-performance plastic shredders (SHP100, SHP150, SHP200) for recycling and waste management applications."
        />
        <meta
          name="keywords"
          content="Plastic shredder, plastic shredding machine, plastic shredder manufacturer in India, plastic recycling machine, SHP100, SHP150, SHP200, industrial plastic shredder, VikaH Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://vikahecotech.com/plasticshredderpage"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Plastic Shredder | Shredding Machine Manufacturer in India"
        />
        <meta
          property="og:description"
          content="Industrial plastic shredders for efficient plastic waste recycling. Trusted shredding machine manufacturer in India – VikaH Ecotech."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/plasticshredderpage"
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="VikaH Ecotech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Plastic Shredder | Shredding Machine Manufacturer in India"
        />
        <meta
          name="twitter:description"
          content="Durable plastic shredding machines for recycling and waste reduction."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikaHEcotech" />
      </Helmet>

      {/* Header */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Plastic Shredder Machines</h1>
        <p className="lead">
          Reliable Shredding solutions for Plastic recycling and waste management
        </p>
      </div>

      <div className="container my-5">
        {/* Image + Info */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={plasticShredderImg}
                alt="Plastic Shredder Machine"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">
              About Plastic Shredders
            </h3>

            <p className={styles.infoText}>
              Plastic shredders are industrial machines designed to reduce
              plastic waste into smaller, uniform pieces suitable for recycling
              and reprocessing. They are widely used in plastic recycling plants
              and waste management facilities.
            </p>

            <p className={styles.infoText}>
              These machines efficiently shred materials such as PET bottles,
              HDPE containers, plastic drums, pipes, films, and molded plastic
              waste, improving handling efficiency and recycling output.
            </p>

            <p className={styles.infoText}>
              VikaH Ecotech plastic shredders are built with hardened blades,
              high-torque motors, and robust frames to ensure consistent
              performance, low maintenance, and long service life.
            </p>

            <p className={styles.infoText}>
              As a leading plastic shredder manufacturer in India, our machines
              support sustainable recycling practices, reduce landfill waste,
              and help industries comply with environmental regulations.
            </p>
          </div>
        </div>

        {/* Models */}
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
                      alt={`${model.name} Plastic Shredder Machine`}
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

export default Plasticshredderpage;
