import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import mainSpecImage from "../../images/Applications/plas14.webp";
import balerImage from "../../images/Applications/plas16.jpg";
import img1 from "../../images/Applications/plas18.jpeg";

function Plasticbaler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: "BLP30",
      type: "Plastic Baler",
      force: "30 Ton",
      weight: "150-250 kg",
      note: "Compact design for lightweight plastic waste such as PET bottles, LDPE films, and packaging plastics.",
    },
    {
      name: "BLP40",
      type: "Plastic Baler",
      force: "40 Ton",
      weight: "200-350 kg",
      note: "Ideal for medium-density plastic waste including HDPE containers and mixed plastic scrap.",
    },
    {
      name: "BLP50",
      type: "Plastic Baler",
      force: "50 Ton",
      weight: "350-500 kg",
      note: "Heavy-duty plastic baler designed for industrial-scale recycling and waste management operations.",
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
          Plastic Baler Machines Manufacturer in India | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Industrial plastic baler machines for PET, HDPE, LDPE, and plastic waste recycling. Vikah Ecotech manufactures durable hydraulic plastic balers for commercial and industrial use."
        />
        <meta
          name="keywords"
          content="plastic baler machine, plastic balers, plastic recycling baler, PET baler, HDPE baler, LDPE baler, plastic waste baler machine, plastic baler manufacturer in India"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link rel="canonical" href="https://vikahecotech.com/plasticbaler" />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Plastic Baler Machines Manufacturer in India | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="High-performance plastic baler machines for PET, HDPE, LDPE, and plastic waste recycling. Durable hydraulic plastic balers for industrial recycling."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/plasticbaler"
        />
        <meta
          property="og:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Plastic Baler Machines Manufacturer in India | Vikah Ecotech"
        />
        <meta
          name="twitter:description"
          content="High-performance plastic baler machines for PET, HDPE, LDPE, and plastic waste recycling. Durable hydraulic plastic balers for industrial recycling."
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

        {/* ===== PRODUCT/ITEM LIST SCHEMA FOR PLASTIC BALERS ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Plastic Baler Machines",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "BLP30",
          "description": "Plastic Baler BLP30 with 30 Ton force, suitable for PET bottles, LDPE films, and lightweight plastic waste.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blp30"
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "BLP40",
          "description": "Plastic Baler BLP40 with 40 Ton force, ideal for HDPE containers and mixed plastic scrap.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blp40"
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "BLP50",
          "description": "Heavy-duty Plastic Baler BLP50 with 50 Ton force for industrial-scale plastic recycling and waste management.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blp50"
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
          "name": "Plastic Balers",
          "item": "https://vikahecotech.com/plasticbaler"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Plastic Baler Machines</h1>
          <p className="lead">Efficient Plastic Waste Recycling Solutions</p>
        </div>
      </header>

      <div className="container text-center my-5 balerbackimg">
        {/* Intro */}
        <h2 className="mb-3">Industrial Plastic Balers for Recycling</h2>

        <p>
          Vikah Ecotech manufactures high-performance plastic baler machines
          designed for efficient recycling of PET bottles, HDPE containers, LDPE
          films, packaging waste, and other plastic scrap materials. Our
          hydraulic plastic balers deliver consistent compression, durable
          construction, and easy operation for industrial recycling plants,
          commercial facilities, and waste management operations.
        </p>

        {/* Model Tabs */}
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

        {/* Main Section */}
        <div className="row justify-content-center align-items-center">
          {/* Carousel */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                className="carousel-img baler-carousel-img"
                alt={`${selected.name} plastic baler machine for recycling`}
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
              {selected.name} Plastic Baler Machine
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
              Read more about {selected.name} Plastic Baler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plasticbaler;
