
import React, { useState, useEffect } from "react";
import styles from "../Baler/Blog.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import BlogImg1 from "../../images/Applications/tyreshred2.jpg";
import BlogImg3 from "../../images/Applications/tyreshred1.jpg";
import BlogImg4 from "../../images/Applications/shredtyre6.jpg";

const faqsData = [
  {
    question: "Can Tyre Primary Shredders improve recycling efficiency?",
    answer:
      "Yes, Tyre Primary Shredders reduce whole tyres into uniform pieces, enabling easier separation of rubber, steel, and fabric components.",
  },
  {
    question: "Do Tyre Shredders support sustainable waste management?",
    answer:
      "Absolutely. By processing end-of-life tyres, these shredders reduce landfill disposal and enable recycling into valuable products.",
  },
  {
    question: "What types of tyres can be shredded?",
    answer:
      "Tyre Primary Shredders can process passenger car tyres, truck tyres, industrial tyres, and agricultural tyres.",
  },
  {
    question: "Are Tyre Shredders cost-effective for recycling facilities?",
    answer:
      "Yes, they reduce manual labor, storage requirements, and transport costs while creating valuable recycled material.",
  },
];

const benefitsData = [
  {
    title: "Better Recycling",
    icon: "♻️",
    text: "Improves separation of rubber, steel, and fabric materials.",
  },
  {
    title: "Reduce Costs",
    icon: "💰",
    text: "Lower transport, labor, and landfill expenses.",
  },
  {
    title: "Save Space",
    icon: "📦",
    text: "Shredded tyres occupy much less storage space.",
  },
  {
    title: "Improve Safety",
    icon: "🛡️",
    text: "Reduces fire hazards and loose tyre clutter.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Feed Tyres",
    text: "Whole tyres are loaded into the shredder system.",
  },
  {
    step: "02",
    title: "Shred Material",
    text: "Dual shafts and cutters reduce tyres into chips or strips.",
  },
  {
    step: "03",
    title: "Separate Steel",
    text: "Magnetic separators remove steel wire from shredded rubber.",
  },
  {
    step: "04",
    title: "Recycle Output",
    text: "Processed rubber can be reused in mats, fuel, or granules.",
  },
];

