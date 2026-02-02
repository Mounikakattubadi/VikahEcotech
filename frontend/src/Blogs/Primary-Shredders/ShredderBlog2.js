import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg3 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg4 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Can Primary Shredders handle large volumes efficiently?",
    answer: "Yes, industrial Primary Shredders are designed to process high volumes quickly, reducing bottlenecks in industrial operations. High-capacity Primary Shredders can operate continuously to meet large-scale production demands."
  },
  {
    question: "Do Primary Shredders reduce labor requirements?",
    answer: "Absolutely. By automating material size reduction, Primary Shredders minimize manual handling, which reduces labor costs and decreases the risk of workplace injuries."
  },
  {
    question: "Are Primary Shredders energy efficient?",
    answer: "Modern Primary Shredders are optimized for energy efficiency, balancing high throughput with low power consumption. Advanced drives and controls reduce energy costs and environmental impact."
  },
  {
    question: "How do Primary Shredders affect workflow?",
    answer: "Primary Shredders reduce scrap volume, standardize material, and simplify storage, enabling a smoother workflow. Standardized output integrates easily with downstream processes like baling, recycling, and packaging."
  },
  {
    question: "Which industries benefit from Primary Shredders?",
    answer: "Industries such as recycling, automotive, plastics, rubber, metal scrap processing, and e-waste management benefit significantly from Primary Shredders, improving operational efficiency and sustainability."
  },
  {
    question: "How long do Primary Shredders last?",
    answer: "With proper maintenance, industrial Primary Shredders can last 10+ years. Durable components, routine lubrication, and preventive servicing maximize operational life."
  }
];

