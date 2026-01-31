import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import PlasticBaler1 from "../../images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "../../images/Applications/plasticbaler2.jpg";
import PCB1 from "../../images/Applications/pcb1.webp";
import PCB3 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Can plastic balers handle mixed waste?",
    answer: "Yes, modern plastic balers can compress mixed plastics, films, and lightweight scrap efficiently, making them ideal for industrial recycling and warehouse management."
  },
  {
    question: "Do balers save storage space?",
    answer: "Absolutely, hydraulic balers can reduce warehouse clutter by up to 70%, freeing up space for other operational activities and improving workflow."
  },
  {
    question: "Is training required to operate a baler?",
    answer: "Operators need minimal training due to automated safety features, such as emergency stops and door interlocks, which ensure secure and easy operation."
  },
  {
    question: "Are balers energy-efficient?",
    answer: "Yes, modern hydraulic balers are designed to consume minimal power while maintaining high compression efficiency, reducing operational costs."
  },
  {
    question: "How does baling improve sustainability?",
    answer: "By compacting plastic and general waste into dense bales, facilities reduce landfill dependency, enhance recyclability, and support a circular economy model."
  }
];

const BalerBlog2SEOImages = () => {

    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "intro", title: "Why Industrial Facilities Invest in Balers" },
    { id: "challenges", title: "Major Challenges in Plastic & General Waste Management" },
    { id: "types", title: "Different Types of Plastic & Industrial Waste Handled" },
    { id: "workflow", title: "Optimizing Workflow with Hydraulic Balers" },
    { id: "cost", title: "Reducing Logistics, Storage, and Handling Costs" },
    { id: "how-it-works", title: "How Modern Hydraulic Balers Work" },
    { id: "benefits", title: "Operational, Financial, and Environmental Benefits" },
    { id: "safety", title: "Maintaining Safety & Regulatory Compliance" },
    { id: "sustainability", title: "Sustainable Practices & Circular Economy" },
    { id: "tips", title: "Tips for Maximizing Efficiency with Balers" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY + 150;
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
      {/* Left Navigation */}
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

      {/* Main Blog Content */}
      <div className={styles.blogWrapper}>
        <div className={styles.blogInner}>
          <h1 className="mulch-heading">
            How Hydraulic Balers Revolutionize Plastic & General Waste Management in India
          </h1>

          {/* Introduction */}
          <div id="intro" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={PlasticBaler1} alt="Industrial Plastic Baler in Operation" />
              <span className={styles.caption}>Hydraulic plastic baler compressing industrial waste</span>
            </div>
            <p>
              Industrial growth in India has led to an unprecedented increase in plastic and general waste. Unmanaged waste occupies valuable storage space, increases labor and transport costs, and poses safety risks. Hydraulic balers help facilities manage waste efficiently by compacting it into uniform bales.
            </p>
            <p>
              These machines are increasingly adopted by warehouses, factories, and recycling units, allowing organizations to save space, streamline workflow, and improve environmental compliance.
            </p>
          </div>

          {/* Challenges */}
          <div id="challenges" className={styles.section}>
            <h2>Major Challenges in Plastic & General Waste Management</h2>
            <div className={styles.imgRight}>
              <img src={PCB1} alt="Warehouse Waste Clutter" />
              <span className={styles.caption}>Loose plastic and industrial scrap creating hazards</span>
            </div>
            <p>
              Industrial facilities often face cluttered storage areas, high labor costs, fire hazards, and recycling inefficiencies due to loose waste. Integrating hydraulic balers reduces these risks, enabling safer and more organized operations.
            </p>
          </div>

          {/* Types */}
          <div id="types" className={styles.section}>
            <h2>Different Types of Plastic & Industrial Waste Handled</h2>
            <div className={styles.imgLeft}>
              <img src={PlasticBaler2} alt="Mixed Plastic Scrap for Recycling" />
              <span className={styles.caption}>Sorting plastic scrap for baling and recycling</span>
            </div>
            <ul className={styles.list}>
              <li>Plastic films, bags, bottles, and containers</li>
              <li>Production offcuts and packaging waste</li>
              <li>Mixed industrial scrap</li>
              <li>Warehouse waste from e-commerce and retail packaging</li>
            </ul>
            <p>
              Proper sorting and baling improves resale value, recycling efficiency, and compliance with environmental regulations.
            </p>
          </div>

          {/* Workflow */}
          <div id="workflow" className={styles.section}>
            <h2>Optimizing Workflow with Hydraulic Balers</h2>
            <div className={styles.imgRight}>
              <img src={PCB3} alt="Optimized Industrial Workflow" />
              <span className={styles.caption}>Compact bales streamline facility workflow</span>
            </div>
            <p>
              Compacted bales free up floor space, reduce clutter, and enable smoother material handling. Vertical stacking maximizes storage while maintaining safety and accessibility.
            </p>
          </div>

          {/* Cost */}
          <div id="cost" className={styles.section}>
            <h2>Reducing Logistics, Storage, and Handling Costs</h2>
            <p>
              Uniform bales reduce transport trips, lowering fuel, labor, and packaging costs. Standardized bale sizes simplify shipping logistics and freight negotiations, potentially saving facilities 20–35% annually.
            </p>
          </div>

          {/* How it works */}
          <div id="how-it-works" className={styles.section}>
            <h2>How Modern Hydraulic Balers Work</h2>
            <p>
              Waste is fed into the baler, where hydraulic cylinders apply high pressure to compress it into dense, uniform bales. Advanced models include PLCs, sensors, and remote monitoring dashboards for predictive maintenance and real-time efficiency tracking.
            </p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <h2>Operational, Financial, and Environmental Benefits</h2>
            <ul className={styles.list}>
              <li>Maximized storage efficiency and clutter reduction</li>
              <li>Lower labor and transportation costs</li>
              <li>Improved resale and recycling revenue</li>
              <li>Enhanced operational safety and compliance</li>
              <li>Supports CSR and sustainability initiatives</li>
            </ul>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Maintaining Safety & Regulatory Compliance</h2>
            <p>
              Built-in safety features such as emergency stops, door interlocks, and hydraulic overload protection protect operators. Baling reduces fire hazards and ensures compliance with environmental and ISO standards.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainable Practices & Circular Economy</h2>
            <p>
              Baling waste enhances recyclability, reduces landfill usage, and encourages reuse of materials. Companies can report CSR achievements and actively contribute to a circular economy model.
            </p>
          </div>

          {/* Tips */}
          <div id="tips" className={styles.section}>
            <h2>Tips for Maximizing Efficiency with Balers</h2>
            <ul className={styles.list}>
              <li>Pre-sort waste for cleaner, high-value bales</li>
              <li>Maintain hydraulic systems regularly for consistent performance</li>
              <li>Monitor bale weight and density for resale and recycling efficiency</li>
              <li>Stack bales vertically to maximize storage and maintain safety</li>
              <li>Integrate with warehouse automation systems for seamless workflow</li>
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
                    <span className={styles.faqIcon}>{openFAQ === index ? "−" : "+"}</span>
                  </div>
                  {openFAQ === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT — Animated Related Pages Sidebar */}
      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>
      
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/balers">Industrial Balers →</a>
        </div>
      
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/tyre-scrap-balers">Tyre Scrap Balers →</a>
        </div>
      
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/plasticbaler">Plastic Balers →</a>
        </div>
      
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/pcb">PCB Balers →</a>
        </div>
      
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/metalbaler">Metal Balers →</a>
        </div>
      </aside>
    </div>
  );
};

export default BalerBlog2SEOImages;
