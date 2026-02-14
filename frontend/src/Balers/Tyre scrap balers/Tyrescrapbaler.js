import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel"; // ✅ add this
import "bootstrap/dist/css/bootstrap.min.css"; // (already likely in index.js, but safe here too)
import "../../Other Equipments/Tyrecutting.css";
import "../../Pages/Models.css";
import Balerimg from "../../images/baler.png";
import Baler1 from "../../images/baler1.png";
import Baler2 from "../../images/baler2.png";
import { Helmet } from "react-helmet";

function Tyrescrapbaler() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const balers = [
    {
      name: "BLT150",
      type: "Baler",
      force: "150 Ton",
      weight: "9000 kg",
      note: "Operators can easily and safely operate the BLT-150.",
    },
    {
      name: "BLT200",
      type: "Baler",
      force: "200 Ton",
      weight: "9000 kg",
      note: "Our BLT-200 is engineered to efficiently compress.",
    },
    {
      name: "BLT250",
      type: "Baler",
      force: "250 Ton",
      weight: "11000 kg",
      note: "Operators can easily and safely operate the BLT-250.",
    },
  ];

  const carouselImages = [Balerimg, Baler1, Baler2];

  const [selected, setSelected] = useState(balers[0]);

  return (
    <div>
      <Helmet>
        {/* ===== BASIC SEO ===== */}
        <title>
          Tyre Scrap Baler Machine Manufacturer in Hyderabad | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Vikah Ecotech manufactures heavy-duty tyre scrap baler machines for compacting scrap tyres in recycling and waste management industries across India."
        />

        <meta
          name="keywords"
          content="tyre scrap baler, scrap tyre baler machine, tyre recycling baler,tyre crushing machine, industrial baler for tyres"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link
          rel="canonical"
          href="https://vikahecotech.com/tyre-scrap-balers"
        />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tyre Scrap Baler Machine | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="Heavy-duty tyre scrap balers for efficient scrap tyre recycling and industrial waste management in Hyderabad, India."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/tyre-scrap-balers"
        />
        <meta
          property="og:image"
          content="https://vikahecotech.com/logo_vk.png"
        />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tyre Scrap Baler Machine | Vikah Ecotech"
        />
        <meta
          name="twitter:description"
          content="Heavy-duty tyre scrap balers for scrap tyre recycling and industrial waste management across India."
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

        {/* ===== PRODUCT SCHEMA FOR EACH BALER MODEL ===== */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Tyre Scrap Baler Machines",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "BLT150",
          "description": "Tyre Scrap Baler BLT150 with 150 Ton compaction force and 9000 kg weight.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blt150"
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "BLT200",
          "description": "Tyre Scrap Baler BLT200 with 200 Ton compaction force and 9000 kg weight.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blt200"
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "BLT250",
          "description": "Tyre Scrap Baler BLT250 with 250 Ton compaction force and 11000 kg weight.",
          "brand": { "@type": "Brand", "name": "Vikah Ecotech" },
          "url": "https://vikahecotech.com/blt250"
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
          "name": "Tyre Scrap Balers",
          "item": "https://vikahecotech.com/tyre-scrap-balers"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      {/* Header */}
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Tyre Scrap Balers</h1>
        </div>
      </header>

      <div className="container text-center my-4 balerbackimg">
        <p>
          <p>
            Our powerful tyre scrap balers are engineered to handle high
            compaction requirements for scrap tyres and other heavy-duty
            recycling processes. These industrial baling machines are widely
            used in tyre recycling, industrial baling,tyre baler, and waste
            management applications across India.
          </p>
        </p>

        {/* Tab Buttons */}
        <div className="btn-group flex-wrap mb-4">
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

        {/* MAIN DISPLAY */}
        <div className="row justify-content-center align-items-center">
          {/* CAROUSEL – now react-bootstrap */}
          <div className="col-md-6 mb-4">
            <Carousel
              interval={4000}
              pause="hover"
              className="baler-carousel-wrapper"
            >
              {carouselImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    src={img}
                    className="d-block w-100 baler-carousel-img"
                    alt={`Baler ${i + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* INFO */}
          <div className="col-md-6 mb-4 makecenter">
            <h3 className="machine-title">{selected.name}</h3>
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
                <strong>Note:</strong> {selected.note}
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

export default Tyrescrapbaler;
