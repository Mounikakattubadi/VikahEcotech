// Ourproducts.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./OurProducts.module.css";

import Baler from "./images/baler.png";
import shredderhdimg from "./images/Shedder _ Final PNG.png";
import img1 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg";
import img2 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg";
import shredderhd from "./images/shredder_hd.jpg";
import shredderhd1 from "./images/shredder_hd1.jpg";
import ssshredderhdimg from "./images/R4.jpg";
import ssshredderhd from "./images/R1.png";

import OtherEqpTemp from "./OtherEqpTemp";

/* ------------------ NEW IMAGE IMPORTS (per your list) ------------------ */

/* PLASTIC BALER */
import plas_main from './images/Applications/plas14.webp';
import plas_img1 from './images/Applications/plas16.jpg';
import plas_img2 from './images/Applications/plas18.jpeg';

/* METAL BALER */
import metal_img1 from './images/Applications/appm1.jpg';
import metal_img2 from './images/Applications/appm4.jpg';
import metal_img3 from './images/Applications/appm6.jpg';

/* PAPER & CARDBOARD BALER */
import pcb_main from './images/Applications/apppcb1.jpg';
import pcb_img1 from './images/Applications/apppcb6.webp';
import pcb_img2 from './images/Applications/apppcb3.jpg';

/* PRIMARY SHREDDER – plastic */
import shp_img1 from "./images/Applications/shredp1.png";
import shp_img2 from "./images/Applications/shredp4.webp";
import shp_img3 from "./images/Applications/shredp2.jpeg";

/* PRIMARY SHREDDER – metal */
import shm_main from "./images/Applications/shredm1.jpg";
import shm_angle1 from "./images/Applications/shredm2.jpg";
import shm_angle2 from "./images/Applications/shredm3.jpg";

/* PRIMARY SHREDDER – paper & cardboard */
import shpcb_1 from "./images/Applications/shredpcb1.jpg";
import shpcb_2 from "./images/Applications/shredpcb4.jpg";
import shpcb_3 from "./images/Applications/shredpcb7.jpg";

/* PRIMARY SHREDDER – e-waste */
import she_ewaste1 from "./images/Applications/shredewaste2.webp";

/* SECONDARY SHREDDER — plastic */
import sec_plas from "./images/Applications/secplas.jpg";

/* SECONDARY SHREDDER — metal */
import sec_metal from "./images/Applications/secmetal.webp";

/* SECONDARY SHREDDER — paper & cardboard */
import sec_pcb from "./images/Applications/secpcb.webp";

/* --------------------------------------------------------------------- */

const FALLBACK_IMG = Baler;

