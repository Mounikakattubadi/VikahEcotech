import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import metalImg1 from "../../images/Applications/appm1.jpg";
import metalImg2 from "../../images/Applications/appm4.jpg";
import metalImg3 from "../../images/Applications/appm6.jpg";

function Metalbaler() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const balers = [
    {
      name: "BLM150",
      type: "Metal Scrap Baler",
      force: "150 Ton",
      weight: "200–350 kg per bale",
      note: "Suitable for compacting light to medium ferrous and non-ferrous metal scrap such as aluminum and mild steel.",
    },
    {
      name: "BLM200",
      type: "Metal Scrap Baler",
      force: "200 Ton",
      weight: "250–450 kg per bale",
      note: "Designed for medium-density steel scrap, alloy scrap, and industrial metal recycling applications.",
    },
    {
      name: "BLM250",
      type: "Heavy-Duty Metal Baler",
      force: "250 Ton",
      weight: "300–500 kg per bale",
      note: "High-performance baler engineered for high-volume ferrous and non-ferrous metal compaction.",
    },
  ];

  const carouselImages = [metalImg1, metalImg2, metalImg3];

  const [selected, setSelected] = useState(balers[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <div>
      <Helmet>
        {/* ===== BASIC SEO ===== */}
        <title>
          Metal Scrap Baler Machines Manufacturer in India | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures metal scrap baler machines for recycling ferrous and non-ferrous metals. Heavy-duty hydraulic metal balers for industrial recycling operations."
        />
        <meta
          name="keywords"
          content="metal baler machine, metal scrap baler, hydraulic metal baler, ferrous metal baler, non ferrous metal baler, metal recycling baler machine"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link rel="canonical" href="https://vikahecotech.com/metalbaler" />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Metal Scrap Baler Machines Manufacturer in India | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="High-performance metal scrap balers for industrial recycling of ferrous and non-ferrous metals. Hydraulic metal baler machines for foundries and scrap yards."
        />
        <meta property="og:url" content="https://vikahecotech.com/metalbaler" />
        <meta
          property="og:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Metal Scrap Baler Machines Manufacturer in India | Vikah Ecotech"
        />
        <meta
          name="twitter:description"
          content="High-performance metal scrap balers for industrial recycling of ferrous and non-ferrous metals. Hydraulic metal baler machines for foundries and scrap yards."
        />
        <meta
          name="twitter:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== LOCAL BUSINESS SCHEMA ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vikah Ecotech Pvt Ltd",
      "image": "https://vikahecotech.com/logo_vk.png",
      "url": "https://vikahecotech.com",
      "telephone": "+91-4049471616",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "406, 4th Floor, Patel Towers, Above EasyBuy, Beside Nagole RTO Office, Nagole",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500068",
        "addressCountry": "IN"
      },
      "areaServed": "India"
    }
    `}
        </script>

        {/* ===== ORGANIZATION SCHEMA ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Vikah Ecotech Pvt Ltd",
      "url": "https://vikahecotech.com",
      "logo": "https://vikahecotech.com/logo_vk.png"
    }
    `}
        </script>

        {/* ===== PRODUCT/ITEM LIST SCHEMA FOR METAL BALERS ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Metal Scrap Baler Machines",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "BLM150",
          "description": "Metal Scrap Baler BLM150 with 150 Ton force, suitable for light to medium ferrous and non-ferrous metals like aluminum and mild steel.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blm150"
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "BLM200",
          "description": "Metal Scrap Baler BLM200 with 200 Ton force, ideal for medium-density steel scrap, alloy scrap, and industrial metal recycling.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blm200"
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "BLM250",
          "description": "Heavy-duty Metal Scrap Baler BLM250 with 250 Ton force, engineered for high-volume ferrous and non-ferrous metal compaction.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blm250"
        }
      ]
    }
    `}
        </script>

        {/* ===== BREADCRUMB SCHEMA ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vikahecotech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Balers",
          "item": "https://vikahecotech.com/balers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Metal Balers",
          "item": "https://vikahecotech.com/metalbaler"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      {/* ================= HEADER ================= */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Metal Scrap Baler Machines</h1>
          <p className="lead">High-Compaction Solutions for Metal Recycling</p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="container text-center my-5 balerbackimg">
        <h2 className="mb-3">Industrial Metal Balers for Scrap Recycling</h2>

        <p>
          Vikah Ecotech manufactures metal scrap baler machines designed to
          efficiently compress ferrous and non-ferrous metals such as aluminum,
          copper, brass, mild steel, and stainless steel. Our hydraulic metal
          balers deliver high compaction force, rugged construction, and
          consistent performance for metal recycling plants, foundries, and
          industrial scrap yards.
        </p>

        {/* ================= MODEL TABS ================= */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {balers.map((baler, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${
                selected.name === baler.name ? "active" : ""
              }`}
              onClick={() => setSelected(baler)}
            >
              {baler.name}
            </button>
          ))}
        </div>

        {/* ================= MAIN SECTION ================= */}
        <div className="row justify-content-center align-items-center">
          {/* Carousel */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                className="carousel-img baler-carousel-img"
                alt={`${selected.name} metal scrap baler machine for recycling`}
                loading="lazy"
              />

              <button
                type="button"
                className="carousel-btn left"
                onClick={prevSlide}
                aria-label="Previous image"
              >
                ❮
              </button>
              <button
                type="button"
                className="carousel-btn right"
                onClick={nextSlide}
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name} Metal Scrap Baler</h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Compaction Force:</strong> {selected.force}
              </li>
              <li>
                <strong>Bale Weight:</strong> {selected.weight}
              </li>
              <li>
                <strong>Application:</strong> {selected.note}
              </li>
            </ul>

            <Link
              to={`/${selected.name.toLowerCase()}`}
              className="btn btn-outline-success mt-3"
            >
              Read more about {selected.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metalbaler;
