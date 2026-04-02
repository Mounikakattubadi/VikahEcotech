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
  const [openCategory, setOpenCategory] = useState(null);
  const [openApplication, setOpenApplication] = useState(null);

  const products = useMemo(
    () => [
      {
        id: "baler",
        title: "BALER",
        description:
          "Applications: Tyre scrap, Metal, Plastic, Paper & Cardboard",
        categoryImg: balerCategoryImg,
        applications: [
          {
            id: "tyre-scrap-baler",
            title: "Tyre Scrap Baler",
            blurb: "Hydraulic balers specially configured for tyre scrap.",
            models: [
              { code: "BLT150", link: "/blt150", img: img1 },
              { code: "BLT200", link: "/blt200", img: img2 },
              { code: "BLT250", link: "/blt250", img: Baler },
            ],
          },
          {
            id: "plastic-baler",
            title: "Plastic Balers",
            blurb: "Continuous & batch balers for plastic flakes and bottles.",
            models: [
              { code: "BLP30", link: "/blp30", img: plas_main },
              { code: "BLP40", link: "/blp40", img: plas_img1 },
              { code: "BLP50", link: "/blp50", img: plas_img2 },
            ],
          },
          {
            id: "paper-cardboard-baler",
            title: "Paper & Cardboard Balers",
            blurb: "Efficient baling for paper and corrugated cardboard.",
            models: [
              { code: "BLC30", link: "/blc30", img: pcb_main },
              { code: "BLC40", link: "/blc40", img: pcb_img1 },
              { code: "BLC50", link: "/blc50", img: pcb_img2 },
            ],
          },
          {
            id: "metal-baler",
            title: "Metal Balers",
            blurb: "High-compression balers for metallic scrap.",
            models: [
              { code: "BLM150", link: "/blm150", img: metal_img1 },
              { code: "BLM200", link: "/blm200", img: metal_img2 },
              { code: "BLM250", link: "/blm250", img: metal_img3 },
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
        applications: [
          {
            id: "tyre-primary",
            title: "Tyre Shredders",
            blurb: "High-torque primary shredding for bulky tyres.",
            models: [
              { code: "SHT6000", link: "/sht6000", img: shredderhd },
              { code: "SHT8000", link: "/sht8000", img: shredderhd1 },
              { code: "SHT12000", link: "/sht12000", img: shredderhdimg },
            ],
          },
          {
            id: "plastic-primary",
            title: "Plastic Shredders",
            blurb: "Robust primary shredders for large plastic parts.",
            models: [
              { code: "SHP100", link: "/shp100", img: shp_img1 },
              { code: "SHP150", link: "/shp150", img: shp_img2 },
              { code: "SHP200", link: "/shp200", img: shp_img3 },
            ],
          },
          {
            id: "metal-primary",
            title: "Metal Shredders",
            blurb: "Primary metal shredder for bulky scrap.",
            models: [{ code: "SHM4000", link: "/shm4000", img: shm_main }],
          },
          {
            id: "paper-primary",
            title: "Paper & Cardboard Shredders",
            blurb: "Primary shredding prior to pulping or baling.",
            models: [
              { code: "SHC6000", link: "/shc6000", img: shpcb_1 },
              { code: "SHC8000", link: "/shc8000", img: shpcb_2 },
              { code: "SHC12000", link: "/shc12000", img: shpcb_3 },
            ],
          },
        ],
      },
      {
        id: "secondary-shredder",
        title: "SECONDARY SHREDDER",
        description:
          "Applications: Rasper, Metal, Plastic, Paper & Cardboard",
        categoryImg: secondaryCategoryImg,
        applications: [
          {
            id: "rasper",
            title: "Rasper Machines",
            blurb: "Finishing raspers for consistent particle size.",
            models: [
              { code: "RST4000", link: "/rst4000", img: ssshredderhdimg },
              { code: "RST6000", link: "/rst6000", img: ssshredderhd },
            ],
          },
          {
            id: "metal-secondary",
            title: "Metal Shredders",
            blurb: "Secondary metal processing and sizing.",
            models: [
              {
                code: "Metal Shredder",
                link: "/secondarymetalshredder",
                img: sec_metal,
              },
            ],
          },
          {
            id: "plastic-secondary",
            title: "Plastic Shredders",
            blurb: "Plastic finishing and size reduction.",
            models: [
              {
                code: "Plastic Shredder",
                link: "/secondaryplasticshredder",
                img: sec_plas,
              },
            ],
          },
          {
            id: "paper-secondary",
            title: "Paper & Cardboard Shredders",
            blurb: "Secondary shredding for uniform output.",
            models: [
              {
                code: "Paper & Cardboard Shredder",
                link: "/secondarypcb",
                img: sec_pcb,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.heroSection}>
        <span className={styles.heroBadge}>
          Industrial Recycling Solutions
        </span>

        <h1 className={styles.pageTitle}>Our Products</h1>

        <p className={styles.lead}>
          Explore our balers and shredders by category. Open a section to view
          machines and models.
        </p>

        <div className={styles.searchWrapTop}>
          <input
            className={styles.search}
            placeholder="Search models, categories, plastic, tyre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query && (
            <button
              className={styles.clearBtn}
              onClick={() => {
                setQuery("");
                setOpenCategory(null);
                setOpenApplication(null);
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className={styles.mainContent}>
        {products.map((category) => {
          const categoryMatch =
            query === "" ||
            category.title.toLowerCase().includes(query.toLowerCase()) ||
            category.description.toLowerCase().includes(query.toLowerCase());

          const filteredApplications = category.applications.filter((app) => {
            const appMatch =
              app.title.toLowerCase().includes(query.toLowerCase()) ||
              app.blurb.toLowerCase().includes(query.toLowerCase());

            const modelMatch = app.models.some((model) =>
              model.code.toLowerCase().includes(query.toLowerCase())
            );

            return query === "" || appMatch || modelMatch;
          });

          if (query && !categoryMatch && filteredApplications.length === 0) {
            return null;
          }

          const isCategoryOpen =
            openCategory === category.id || query !== "";

          return (
            <div key={category.id} className={styles.dropdownSection}>
              <button
                className={
                  isCategoryOpen
                    ? `${styles.dropdownHeader} ${styles.dropdownHeaderActive}`
                    : styles.dropdownHeader
                }
                onClick={() => {
                  setOpenCategory(
                    openCategory === category.id ? null : category.id
                  );
                  setOpenApplication(null);
                }}
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
                    isCategoryOpen
                      ? `${styles.dropdownArrow} ${styles.rotateArrow}`
                      : styles.dropdownArrow
                  }
                >
                  ▼
                </span>
              </button>

              {isCategoryOpen && (
                <div className={styles.dropdownBody}>
                  {filteredApplications.map((app) => {
                    const isApplicationOpen =
                      openApplication === app.id || query !== "";

                    return (
                      <div
                        key={app.id}
                        className={styles.applicationDropdown}
                      >
                        <button
                          className={
                            isApplicationOpen
                              ? `${styles.applicationToggle} ${styles.applicationToggleActive}`
                              : styles.applicationToggle
                          }
                          onClick={() =>
                            setOpenApplication(
                              openApplication === app.id ? null : app.id
                            )
                          }
                        >
                          <div>
                            <h3>{app.title}</h3>
                            <p>{app.blurb}</p>
                          </div>

                          <span
                            className={
                              isApplicationOpen
                                ? `${styles.dropdownArrow} ${styles.rotateArrow}`
                                : styles.dropdownArrow
                            }
                          >
                            ▼
                          </span>
                        </button>

                        {isApplicationOpen && (
                          <div className={styles.applicationContent}>
                            <div className={styles.modelGrid}>
                              {app.models.map((model) => (
                                <article
                                  key={model.code}
                                  className={styles.card}
                                >
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
                        )}
                      </div>
                    );
                  })}
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