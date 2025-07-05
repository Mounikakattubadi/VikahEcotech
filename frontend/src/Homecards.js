import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homecards.module.css";
import Baler from "./images/baler8.jpg";
import shredderhdimg from "./images/Shedder _ Final PNG.png";
import Baler1 from "./images/baler1.png";
import shred2 from "./images/secondaryshredder2.jpg";

const cards = [
  {
    title: "Baler",
    bg: "bg1",
    btnClass: "btnBlue",
    image: Baler,
    path: "/Baler",
  },
  {
    title: "Primary Shredder",
    bg: "bg2",
    btnClass: "btnYellow",
    image: shredderhdimg,
    path: "/shredder",
  },
  {
    title: "Secondary Shredder",
    bg: "bg3",
    btnClass: "btnGray",
    image: shred2,
    path: "/secondaryShredder",
  },
  {
    title: "Other Equipment",
    bg: "bg4",
    btnClass: "btnPink",
    image: null,
    path: "/other-equipment",
  },
];

const Homecards = () => {
  return (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.heading}>Our Products</h2>
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <Link to={card.path} key={index} className={styles.linkWrapper}>
            <div className={`${styles.glassCard} ${styles[card.bg]}`}>
              <div className={styles.glassOverlay} />
              <div className={styles.imageContainer}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.cardImage}
                  />
                ) : (
                  <div className={styles.placeholderText}>Uploading Soon</div>
                )}
              </div>
              <div className={styles.cardDetails}>
                <p className={styles.title}>{card.title}</p>
                <button className={`${styles.buyButton} ${styles[card.btnClass]}`}>
                  Know More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homecards;
