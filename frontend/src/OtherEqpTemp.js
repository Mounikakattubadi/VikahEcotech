import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // for navigation
import "./OtherEqpTemp.css";

const products = [
  {
    name: "Tumble Back Feeder",
    description:
      "Ensures a steady and controlled flow of shredded tires or raw materials into the recycling line. Reduces manual handling, prevents jams, and boosts efficiency of downstream equipment.",
  },
  {
    name: "Feeding & Discharge Conveyers",
    description:
      "Heavy-duty conveyors designed for smooth transport of shredded tires, granules, and wires. Prevents bottlenecks and minimizes manual labor in recycling operations.",
  },
  {
    name: "Vibrators",
    description:
      "Prevents clumping by evenly distributing rubber particles through vibration. Maintains consistent flow for classification and ensures high-quality end products.",
  },
  {
    name: "Classifiers",
    description:
      "Separates rubber crumbs into precise size ranges using advanced sieving. Guarantees fine powder or coarse chips meet industry quality standards.",
  },
  {
    name: "Overband Magnetic Steel Separators",
    description:
      "Uses powerful magnets to extract ferrous content such as steel wires. Improves rubber purity, enhances safety, and extends equipment life.",
  },
  {
    name: "Beadwire Remover",
    description:
      "Extracts strong bead wires before shredding. Reduces machine stress and recovers valuable recyclable steel.",
  },
  {
    name: "Strip Cutter",
    description:
      "Cuts tires into manageable strips for further processing. Improves machine throughput and avoids blockages.",
  },
  {
    name: "Block Cutter",
    description:
      "Processes rubber strips into smaller blocks suitable for fine shredding or grinding. Ensures consistent feed size for smooth recycling flow.",
  },
  {
    name: "Side Wall Remover",
    description:
      "Removes sidewalls efficiently, simplifying the tire cutting process and preparing cleaner materials for shredding.",
  },
  {
    name: "Cutting Equipment",
    description:
      "Heavy-duty machines designed to slice through full tires or thick rubber sections. Built for durability in continuous plant operation.",
  },
  {
    name: "Folding Equipment",
    description:
      "Folds processed rubber sheets or components into compact stacks. Saves storage space and makes handling easier.",
  },
];

function OtherEqpTemp() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="equipment-container">
      <h2 className="page-title">Other Equipment</h2>
      <div className="cards-wrapper">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`equipment-card ${
              index % 2 === 0 ? "slide-in-left" : "slide-in-right"
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="product-name">{product.name}</div>
            <div className="product-description">{product.description}</div>

            {/* Enquiry Button */}
            <div className="button-wrapper" style={{zIndex:"3"}}>
              <Link to="/enquire" replace className="enquiry-btn">Enquiry</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherEqpTemp;
