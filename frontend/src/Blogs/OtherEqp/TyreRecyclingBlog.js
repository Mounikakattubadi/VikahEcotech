import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Helmet } from "react-helmet";

// Images (replace as needed)
import Plant1 from "../../images/Applications/plasticbaler1.jpg";
import Plant2 from "../../images/Applications/plasticbaler2.jpg";
import Tyre1 from "../../images/Applications/pcb1.webp";
import Tyre2 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question:
      "Who are the leading tyre scrap recycling plant manufacturers in India?",
    answer:
      "Companies like Vikah Ecotech and several specialized recycling equipment manufacturers provide complete tyre scrap recycling plants with shredders, crushers, pyrolysis systems, balers, and conveyors.",
  },
  {
    question: "What machinery is included in a tyre scrap recycling plant?",
    answer:
      "A full plant includes tyre shredders, crushers, rubber grinders, balers, conveyors, dust collectors, and fully automated control systems.",
  },
  {
    question: "Is tyre scrap recycling profitable in India?",
    answer:
      "Yes. Recycling plants earn through recycled rubber, pyrolysis oil, steel wires, carbon black, and government incentives.",
  },
  {
    question: "Do recycling plants require environmental approvals?",
    answer:
      "Yes. Plants must comply with CPCB guidelines, pollution board clearances, and safety/ISO standards.",
  },
];

