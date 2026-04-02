import React, { useState, useEffect } from "react";
import styles from "../Baler/Blog.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import BlogImg3 from "../../images/Applications/tyreshred2.jpg";
import BlogImg1 from "../../images/Applications/tyreshred1.jpg";
import BlogImg4 from "../../images/Applications/pss1.png";
import TyreShredderImg from "../../images/Applications/pss1.png";

const faqsData = [
  {
    question: "Can Primary Shredders handle large volumes efficiently?",
    answer:
      "Yes, industrial Primary Shredders are designed to process high volumes quickly, reducing bottlenecks in industrial operations.",
  },
  {
    question: "Do Primary Shredders reduce labor requirements?",
    answer:
      "Absolutely. By automating material size reduction, Primary Shredders minimize manual handling and reduce labor costs.",
  },
  {
    question: "Are Primary Shredders energy efficient?",
    answer:
      "Modern Primary Shredders are optimized for energy efficiency while maintaining high throughput.",
  },
  {
    question: "How do Primary Shredders affect workflow?",
    answer:
      "Primary Shredders reduce scrap volume, standardize material, and simplify storage for smoother workflow.",
  },
];

const benefitsData = [
  {
    title: "High Throughput",
    icon: "⚡",
    text: "Process large volumes quickly with consistent performance.",
  },
  {
    title: "Lower Labor Costs",
    icon: "💰",
    text: "Reduce manual handling and improve productivity.",
  },
  {
    title: "Better Recycling",
    icon: "♻️",
    text: "Prepare materials for recycling and reuse efficiently.",
  },
  {
    title: "Improved Safety",
    icon: "🛡️",
    text: "Minimize clutter and reduce workplace hazards.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Load Material",
    text: "Bulky scrap and waste materials are fed into the shredder.",
  },
  {
    step: "02",
    title: "Reduce Material Size",
    text: "Rotating blades shred materials into uniform pieces.",
  },
  {
    step: "03",
    title: "Sort Materials",
    text: "Processed material becomes easier to separate and recycle.",
  },
  {
    step: "04",
    title: "Store or Transport",
    text: "Uniform shredded material is easier to store and transport.",
  },
];

const ShredderBlog2 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Key Benefits" },
    { id: "efficiency", title: "Efficiency" },
    { id: "operation", title: "How It Works" },
    { id: "types", title: "Types of Shredders" },
    { id: "tyreshredder", title: "Tyre Shredders" },
    { id: "process", title: "Working Process" },
    { id: "cost", title: "Cost Savings" },
    { id: "safety", title: "Safety" },
    { id: "automation", title: "Automation" },
    { id: "long-term", title: "Long-Term Benefits" },
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
  }, [sections]);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>
          Primary Shredders for Recycling: Advanced Shredding Technologies for Industrial Waste | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Explore how primary shredders and advanced shredding technologies improve recycling efficiency, reduce waste, and optimize industrial operations."
        />
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
              <span className={styles.heroBadge}>Advanced Shredding Technologies</span>

              <h1 className={styles.heroTitle}>
                How Industrial Primary Shredders Improve Efficiency and Productivity in Facilities
              </h1>

              <p className={styles.heroDescription}>
                Learn how primary shredders improve workflow, reduce labor costs,
                optimize recycling, and support sustainability goals.
              </p>

              <div className={styles.heroButtons}>
                <a href="#benefits" className={styles.primaryBtn}>
                  Explore Benefits
                </a>

                <a href="#faqs" className={styles.secondaryBtn}>
                  Read FAQs
                </a>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <img
                src={BlogImg1}
                alt="Industrial primary shredder"
                className={styles.heroImage}
              />
            </div>
          </div>

          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Benefits</span>
              <h2>Why Industries Use Primary Shredders</h2>
            </div>

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
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg1} alt="Primary shredders" />
                <span>Industrial shredders improving operational efficiency</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Introduction</span>
                <h2>Boosting Industrial Productivity</h2>
                <p>
                  Industrial Primary Shredders transform bulky waste into standardized pieces,
                  improving operational efficiency and reducing clutter.
                </p>
                <p>
                  These shredders support recycling, reduce labor costs, and streamline downstream processes.
                </p>
              </div>
            </div>
          </section>

          <section id="tyreshredder" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={TyreShredderImg} alt="Tyre primary shredder" />
                <span>Tyre Primary Shredders for heavy-duty rubber processing</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Tyre Shredders</span>
                <h2>Specialized Tyre Shredding Solutions</h2>
                <p>
                  Tyre Primary Shredders are designed to handle car, truck, and industrial tyres.
                </p>
                <p>
                  High-torque motors and reinforced cutters efficiently process rubber and steel.
                </p>
              </div>
            </div>
          </section>

          <section id="process" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Working Process</span>
              <h2>Step-by-Step Shredding Process</h2>
            </div>

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
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Savings</span>
              <h2>Cost Reduction & Operational Efficiency</h2>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>40%</h3>
                <p>Reduction in labor costs</p>
              </div>

              <div className={styles.statCard}>
                <h3>60%</h3>
                <p>Improvement in storage efficiency</p>
              </div>

              <div className={styles.statCard}>
                <h3>35%</h3>
                <p>Lower transport and logistics expenses</p>
              </div>
            </div>
          </section>

          <section id="conclusion" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg4} alt="Processed shredded materials" />
                <span>Processed materials ready for recycling and reuse</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Conclusion</span>
                <h2>Final Thoughts</h2>
                <p>
                  Industrial Primary Shredders are essential for productivity,
                  cost savings, and sustainability.
                </p>
                <p>
                  Reliable shredding systems help industries improve efficiency
                  and long-term operational performance.
                </p>
              </div>
            </div>
          </section>

          <section id="faqs" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>FAQs</span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqContainer}>
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    openFAQ === index ? styles.activeFAQ : ""
                  }`}
                >
                  <div
                    className={styles.faqQuestion}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {openFAQ === index ? "−" : "+"}
                    </span>
                  </div>

                  <div className={styles.faqAnswerWrapper}>
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShredderBlog2;

