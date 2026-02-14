import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import mainSpecImage from "../../images/Applications/apppcb1.jpg";
import balerImage from "../../images/Applications/apppcb6.webp";
import img1 from "../../images/Applications/apppcb3.jpg";

function Pcb() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: "BLC30",
      type: "Paper & Cardboard Baler",
      force: "30 Ton",
      weight: "120–200 kg",
      note: "Compact paper and cardboard baler suitable for small recycling units and warehouses handling light packaging waste.",
    },
    {
      name: "BLC40",
      type: "Paper & Cardboard Baler",
      force: "40 Ton",
      weight: "200–250 kg",
      note: "Mid-capacity baler designed for carton recycling, corrugated boxes, and commercial packaging waste.",
    },
    {
      name: "BLC50",
      type: "Paper & Cardboard Baler",
      force: "50 Ton",
      weight: "250–350 kg",
      note: "Heavy-duty industrial baler for high-volume paper and cardboard recycling operations.",
    },
  ];

  const carouselImages = [mainSpecImage, balerImage, img1];

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
          Paper & Cardboard Baler Machines for Recycling | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures paper and cardboard baler machines for recycling cartons, packaging waste, and corrugated boxes. Durable hydraulic balers for industrial and commercial recycling."
        />
        <meta
          name="keywords"
          content="paper baler machine, cardboard baler machine, paper cardboard baler, carton baler, recycling baler for paper, cardboard baler manufacturer india"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link rel="canonical" href="https://vikahecotech.com/pcb" />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Paper & Cardboard Baler Machines for Recycling | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="High-performance paper and cardboard balers for industrial and commercial recycling of cartons, corrugated boxes, and packaging waste."
        />
        <meta property="og:url" content="https://vikahecotech.com/pcb" />
        <meta
          property="og:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Paper & Cardboard Baler Machines for Recycling | Vikah Ecotech"
        />
        <meta
          name="twitter:description"
          content="High-performance paper and cardboard balers for industrial and commercial recycling of cartons, corrugated boxes, and packaging waste."
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

        {/* ===== PRODUCT/ITEM LIST SCHEMA FOR PAPER & CARDBOARD BALERS ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Paper & Cardboard Baler Machines",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "BLC30",
          "description": "Paper & Cardboard Baler BLC30 with 30 Ton force, suitable for small recycling units and warehouses handling light packaging waste.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blc30"
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "BLC40",
          "description": "Paper & Cardboard Baler BLC40 with 40 Ton force, ideal for carton recycling, corrugated boxes, and commercial packaging waste.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blc40"
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "BLC50",
          "description": "Heavy-duty Paper & Cardboard Baler BLC50 with 50 Ton force, engineered for high-volume paper and cardboard recycling operations.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blc50"
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
          "name": "Paper & Cardboard Balers",
          "item": "https://vikahecotech.com/pcb"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      {/* ================= HEADER ================= */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Paper & Cardboard Baler Machines</h1>
          <p className="lead">
            Efficient Recycling Solutions for Paper & Packaging Waste
          </p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="container text-center my-5 balerbackimg">
        <h2 className="mb-3">
          Industrial Balers for Paper & Cardboard Recycling
        </h2>

        <p>
          Vikah Ecotech manufactures paper and cardboard baler machines designed
          for efficient recycling of cartons, corrugated cardboard, office
          paper, and packaging waste. Our hydraulic balers deliver high
          compaction, durable construction, and reliable performance for
          recycling plants, warehouses, printing units, and commercial waste
          management facilities.
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
                alt={`${selected.name} paper and cardboard baler machine for recycling`}
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
            <h3 className="machine-title">
              {selected.name} Paper & Cardboard Baler
            </h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Compaction Force:</strong> {selected.force}
              </li>
              <li>
                <strong>Baler Weight:</strong> {selected.weight}
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

export default Pcb;
