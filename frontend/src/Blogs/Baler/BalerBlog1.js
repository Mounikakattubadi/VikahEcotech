import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Images
import PlasticBaler1 from "../../images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "../../images/Applications/plasticbaler2.jpg";
import PCB1 from "../../images/Applications/pcb1.webp";
import PCB3 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Which industries use tyre scrap balers?",
    answer:
      "Manufacturing, packaging, logistics, warehouses, recycling units, and tyre processing facilities.",
  },
  {
    question: "Does it work with all types of tyre scrap?",
    answer:
      "Yes, shredded tyres, mixed rubber, and plastic components can be efficiently baled.",
  },
  {
    question: "Is it safe to operate?",
    answer:
      "Yes, these machines include emergency stops, interlocks, and overload protection for operators.",
  },
  {
    question: "Can it reduce operational costs?",
    answer:
      "Absolutely, labour, storage, and transport costs are significantly minimized.",
  },
];

const benefitsData = [
  {
    title: "Space Saving",
    icon: "📦",
    text: "Compresses tyre scrap into compact bales and frees up valuable floor space.",
  },
  {
    title: "Cost Reduction",
    icon: "💰",
    text: "Cuts labour, storage, and transportation expenses significantly.",
  },
  {
    title: "Improved Safety",
    icon: "🛡️",
    text: "Keeps facilities organized and reduces fire and workplace hazards.",
  },
  {
    title: "Higher Scrap Value",
    icon: "📈",
    text: "Uniform bales improve resale value and buyer confidence.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Feed Material",
    text: "Operators load tyre scrap, rubber, or mixed waste into the baler chamber.",
  },
  {
    step: "02",
    title: "Hydraulic Compression",
    text: "The machine applies high pressure to compress material into dense bales.",
  },
  {
    step: "03",
    title: "Tie & Secure",
    text: "Compressed bales are tied using straps or steel wires for stability.",
  },
  {
    step: "04",
    title: "Store or Transport",
    text: "Finished bales are ejected for efficient storage and transportation.",
  },
];

const BalerBlog1 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Key Benefits" },
    { id: "challenge", title: "Tyre Scrap Challenges" },
    { id: "types", title: "Types of Tyre Scrap" },
    { id: "how-it-works", title: "How Tyre Balers Work" },
    { id: "process", title: "Working Process" },
    { id: "space", title: "Space & Workflow Management" },
    { id: "cost", title: "Cost & Transport Optimization" },
    { id: "scrap-value", title: "Maximizing Scrap Value" },
    { id: "safety", title: "Safety & Compliance" },
    { id: "sustainability", title: "Sustainable Practices" },
    { id: "operation", title: "Easy Operation & Reliability" },
    { id: "long-term", title: "Long-Term Benefits" },
    { id: "why-us", title: "Why Choose Vikah Ecotech" },
    { id: "conclusion", title: "Final Thoughts" },
    { id: "key-takeaways", title: "Essential Insights" },
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
    Tyre Scrap Balers & Hydraulic Baling Machines for Industrial Recycling |
    Vikah Ecotech
  </title>

  <meta
    name="description"
    content="Explore how tyre scrap balers and hydraulic baling machines optimize tyre recycling, industrial waste management, and cost savings in India."
  />

  <meta
    name="keywords"
    content="industrial tyre balers, hydraulic baling machines, tyre recycling equipment, tyre waste management solutions, baling machines India"
  />

  <link rel="canonical" href="https://vikahecotech.com/baler-info" />

  <meta
    property="og:title"
    content="Industrial Tyre Scrap Balers & Hydraulic Baling Machines | Vikah Ecotech"
  />

  <meta
    property="og:description"
    content="Discover the best tyre scrap balers and hydraulic baling machines to improve recycling efficiency and reduce industrial waste costs."
  />

  <meta property="og:type" content="article" />

  <meta
    property="og:url"
    content="https://vikahecotech.com/baler-info"
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Industrial Tyre Scrap Balers & Hydraulic Baling Machines",
        description:
          "Learn how industrial tyre scrap balers and hydraulic baling machines help factories and recycling plants manage tyre waste efficiently, save costs, and improve safety.",
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
          "@id": "https://vikahecotech.com/baler-info",
        },
      }),
    }}
  />
