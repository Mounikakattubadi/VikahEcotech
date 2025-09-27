import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OtherEqpTemp.css";

const products = [
  {
    name: "TUMBLE BACK FEEDER",
    description:
      "Provides a steady and controlled flow of raw materials into the recycling line. Reduces manual handling and prevents jams. Suitable for rubber, plastic, paper, cardboard, and other materials."
  },
  {
    name: "FEEDING & DISCHARGE CONVEYORS",
    description:
      "Heavy-duty conveyors for smooth transport of raw or processed materials. Prevents bottlenecks and reduces manual labor. Works with rubber, plastic, paper, cardboard, and more."
  },
  {
    name: "VIBRATORS",
    description:
      "Prevents clumping by evenly distributing particles through vibration. Maintains consistent flow for classification and ensures high-quality output. Suitable for rubber, plastic, paper, cardboard, and more."
  },
  {
    name: "CLASSIFIERS",
    description:
      "Separates materials into precise size ranges using advanced sieving. Ensures powders or chips meet quality standards. Works with rubber, plastic, paper, cardboard, and other feedstocks."
  },
  {
    name: "OVERBAND MAGNETIC STEEL SEPARATORS",
    description:
      "Uses powerful magnets to remove ferrous materials such as steel wires. Improves purity, enhances safety, and extends equipment life. Effective for rubber, plastic, paper, cardboard, and more."
  },
  {
    name: "BEAD WIRE REMOVER",
    description:
      "Extracts strong bead wires before shredding to reduce machine stress and recover valuable steel. Suitable for rubber and adaptable to other reinforced materials."
  },
  {
    name: "STRIP CUTTER",
    description:
      "Cuts tires into manageable strips for further processing. Improves machine throughput and prevents blockages. Simplifies downstream shredding."
  },
  {
    name: "BLOCK CUTTER",
    description:
      "Cuts rubber strips into smaller blocks for fine shredding or grinding. Ensures consistent feed size and smoother recycling flow. Enhances processing efficiency."
  },
  {
    name: "SIDE WALL REMOVER",
    description:
      "Removes tire sidewalls efficiently to simplify cutting and prepare cleaner material for shredding. Speeds up processing and reduces wear on machines."
  },
  {
    name: "CUTTING EQUIPMENT",
    description:
      "Heavy-duty machines designed to cut through full tires or thick rubber. Built for durability in continuous operation. Provides reliable performance in demanding environments."
  },
  {
    name: "FOLDING EQUIPMENT",
    description:
      "Folds processed rubber sheets or components into compact stacks. Saves storage space and makes handling easier. Improves warehouse and logistics efficiency."
  }
];

function OtherEqpTemp() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="equipment-container split-design">
      <h2 className="page-title">OTHER EQUIPMENT</h2>
      <div className="split-list">
        {products.map((product, index) => (
          <div
            key={index}
            ref={el => (cardRefs.current[index] = el)}
            className={`split-card ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <div className="split-left">
              <h3>{product.name}</h3>
            </div>
            <div className="split-right">
              <p>{product.description}</p>
              <Link
                to={`/enquire?machinery=other-equipment&model=${encodeURIComponent(
                  product.name
                )}`}
                className="enquiry-btn"
                replace
              >
                Enquiry
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherEqpTemp;
