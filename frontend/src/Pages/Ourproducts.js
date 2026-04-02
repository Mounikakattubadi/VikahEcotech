// Ourproducts.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./OurProducts.module.css";

import Baler from "../images/baler.png";
import shredderhdimg from "../images/Shedder _ Final PNG.png";
import img1 from "../images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg";
import img2 from "../images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg";
import shredderhd from "../images/shredder_hd.jpg";
import shredderhd1 from "../images/shredder_hd1.jpg";
import ssshredderhdimg from "../images/R4.jpg";
import ssshredderhd from "../images/R1.png";

import OtherEqpTemp from "../Other Equipments/OtherEqpTemp";

/* Category Images */
import balerCategoryImg from "../images/baler.png";
import primaryCategoryImg from "../images/shredder_hd.jpg";
import secondaryCategoryImg from "../images/R4.jpg";

/* PLASTIC BALER */
import plas_main from "../images/Applications/plas14.webp";
import plas_img1 from "../images/Applications/plas16.jpg";
import plas_img2 from "../images/Applications/plas18.jpeg";

/* METAL BALER */
import metal_img1 from "../images/Applications/appm1.jpg";
import metal_img2 from "../images/Applications/appm4.jpg";
import metal_img3 from "../images/Applications/appm6.jpg";

/* PAPER & CARDBOARD BALER */
import pcb_main from "../images/Applications/apppcb1.jpg";
import pcb_img1 from "../images/Applications/apppcb6.webp";
import pcb_img2 from "../images/Applications/apppcb3.jpg";

/* PRIMARY SHREDDER – plastic */
import shp_img1 from "../images/Applications/shredp1.png";
import shp_img2 from "../images/Applications/shredp4.webp";
import shp_img3 from "../images/Applications/shredp2.jpeg";

/* PRIMARY SHREDDER – metal */
import shm_main from "../images/Applications/shredm1.jpg";

/* PRIMARY SHREDDER – paper & cardboard */
import shpcb_1 from "../images/Applications/shredpcb1.jpg";
import shpcb_2 from "../images/Applications/shredpcb4.jpg";
import shpcb_3 from "../images/Applications/shredpcb7.jpg";

/* PRIMARY SHREDDER – e-waste */
import she_ewaste1 from "../images/Applications/shredewaste2.webp";

/* SECONDARY SHREDDER — plastic */
import sec_plas from "../images/Applications/secplas.jpg";

/* SECONDARY SHREDDER — metal */
import sec_metal from "../images/Applications/secmetal.webp";

/* SECONDARY SHREDDER — paper & cardboard */
import sec_pcb from "../images/Applications/secpcb.webp";

const FALLBACK_IMG = Baler;

