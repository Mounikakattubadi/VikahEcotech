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

const benefitsData = [
  {
    title: "Better Recycling",
    icon: "♻️",
    text: "Improves sorting, segregation, and recycling output efficiently.",
  },
  {
    title: "Lower Costs",
    icon: "💰",
    text: "Reduces labor, transport, and waste handling expenses.",
  },
  {
    title: "Less Space Usage",
    icon: "📦",
    text: "Compacted waste takes up far less storage space.",
  },
  {
    title: "Cleaner Environment",
    icon: "🌍",
    text: "Reduces pollution and landfill dependency significantly.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Collection",
    text: "Waste is collected from households, industries, and commercial facilities.",
  },
  {
    step: "02",
    title: "Segregation",
    text: "Waste is separated into recyclable, biodegradable, and non-recyclable categories.",
  },
  {
    step: "03",
    title: "Shredding & Baling",
    text: "Machines reduce waste size and compress it into manageable bales.",
  },
  {
    step: "04",
    title: "Recycling & Disposal",
    text: "Reusable materials are recovered while the remaining waste is safely disposed.",
  },
];

const MSWBlog = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Key Benefits" },
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
  }, [sections]);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>
          Municipal Solid Waste Management in India | Balers & Shredders for Recycling | Vikah Ecotech
        </title>

        <meta
          name="description"
          content="Explore municipal solid waste management in India using advanced balers and shredders. Improve recycling efficiency, reduce operational costs, and achieve sustainable waste management solutions."
        />

        <meta
          name="keywords"
          content="municipal solid waste management India, MSW recycling solutions, industrial balers and shredders, waste recycling machines India, solid waste management equipment, recycling machinery India"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/munipical-waste-management"
        />

        <meta
          property="og:title"
          content="Municipal Solid Waste Management with Balers & Shredders | Vikah Ecotech"
        />

        <meta
          property="og:description"
          content="Discover how balers and shredders improve municipal solid waste management, recycling efficiency, and sustainability across industries in India."
        />

        <meta property="og:type" content="article" />

        <meta
          property="og:url"
          content="https://vikahecotech.com/munipical-waste-management"
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
              <span className={styles.heroBadge}>Municipal Waste Management</span>

              <h1 className={styles.heroTitle}>
                Municipal Solid Waste Management Through Recycling Solutions:
                Balers & Shredders in India
              </h1>

              <p className={styles.heroDescription}>
                Learn how balers and shredders improve recycling efficiency,
                reduce waste volume, and support sustainable municipal solid
                waste management.
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
                src={MSW1}
                alt="Municipal Solid Waste Management"
                className={styles.heroImage}
              />
            </div>
          </div>

          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Benefits</span>
              <h2>Why Modern MSW Systems Matter</h2>
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
                <img src={MSW1} alt="MSW India" />
                <span>Efficient municipal waste management system</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Introduction</span>
                <h2>Managing Growing Waste Volumes</h2>
                <p>
                  Municipal Solid Waste Management is essential for handling the
                  increasing volume of waste generated by cities and industries.
                </p>
                <p>
                  Modern systems focus on segregation, recycling, and recovery
                  instead of traditional dumping and landfilling.
                </p>
              </div>
            </div>
          </section>

          <section id="challenge" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Challenges</span>
                <h2>Challenges in MSW Management</h2>

                <ul className={styles.modernList}>
                  <li>Improper segregation of waste at source</li>
                  <li>Overflowing landfills and pollution</li>
                  <li>High logistics and transport costs</li>
                  <li>Health hazards and environmental damage</li>
                </ul>
              </div>

              <div className={styles.imageCard}>
                <img src={MSW2} alt="MSW Challenges" />
                <span>Improper waste handling creates major challenges</span>
              </div>
            </div>
          </section>

          <section id="process" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Process</span>
              <h2>Waste Management Process</h2>
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

          <section id="equipment" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={MSW3} alt="Balers and shredders" />
                <span>Balers and shredders improve waste recycling</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Equipment</span>
                <h2>Role of Balers & Shredders</h2>
                <p>
                  Shredders reduce waste size for easier processing, while balers
                  compress materials into compact bundles for storage and transport.
                </p>
                <p>
                  These machines improve workflow, reduce manual labour, and increase recycling efficiency.
                </p>
              </div>
            </div>
          </section>

          <section id="cost" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Cost Savings</span>
              <h2>Cost Optimization & Efficiency</h2>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>50%</h3>
                <p>Reduction in transport trips</p>
              </div>

              <div className={styles.statCard}>
                <h3>60%</h3>
                <p>Improvement in storage efficiency</p>
              </div>

              <div className={styles.statCard}>
                <h3>40%</h3>
                <p>Lower waste handling costs</p>
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

      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/balers">Industrial Balers →</Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/primary-shredder-waste-management">
            Primary Shredders →
          </Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/secondaryshredder-blog2">
            Secondary Shredders →
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default MSWBlog;