const ShredderBlog3 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Key Benefits" },
    { id: "role", title: "Role in Recycling" },
    { id: "operation", title: "How It Works" },
    { id: "types", title: "Types of Shredders" },
    { id: "recycling", title: "Recycling Efficiency" },
    { id: "workflow", title: "Workflow Optimization" },
    { id: "space", title: "Space Advantages" },
    { id: "process", title: "Working Process" },
    { id: "cost", title: "Cost Savings" },
    { id: "safety", title: "Safety" },
    { id: "sustainability", title: "Sustainability" },
    { id: "maintenance", title: "Maintenance" },
    { id: "automation", title: "Automation" },
    { id: "troubleshooting", title: "Troubleshooting" },
    { id: "roi", title: "ROI" },
    { id: "future", title: "Future Trends" },
    { id: "why-us", title: "Why Choose Us" },
    { id: "conclusion", title: "Conclusion" },
    { id: "key-takeaways", title: "Key Takeaways" },
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
          Tyre Primary Shredders | Efficient Recycling & Waste Management | Vikah Ecotech
        </title>
      </Helmet>

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
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Tyre Recycling Solutions</span>

              <h1 className={styles.heroTitle}>
                Tyre Primary Shredders: Efficient Recycling & Waste Management Solutions
              </h1>

              <p className={styles.heroDescription}>
                Learn how tyre shredders improve recycling efficiency, reduce costs,
                save storage space, and support sustainable waste management.
              </p>
            </div>
          </div>

          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.benefitsGrid}>
              {benefitsData.map((item, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="introduction" className={styles.sectionCard}>
            <h2>Introduction</h2>
            <p>
              Tyre Primary Shredders reduce whole tyres into chips or strips,
              making recycling and storage much easier.
            </p>
          </section>

          <section id="role" className={styles.sectionCard}>
            <h2>Role in Recycling</h2>
            <p>
              Tyre shredders improve recycling by separating rubber, steel,
              and fabric materials for reuse.
            </p>
          </section>

          <section id="operation" className={styles.sectionCard}>
            <h2>How It Works</h2>
            <p>
              Tyre Shredders use rotating cutters and high-torque motors to reduce tyres.
            </p>
          </section>

          <section id="types" className={styles.sectionCard}>
            <h2>Types of Shredders</h2>
            <ul className={styles.list}>
              <li>Single Shaft Tyre Shredders</li>
              <li>Dual Shaft Tyre Shredders</li>
              <li>Granulators</li>
              <li>Hammermills</li>
            </ul>
          </section>

          <section id="recycling" className={styles.sectionCard}>
            <h2>Recycling Efficiency</h2>
            <p>
              Shredded tyres are easier to process, recycle, transport, and reuse.
            </p>
          </section>

          <section id="workflow" className={styles.sectionCard}>
            <h2>Workflow Optimization</h2>
            <p>
              Tyre shredders streamline material flow and reduce manual handling.
            </p>
          </section>

          <section id="space" className={styles.sectionCard}>
            <h2>Space Advantages</h2>
            <p>
              Shredded tyres occupy less storage space than whole tyres.
            </p>
          </section>

          <section id="process" className={styles.sectionCard}>
            <div className={styles.processGrid}>
              {processSteps.map((item, index) => (
                <div key={index} className={styles.processCard}>
                  <div className={styles.processNumber}>{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="cost" className={styles.sectionCard}>
            <h2>Cost Savings</h2>
            <p>Lower labor, transport, and landfill costs.</p>
          </section>

          <section id="safety" className={styles.sectionCard}>
            <h2>Safety</h2>
            <p>Reduces fire hazards and improves workplace safety.</p>
          </section>

          <section id="sustainability" className={styles.sectionCard}>
            <h2>Sustainability</h2>
            <p>Supports circular economy and reduces landfill waste.</p>
          </section>

          <section id="maintenance" className={styles.sectionCard}>
            <h2>Maintenance</h2>
            <p>Routine servicing ensures long-term performance.</p>
          </section>

          <section id="automation" className={styles.sectionCard}>
            <h2>Automation</h2>
            <p>Smart sensors and conveyors improve efficiency.</p>
          </section>

          <section id="troubleshooting" className={styles.sectionCard}>
            <h2>Troubleshooting</h2>
            <ul className={styles.list}>
              <li>Inspect blades regularly</li>
              <li>Check motor load</li>
              <li>Monitor vibrations</li>
            </ul>
          </section>

          <section id="roi" className={styles.sectionCard}>
            <h2>ROI</h2>
            <p>Strong long-term return through recycling and savings.</p>
          </section>

          <section id="future" className={styles.sectionCard}>
            <h2>Future Trends</h2>
            <p>AI and predictive maintenance are shaping tyre shredding.</p>
          </section>

          <section id="why-us" className={styles.sectionCard}>
            <h2>Why Choose Us</h2>
            <p>Reliable, durable, and efficient tyre shredding solutions.</p>
          </section>

          <section id="conclusion" className={styles.sectionCard}>
            <div className={styles.imageCard}>
              <img src={BlogImg4} alt="Processed tyre chips" />
            </div>
            <h2>Conclusion</h2>
            <p>
              Tyre Primary Shredders are essential for recycling, cost reduction,
              and sustainability.
            </p>
          </section>

          <section id="key-takeaways" className={styles.sectionCard}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Improves recycling efficiency</li>
              <li>Reduces labor and transport costs</li>
              <li>Supports sustainability</li>
            </ul>
          </section>

          <section id="faqs" className={styles.sectionCard}>
            <div className={styles.faqContainer}>
              {faqsData.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <div
                    className={styles.faqQuestion}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span>{openFAQ === index ? "−" : "+"}</span>
                  </div>

                  {openFAQ === index && (
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShredderBlog3;