const TyreRecyclingBlog = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "demand", title: "Demand for Tyre Recycling Plants in India" },
    { id: "process", title: "How Tyre Scrap Recycling Plants Work" },
    { id: "machinery", title: "Core Machinery in a Recycling Plant" },
    { id: "benefits", title: "Industrial & Environmental Benefits" },
    {
      id: "manufacturers",
      title: "Top Tyre Scrap Recycling Plant Manufacturers",
    },
    { id: "cost", title: "Cost of Setting Up a Plant" },
    { id: "compliance", title: "Government Policies & Compliance" },
    { id: "why-us", title: "Why Choose Vikah Ecotech" },
    { id: "conclusion", title: "Final Thoughts" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let pos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= pos) {
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
      {/* SEO Helmet */}
      <Helmet>
        {/* ===== BASIC SEO ===== */}
        <title>
          Tyre Scrap Recycling Plant Manufacturers in India – Complete Guide
        </title>

        <meta
          name="description"
          content="Explore the leading tyre scrap recycling plant manufacturers in India. Learn how tyre recycling plants work, essential machinery, setup cost, profitability, and government compliance."
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vikah Ecotech Pvt Ltd" />

        <link
          rel="canonical"
          href="https://vikahecotech.com/tyre-recycling-plant-manufacturers"
        />

        {/* ===== OPEN GRAPH (FOR SOCIAL SHARING) ===== */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Tyre Scrap Recycling Plant Manufacturers in India – Complete Guide"
        />
        <meta
          property="og:description"
          content="Discover top tyre scrap recycling plant manufacturers in India and explore machinery, process, cost, and compliance details."
        />
        <meta
          property="og:url"
          content="https://vikahecotech.com/tyre-recycling-plant-manufacturers"
        />
        <meta
          property="og:image"
          content="https://vikahecotech.com/images/baler_bg.png"
        />
        <meta property="og:site_name" content="Vikah Ecotech Pvt Ltd" />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tyre Scrap Recycling Plant Manufacturers in India"
        />
        <meta
          name="twitter:description"
          content="Complete guide on tyre recycling plant manufacturers, machinery, cost, and benefits in India."
        />
        <meta
          name="twitter:image"
          content="https://vikahecotech.com/images/baler_bg.png"
        />

        {/* ===== BLOG STRUCTURED DATA ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Tyre Scrap Recycling Plant Manufacturers in India – Complete Guide",
            description:
              "A detailed guide on tyre scrap recycling plant manufacturers in India, machinery required, industrial benefits, and government compliance.",
            image: "https://vikahecotech.com/images/baler_bg.png",
            author: {
              "@type": "Organization",
              name: "Vikah Ecotech Pvt Ltd",
            },
            publisher: {
              "@type": "Organization",
              name: "Vikah Ecotech Pvt Ltd",
              logo: {
                "@type": "ImageObject",
                url: "https://vikahecotech.com/logo_vk.png",
              },
            },
            datePublished: "2026-02-20",
            dateModified: "2026-02-20",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://vikahecotech.com/tyre-recycling-plant-manufacturers",
            },
          })}
        </script>

        {/* ===== FAQ STRUCTURED DATA (VERY IMPORTANT FOR RICH RESULTS) ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who are the leading tyre scrap recycling plant manufacturers in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Companies like Vikah Ecotech and other specialized recycling equipment manufacturers provide complete tyre scrap recycling plants with shredders, crushers, pyrolysis systems, balers, and conveyors.",
                },
              },
              {
                "@type": "Question",
                name: "What machinery is included in a tyre scrap recycling plant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A full plant includes tyre shredders, crushers, rubber grinders, balers, conveyors, dust collectors, and automated control systems.",
                },
              },
              {
                "@type": "Question",
                name: "Is tyre scrap recycling profitable in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Revenue is generated through recycled rubber, pyrolysis oil, steel wires, carbon black, and government incentives.",
                },
              },
              {
                "@type": "Question",
                name: "Do recycling plants require environmental approvals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Plants must comply with CPCB guidelines, pollution control board approvals, and safety standards.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* LEFT TOC */}
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
            Tyre Scrap Recycling Plant Manufacturers in India
          </h1>

          {/* Intro */}
          <div id="intro" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={Plant1} alt="Tyre Recycling Plant" />
              <span className={styles.caption}>
                Modern tyre scrap recycling plant
              </span>
            </div>

            <p>
              With India generating over **6 million tonnes of tyre waste every
              year**, the demand for advanced tyre scrap recycling plants has
              increased dramatically. Manufacturers now build fully-automated
              recycling machinery capable of shredding, grinding, baling, and
              processing tyres into reusable materials like rubber granules,
              pyrolysis oil, steel wire, and carbon black.
            </p>

            <p>
              Leading manufacturers in India offer durable, customizable
              recycling plants suitable for factories, municipal waste
              facilities, tyre processing companies, and recycling units.
            </p>
          </div>

          {/* Demand */}
          <div id="demand" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={Tyre1} alt="Tyre scrap demand" />
              <span className={styles.caption}>
                India’s rising tyre scrap generation
              </span>
            </div>

            <h2>Growing Demand for Tyre Recycling Plants in India</h2>
            <p>
              Rapid urbanization, transportation growth, and industrial
              expansion have resulted in massive tyre waste accumulation.
              Without proper recycling, these tyres become fire hazards,
              mosquito breeding grounds, and environmental threats.
            </p>

            <ul className={styles.list}>
              <li>India generates millions of end-of-life tyres annually</li>
              <li>Recycling demand is rising due to government mandates</li>
              <li>High profitability from recovered materials</li>
              <li>Industries need sustainable waste management solutions</li>
            </ul>
          </div>

          {/* Process */}
          <div id="process" className={styles.section}>
            <h2>How Tyre Scrap Recycling Plants Work</h2>

            <p>Typical process includes:</p>

            <ul className={styles.list}>
              <li>
                <strong>Tyre shredding:</strong> Breaking tyres into small
                pieces
              </li>
              <li>
                <strong>Steel wire extraction:</strong> Separating high-grade
                steel
              </li>
              <li>
                <strong>Rubber granulation:</strong> Producing crumb rubber
              </li>
              <li>
                <strong>Pyrolysis conversion:</strong> Converting rubber into
                oil & gas
              </li>
              <li>
                <strong>Baling:</strong> Compacting scrap for transport
              </li>
            </ul>

            <p>
              Modern plants integrate PLC control panels, dust systems, and
              automatic conveyors for continuous production with minimal labor.
            </p>
          </div>

          {/* Machinery */}
          <div id="machinery" className={styles.section}>
            <h2>Core Machinery Included in a Tyre Recycling Plant</h2>

            <ul className={styles.list}>
              <li>Tyre Shredders & Crushers</li>
              <li>Rubber Grinders & Cryogenic Systems</li>
              <li>Hydraulic Tyre Balers</li>
              <li>Steel Wire Separators</li>
              <li>Conveyors & Feeders</li>
              <li>Dust Collection Units</li>
              <li>PLC Automation Controls</li>
            </ul>

            <p>
              Each plant is customized based on tyre scrap volume, facility
              size, and recycling goals.
            </p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <h2>Industrial & Environmental Benefits</h2>
            <p>Tyre recycling plants offer huge advantages:</p>

            <ul className={styles.list}>
              <li>Reduces landfill waste</li>
              <li>Promotes circular economy</li>
              <li>High ROI from recycled materials</li>
              <li>Improves facility hygiene & organization</li>
              <li>Ensures compliance with waste regulations</li>
            </ul>
          </div>

          {/* Manufacturers */}
          <div id="manufacturers" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={Plant2} alt="Manufacturing Recycling Plants" />
              <span className={styles.caption}>
                Manufacturing high-quality plants
              </span>
            </div>

            <h2>Top Tyre Scrap Recycling Plant Manufacturers in India</h2>

            <p>Some leading manufacturers include:</p>

            <ul className={styles.list}>
              <li>
                <strong>Vikah Ecotech</strong> — Trusted for durable tyre balers
                & recycling machinery
              </li>
              <li>Specialized tyre shredder manufacturers</li>
              <li>Rubber granulation equipment suppliers</li>
              <li>Pyrolysis plant manufacturers</li>
              <li>Industrial waste management equipment providers</li>
            </ul>

            <p>
              These manufacturers supply turnkey plant solutions with
              installation, automation setup, maintenance, and long-term service
              support.
            </p>
          </div>

          {/* Cost */}
          <div id="cost" className={styles.section}>
            <h2>Cost of Setting Up a Tyre Scrap Recycling Plant</h2>
            <p>Plant cost depends on capacity:</p>

            <ul className={styles.list}>
              <li>Small scale: ₹15–25 Lakhs</li>
              <li>Medium scale: ₹40–80 Lakhs</li>
              <li>Large, fully automated: ₹1.2–4 Crores+</li>
            </ul>

            <p>
              Additional costs include land, labor, power supply, and
              environmental clearances.
            </p>
          </div>

          {/* Compliance */}
          <div id="compliance" className={styles.section}>
            <h2>Government Policies & Recycling Compliance</h2>

            <ul className={styles.list}>
              <li>CPCB tyre waste management rules</li>
              <li>Environmental impact assessment (EIA)</li>
              <li>Pollution board approvals</li>
              <li>Fire & safety certifications</li>
              <li>ISO quality compliance</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Vikah Ecotech</h2>
            <p>
              Vikah Ecotech provides high-quality tyre balers, shredders, and
              recycling machinery that ensure reliability, efficiency, and
              long-term value. Our solutions are built for industrial durability
              and optimized for continuous operations.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={Tyre2} alt="Conclusion" />
              <span className={styles.caption}>
                Recycled tyre scrap ready for reuse
              </span>
            </div>

            <h2>Final Thoughts</h2>
            <p>
              Tyre scrap recycling plants play a crucial role in India’s
              industrial and environmental progress. With rising tyre waste,
              choosing the right manufacturer ensures efficient processing,
              better revenue, and maximum sustainability.
            </p>
          </div>

          {/* FAQs */}
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

      {/* RIGHT — Animated Related Pages Sidebar */}
      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/primary-shredder">Industrial Primary Shredders →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/balers">Balers →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/secondary-shredder">Secondary Shredders →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/rasper_secondaryshredders">Rasper →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/ourproducts">All Products →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/other-equipment">Other Equipment →</a>
        </div>
      </aside>
    </div>
  );
};

export default TyreRecyclingBlog;
