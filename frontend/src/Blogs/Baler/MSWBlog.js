import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Images
import MSW1 from "../../images/Applications/plasticbaler1.jpg";
import MSW2 from "../../images/Applications/pcb1.webp";
import MSW3 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "What is municipal solid waste management?",
    answer:
      "Municipal Solid Waste Management (MSWM) refers to the systematic collection, segregation, processing, recycling, and disposal of waste generated from households, industries, and commercial establishments.",
  },
  {
    question: "Why are shredders important in waste management?",
    answer:
      "Shredders reduce waste size, improve sorting efficiency, and enhance recycling output by preparing materials for further processing.",
  },
  {
    question: "How do balers help in recycling?",
    answer:
      "Balers compress waste into compact bales, reducing storage space and lowering transportation costs significantly.",
  },
  {
    question: "Can MSWM reduce environmental pollution?",
    answer:
      "Yes, proper waste management reduces landfill waste, minimizes pollution, and supports sustainable environmental practices.",
  },
];

const MSWBlog = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "challenge", title: "MSW Challenges" },
    { id: "types", title: "Types of Waste" },
    { id: "process", title: "Waste Management Process" },
    { id: "equipment", title: "Balers & Shredders" },
    { id: "space", title: "Space Management" },
    { id: "cost", title: "Cost Optimization" },
    { id: "value", title: "Recycling Value" },
    { id: "safety", title: "Safety & Compliance" },
    { id: "sustainability", title: "Sustainability" },
    { id: "why-us", title: "Why Vikah Ecotech" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "FAQs" },
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
      <Helmet>
        <title>
          Municipal Solid Waste Management in India | Balers & Shredders for Recycling
        </title>
        <meta
          name="description"
          content="Comprehensive guide to municipal solid waste management in India using industrial balers and shredders. Improve recycling efficiency, reduce costs, and enhance sustainability."
        />
        <meta
          name="keywords"
          content="municipal solid waste management India, MSW recycling solutions, balers and shredders, waste recycling machines India, industrial waste management"
        />
      </Helmet>

      {/* LEFT NAV */}
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

      {/* BLOG CONTENT */}
      <div className={styles.blogWrapper}>
        <div className={styles.blogInner}>
          <h1 className="mulch-heading">
            Municipal Solid Waste Management Through Recycling Solutions:
            Balers & Shredders in India
          </h1>

          {/* INTRO */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={MSW1} alt="MSW India" />
            </div>
            <p>
              Municipal Solid Waste Management (MSWM) is one of the most critical
              aspects of modern urban infrastructure. With increasing population
              and industrial growth in India, the volume of waste generated has
              grown exponentially, making efficient waste handling a necessity.
            </p>
            <p>
              Traditional disposal methods such as dumping and landfilling are no
              longer viable. Instead, modern systems emphasize segregation,
              recycling, and recovery using advanced technologies.
            </p>
            <p>
              Recycling machinery such as balers and shredders plays a vital role
              in converting waste into reusable materials, reducing landfill
              dependency and improving operational efficiency.
            </p>
          </div>

          {/* CHALLENGE */}
          <div id="challenge" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={MSW2} alt="Challenges" />
            </div>
            <h2>Challenges in MSW Management</h2>
            <p>
              Waste management systems in India face multiple operational and
              environmental challenges that impact efficiency and sustainability.
            </p>
            <ul className={styles.list}>
              <li>Improper waste segregation at source</li>
              <li>Overflowing landfills</li>
              <li>High logistics and transportation costs</li>
              <li>Environmental pollution and health hazards</li>
            </ul>
          </div>

          {/* TYPES */}
          <div id="types" className={styles.section}>
            <h2>Types of Waste</h2>
            <p>
              Municipal waste consists of biodegradable waste, recyclable
              materials such as plastic and paper, and non-recyclable residues.
            </p>
            <p>
              Proper classification ensures efficient recycling and reduces
              contamination in processing facilities.
            </p>
          </div>

          {/* PROCESS */}
          <div id="process" className={styles.section}>
            <h2>Waste Management Process</h2>
            <p>
              The MSW process includes collection, segregation, shredding,
              baling, recycling, and disposal. Each stage plays a crucial role in
              ensuring efficient waste handling and material recovery.
            </p>
          </div>

          {/* EQUIPMENT */}
          <div id="equipment" className={styles.section}>
            <h2>Role of Balers & Shredders</h2>
            <p>
              Shredders reduce waste size for easier processing, while balers
              compress materials into compact bales for storage and transport.
            </p>
            <p>
              Together, these machines improve recycling efficiency, reduce
              manual labor, and optimize operational workflows.
            </p>
          </div>

          {/* SPACE */}
          <div id="space" className={styles.section}>
            <h2>Space Management</h2>
            <p>
              Compacted waste occupies significantly less space, allowing better
              warehouse organization and improved safety.
            </p>
          </div>

          {/* COST */}
          <div id="cost" className={styles.section}>
            <h2>Cost Optimization</h2>
            <p>
              Reduced waste volume leads to fewer transport trips, lowering fuel
              and operational costs.
            </p>
          </div>

          {/* VALUE */}
          <div id="value" className={styles.section}>
            <h2>Recycling Value</h2>
            <p>
              Properly processed waste increases resale value and supports a
              circular economy.
            </p>
          </div>

          {/* SAFETY */}
          <div id="safety" className={styles.section}>
            <h2>Safety & Compliance</h2>
            <p>
              Organized waste management improves safety and ensures compliance
              with environmental regulations.
            </p>
          </div>

          {/* SUSTAINABILITY */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainability</h2>
            <p>
              Recycling reduces landfill dependency and supports environmental
              sustainability goals.
            </p>
          </div>

          {/* WHY US */}
          <div id="why-us" className={styles.section}>
            <h2>Why Vikah Ecotech</h2>
            <p>
              Vikah Ecotech provides reliable recycling machinery designed for
              modern waste management needs.
            </p>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={MSW3} alt="Conclusion" />
            </div>
            <h2>Conclusion</h2>
            <p>
              MSW management requires advanced solutions like balers and
              shredders to ensure efficiency, sustainability, and cost savings.
            </p>
          </div>

          {/* FAQ - FIXED UI */}
          <div id="faqs" className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    openFAQ === index ? styles.activeFAQ : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={styles.faqQuestion}>
                    {faq.question}
                    <span className={styles.faqIcon}>
                      {openFAQ === index ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === index && (
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/balers">Industrial Balers →</Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/primary-shredder-waste-management">Primary Shredders →</Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/secondaryshredder-blog2">Secondary Shredders →</Link>
        </div>
      </aside>
    </div>
  );
};

export default MSWBlog;