import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images (reuse same ones for now)
import BlogImg1 from "../../images/Applications/tyreshred2.jpg";
import BlogImg4 from "../../images/Applications/tyreshred1.jpg";
import shred1 from "../../images/Applications/shredtyre6.jpg";
import { Helmet } from "react-helmet";

const faqsData = [
  {
    question: "What types of materials can Primary Shredders handle?",
    answer: "Industrial Primary Shredders handle plastics, rubber, wood, paper, and various scrap materials, providing a versatile solution for manufacturing and recycling operations. Choosing the right shredder for specific materials ensures optimal shredding efficiency and reduces machine wear."
  },
  {
    question: "Are Primary Shredders safe to operate?",
    answer: "Yes, modern industrial Primary Shredders include safety interlocks, emergency stops, and overload protection to ensure operator safety while maintaining efficiency during material processing."
  },
  {
    question: "How do Primary Shredders improve workflow?",
    answer: "Primary Shredders reduce material size, making handling, storage, and transport easier. This streamlines workflow, improves material throughput, and ensures consistent operations across industrial and recycling facilities."
  },
  {
    question: "Do Primary Shredders support sustainability goals?",
    answer: "Absolutely. Shredded materials are easier to recycle, reducing landfill dependency and supporting green industrial practices. Properly sized materials enhance recycling efficiency and environmental responsibility."
  }
];

