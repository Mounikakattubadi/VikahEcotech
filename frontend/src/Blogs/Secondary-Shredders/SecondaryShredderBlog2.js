import React, { useState, useEffect } from "react";
import styles from "../Baler/Blog.module.css";
import { Helmet } from "react-helmet";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How do secondary shredders improve workflow?",
    answer:
      "They standardize material size, reduce bottlenecks, and make handling, storage, and processing faster and more organized.",
  },
  {
    question: "Are secondary shredders suitable for high-volume operations?",
    answer:
      "Yes, they are designed for continuous operation and high throughput, making them ideal for large industrial facilities.",
  },
  {
    question: "Can secondary shredders reduce transportation costs?",
    answer:
      "Absolutely. By producing compact, uniform material, they reduce trips, container use, and fuel expenses.",
  },
  {
    question: "Do secondary shredders support recycling standards?",
    answer:
      "Yes, the uniform output makes materials easier to sort, process, and recycle according to industry standards.",
  },
  {
    question: "What materials can secondary shredders handle?",
    answer:
      "They efficiently process plastics, rubber, metals, paper, e-waste, and industrial scrap, making them versatile across industries.",
  },
  {
    question: "How does automation enhance secondary shredders?",
    answer:
      "Automation integrates sensors, IoT, and smart monitoring to reduce downtime, prevent jams, and optimize throughput.",
  },
];

const benefitsData = [
  {
    icon: "⚡",
    title: "Improved Workflow",
    text: "Standardizes material size and improves industrial workflow.",
  },
  {
    icon: "💰",
    title: "Lower Costs",
    text: "Reduces transportation, storage, and labor costs.",
  },
  {
    icon: "♻️",
    title: "Better Recycling",
    text: "Makes sorting and recycling more efficient and organized.",
  },
  {
    icon: "🛡️",
    title: "Safer Operations",
    text: "Reduces loose scrap and improves workplace safety.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Material Feeding",
    text: "Primary shredded material is fed into the secondary shredder.",
  },
  {
    step: "02",
    title: "Size Reduction",
    text: "Rotating cutters reduce material into uniform sizes.",
  },
  {
    step: "03",
    title: "Sorting & Separation",
    text: "Shredded materials are separated for recycling or reuse.",
  },
  {
    step: "04",
    title: "Storage & Recycling",
    text: "Uniform material is easier to store, transport, and recycle.",
  },
];

const SecondaryShredderBlog2 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Benefits of Secondary Shredders" },
    { id: "workflow", title: "Optimized Workflow" },
    { id: "operation", title: "How Secondary Shredders Work" },
    { id: "types", title: "Types & Applications" },
    { id: "process", title: "Secondary Shredding Process" },
    { id: "efficiency", title: "Efficiency & Throughput" },
    { id: "cost", title: "Cost Savings & ROI" },
    { id: "safety", title: "Safety & Compliance" },
    { id: "sustainability", title: "Sustainability Benefits" },
    { id: "maintenance", title: "Maintenance & Reliability" },
    { id: "automation", title: "Automation & Smart Integration" },
    { id: "troubleshooting", title: "Troubleshooting Strategies" },
    { id: "long-term", title: "Long-Term Benefits" },
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
          Secondary Shredders for Industrial Workflow & Efficiency
        </title>

        <meta
          name="description"
          content="Learn how secondary shredders improve workflow, reduce costs, support recycling, and increase efficiency in industrial operations."
        />

        <meta
          name="keywords"
          content="secondary shredders, industrial shredder, workflow optimization, recycling shredder, industrial recycling machine"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://vikahecotech.com/secondaryshredder-blog2"
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
              <span className={styles.heroBadge}>
                Secondary Shredding Solutions
              </span>

              <h1 className={styles.heroTitle}>
                Optimizing Industrial Workflow and Efficiency with Secondary
                Shredders
              </h1>

              <p className={styles.heroDescription}>
                Learn how secondary shredders improve material flow, reduce
                costs, optimize recycling, and enhance industrial productivity.
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
                alt="Secondary Shredder Workflow"
                className={styles.heroImage}
              />
            </div>
          </div>

          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Benefits</span>
              <h2>Why Industries Use Secondary Shredders</h2>
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
                <img src={BlogImg1} alt="Secondary Shredder Workflow" />
                <span>Enhancing workflow in industrial facilities</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Introduction</span>
                <h2>Overview of Secondary Shredders</h2>
                <p>
                  Secondary shredders are essential equipment in modern
                  industries, designed to enhance workflow, reduce material
                  bottlenecks, and ensure consistent output quality.
                </p>
                <p>
                  Industries including plastics, rubber, paper, metals, and
                  e-waste rely on secondary shredders to increase throughput and
                  improve operational efficiency.
                </p>
              </div>
            </div>
          </section>

          <section id="operation" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg2} alt="Secondary Shredder Operation" />
                <span>Reliable shredding for high-volume processing</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Operation</span>
                <h2>How Secondary Shredders Work</h2>
                <p>
                  Secondary shredders typically use rotating blades, cutters, or
                  hammers that reduce material into consistent sizes.
                </p>
                <p>
                  Advanced models include overload protection, sensors, and
                  automatic reverse functions to minimize downtime.
                </p>
              </div>
            </div>
          </section>

          <section id="process" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Process</span>
              <h2>Secondary Shredding Process</h2>
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

          <section id="conclusion" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg4} alt="Processed Scrap Material" />
                <span>Uniform shredded material ready for recycling</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Conclusion</span>
                <h2>Secondary Shredders Improve Industrial Efficiency</h2>
                <p>
                  Secondary shredders optimize workflow, enhance efficiency,
                  ensure cost savings, support sustainability, and improve
                  workplace safety.
                </p>
                <p>
                  They are indispensable for industries that require reliable
                  material handling and consistent recycling performance.
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

      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/secondary-shredder">
            Industrial Secondary Shredders →
          </a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/rasper_secondaryshredders">
            Secondary Shredder/Rasper (Tyres) →
          </a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/rst4000">RST-4000 →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/rst6000">RST-6000 →</a>
        </div>
      </aside>
    </div>
  );
};

export default SecondaryShredderBlog2;