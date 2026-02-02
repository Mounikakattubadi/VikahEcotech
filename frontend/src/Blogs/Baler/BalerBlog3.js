import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";
import { Helmet } from "react-helmet";

const faqsData = [
  {
    question: "What types of tyre scrap can be processed?",
    answer: "Tyre balers efficiently compress shredded tyres, mixed rubber, and industrial tyre scrap into compact, manageable bales."
  },
  {
    question: "Is it safe to operate for beginners?",
    answer: "Yes, tyre balers are designed with safety in mind, including emergency stops, interlocks, and protective mechanisms."
  },
  {
    question: "Does it save operational costs?",
    answer: "Absolutely. By compressing tyre scrap into uniform bales, storage, handling, and transport costs are significantly reduced."
  },
  {
    question: "How does it improve workflow?",
    answer: "Baled tyre scrap reduces clutter, frees up floor space, and allows for faster and more organized material handling."
  }
];

const BalerBlog3 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-use", title: "Why Use Tyre Balers" },
    { id: "how-it-works", title: "How Tyre Balers Work" },
    { id: "efficiency", title: "Efficiency & Productivity" },
    { id: "space-management", title: "Space & Workflow Management" },
    { id: "cost-benefits", title: "Cost & Transport Benefits" },
    { id: "safety", title: "Safety Features" },
    { id: "sustainability", title: "Sustainability" },
    { id: "operation", title: "Ease of Operation" },
    { id: "long-term", title: "Long-Term Benefits" },
    { id: "why-us", title: "Why Choose Us" },
    { id: "conclusion", title: "Final Thoughts" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faqs", title: "FAQs" }
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
        {/* SEO Title */}
        <title>
          Tyre Scrap Balers for Efficient Industrial Recycling | Vikah Ecotech
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover how tyre balers help industries manage tyre scrap efficiently, reduce costs, save space, and streamline recycling operations in India."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="tyre balers, tyre scrap baling machines, industrial tyre recycling, tyre scrap management, tyre waste compaction, tyre balers India"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vikahecotech.com/tyre-balers"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Industrial Tyre Scrap Balers for Recycling & Waste Management"
        />
        <meta
          property="og:description"
          content="Learn how tyre balers transform tyre scrap into compact bales, improving operational efficiency, storage, transport, and safety for industries."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://vikahecotech.com/tyre-balers"
        />

        {/* Article Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Industrial Tyre Scrap Balers for Efficient Operations",
            description: "This article explains how tyre balers improve scrap management, operational efficiency, safety, and sustainability in industrial facilities.",
            author: {
              "@type": "Organization",
              name: "Vikah Ecotech"
            },
            publisher: {
              "@type": "Organization",
              name: "Vikah Ecotech",
              logo: {
                "@type": "ImageObject",
                url: "https://vikahecotech.com/logo_vk.png"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://vikahecotech.com/tyre-balers"
            }
          })}
        </script>

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of tyre scrap can be processed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tyre balers can efficiently handle shredded tyres, mixed rubber, and industrial tyre scrap, turning them into uniform bales."
                }
              },
              {
                "@type": "Question",
                name: "Is it safe to operate for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, tyre balers include emergency stops, interlocks, and protective features for operator safety."
                }
              },
              {
                "@type": "Question",
                name: "Does it save operational costs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "By compacting tyre scrap into bales, storage, handling, and transportation costs are minimized."
                }
              },
              {
                "@type": "Question",
                name: "How does it improve workflow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Baled tyre scrap reduces clutter, frees up space, and allows faster, more organized material handling."
                }
              }
            ]
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
            How Tyre Balers Transform Industrial Waste Management
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Tyre Baler in Industrial Facility" />
              <span className={styles.caption}>Efficient tyre scrap handling</span>
            </div>
            <p>
              Industrial facilities generate significant tyre scrap, which can create storage and workflow challenges. Tyre balers efficiently compress shredded tyres and mixed rubber into compact bales, reducing clutter and optimizing storage.
            </p>
            <p>
              With proper implementation, tyre balers streamline recycling, improve transport efficiency, and ensure compliance with environmental regulations. Manufacturing, recycling, and logistics facilities across India benefit from these machines for smoother operations.
            </p>
          </div>

          {/* Why Use */}
          <div id="why-use" className={styles.section}>
            <h2>Why Use Tyre Balers</h2>
            <p>
              Tyre balers turn loose tyre scrap into standardized bales, simplifying handling, storage, and transport. This reduces manual labor, improves safety, and enhances overall operational productivity.
            </p>
          </div>

          {/* How It Works */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Tyre Balers in Action" />
              <span className={styles.caption}>Baling process in progress</span>
            </div>
            <h2>How Tyre Balers Work</h2>
            <p>
              Operators feed tyre scrap into the baler, which compresses it into dense bales. Straps or wires secure the bales for storage or transport. Advanced machines may include sensors and automation to ensure consistent bale size and quality.
            </p>
            <p>
              Compacted bales reduce volume by up to 70%, freeing up floor space and optimizing logistics. This also improves resale value for recyclers and facilitates compliance with industrial recycling standards.
            </p>
          </div>

          {/* Efficiency */}
          <div id="efficiency" className={styles.section}>
            <h2>Efficiency & Productivity</h2>
            <p>
              Baled tyre scrap increases efficiency by reducing manual handling, speeding up processing, and enabling facilities to manage more scrap with fewer resources.
            </p>
            <div className={styles.infoBox}>
              <strong>Tip:</strong> Integrating tyre balers with workflow planning maximizes productivity and minimizes downtime.
            </div>
          </div>

          {/* Space & Workflow */}
          <div id="space-management" className={styles.section}>
            <h2>Space & Workflow Management</h2>
            <p>
              Compact bales occupy less space, improve material flow, and reduce hazards. Organized storage allows staff to focus on production instead of handling loose tyre scrap.
            </p>
          </div>

          {/* Cost & Transport */}
          <div id="cost-benefits" className={styles.section}>
            <h2>Cost & Transport Benefits</h2>
            <p>
              Reducing transport trips through compact bales saves fuel, labor, and equipment costs. Standardized bales simplify loading, unloading, and logistics, providing measurable operational savings.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety Features</h2>
            <p>
              Tyre balers reduce workplace hazards by keeping scrap organized. Emergency stops, interlocks, and protective mechanisms ensure safe operation.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainability</h2>
            <p>
              Compressed tyre scrap is easier to recycle, reduces landfill dependence, and supports environmental responsibility. This aligns with CSR initiatives and promotes circular economy practices.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <h2>Ease of Operation</h2>
            <p>
              Tyre balers are user-friendly, requiring minimal training. Automation and safety systems ensure reliable operation, while predictive maintenance features prevent downtime.
            </p>
          </div>

          {/* Long-Term */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Benefits</h2>
            <ul className={styles.list}>
              <li>Lower labor and operational costs</li>
              <li>Optimized workflow and efficiency</li>
              <li>Enhanced safety and compliance</li>
              <li>Increased resale value of tyre scrap</li>
              <li>Supports sustainability and CSR goals</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Us</h2>
            <p>
              Our tyre balers are reliable, efficient, and supported by expert service. We offer solutions for facilities of all sizes, ensuring consistent performance and long-term value.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg3} alt="Baled Tyre Scrap Ready for Transport" />
              <span className={styles.caption}>Ready-to-transport tyre scrap bales</span>
            </div>
            <h2>Final Thoughts</h2>
            <p>
              Tyre balers are essential for efficient waste management, operational flow, and sustainability. Investing in high-quality balers provides measurable long-term benefits for industrial operations.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Enhances operational efficiency and workflow</li>
              <li>Reduces storage and transport costs</li>
              <li>Improves workplace safety</li>
              <li>Supports recycling and sustainability goals</li>
              <li>Increases resale value of tyre scrap</li>
              <li>Minimizes manual handling and labor risks</li>
              <li>Reliable and long-term operational benefits</li>
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
                    <div className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT — Related Pages Sidebar */}
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

export default BalerBlog3;
