import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
// Images
import MetalShredder1 from "../../images/Applications/shredm1.jpg";
import MetalShredder2 from "../../images/Applications/shredm2.jpg";
import MetalScrap1 from "../../images/Applications/shredm3.jpg";
import MetalScrap2 from "../../images/shredder_hd.jpg";
import { Helmet } from "react-helmet";

const faqsData = [
  {
    question: "Which industries use metal shredders?",
    answer:
      "Automotive, recycling plants, metal processing units, construction scrap handlers, and manufacturing facilities use metal shredders.",
  },
  {
    question: "What types of metals can be shredded?",
    answer:
      "Ferrous metals, non-ferrous metals, aluminum, steel, copper, and mixed metal scrap can be efficiently processed.",
  },
  {
    question: "Are metal shredders safe to operate?",
    answer:
      "Yes, modern metal shredders include safety interlocks, emergency stop buttons, and overload protection for operators.",
  },
  {
    question: "Do shredders reduce operational costs?",
    answer:
      "Absolutely, they minimize labor, transport, and storage costs by converting scrap into manageable sizes for resale or recycling.",
  },
];

const MetalShredderBlog = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "challenges", title: "Metal Scrap Challenges" },
    { id: "types", title: "Types of Metal Scrap" },
    { id: "how-it-works", title: "How Metal Shredders Work" },
    { id: "efficiency", title: "Efficiency & Workflow" },
    { id: "cost-benefits", title: "Cost & Transport Benefits" },
    { id: "value-maximization", title: "Maximizing Scrap Value" },
    { id: "safety", title: "Safety & Compliance" },
    { id: "sustainability", title: "Sustainable Practices" },
    { id: "operation", title: "Easy Operation & Reliability" },
    { id: "long-term", title: "Long-Term Benefits" },
    { id: "why-us", title: "Why Choose Vikah Ecotech" },
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
          Trusted Metal Shredders Manufacturers in India | Vikah Ecotech
        </title>
        <meta
          name="description"
          content="Discover trusted metal shredders manufacturers in India. Improve recycling efficiency, reduce costs, and safely manage metal scrap with Vikah Ecotech."
        />
        <meta
          name="keywords"
          content="metal shredders India, industrial metal shredders, scrap metal processing machines, metal recycling equipment, Vikah Ecotech"
        />
        <link rel="canonical" href="https://vikahecotech.com/metal-shredders" />
        <meta
          property="og:title"
          content="Trusted Metal Shredders Manufacturers in India | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="Vikah Ecotech offers high-quality metal shredders in India, helping industries efficiently manage scrap metal, optimize costs, and enhance recycling."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://vikahecotech.com/metal-shredders"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Trusted Metal Shredders Manufacturers in India",
            description:
              "Learn how Vikah Ecotech metal shredders help industries efficiently process metal scrap, reduce costs, and ensure safety in India.",
            author: {
              "@type": "Organization",
              name: "Vikah Ecotech",
            },
            publisher: {
              "@type": "Organization",
              name: "Vikah Ecotech",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://vikahecotech.com/metal-shredders",
            },
          })}
        </script>
      </Helmet>

      {/* LEFT NAVIGATION */}
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

      {/* MAIN BLOG CONTENT */}
      <div className={styles.blogWrapper}>
        <div className={styles.blogInner}>
          <h1 className="mulch-heading">
            Trusted Metal Shredders Manufacturers in India
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={MetalShredder1} alt="Industrial Metal Shredder" />
              <span className={styles.caption}>
                High-capacity metal shredder in action
              </span>
            </div>
            <p>
              Metal scrap recycling is a crucial part of India's industrial growth. Efficient metal shredders allow facilities to process scrap metals
              safely, reduce storage space, and maximize resale value.
            </p>
            <p>
              Vikah Ecotech offers high-quality shredders designed for heavy-duty metal processing, helping industries streamline operations,
              minimize costs, and comply with environmental standards.
            </p>
          </div>

          {/* Challenges */}
          <div id="challenges" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={MetalScrap1} alt="Metal Scrap Challenges" />
              <span className={styles.caption}>Loose metal scrap creating hazards</span>
            </div>
            <h2>Metal Scrap Challenges in Industrial Facilities</h2>
            <p>
              Metal scrap accumulation can obstruct workflow, increase fire risks, and raise labor costs. Improper handling of scrap metals leads to
              workplace hazards and inefficiencies.
            </p>
            <ul className={styles.list}>
              <li>Disorganized storage and limited space</li>
              <li>Increased risk of injuries and accidents</li>
              <li>High labor costs due to manual handling</li>
              <li>Inconsistent scrap sizes impacting resale</li>
            </ul>
            <p>
              Metal shredders resolve these issues by converting scrap into uniform sizes, improving safety and operational efficiency.
            </p>
          </div>

          {/* Types */}
          <div id="types" className={styles.section}>
            <h2>Types of Metal Scrap</h2>
            <ul className={styles.list}>
              <li>Ferrous scrap: iron, steel</li>
              <li>Non-ferrous metals: aluminum, copper, brass</li>
              <li>Automotive parts and chassis components</li>
              <li>Industrial manufacturing offcuts</li>
              <li>Construction and demolition scrap</li>
            </ul>
            <p>
              Proper shredding and segregation increases resale value and reduces handling risks, enabling a smoother metal recycling process.
            </p>
          </div>

          {/* How it Works */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={MetalShredder2} alt="How Metal Shredders Work" />
              <span className={styles.caption}>Shredding metal scrap for processing</span>
            </div>
            <h2>How Metal Shredders Work</h2>
            <p>
              Metal shredders use powerful cutting and crushing mechanisms to break down scrap metals into uniform sizes. Operators feed scrap
              into the machine, which processes it efficiently and safely.
            </p>
            <p>
              Modern shredders include PLCs, automated sensors, and overload protection to ensure consistent operation, reducing downtime and maximizing output.
            </p>
          </div>

          {/* Efficiency */}
          <div id="efficiency" className={styles.section}>
            <h2>Efficiency & Workflow</h2>
            <p>
              Shredding metals allows efficient storage, reduces clutter, and optimizes workflow. Automated metal handling and conveyor integration
              streamline operations further.
            </p>
          </div>

          {/* Cost Benefits */}
          <div id="cost-benefits" className={styles.section}>
            <h2>Cost & Transport Benefits</h2>
            <p>
              Shredded metals are easier to transport, reducing freight trips and lowering fuel and labor costs. This improves cost predictability
              and reduces environmental impact.
            </p>
          </div>

          {/* Maximizing Scrap Value */}
          <div id="value-maximization" className={styles.section}>
            <h2>Maximizing Scrap Value</h2>
            <p>
              Uniform, clean shredded metals fetch higher resale prices. Proper segregation and shredding improve transparency and strengthen
              buyer confidence.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety & Compliance</h2>
            <ul className={styles.list}>
              <li>Emergency stops for immediate shutdown</li>
              <li>Interlocks preventing unsafe operation</li>
              <li>Overload protection to avoid mechanical failures</li>
            </ul>
            <p>
              Properly shredded metals reduce workplace hazards and ensure compliance with ISO and environmental standards.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainable Practices</h2>
            <p>
              Metal shredding promotes recycling, reduces landfill dependency, and aligns with CSR and environmental goals, fostering a circular economy.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <h2>Easy Operation & Reliability</h2>
            <p>
              Minimal training is required, and modern metal shredders offer predictive maintenance and remote monitoring, ensuring maximum uptime.
            </p>
          </div>

          {/* Long-Term Benefits */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Benefits</h2>
            <ul className={styles.list}>
              <li>Lower operational costs over time</li>
              <li>Higher resale revenue</li>
              <li>Durable machinery for decades</li>
              <li>Improved safety and compliance</li>
              <li>Supports sustainability goals</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Vikah Ecotech</h2>
            <p>
              Vikah Ecotech provides reliable, high-performance metal shredders in India with excellent support, customization options, and ROI-focused solutions for all industrial setups.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={MetalScrap2} alt="Shredded Metal Ready" />
              <span className={styles.caption}>Optimized shredded metal ready for recycling</span>
            </div>
            <h2>Conclusion</h2>
            <p>
              Trusted metal shredders are critical for operational efficiency, safety, and sustainability. Investing in quality shredders ensures better workflow,
              higher revenue, and compliance with regulations.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Efficient metal scrap processing</li>
              <li>Reduced labor and transport costs</li>
              <li>Enhanced resale value of metals</li>
              <li>Improved workplace safety and compliance</li>
              <li>Supports sustainability and recycling initiatives</li>
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
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  )}
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
          <a href="/primary-shredder">Industrial Primary Shredders →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/tyreshredder">Tyre Shredder →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/plasticshredder">Plastic Primary Shredders →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/papershredder">PCB Primary Shredders →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/shm4000">Metal Primary Shredders →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/ewaste">E-Waste Primary Shredders →</a>
        </div>

      </aside>
    </div>
  );
};

export default MetalShredderBlog;
