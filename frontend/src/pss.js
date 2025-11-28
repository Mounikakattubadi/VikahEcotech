import React from "react";
import styles from "./pss.module.css";

import img1 from "./images/Applications/tyreshred1.jpg";
import img2 from "./images/Applications/tyreshred1.jpg";

export default function Pss() {
  return (
    <div className={styles.heroWrapper}>
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        {/* Indicators */}
        <div className={`carousel-indicators ${styles.indicators}`}>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" />
        </div>

        <div className="carousel-inner h-100">
          <div
            className={`carousel-item active ${styles.carouselItem}`}
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className={styles.overlay}></div>

            <div className={styles.contentBox}>
              <p className={styles.subText}>We Provide Commercial Waste Disposal</p>
              <h1 className={styles.heading}>Primary Shredders</h1>
              <p className={styles.description}>
                High-performance shredders engineered for efficient material processing.
              </p>

              <div className={styles.btnRow}>
                <button className={`btn ${styles.greenBtn}`}>
                  Explore Our Services ↗
                </button>
                <button className={`btn ${styles.whiteBtn}`}>More About Us</button>
              </div>
            </div>
          </div>

          <div
            className={`carousel-item ${styles.carouselItem}`}
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className={styles.overlay}></div>

            <div className={styles.contentBox}>
              <p className={styles.subText}>Industrial Recycling & Processing</p>
              <h1 className={styles.heading}>Efficient Shredding & Sorting</h1>
              <p className={styles.description}>
                End-to-end recycling solutions that are efficient and eco-friendly.
              </p>

              <div className={styles.btnRow}>
                <button className={`btn ${styles.greenBtn}`}>See Machines ↗</button>
                <button className={`btn ${styles.whiteBtn}`}>Contact Sales</button>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow controls */}
        <button className={`carousel-control-prev ${styles.ctrl}`} type="button" data-bs-slide="prev" data-bs-target="#heroCarousel">
          <span className={styles.ctrlIcon}>‹</span>
        </button>

        <button className={`carousel-control-next ${styles.ctrl}`} type="button" data-bs-slide="next" data-bs-target="#heroCarousel">
          <span className={styles.ctrlIcon}>›</span>
        </button>
      </div>
    </div>
  );
}