</Helmet>

      {/* LEFT SIDEBAR */}
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
          {/* HERO SECTION */}
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                Industrial Waste Management
              </span>

              <h1 className={styles.heroTitle}>
                Why Industries Use Tyre Scrap Balers & Hydraulic Baling Machines
                in India
              </h1>

              <p className={styles.heroDescription}>
                Discover how tyre scrap balers improve storage, reduce costs,
                enhance safety, and maximize recycling efficiency for industrial
                facilities.
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
                alt="Hydraulic Tyre Baler"
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Introduction</span>
              <h2>Industrial Waste Requires Smarter Management</h2>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={PlasticBaler1} alt="Compact tyre baler" />
                <span>Compact tyre baler in action</span>
              </div>

              <div className={styles.textCard}>
                <p>
                  Industrial growth in India has led to an enormous increase in
                  tyre scrap and plastic waste. Managing this waste efficiently
                  is critical for operational productivity and safety.
                </p>

                <p>
                  Tyre scrap balers provide a practical solution by compressing
                  shredded tyres, rubber, and plastic components into compact
                  bales.
                </p>

                <p>
                  By using hydraulic tyre baling machines, industries can save
                  space, streamline recycling, and optimize transport
                  efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Key Benefits</span>
              <h2>Why Industries Prefer Tyre Scrap Balers</h2>
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

          {/* CHALLENGES */}
          <section id="challenge" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Challenges</span>
              <h2>Tyre Scrap Challenges in Industrial Facilities</h2>
            </div>

            <div className={styles.splitSection}>
              <div className={styles.textCard}>
                <p>
                  Tyre scrap accumulation creates cluttered spaces, safety
                  hazards, and increased labor costs.
                </p>

                <ul className={styles.modernList}>
                  <li>Reduced storage capacity</li>
                  <li>Fire and safety hazards</li>
                  <li>Higher labour costs</li>
                  <li>Slow recycling workflow</li>
                </ul>
              </div>

              <div className={styles.imageCard}>
                <img src={PCB1} alt="Tyre scrap challenge" />
                <span>Loose tyre scrap causing clutter</span>
              </div>
            </div>
          </section>

          {/* TYPES */}
          <section id="types" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Scrap Types</span>
              <h2>Common Types of Tyre Scrap</h2>
            </div>

            <div className={styles.cardGrid}>
              <div className={styles.smallInfoCard}>
                <h4>Shredded Tyres</h4>
                <p>Tyres from recycling and retreading operations.</p>
              </div>

              <div className={styles.smallInfoCard}>
                <h4>Mixed Plastic Scrap</h4>
                <p>Rubber, plastic, and industrial wrapping materials.</p>
              </div>

              <div className={styles.smallInfoCard}>
                <h4>Rejected Tyres</h4>
                <p>Defective or rejected production tyres.</p>
              </div>

              <div className={styles.smallInfoCard}>
                <h4>Automotive Offcuts</h4>
                <p>Sidewall trims and rubber offcuts from factories.</p>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section id="how-it-works" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Technology</span>
              <h2>How Tyre Balers Work</h2>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={PlasticBaler2} alt="Hydraulic pressure" />
                <span>Hydraulic pressure compressing tyre scrap</span>
              </div>

              <div className={styles.textCard}>
                <p>
                  Tyre balers use hydraulic systems to compress scrap tyres into
                  dense bales.
                </p>

                <p>
                  Operators feed shredded tyres into the machine, which applies
                  high pressure to compact the material.
                </p>

                <p>
                  Advanced balers use PLC systems, sensors, and automated
                  controls for consistent bale quality.
                </p>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Working Process</span>
              <h2>Step-by-Step Baling Process</h2>
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

          {/* SPACE */}
          <section id="space" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Space Management</span>
              <h2>Space & Workflow Optimization</h2>
            </div>

            <div className={styles.highlightBox}>
              <strong>Tip:</strong> Stack bales vertically and leave at least 1
              meter of walkway for safety compliance.
            </div>

            <p className={styles.sectionParagraph}>
              Compact tyre bales free up valuable floor space, reduce clutter,
              and improve safety across industrial facilities.
            </p>
          </section>

          {/* COST */}
          <section id="cost" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Savings</span>
              <h2>Cost & Transport Optimization</h2>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>30%</h3>
                <p>Reduction in logistics costs</p>
              </div>

              <div className={styles.statCard}>
                <h3>75%</h3>
                <p>Volume reduction after baling</p>
              </div>

              <div className={styles.statCard}>
                <h3>60%</h3>
                <p>Warehouse clutter reduction</p>
              </div>
            </div>
          </section>

          {/* SCRAP VALUE */}
          <section id="scrap-value" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Resale Value</span>
              <h2>Maximizing Scrap Value</h2>
            </div>

            <div className={styles.quoteCard}>
              <h3>Industry Insight</h3>
              <p>
                Well-organized bales can increase resale value by 15-20%
                compared to loose tyre scrap.
              </p>
            </div>
          </section>

          {/* SAFETY */}
          <section id="safety" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Safety</span>
              <h2>Safety & Compliance</h2>
            </div>

            <div className={styles.cardGrid}>
              <div className={styles.smallInfoCard}>
                <h4>Emergency Stops</h4>
                <p>Immediate shutdown during emergencies.</p>
              </div>

              <div className={styles.smallInfoCard}>
                <h4>Interlock Systems</h4>
                <p>Prevents machine operation with open doors.</p>
              </div>

              <div className={styles.smallInfoCard}>
                <h4>Overload Protection</h4>
                <p>Protects hydraulic systems from failures.</p>
              </div>
            </div>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={PCB3} alt="Optimized tyre bales" />
                <span>Optimized tyre scrap bales ready for transport</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Conclusion</span>
                <h2>Final Thoughts</h2>
                <p>
                  Tyre scrap balers are essential for industrial efficiency,
                  safety, and sustainability.
                </p>

                <p>
                  Compact bales reduce costs, improve resale value, and
                  streamline operations.
                </p>

                <a href="#faqs" className={styles.primaryBtn}>
                  Learn More
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
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

      {/* RIGHT SIDEBAR */}
      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/balers">Industrial Balers →</Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/tyre-scrap-balers">Tyre Scrap Balers →</Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/plasticbaler">Plastic Balers →</Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/pcb">PCB Balers →</Link>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <Link to="/metalbaler">Metal Balers →</Link>
        </div>
      </aside>
    </div>
  );
};

export default BalerBlog1;