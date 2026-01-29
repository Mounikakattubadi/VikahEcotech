import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";
import BlogImg5 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How do classifiers separate materials efficiently?",
    answer: "Classifiers use advanced sieving to sort materials into precise sizes, ensuring uniform output for further processing or resale."
  },
  {
    question: "Why are overband magnetic steel separators important?",
    answer: "They remove ferrous materials like steel wires, improving material purity, reducing machine wear, and enhancing operator safety."
  },
  {
    question: "Does separation improve recycling quality?",
    answer: "Yes. Proper separation ensures that powders, granules, and chips meet quality standards, leading to higher resale value and smoother downstream processing."
  },
  {
    question: "Who benefits from screening and separation equipment?",
    answer: "Facilities processing rubber, plastics, paper, and cardboard gain efficiency, quality control, and safety by using classifiers and magnetic separators."
  },
  {
    question: "How to choose the right screening equipment?",
    answer: "Consider material type, particle size, volume, and line speed. Different classifiers and separators are optimized for powders, granules, or mixed scrap."
  },
  {
    question: "How often should separation equipment be maintained?",
    answer: "Weekly inspections for high-use parts, monthly checks for moving components, and periodic professional servicing ensures longevity and consistent performance."
  }
];

const OtherEquipmentBlog2 = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "how-it-works", title: "How It Works" },
    { id: "types-of-equipment", title: "Types of Equipment" },
    { id: "why-you-need-it", title: "Why You Need It" },
    { id: "does-it-improve-quality", title: "Does It Improve Quality?" },
    { id: "who-should-use-it", title: "Who Should Use It?" },
    { id: "benefits", title: "What Are the Benefits?" },
    { id: "maintenance-tips", title: "Maintenance Tips" },
    { id: "faqs", title: "FAQs" }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i].id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={styles.pageWrapper}>

      <nav className={styles.toc}>
        <h3>Explore Sections</h3>
        <ul>
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={activeSection === sec.id ? styles.active : ""}
              >
                {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.blogWrapper}>
        <div className={styles.blogInner}>

          <h1 className="mulch-heading">
            Screening & Separation Equipment for Cleaner, Safer, and Efficient Recycling
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Screening Equipment" />
              <span className={styles.caption}>Classifiers and magnetic separators ensuring purity</span>
            </div>
            <p>
              Screening and separation equipment is the foundation of modern recycling operations. Whether you handle plastics, rubber, metals, or paper, separating materials ensures high-quality output, prevents contamination, and protects expensive processing equipment.
            </p>
            <p>
              Proper separation not only improves recycling efficiency but also reduces operational costs. Contaminated or unevenly sized materials can cause machine jams, production delays, and unsafe conditions for operators. By implementing the right equipment, facilities can maximize throughput, maintain consistent product quality, and adhere to environmental and safety regulations.
            </p>
          </div>

          {/* How It Works */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Separation Equipment" />
              <span className={styles.caption}>Advanced sieving and magnetic separation in action</span>
            </div>
            <h2>How It Works</h2>
            <p>
              Classifiers use sieves and precision screening techniques to separate materials by size. Powders, granules, and small chips pass through graded meshes while larger pieces are directed to appropriate processing stages.
            </p>
            <p>
              Overband magnetic steel separators remove ferrous metals such as steel wires, screws, and nails from the material flow. This prevents machine damage, enhances safety, and ensures the purity of processed materials.
            </p>
            <p>
              Some advanced systems integrate sensors and automation to monitor flow, detect blockages, and adjust operation speed in real time. This reduces downtime and improves overall line efficiency.
            </p>
          </div>

          {/* Types of Equipment */}
          <div id="types-of-equipment" className={styles.section}>
            <h2>Types of Screening & Separation Equipment</h2>
            <ul className={styles.list}>
              <li><strong>Vibratory Classifiers:</strong> Ideal for powders and small granules, using vibration to achieve precise size separation.</li>
              <li><strong>Rotary or Trommel Screens:</strong> Used for bulkier materials; rotation helps separate different sizes efficiently.</li>
              <li><strong>Overband Magnetic Separators:</strong> Remove ferrous contaminants to protect machinery and improve material purity.</li>
              <li><strong>Air Classifiers:</strong> Separate lightweight from heavy materials using airflow and density differences.</li>
              <li><strong>Combination Systems:</strong> Some facilities combine magnetic, vibratory, and air-based systems to handle mixed materials efficiently.</li>
            </ul>
          </div>

          {/* Why You Need It */}
          <div id="why-you-need-it" className={styles.section}>
            <h2>Why Screening & Separation is Critical</h2>
            <p>
              Without effective separation, recycling lines face contamination, uneven material quality, and increased wear on equipment. This can lead to downtime, higher labor costs, and reduced resale value of processed materials.
            </p>
            <p>
              Implementing advanced screening and magnetic separation systems improves reliability, safety, and output consistency. Operators can focus on value-added tasks while automation ensures precise separation.
            </p>
          </div>

          {/* Does It Improve Quality? */}
          <div id="does-it-improve-quality" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg3} alt="High-Quality Separated Material" />
              <span className={styles.caption}>Consistent output improves recycling efficiency</span>
            </div>
            <h2>Does It Improve Quality?</h2>
            <p>
              Absolutely. Proper separation ensures that each material type meets strict quality standards. This translates to higher resale value, smoother downstream processing, and reduced production delays.
            </p>
            <p>
              Quality separation also reduces contamination-related rework and prevents costly machine damage, improving overall plant efficiency and profitability.
            </p>
          </div>

          {/* Who Should Use It */}
          <div id="who-should-use-it" className={styles.section}>
            <h2>Who Should Use Screening & Separation Equipment?</h2>
            <p>
              Recycling facilities, plastic and rubber manufacturers, paper and cardboard processors, and metal recyclers benefit significantly. Any operation that handles mixed materials or requires precise sizing will see improvements in efficiency, safety, and product quality.
            </p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg4} alt="Benefits of Screening Equipment" />
              <span className={styles.caption}>Safer, cleaner, and more efficient operations</span>
            </div>
            <h2>Key Benefits</h2>
            <ul className={styles.list}>
              <li>Enhanced material purity and quality</li>
              <li>Reduced wear and tear on downstream machines</li>
              <li>Minimized contamination and operational delays</li>
              <li>Improved workplace safety</li>
              <li>Optimized recycling workflow and efficiency</li>
              <li>Higher resale value for sorted materials</li>
              <li>Scalable solutions for small to large recycling operations</li>
            </ul>
          </div>

          {/* Maintenance Tips */}
          <div id="maintenance-tips" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg5} alt="Maintenance of Separation Equipment" />
              <span className={styles.caption}>Regular maintenance ensures longevity and performance</span>
            </div>
            <h2>Maintenance Tips</h2>
            <ul className={styles.list}>
              <li>Inspect screens, separators, and moving parts weekly.</li>
              <li>Clean equipment regularly to prevent blockages and contamination.</li>
              <li>Lubricate motors, bearings, and moving components to avoid wear.</li>
              <li>Calibrate sensors and automation systems periodically.</li>
              <li>Schedule professional servicing at least every 3–6 months.</li>
            </ul>
          </div>

          {/* FAQs */}
          <div id="faqs" className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${openFAQ === index ? styles.activeFAQ : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={styles.faqQuestion}>
                    {faq.question}
                    <span className={styles.faqIcon}>
                      {openFAQ === index ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === index && (
                    <div className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OtherEquipmentBlog2;