export default function Ourproducts() {
  useEffect(() => window.scrollTo(0, 0), []);

  const products = useMemo(
    () => [
      {
        id: "baler",
        title: "BALER",
        description: "Applications: Tyre scrap, Metal, Plastic, Paper & Cardboard",
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
            id: "metal-baler",
            title: "Metal Baler",
            blurb: "High-compression balers for metallic scrap.",
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
        description: "Applications: Tyre, Plastic, Metal, Paper & Cardboard, E-Waste",
        applications: [
          {
            id: "tyre-primary",
            title: "Tyre (Primary)",
            blurb: "High-torque primary shredding for bulky tyres.",
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
            models: [
              { code: "SHM4000", link: "/shm4000", img: shm_main },
            ],
          },
          {
            id: "paper-primary",
            title: "Paper & Cardboard (Primary)",
            blurb: "Primary shredding prior to pulping or baling.",
            models: [
              { code: "SHC6000", link: "/shc6000", img: shpcb_1 },
              { code: "SHC8000", link: "/shc8000", img: shpcb_2 },
              { code: "SHC12000", link: "/shc12000", img: shpcb_3 },
            ],
          },
          {
            id: "ewaste-primary",
            title: "E-Waste (Primary)",
            blurb: "Rugged primary shredders for e-waste pre-processing.",
            models: [
              { code: "SHE400", link: "/she400", img: she_ewaste1 },
            ],
          },
        ],
      },

      {
        id: "secondary-shredder",
        title: "SECONDARY SHREDDER",
        description: "Applications: Rasper, Metal, Plastic, Paper & Cardboard",
        applications: [
          {
            id: "rasper",
            title: "Rasper",
            blurb: "Finishing raspers for consistent particle size.",
            models: [
              { code: "RST4000", link: "/rst4000", img: ssshredderhdimg },
              { code: "RST6000", link: "/rst6000", img: ssshredderhd },
            ],
          },
          {
            id: "metal-secondary",
            title: "Metal (Secondary)",
            blurb: "Secondary metal processing and sizing.",
            models: [
              { code: "Metal Shredder", link: "/secondarymetalshredder", img: sec_metal },
            ],
          },
          {
            id: "plastic-secondary",
            title: "Plastic (Secondary)",
            blurb: "Plastic finishing and size reduction.",
            models: [
              { code: "Plastic Shredder", link: "/secondaryplasticshredder", img: sec_plas },
            ],
          },
          {
            id: "paper-secondary",
            title: "Paper & Cardboard (Secondary)",
            blurb: "Secondary shredding for uniform output.",
            models: [
              { code: "Paper & Cardboard Shredder", link: "/secondarypcb", img: sec_pcb },
            ],
          },
        ],
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeApp, setActiveApp] = useState(null);
  const [modal, setModal] = useState(null);

  const flatModels = useMemo(() => {
    const out = [];
    products.forEach((cat) => {
      cat.applications.forEach((app) => {
        app.models.forEach((m) => {
          out.push({
            ...m,
            appId: app.id,
            appTitle: app.title,
            categoryId: cat.id,
            categoryTitle: cat.title,
          });
        });
      });
    });
    return out;
  }, [products]);

  const q = query.trim().toLowerCase();
  const filteredModels = flatModels.filter((m) => {
    if (!q) return true;
    return (
      (m.code && m.code.toLowerCase().includes(q)) ||
      (m.appTitle && m.appTitle.toLowerCase().includes(q)) ||
      (m.categoryTitle && m.categoryTitle.toLowerCase().includes(q))
    );
  });

  const visibleByCategory = useMemo(() => {
    const map = {};
    filteredModels.forEach((m) => {
      if (!map[m.categoryId]) map[m.categoryId] = {};
      if (!map[m.categoryId][m.appId]) map[m.categoryId][m.appId] = [];
      map[m.categoryId][m.appId].push(m);
    });
    return map;
  }, [filteredModels]);

  const categories = ["all", ...products.map((p) => p.id)];

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setActiveApp(null);
    setQuery("");
  };

  const handleAppJump = (appId) => {
    setActiveApp(appId);
    const el = document.getElementById(appId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerFull}>
        <aside className={styles.left}>

          <div className={styles.searchWrap}>
            <input
              className={styles.search}
              placeholder="Search models, app, category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
            <button className={styles.clearBtn} onClick={() => setQuery("")} aria-label="Clear search">✕</button>
          </div>

          <div className={styles.catTitle}>Categories</div>
          <nav className={styles.catList} aria-label="Product categories">
            {categories.map((c) => {
              const label = c === "all" ? "All" : products.find((p) => p.id === c).title;
              return (
                <button
                  key={c}
                  className={`${styles.catItem} ${activeCategory === c ? styles.activeCat : ""}`}
                  onClick={() => handleCategoryClick(c)}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          <div className={styles.quickTitle}>Quick jump</div>
          <div className={styles.quickList}>
            {products.map((p) =>
              p.applications.map((a) => (
                <button
                  key={a.id}
                  className={styles.quickChip}
                  onClick={() => {
                    handleCategoryClick(p.id);
                    setTimeout(() => handleAppJump(a.id), 120);
                  }}
                >
                  {a.title}
                </button>
              ))
            )}
          </div>

          <div className={styles.contactCard}>
            <h4>Need help?</h4>
            <p>Contact sales for tailored solutions & layouts.</p>
            <Link to="/contact" className={styles.contactBtn}>
              Contact Sales
            </Link>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.pageTitle}>Our Products — Machines & Models</h1>
            <p className={styles.lead}>
              Explore our balers and shredders grouped by application. Click any model to view images or open its product page.
            </p>
          </div>

          <section className={styles.productsArea}>
            {products.map((cat) => {
              if (activeCategory !== "all" && activeCategory !== cat.id) return null;

              const apps = cat.applications.filter((app) => {
                if (!q) return true;
                return visibleByCategory[cat.id] && visibleByCategory[cat.id][app.id];
              });
              if (q && apps.length === 0) return null;

              return (
                <div key={cat.id} className={styles.categoryBlock}>
                  <div className={styles.categoryHeader}>
                    <div>
                      <h2 className={styles.categoryTitle}>{cat.title}</h2>
                      <div className={styles.categoryDesc}>{cat.description}</div>
                    </div>

                    <div className={styles.categoryActions}>
                      <button
                        className={styles.actionBtn}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        View only
                      </button>
                      <Link to="/othereqptemp" className={styles.linkGhost}>
                        Other equipment
                      </Link>
                    </div>
                  </div>

                  <div className={styles.appsWrap}>
                    {apps.map((app) => {
                      const models = q
                        ? (visibleByCategory[cat.id] && visibleByCategory[cat.id][app.id]) || []
                        : app.models;

                      if (!models || models.length === 0) return null;

                      return (
                        <div id={app.id} key={app.id} className={styles.application}>
                          <div className={styles.appHeader}>
                            <div>
                              <h3 className={styles.appTitle}>{app.title}</h3>
                              {app.blurb && <div className={styles.appBlurb}>{app.blurb}</div>}
                            </div>
                            <div>
                              <button
                                className={styles.viewAllModels}
                                onClick={() => {
                                  setActiveApp(app.id === activeApp ? null : app.id);
                                  const el = document.getElementById(app.id);
                                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                aria-expanded={activeApp === app.id}
                              >
                                {activeApp === app.id ? "Collapse" : `${models.length} model(s)`}
                              </button>
                            </div>
                          </div>

                          <div className={styles.modelGrid}>
                            {models.map((m) => (
                              <article key={m.code} className={styles.card}>
                                <div
                                  className={styles.cardImg}
                                  onClick={() => setModal({ ...m, appTitle: app.title, categoryTitle: cat.title })}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => { if (e.key === "Enter") setModal({ ...m, appTitle: app.title, categoryTitle: cat.title }); }}
                                >
                                  <img src={m.img || FALLBACK_IMG} alt={m.code} />
                                </div>

                                <div className={styles.cardBody}>
                                  <div className={styles.modelRow}>
                                    <div className={styles.modelCode}>{m.code}</div>
                                    <Link to={m.link} className={styles.openLink} title={`Open ${m.code}`}>Open →</Link>
                                  </div>
                                  <div className={styles.modelMeta}>
                                    <span className={styles.metaChip}>{app.title}</span>
                                    <span className={styles.metaMuted}>{cat.title}</span>
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>

          <div className={styles.otherSection}>
            <h2 className={styles.otherTitle}>Other Equipment</h2>
            <OtherEqpTemp />
          </div>
        </main>
      </div>

      {modal && (
        <div className={styles.modalBackdrop} onClick={() => setModal(null)} role="dialog" aria-modal="true">
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setModal(null)} aria-label="Close">✕</button>
            <div className={styles.modalHeader}>
              <strong>{modal.code}</strong>
              <span className={styles.modalSub}>{modal.appTitle} • {modal.categoryTitle}</span>
            </div>
            <div className={styles.modalBody}>
              <img src={modal.img || FALLBACK_IMG} alt={modal.code} />
            </div>
            <div className={styles.modalFooter}>
              <Link to={modal.link} className={styles.btnPrimary}>View product page</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
