import React from "react";
import crushMainImg from "../images/Applications/shredm1.jpg"; // your image
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Tyrebalerpage.module.css";

function Crushingmachinepage() {
  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        {/* ===== BASIC SEO ===== */}
        <title>
          Crushing Machine Manufacturer in India | Industrial Scrap Crusher
          Guide
        </title>

        <meta
          name="description"
          content="Explore high-efficiency industrial crushing machines for metal scrap, rubber waste, and industrial recycling. Complete guide to crushing machine features, applications, and benefits in India."
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link
          rel="canonical"
          href="https://vikahecotech.com/crushingmachinepage"
        />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Crushing Machine Manufacturer in India | Industrial Scrap Crusher Guide"
        />
        <meta
          property="og:description"
          content="Industrial crushing machines designed for efficient scrap size reduction. Learn about features, applications, and recycling benefits."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/crushingmachinepage"
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
          content="Crushing Machine Manufacturer in India"
        />
        <meta
          name="twitter:description"
          content="High-torque industrial crushing machines for scrap processing and recycling applications."
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
              "Crushing Machine Manufacturer in India | Industrial Scrap Crusher Guide",
            description:
              "Detailed guide on industrial crushing machines including applications, features, and recycling benefits.",
            image: "https://vikahecotech.com/images/shredder_hd1.jpg",
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
              "@id": "https://vikahecotech.com/crushingmachinepage",
            },
          })}
        </script>
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
            <h3 className="mb-3 text-success fw-bold">
              About Crushing Machines
            </h3>

            <p className={styles.infoText}>
              Crushing machines are powerful industrial systems designed to
              break down bulky waste materials into smaller, manageable pieces
              for recycling and further processing.
            </p>

            <p className={styles.infoText}>
              These machines are widely used for crushing metal scrap, rubber
              scrap, industrial blocks, construction waste, and various hard
              materials, improving handling efficiency and reducing storage
              space.
            </p>

            <p className={styles.infoText}>
              Vikah Ecotech crushing machines operate at high torque with
              low-speed precision, delivering maximum durability and reduced
              operational wear even under continuous industrial use.
            </p>

            <p className={styles.infoText}>
              Designed and manufactured in India, our crushing systems support
              sustainable recycling practices, enabling industries to minimize
              waste and comply with environmental standards.
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
