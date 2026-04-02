import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import PlasticBaler1 from "../../images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "../../images/Applications/plasticbaler2.jpg";
import PCB1 from "../../images/Applications/pcb1.webp";
import PCB3 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Which plastics can be baled using hydraulic balers?",
    answer:
      "PET bottles, HDPE, LDPE, PP plastic, packaging films, plastic wrappers, and industrial plastic waste.",
  },
  {
    question: "Is baling necessary before recycling?",
    answer:
      "Yes, baling reduces volume, improves storage efficiency, cuts transport costs, and increases recycling speed.",
  },
  {
    question: "Are hydraulic balers safe to operate?",
    answer:
      "Modern balers include emergency stops, interlocks, sensors, and overload protection for maximum operator safety.",
  },
  {
    question: "Can small industries also use plastic balers?",
    answer:
      "Absolutely, hydraulic balers are available in compact, medium, and large capacities for all-scale industries.",
  },
];

const benefitsData = [
  {
    title: "Reduce Waste Volume",
    icon: "📦",
    text: "Compresses plastic waste into compact bales for easier storage.",
  },
  {
    title: "Lower Transport Costs",
    icon: "🚛",
    text: "Reduces transport trips and improves logistics efficiency.",
  },
  {
    title: "Increase Scrap Value",
    icon: "📈",
    text: "Uniform bales improve resale value and recycling speed.",
  },
  {
    title: "Improve Safety",
    icon: "🛡️",
    text: "Prevents loose plastic accumulation and reduces workplace hazards.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Load Plastic Waste",
    text: "Loose plastic scrap is fed into the baler chamber.",
  },
  {
    step: "02",
    title: "Apply Pressure",
    text: "Hydraulic systems compress the waste into dense bales.",
  },
  {
    step: "03",
    title: "Tie the Bale",
    text: "Bales are secured with wires or straps for handling.",
  },
  {
    step: "04",
    title: "Store or Transport",
    text: "Finished bales are moved for storage, transport, or recycling.",
  },
];

const PlasticBalerBlog = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Key Benefits" },
    { id: "challenge", title: "Challenges in Plastic Waste Handling" },
    { id: "types", title: "Types of Plastic Waste" },
    { id: "how", title: "How Plastic Balers Work" },
    { id: "process", title: "Working Process" },
    { id: "cost", title: "Cost & Transport Savings" },
    { id: "value", title: "Boosting Scrap Value" },
    { id: "safety", title: "Safety & Compliance" },
    { id: "sustainability", title: "Supporting Sustainability" },
    { id: "operation", title: "Ease of Operation" },
    { id: "long-term", title: "Long-Term Advantages" },
    { id: "why-us", title: "Why Choose Vikah Ecotech" },
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
          Hydraulic Baling Solutions for Plastic Recycling | Plastic Waste Management India
        </title>

        <meta
          name="description"
          content="Discover how hydraulic baling machines provide efficient plastic recycling solutions in India. Learn about benefits, cost savings, sustainability and industrial applications."
        />

        <meta
          name="keywords"
          content="plastic baling machine, hydraulic baler for plastic, plastic recycling equipment, industrial balers India, PET bottle baler"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/plastic-baler-info"
        />

        <meta
          property="og:title"
          content="Hydraulic Baling Solution for Plastic Recycling | Vikah Ecotech"
        />

        <meta
          property="og:description"
          content="Learn how hydraulic balers compress PET, HDPE, LDPE, and industrial plastic waste for efficient recycling and cost reduction."
        />

        <meta property="og:type" content="article" />

        <meta
          property="og:url"
          content="https://vikahecotech.com/plastic-baler-info"
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
              <span className={styles.heroBadge}>Plastic Waste Recycling</span>

              <h1 className={styles.heroTitle}>
                Hydraulic Baling Solutions for Plastic Recycling in India
              </h1>

              <p className={styles.heroDescription}>
                Learn how hydraulic balers reduce plastic waste volume,
                improve recycling efficiency, lower transport costs, and support sustainability.
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
                src={PlasticBaler1}
                alt="Plastic baling machine"
                className={styles.heroImage}
              />
            </div>
          </div>

          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Benefits</span>
              <h2>Why Industries Use Hydraulic Plastic Balers</h2>
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
                <img src={PlasticBaler1} alt="Plastic baling machine" />
                <span>Hydraulic baler compressing PET plastic</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Introduction</span>
                <h2>Managing Plastic Waste Efficiently</h2>
                <p>
                  Plastic waste in India has grown rapidly due to the increasing
                  use of PET bottles, packaging films, and industrial plastic materials.
                </p>
                <p>
                  Hydraulic balers provide an efficient way to compress plastic waste
                  into compact bales for easier storage, transport, and recycling.
                </p>
              </div>
            </div>
          </section>

          <section id="challenge" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Challenges</span>
                <h2>Challenges in Plastic Waste Handling</h2>

                <ul className={styles.modernList}>
                  <li>Large storage space requirements</li>
                  <li>Fire hazards from lightweight plastic waste</li>
                  <li>Difficulty in manual handling</li>
                  <li>High transport costs due to low density</li>
                  <li>Slow recycling caused by irregular waste sizes</li>
                </ul>
              </div>

              <div className={styles.imageCard}>
                <img src={PCB1} alt="Plastic waste challenges" />
                <span>Unmanaged plastic waste causing clutter</span>
              </div>
            </div>
          </section>

          <section id="how" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={PlasticBaler2} alt="How hydraulic plastic balers work" />
                <span>High-pressure plastic baling process</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Technology</span>
                <h2>How Hydraulic Plastic Balers Work</h2>
                <p>
                  Hydraulic balers compress loose plastic using high-pressure systems.
                </p>
                <p>
                  Modern balers include PLC controls, sensors, and automatic bale ejection.
                </p>
              </div>
            </div>
          </section>

          <section id="process" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Working Process</span>
              <h2>Step-by-Step Plastic Baling Process</h2>
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
              <h2>Cost & Transport Savings</h2>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>70%</h3>
                <p>Reduction in plastic waste volume</p>
              </div>

              <div className={styles.statCard}>
                <h3>40%</h3>
                <p>Lower logistics and transport costs</p>
              </div>

              <div className={styles.statCard}>
                <h3>25%</h3>
                <p>Increase in scrap resale value</p>
              </div>
            </div>
          </section>

          <section id="conclusion" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={PCB3} alt="Plastic bales ready for recycling" />
                <span>Plastic bales ready for recycling</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Conclusion</span>
                <h2>Final Thoughts</h2>
                <p>
                  Hydraulic balers are essential for reducing plastic waste,
                  lowering transport costs, and improving recycling efficiency.
                </p>
                <p>
                  Investing in a reliable baler helps industries achieve long-term
                  savings and sustainability goals.
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

          <aside className={styles.relatedSidebar}>
            <h3 className={styles.relatedTitle}>Related Pages</h3>

            <div className={`${styles.relatedCard} ${styles.floatCard}`}>
              <Link to="/balers">Industrial Balers →</Link>
            </div>

            <div className={`${styles.relatedCard} ${styles.floatCard}`}>
              <Link to="/plasticbaler">Plastic Balers →</Link>
            </div>

            <div className={`${styles.relatedCard} ${styles.floatCard}`}>
              <Link to="/pcb">PCB Balers →</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PlasticBalerBlog;

