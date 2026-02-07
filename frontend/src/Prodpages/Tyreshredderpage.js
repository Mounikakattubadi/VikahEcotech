import React from "react";
import shredderImg from "../images/Shedder _ Final PNG.png";
import sht600Img from "../images/Applications/shredtyre6.jpg";
import sht8000Img from "../images/shredder_hd1.jpg";
import sht12000Img from "../images/st.jpeg";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css";

function Tyreshredderpage() {
  const models = [
    { name: "SHT600", link: "/sht6000", img: sht600Img },
    { name: "SHT8000", link: "/sht8000", img: sht8000Img },
    { name: "SHT12000", link: "/sht12000", img: sht12000Img },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* Page Title */}
        <title>
          Tyre Shredder | Shredding Machine Manufacturer in India
        </title>

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Leading tyre shredder and shredding machine manufacturer in India. Explore high-performance tyre shredders (SHT6000, SHT8000, SHT12000) for efficient tyre recycling and waste management."
        />
        <meta
          name="keywords"
          content="Tyre shredder, shredding machine manufacturer in India, tyre shredding machine, tyre recycling shredder, SHT6000, SHT8000, SHT12000, industrial shredder, VikaH Ecotech"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://vikahecotech.com/tyreshredderpage"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tyre Shredder | Shredding Machine Manufacturer in India"
        />
        <meta
          property="og:description"
          content="High-capacity tyre shredders for recycling and waste reduction. Trusted shredding machine manufacturer in India – VikaH Ecotech."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/tyreshredderpage"
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta property="og:site_name" content="VikaH Ecotech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tyre Shredder | Shredding Machine Manufacturer in India"
        />
        <meta
          name="twitter:description"
          content="Industrial tyre shredders designed for high efficiency, durability, and sustainability."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@VikaHEcotech" />
      </Helmet>

      {/* Header */}
      <div className={`${styles.tyreHeader} text-center text-white`}>
        <h1 className="display-3 fw-bold">Tyre Shredder Machines</h1>
        <p className="lead">
          Heavy-duty shredding solutions for efficient tyre recycling
        </p>
      </div>

      <div className="container my-5">
        {/* Image + Info */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src={shredderImg}
                alt="Tyre Shredder Machine"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="mb-3 text-success fw-bold">
              About Tyre Shredders
            </h3>

            <p className={styles.infoText}>
              Tyre shredders are powerful industrial machines used to break
              down used and waste tyres into smaller, reusable pieces. These
              machines play a critical role in tyre recycling by converting
              bulky tyres into uniform shreds suitable for further processing.
            </p>

            <p className={styles.infoText}>
              The shredding process improves material handling efficiency and
              enables downstream applications such as crumb rubber production,
              pyrolysis, RDF fuel preparation, and civil construction uses.
            </p>

            <p className={styles.infoText}>
              VikaH Ecotech tyre shredders are engineered for high torque,
              low-speed operation, ensuring consistent output size, reduced
              wear, and reliable long-term performance even under continuous
              industrial workloads.
            </p>

            <p className={styles.infoText}>
              As a trusted shredding machine manufacturer in India, we design
              our machines to meet environmental regulations, reduce landfill
              waste, and support sustainable recycling practices across
              industries.
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

export default Tyreshredderpage;
