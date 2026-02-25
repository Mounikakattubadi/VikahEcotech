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
        {/* ===== BASIC SEO ===== */}
        <title>
          Metal Shredder Machine in India – Complete Guide to Industrial Scrap Shredding
        </title>

        <meta
          name="description"
          content="Complete guide to metal shredder machines in India. Learn how industrial metal shredders work, their applications, features, and benefits for scrap recycling industries."
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link
          rel="canonical"
          href="https://vikahecotech.com/metalshredderpage"
        />

        {/* ===== OPEN GRAPH (ARTICLE) ===== */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Metal Shredder Machine in India – Complete Industrial Guide"
        />
        <meta
          property="og:description"
          content="Explore how heavy-duty metal shredders process ferrous and non-ferrous scrap materials efficiently."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/metalshredderpage"
        />
        <meta
          property="og:image"
          content="https://vikahecotech.com/images/shredder_hd1.jpg"
        />
        <meta property="og:site_name" content="Vikah Ecotech Pvt Ltd" />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Metal Shredder Machine – Industrial Scrap Shredding Guide"
        />
        <meta
          name="twitter:description"
          content="Industrial metal shredder machines for efficient scrap recycling and waste management."
        />
        <meta
          name="twitter:image"
          content="https://vikahecotech.com/images/shredder_hd1.jpg"
        />

        {/* ===== BLOG STRUCTURED DATA ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Metal Shredder Machine in India – Complete Guide to Industrial Scrap Shredding",
            description:
              "Detailed guide on metal shredder machines including applications, features, and benefits for industrial scrap recycling.",
            image:
              "https://vikahecotech.com/images/shredder_hd1.jpg",
            author: {
              "@type": "Organization",
              name: "Vikah Ecotech Pvt Ltd",
            },
            publisher: {
              "@type": "Organization",
              name: "Vikah Ecotech Pvt Ltd",
              logo: {
                "@type": "ImageObject",
                url: "https://vikahecotech.com/logo_vk.png",
              },
            },
            datePublished: "2026-02-25",
            dateModified: "2026-02-25",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://vikahecotech.com/metalshredderpage",
            },
          })}
        </script>
      </Helmet>

      {/* ===== HEADER ===== */}
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
                alt="Industrial Metal Shredder Machine"
                className={`img-fluid rounded shadow-lg ${styles.mainImage}`}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="mb-3 text-success fw-bold">
              Complete Guide to Metal Shredder Machines
            </h2>

            <p className={styles.infoText}>
              Metal shredders are heavy-duty industrial machines designed to
              cut and break down bulky metal scrap into smaller, uniform pieces
              for recycling and further processing.
            </p>

            <p className={styles.infoText}>
              These shredders efficiently process ferrous and non-ferrous
              materials including steel scrap, aluminium scrap, iron blocks,
              automotive scrap, and mixed industrial waste.
            </p>

            <p className={styles.infoText}>
              The SHM4000 model is engineered for high torque and low-speed
              operation, ensuring durability, minimal wear, and long-term
              reliability in demanding industrial environments.
            </p>

            <p className={styles.infoText}>
              By integrating metal shredders into recycling systems,
              industries can reduce waste volume, improve operational
              efficiency, and comply with environmental regulations.
            </p>
          </div>
        </div>

        {/* Available Model Section */}
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
                      alt={`${model.name} Metal Shredder`}
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

export default Metalshredderpage;