const ShredderBlog1 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction to Industrial Primary Shredders and Their Role in Waste Management" },
    { id: "importance", title: "Why Industrial Primary Shredders Are Critical for Manufacturing and Recycling Operations" },
    { id: "operation", title: "Understanding How Industrial Primary Shredders Operate and Process Materials" },
    { id: "types", title: "Different Types of Industrial Primary Shredders and Their Applications" },
    { id: "benefits", title: "Key Benefits of Using Industrial Primary Shredders in Your Facility" },
    { id: "workflow", title: "Improving Workflow, Storage, and Space Optimization with Primary Shredders" },
    { id: "cost", title: "Cost Reduction and Transport Efficiency Through Shredding" },
    { id: "safety", title: "Safety Features and Advantages of Modern Industrial Primary Shredders" },
    { id: "sustainability", title: "Sustainability: How Primary Shredders Support Recycling and Green Practices" },
    { id: "maintenance", title: "Maintenance Practices and Ensuring Long-Term Reliability of Primary Shredders" },
    { id: "automation", title: "Automation and Integration with Industrial Waste Management Systems" },
    { id: "long-term", title: "Long-Term Impact of Primary Shredders on Operational Efficiency and Cost Savings" },
    { id: "why-us", title: "Why Choose Our Shredding Solutions for Your Industry" },
    { id: "conclusion", title: "Conclusion: Investing in Industrial Primary Shredders for Maximum ROI" },
    { id: "key-takeaways", title: "Key Takeaways: Industrial Primary Shredders for Efficient Waste Management" },
    { id: "faqs", title: "Frequently Asked Questions About Industrial Primary Shredders" }
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
  {/* Page Title */}
  <title>
    Industrial Primary Shredders for Efficient Waste Management | Vikah Ecotech
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Learn why industries use industrial primary shredders for efficient waste management, recycling, cost reduction, and sustainability. Explore benefits, safety, and applications."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="industrial primary shredder, waste management shredder, recycling shredder machine, industrial shredding solutions"
  />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://vikahecotech.com/primary-shredder-waste-management"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Industrial Primary Shredders for Efficient Waste Management | Vikah Ecotech"
  />
  <meta
    property="og:description"
    content="Industrial primary shredders improve waste handling, recycling efficiency, and sustainability for modern industries."
  />
  <meta
    property="og:url"
    content="https://vikahecotech.com/primary-shredder-waste-management"
  />
  <meta property="og:type" content="article" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:title"
    content="Industrial Primary Shredders for Efficient Waste Management"
  />
  <meta
    name="twitter:description"
    content="Why industries rely on primary shredders for efficient waste management and recycling."
  />

  {/* Structured Data – Blog Article (Logo Only) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline":
        "Why Industries Use Industrial Primary Shredders for Efficient Waste Management",
      "description":
        "Industrial primary shredders help industries reduce waste volume, improve recycling efficiency, enhance safety, and support sustainability goals.",
      "url": "https://vikahecotech.com/primary-shredder-waste-management",
      "author": {
        "@type": "Organization",
        "name": "Vikah Ecotech"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vikah Ecotech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vikahecotech.com/logo_vk.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://vikahecotech.com/primary-shredder-waste-management"
      }
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
            Why Industries Use Industrial Primary Shredders for Efficient Waste Management
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Industrial Primary Shredders Efficient Waste Management" />
              <span className={styles.caption}>Industrial Primary Shredders in action for efficient waste handling</span>
            </div>
            <p>
              Industrial Primary Shredders are essential machines for converting bulky waste and scrap materials into smaller, manageable pieces. They help industries maintain operational efficiency, reduce clutter, improve safety, and support recycling initiatives.
            </p>
          </div>

          {/* Importance */}
          <div id="importance" className={styles.section}>
            <h2>Importance of Industrial Primary Shredders in Manufacturing and Recycling</h2>
            <p>
              Primary Shredders are critical for reducing waste volume, improving workflow, and preparing materials for recycling. They ensure compliance with environmental regulations and reduce handling risks, making them indispensable in modern industrial operations.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={shred1} alt="Primary Shredders Operating Process" />
              <span className={styles.caption}>Shredding scrap materials for optimized handling</span>
            </div>
            <h2>How Industrial Primary Shredders Operate</h2>
            <p>
              Materials are fed into the shredder, which uses rotating blades, cutters, or hammers to reduce them into smaller pieces. Shredded materials can then be sorted, stored, or recycled efficiently. Different mechanisms are designed for specific materials to maximize efficiency and safety.
            </p>
          </div>

          {/* Types */}
          <div id="types" className={styles.section}>
            <h2>Types of Industrial Primary Shredders and Their Applications</h2>
            <ul className={styles.list}>
              <li><strong>Single-Shaft Primary Shredders:</strong> Ideal for medium-sized materials and consistent output for recycling.</li>
              <li><strong>Dual-Shaft Primary Shredders:</strong> Handle heavy-duty shredding for tyres, plastics, and metals with higher throughput.</li>
              <li><strong>Granulators:</strong> Reduce shredded material into small granules suitable for resale or recycling.</li>
              <li><strong>High-Speed Rotary Primary Shredders:</strong> Efficient for paper, cardboard, and lightweight plastic waste.</li>
            </ul>
            <p>Choosing the right type ensures optimal performance and longevity of your equipment.</p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <h2>Key Benefits of Using Industrial Primary Shredders</h2>
            <ul className={styles.list}>
              <li>Significant reduction in waste volume</li>
              <li>Improved handling, storage, and transport efficiency</li>
              <li>Supports cost reduction in labor and logistics</li>
              <li>Enhances recycling processes and material quality</li>
              <li>Ensures workplace safety and compliance</li>
            </ul>
          </div>

          {/* Workflow */}
          <div id="workflow" className={styles.section}>
            <h2>Workflow, Storage, and Space Optimization</h2>
            <p>
              Shredded materials are compact, uniform, and easy to store. This improves workflow, reduces bottlenecks, and optimizes warehouse space for better productivity.
            </p>
          </div>

          {/* Cost */}
          <div id="cost" className={styles.section}>
            <h2>Cost Reduction and Transport Efficiency</h2>
            <p>
              Uniformly shredded materials minimize transport trips and maximize container usage. This leads to lower fuel and labor costs while simplifying logistics and material handling.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety Features and Advantages</h2>
            <p>
              Modern Primary Shredders include interlocks, emergency stops, overload protection, and protective enclosures. Reducing clutter and organizing waste helps prevent workplace accidents and injuries.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainability & Recycling</h2>
            <p>
              Shredded materials are easier to recycle, supporting environmental initiatives and reducing landfill dependency. Proper material processing enhances recycling quality and promotes eco-friendly practices.
            </p>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className={styles.section}>
            <h2>Maintenance Practices & Reliability</h2>
            <p>
              Primary Shredders are built for durability with minimal maintenance. Routine servicing prevents downtime, ensures long-term reliability, and maintains operational efficiency.
            </p>
          </div>

          {/* Automation */}
          <div id="automation" className={styles.section}>
            <h2>Automation and Integration</h2>
            <p>
              Modern Primary Shredders integrate with conveyors, sensors, and sorting systems for automated material handling. Real-time monitoring and predictive maintenance reduce labor, downtime, and operational costs.
            </p>
          </div>

          {/* Long-Term Impact */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Impact on Operational Efficiency</h2>
            <ul className={styles.list}>
              <li>Reduced operational costs over time</li>
              <li>Improved workflow and productivity</li>
              <li>Enhanced safety and compliance</li>
              <li>Supports recycling and sustainability goals</li>
              <li>Maximizes resale or reuse value of materials</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Our Shredding Solutions</h2>
            <p>
              Our Primary Shredders are designed for reliability, efficiency, and safety. Scalable for any facility size, they provide measurable long-term benefits in workflow, cost management, and sustainability.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg4} alt="Shredded Materials Ready for Recycling" />
              <span className={styles.caption}>Processed materials ready for transport or recycling</span>
            </div>
            <h2>Conclusion</h2>
            <p>
              Industrial Primary Shredders are essential for efficient waste management, optimized workflow, and sustainable practices. Investing in Primary Shredders ensures operational efficiency, safety, and long-term ROI.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Enhances workflow efficiency and operational productivity</li>
              <li>Reduces storage and transport costs</li>
              <li>Supports safety and compliance</li>
              <li>Improves recyclability and sustainability</li>
              <li>Minimizes manual handling and labor risks</li>
              <li>Reliable and long-term operational advantages</li>
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

export default ShredderBlog1;