const ShredderBlog2 = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction to Industrial Primary Shredders and Their Role in Efficiency" },
    { id: "efficiency", title: "Maximizing Efficiency in Industrial Operations Using Primary Shredders" },
    { id: "operation", title: "How Industrial Primary Shredders Work: Mechanisms and Process" },
    { id: "types", title: "Different Types of Primary Shredders and Ideal Applications" },
    { id: "workflow", title: "Workflow Optimization with Primary Shredders for Smooth Operations" },
    { id: "space", title: "Space Utilization and Storage Benefits of Shredding Materials" },
    { id: "cost", title: "Cost Reduction and Transportation Efficiency" },
    { id: "safety", title: "Enhancing Safety and Compliance in Industrial Settings" },
    { id: "sustainability", title: "Supporting Sustainability and Recycling Practices" },
    { id: "maintenance", title: "Maintenance Practices to Ensure Reliability and Longevity" },
    { id: "automation", title: "Automation, Integration, and Smart Shredder Solutions" },
    { id: "troubleshooting", title: "Common Issues and Troubleshooting Tips for Primary Shredders" },
    { id: "long-term", title: "Long-Term Impact on Operational Efficiency and Cost Savings" },
    { id: "why-us", title: "Why Choose Our Shredding Solutions for Your Industry" },
    { id: "conclusion", title: "Conclusion: Investing in Primary Shredders for Maximum ROI" },
    { id: "key-takeaways", title: "Key Takeaways for Industrial Primary Shredders" },
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
            How Industrial Primary Shredders Improve Efficiency and Productivity in Facilities
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Industrial Efficiency with Primary Shredders" />
              <span className={styles.caption}>Industrial Primary Shredders in operation for high efficiency</span>
            </div>
            <p>
              Industrial Primary Shredders are essential machines that transform bulky waste into standardized pieces, improving operational efficiency. These machines reduce clutter, optimize space, support recycling initiatives, and enable facilities to handle large volumes smoothly.
            </p>
            <p>
              In modern industries, effective material processing is crucial for productivity, cost savings, and sustainability. Primary Shredders address all of these by automating size reduction while reducing labor and energy costs.
            </p>
          </div>

          {/* Efficiency */}
          <div id="efficiency" className={styles.section}>
            <h2>Maximizing Efficiency in Industrial Operations</h2>
            <p>
              Primary Shredders allow industries to process more material with fewer resources. Automated shredding reduces manual handling, saves labor hours, and accelerates production cycles. High-throughput Primary Shredders are ideal for operations handling large scrap volumes daily.
            </p>
            <p>
              Properly configured Primary Shredders integrate into production lines, minimizing bottlenecks and ensuring a continuous flow of processed material to downstream operations like baling, packaging, and recycling.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg3} alt="Shredding Operation Process" />
              <span className={styles.caption}>Primary Shredders reduce scrap size for better workflow</span>
            </div>
            <h2>How Industrial Primary Shredders Work</h2>
            <p>
              Material is fed into the shredder where cutting, grinding, or rotating blades reduce it into smaller pieces. Shredded material becomes uniform in size and shape, facilitating easier storage, transport, and further recycling.
            </p>
            <p>
              Different Primary Shredders are designed for specific materials. Single-shaft, dual-shaft, granulators, and high-speed rotary Primary Shredders handle different scrap types efficiently, from plastics and rubber to metal and e-waste.
            </p>
          </div>

          {/* Types */}
          <div id="types" className={styles.section}>
            <h2>Different Types of Primary Shredders and Their Applications</h2>
            <ul className={styles.list}>
              <li><strong>Single-Shaft Primary Shredders:</strong> Ideal for medium-density materials and consistent throughput.</li>
              <li><strong>Dual-Shaft Primary Shredders:</strong> Handle heavy-duty materials like tyres and plastics with high capacity.</li>
              <li><strong>Granulators:</strong> Reduce material to granules for recycling or resale.</li>
              <li><strong>High-Speed Rotary Primary Shredders:</strong> Efficient for lightweight materials like paper and cardboard.</li>
            </ul>
            <p>Choosing the right type ensures maximum efficiency, durability, and minimal maintenance.</p>
          </div>

          {/* Workflow */}
          <div id="workflow" className={styles.section}>
            <h2>Workflow Optimization with Primary Shredders</h2>
            <p>
              Primary Shredders improve workflow by standardizing output and reducing bottlenecks. Materials can move seamlessly to balers, conveyors, or packaging systems, minimizing downtime and increasing overall productivity.
            </p>
          </div>

          {/* Space */}
          <div id="space" className={styles.section}>
            <h2>Space & Storage Benefits</h2>
            <p>
              Compacted and uniform shredded materials occupy less floor space, improving storage and accessibility. Organized material storage reduces hazards and enhances operational efficiency.
            </p>
          </div>

          {/* Cost */}
          <div id="cost" className={styles.section}>
            <h2>Cost Reduction & Transport Efficiency</h2>
            <p>
              Primary Shredders reduce material volume, enabling more efficient transport and lowering fuel and labor costs. Standardized output simplifies logistics, loading, and unloading processes.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety Benefits</h2>
            <p>
              Primary Shredders minimize loose scrap and clutter, reducing workplace hazards. Built-in safety features like interlocks, emergency stops, and overload protection ensure operators remain safe.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Supporting Sustainability and Recycling</h2>
            <p>
              Shredded materials are easier to recycle, reducing landfill dependence and supporting environmental responsibility. Primary Shredders help companies meet sustainability goals while promoting a circular economy.
            </p>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className={styles.section}>
            <h2>Maintenance & Reliability</h2>
            <p>
              Regular maintenance, proper lubrication, and inspection of blades and components maximize shredder longevity. Reliable Primary Shredders ensure uninterrupted operations and minimize downtime.
            </p>
          </div>

          {/* Automation */}
          <div id="automation" className={styles.section}>
            <h2>Automation and Smart Shredder Integration</h2>
            <p>
              Modern Primary Shredders integrate with sensors, conveyors, and IoT systems for automated operation. Predictive maintenance and real-time monitoring reduce human error and increase operational efficiency.
            </p>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" className={styles.section}>
            <h2>Common Issues and Troubleshooting Tips</h2>
            <ul className={styles.list}>
              <li>Material jams: Use emergency stop and reverse function carefully.</li>
              <li>Blade wear: Regularly inspect and replace worn blades.</li>
              <li>Motor overheating: Ensure proper load management and maintenance.</li>
              <li>Vibration issues: Check mounting bolts and component alignment.</li>
            </ul>
          </div>

          {/* Long-Term */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Impact on Operational Efficiency</h2>
            <ul className={styles.list}>
              <li>Reduced operational costs and labor requirements</li>
              <li>Improved workflow and productivity</li>
              <li>Enhanced safety and compliance</li>
              <li>Supports recycling and sustainability initiatives</li>
              <li>Maximizes resale or reuse value of processed materials</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Our Shredding Solutions</h2>
            <p>
              Our Primary Shredders are reliable, efficient, and scalable. They support diverse industrial needs, ensure operator safety, and provide long-term cost and workflow advantages.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg4} alt="Shredded Materials Ready for Recycling" />
              <span className={styles.caption}>Processed scrap ready for transport or recycling</span>
            </div>
            <h2>Final Thoughts</h2>
            <p>
              Industrial Primary Shredders are vital for facility efficiency, cost reduction, and sustainability. Investing in Primary Shredders enhances workflow, safety, and long-term operational benefits.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Boosts operational efficiency and workflow</li>
              <li>Reduces labor, transport, and storage costs</li>
              <li>Enhances workplace safety</li>
              <li>Supports recycling and sustainability</li>
              <li>Reliable long-term performance</li>
              <li>Integrates seamlessly with industrial automation</li>
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

export default ShredderBlog2;
