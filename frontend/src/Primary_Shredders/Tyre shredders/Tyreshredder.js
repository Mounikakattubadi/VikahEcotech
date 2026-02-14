import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";

import shredderhdimg from "../../images/Shedder _ Final PNG.png";
import shredderhd from "../../images/shredder_hd.jpg";
import shredderhd1 from "../../images/shredder_hd1.jpg";
import { Helmet } from "react-helmet";

function Tyreshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shredders = [
    {
      name: "SHT6000",
      type: "Shredder",
      power: "120 - 160 HP",
      system: "Robust Hydraulic System",
      feature: "Our SHT6000 is equipped with user-friendly controls.",
    },
    {
      name: "SHT8000",
      type: "Shredder",
      power: "160 - 220 HP",
      feature: "Our SHT8000 is equipped with user-friendly controls.",
    },
    {
      name: "SHT12000",
      type: "Shredder",
      power: "220 - 280 HP",
      system: "Robust Hydraulic System",
      feature: "Our SHT12000 is equipped with user-friendly controls.",
    },
  ];

  // Shared carousel images
  const carouselImages = [shredderhdimg, shredderhd, shredderhd1];

  const [selected, setSelected] = useState(shredders[0]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <div>
      <Helmet>
        {/* ===== BASIC SEO ===== */}
        <title>Tyre Shredder Machine for Recycling | Vikah Ecotech</title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures heavy-duty tyre shredder machines designed for primary shredding of waste tyres in recycling plants. Reliable tyre shredders for industrial applications."
        />
        <meta
          name="keywords"
          content="tyre shredder machine, tyre shredding machine, tyre recycling shredder, primary tyre shredder, industrial tyre shredder"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link rel="canonical" href="https://vikahecotech.com/tyreshredder" />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tyre Shredder Machine for Recycling | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="Primary tyre shredders for industrial recycling plants. High-performance shredders for processing whole tyres into uniform shredded material."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/tyreshredder"
        />
        <meta
          property="og:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tyre Shredder Machine for Recycling | Vikah Ecotech"
        />
        <meta
          name="twitter:description"
          content="Primary tyre shredders for industrial recycling plants. High-performance shredders for processing whole tyres into uniform shredded material."
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

        {/* ===== PRODUCT SCHEMA FOR EACH SHREDDER ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Primary Tyre Shredder Machines",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "SHT6000",
          "description": "Primary tyre shredder SHT6000 with 120-160 HP power and robust hydraulic system.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/sht6000"
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "SHT8000",
          "description": "Primary tyre shredder SHT8000 with 160-220 HP power for industrial tyre recycling.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/sht8000"
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "SHT12000",
          "description": "Primary tyre shredder SHT12000 with 220-280 HP power and robust hydraulic system for high-performance tyre shredding.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/sht12000"
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
          "name": "Primary Shredders",
          "item": "https://vikahecotech.com/primary-shredder"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tyre Shredders",
          "item": "https://vikahecotech.com/tyreshredder"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Primary Shredders For Tyres</h1>
        </div>
      </header>
      <div className="container text-center my-4 balerbackimg">
        <p>
          Our primary tyre shredders are engineered for powerful, efficient, and
          continuous tyre shredding operations in recycling plants. Built with
          high horsepower drives and robust hydraulic systems, these industrial
          shredders deliver reliable performance for processing whole tyres into
          uniform shredded material for downstream recycling applications.
        </p>

        {/* Buttons */}
        <div className="btn-group flex-wrap mb-4" role="group">
          {shredders.map((machine, index) => (
            <button
              key={index}
              className={`btn btn-outline-success mx-1 my-1 ${
                selected.name === machine.name ? "active" : ""
              }`}
              onClick={() => setSelected(machine)}
            >
              {machine.name}
            </button>
          ))}
        </div>

        {/* MAIN SECTION */}
        <div className="row justify-content-center align-items-center">
          {/* CAROUSEL (same style as Tyrescrapbaler) */}
          <div className="col-md-6 mb-4">
            <div className="custom-carousel">
              <img
                src={carouselImages[slide]}
                alt="Plastic Shredder"
                className="baler-carousel-img carousel-img"
              />
              <button
                type="button"
                className="carousel-btn left"
                onClick={prevSlide}
              >
                ❮
              </button>
              <button
                type="button"
                className="carousel-btn right"
                onClick={nextSlide}
              >
                ❯
              </button>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>

            <ul className="list-unstyled">
              <li>
                <strong>Type:</strong> {selected.type}
              </li>
              <li>
                <strong>Power Range:</strong> {selected.power}
              </li>
              {selected.system && (
                <li>
                  <strong>System:</strong> {selected.system}
                </li>
              )}
              <li>
                <strong>Feature:</strong> {selected.feature}
              </li>
            </ul>

            <Link
              to={`/${selected.name.toLowerCase()}`}
              className="btn btn-outline-success mt-3"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tyreshredder;