export default function Ourproducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(null);
  const [openCategory, setOpenCategory] = useState("baler");

  const products = useMemo(
    () => [
      {
        id: "baler",
        title: "BALER",
        description:
          "Applications: Tyre scrap, Metal, Plastic, Paper & Cardboard",
        categoryImg: balerCategoryImg,
        keywords: ["baler", "baling machine", "hydraulic baler"],
        applications: [
          {
            id: "tyre-scrap-baler",
            title: "Tyre Scrap Baler",
            blurb: "Hydraulic balers specially configured for tyre scrap.",
            keywords: ["tyre", "tire", "scrap", "rubber"],
            models: [
              { code: "BLT150", link: "/blt150", img: img1 },
              { code: "BLT200", link: "/blt200", img: img2 },
              { code: "BLT250", link: "/blt250", img: Baler },
            ],
          },
          {
            id: "metal-baler",
            title: "Metal Baler",
            blurb: "High-compression balers for metallic scrap.",
            keywords: ["metal", "steel", "iron", "scrap"],
            models: [
              { code: "BLM150", link: "/blm150", img: metal_img1 },
              { code: "BLM200", link: "/blm200", img: metal_img2 },
              { code: "BLM250", link: "/blm250", img: metal_img3 },
            ],
          },
          {
            id: "plastic-baler",
            title: "Plastic Baler",
            blurb: "Continuous & batch balers for plastic flakes and bottles.",
            keywords: ["plastic", "pet bottle", "bottle", "flakes"],
            models: [
              { code: "BLP30", link: "/blp30", img: plas_main },
              { code: "BLP40", link: "/blp40", img: plas_img1 },
              { code: "BLP50", link: "/blp50", img: plas_img2 },
            ],
          },
          {
            id: "paper-cardboard-baler",
            title: "Paper & Cardboard Baler",
            blurb: "Efficient baling for paper and corrugated cardboard.",
            keywords: ["paper", "cardboard", "carton", "corrugated"],
            models: [
              { code: "BLC30", link: "/blc30", img: pcb_main },
              { code: "BLC40", link: "/blc40", img: pcb_img1 },
              { code: "BLC50", link: "/blc50", img: pcb_img2 },
            ],
          },
        ],
      },
      {
        id: "primary-shredder",
        title: "PRIMARY SHREDDER",
        description:
          "Applications: Tyre, Plastic, Metal, Paper & Cardboard, E-Waste",
        categoryImg: primaryCategoryImg,
        keywords: ["primary shredder", "industrial shredder", "crusher"],
        applications: [
          {
            id: "tyre-primary",
            title: "Tyre (Primary)",
            blurb: "High-torque primary shredding for bulky tyres.",
            keywords: ["tyre", "rubber", "tire"],
            models: [
              { code: "SHT6000", link: "/sht6000", img: shredderhd },
              { code: "SHT8000", link: "/sht8000", img: shredderhd1 },
              { code: "SHT12000", link: "/sht12000", img: shredderhdimg },
            ],
          },
          {
            id: "plastic-primary",
            title: "Plastic (Primary)",
            blurb: "Robust primary shredders for large plastic parts.",
            keywords: ["plastic", "container", "drum"],
            models: [
              { code: "SHP100", link: "/shp100", img: shp_img1 },
              { code: "SHP150", link: "/shp150", img: shp_img2 },
              { code: "SHP200", link: "/shp200", img: shp_img3 },
            ],
          },
          {
            id: "metal-primary",
            title: "Metal (Primary)",
            blurb: "Primary metal shredder for bulky scrap.",
            keywords: ["metal", "steel", "iron"],
            models: [{ code: "SHM4000", link: "/shm4000", img: shm_main }],
          },
        ],
      },
      {
        id: "secondary-shredder",
        title: "SECONDARY SHREDDER",
        description:
          "Applications: Rasper, Metal, Plastic, Paper & Cardboard",
        categoryImg: secondaryCategoryImg,
        keywords: ["secondary shredder", "rasper", "fine shredder"],
        applications: [
          {
            id: "rasper",
            title: "Rasper",
            blurb: "Finishing raspers for consistent particle size.",
            keywords: ["rasper", "rubber powder", "fine shred"],
            models: [
              { code: "RST4000", link: "/rst4000", img: ssshredderhdimg },
              { code: "RST6000", link: "/rst6000", img: ssshredderhd },
            ],
          },
          {
            id: "plastic-secondary",
            title: "Plastic (Secondary)",
            blurb: "Plastic finishing and size reduction.",
            keywords: ["plastic", "flakes", "small plastic"],
            models: [
              {
                code: "Plastic Shredder",
                link: "/secondaryplasticshredder",
                img: sec_plas,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const filteredProducts = products
    .map((category) => {
      const filteredApplications = category.applications
        .map((app) => {
          const filteredModels = app.models.filter((model) => {
            const search = query.toLowerCase().trim();

            if (!search) return true;

            return (
              model.code.toLowerCase().includes(search) ||
              app.title.toLowerCase().includes(search) ||
              category.title.toLowerCase().includes(search) ||
              app.blurb.toLowerCase().includes(search) ||
              category.description.toLowerCase().includes(search) ||
              category.keywords?.some((k) =>
                k.toLowerCase().includes(search)
              ) ||
              app.keywords?.some((k) =>
                k.toLowerCase().includes(search)
              )
            );
          });

          return {
            ...app,
            models: filteredModels,
          };
        })
        .filter((app) => app.models.length > 0);

      return {
        ...category,
        applications: filteredApplications,
      };
    })
    .filter((category) => category.applications.length > 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.heroSection}>
        <span className={styles.heroBadge}>
          Industrial Recycling Solutions
        </span>

        <h1 className={styles.pageTitle}>Our Products</h1>

        <p className={styles.lead}>
          Explore our balers and shredders by category. Click a section below
          to view related products and models.
        </p>

        <div className={styles.searchWrapTop}>
          <input
            className={styles.search}
            placeholder="Search models, applications, tyre, metal, plastic..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query && (
            <button
              className={styles.clearBtn}
              onClick={() => setQuery("")}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className={styles.mainContent}>
        {filteredProducts.map((category) => {
          const isOpen = openCategory === category.id || query;

          return (
            <div key={category.id} className={styles.dropdownSection}>
              <button
                className={
                  isOpen
                    ? `${styles.dropdownHeader} ${styles.dropdownHeaderActive}`
                    : styles.dropdownHeader
                }
                onClick={() =>
                  setOpenCategory(isOpen ? null : category.id)
                }
              >
                <div className={styles.dropdownLeft}>
                  <div className={styles.dropdownIcon}>
                    <img
                      src={category.categoryImg}
                      alt={category.title}
                      className={styles.dropdownIconImg}
                    />
                  </div>

                  <div>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </div>
                </div>

                <span
                  className={
                    isOpen
                      ? `${styles.dropdownArrow} ${styles.rotateArrow}`
                      : styles.dropdownArrow
                  }
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className={styles.dropdownBody}>
                  {category.applications.map((app) => (
                    <div key={app.id} className={styles.applicationBlock}>
                      <div className={styles.applicationHeader}>
                        <div>
                          <h3>{app.title}</h3>
                          <p>{app.blurb}</p>
                        </div>
                      </div>

                      <div className={styles.modelGrid}>
                        {app.models.map((model) => (
                          <article key={model.code} className={styles.card}>
                            <div
                              className={styles.cardImg}
                              onClick={() =>
                                setModal({
                                  ...model,
                                  appTitle: app.title,
                                  categoryTitle: category.title,
                                })
                              }
                            >
                              <img
                                src={model.img || FALLBACK_IMG}
                                alt={model.code}
                              />
                            </div>

                            <div className={styles.cardBody}>
                              <div className={styles.modelCode}>
                                {model.code}
                              </div>

                              <div className={styles.modelMeta}>
                                <span className={styles.metaChip}>
                                  {app.title}
                                </span>
                              </div>

                              <Link
                                to={model.link}
                                className={styles.openLink}
                              >
                                View Product →
                              </Link>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className={styles.otherSection}>
          <h2 className={styles.otherTitle}>Other Equipment</h2>
          <OtherEqpTemp />
        </div>
      </div>

      {modal && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setModal(null)}
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setModal(null)}
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <strong>{modal.code}</strong>
              <span>
                {modal.appTitle} • {modal.categoryTitle}
              </span>
            </div>

            <div className={styles.modalBody}>
              <img
                src={modal.img || FALLBACK_IMG}
                alt={modal.code}
              />
            </div>

            <div className={styles.modalFooter}>
              <Link to={modal.link} className={styles.btnPrimary}>
                View Product Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}