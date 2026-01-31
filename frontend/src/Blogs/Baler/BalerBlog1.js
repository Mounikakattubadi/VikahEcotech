import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
// Images
import PlasticBaler1 from "../../images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "../../images/Applications/plasticbaler2.jpg";
import PCB1 from "../../images/Applications/pcb1.webp";
import PCB3 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Which industries use tyre scrap balers?",
    answer: "Manufacturing, packaging, logistics, warehouses, recycling units, and tyre processing facilities."
  },
  {
    question: "Does it work with all types of tyre scrap?",
    answer: "Yes, shredded tyres, mixed rubber, and plastic components can be efficiently baled."
  },
  {
    question: "Is it safe to operate?",
    answer: "Yes, these machines include emergency stops, interlocks, and overload protection for operators."
  },
  {
    question: "Can it reduce operational costs?",
    answer: "Absolutely, labour, storage, and transport costs are significantly minimized."
  }
];

const BalerBlog1 = () => {

  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "challenge", title: "Tyre Scrap Challenges" },
    { id: "types", title: "Types of Tyre Scrap" },
    { id: "how-it-works", title: "How Tyre Balers Work" },
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
            Why Industries Use Tyre Scrap Balers & Hydraulic Baling Machines in India
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={PlasticBaler1} alt="Hydraulic Tyre Baler" />
              <span className={styles.caption}>Compact tyre baler in action</span>
            </div>
            <p>
              Industrial growth in India has led to an enormous increase in tyre scrap and plastic waste. Managing this waste efficiently is critical for operational productivity and safety. Tyre scrap balers provide a practical solution by compressing shredded tyres, rubber, and plastic components into compact bales.
            </p>
            <p>
              By using hydraulic tyre baling machines, industries can save space, streamline recycling, and optimize transport efficiency. These machines are widely used across tyre recycling units, manufacturing facilities, and logistics warehouses in India. According to recent studies, facilities using balers can reduce warehouse clutter by up to 60%, making operations significantly safer and more organized.
            </p>
            <p>
              Moreover, proper waste management improves compliance with environmental regulations and reduces the risk of legal penalties. Industries adopting balers also contribute to sustainable waste management practices, aligning with corporate social responsibility (CSR) goals.
            </p>
          </div>

          {/* Challenge */}
          <div id="challenge" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={PCB1} alt="Tyre Scrap Challenge" />
              <span className={styles.caption}>Loose tyre scrap causing clutter</span>
            </div>
            <h2>Tyre Scrap Challenges in Industrial Facilities</h2>
            <p>
              Tyre scrap accumulation creates cluttered spaces, safety hazards, and increased labor costs. Loose tyre waste can obstruct workflow, increase fire risks, and make recycling inefficient. Facilities without proper waste management often experience downtime due to obstruction in storage and production areas.
            </p>
            <p>
              Some common challenges include:
            </p>
            <ul className={styles.list}>
              <li>Reduced storage capacity due to unorganized scrap</li>
              <li>Safety hazards such as slips, trips, and fire risks</li>
              <li>Higher labor costs from manual handling</li>
              <li>Delays in recycling or resale due to irregular scrap sizes</li>
            </ul>
            <p>
              Tyre balers resolve these issues by converting loose scrap into standardized bales, enabling smoother warehouse operations and safer workplaces.
            </p>
          </div>

          {/* Types */}
          <div id="types" className={styles.section}>
            <h2>Common Types of Tyre Scrap</h2>
            <ul className={styles.list}>
              <li>Shredded tyres from retreading operations</li>
              <li>Plastic and rubber mixed scrap</li>
              <li>Rejected production tyres</li>
              <li>Industrial wrapping and protective sheets</li>
              <li>Automotive offcuts and sidewall trims</li>
            </ul>
            <p>
              Proper handling of these materials using a tyre scrap baler not only reduces hazards but also increases resale value for recyclers. Compact bales facilitate transportation, storage, and processing, improving operational workflow. Additionally, balers allow recycling units to maintain uniform bale sizes, which is often a requirement for industrial resale contracts.
            </p>
            <p>
              By segregating materials into specific bale types, companies can optimize resale revenue and meet stringent recycling standards, thus supporting a circular economy model.
            </p>
          </div>

          {/* How it works */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={PlasticBaler2} alt="How Tyre Balers Work" />
              <span className={styles.caption}>Hydraulic pressure compressing tyre scrap</span>
            </div>
            <h2>How Tyre Balers Work</h2>
            <p>
              Tyre balers use hydraulic systems to compress scrap tyres into dense bales. Operators feed shredded tyres into the machine, which applies high pressure to compact the material. Bales are tied with straps or wires and automatically ejected for storage or transport.
            </p>
            <p>
              Advanced balers are equipped with automated sensors and programmable logic controls (PLCs) to ensure consistent bale size and density. Some machines offer remote monitoring capabilities, allowing facility managers to track production and efficiency in real-time.
            </p>
            <p>
              Using hydraulic compression technology reduces the volume of tyre scrap by up to 75%, providing substantial savings in storage and transportation costs.
            </p>
          </div>

          {/* Space & Workflow */}
          <div id="space" className={styles.section}>
            <h2>Space & Workflow Management</h2>
            <p>
              Compact tyre bales free up valuable floor space, reduce clutter, and improve safety. Efficient space management enables smoother operations and reduces time spent moving scrap materials manually.
            </p>
            <div className={styles.infoBox}>
              <strong>Tip:</strong> Stack bales vertically to maximize storage efficiency and ensure safe access to equipment. Always leave at least 1 meter of walkway for safety compliance.
            </div>
            <p>
              Streamlined workflow improves productivity by reducing bottlenecks in material handling, and allows facilities to process more scrap with fewer staff. Balers also facilitate integration with automated warehouse systems.
            </p>
          </div>

          {/* Cost & Transport */}
          <div id="cost" className={styles.section}>
            <h2>Cost & Transport Optimization</h2>
            <p>
              Dense, uniform bales reduce the number of transport trips, lowering fuel and labor costs. Industries can save up to 25-30% on logistics annually depending on scrap volume.
            </p>
            <p>
              Baling also simplifies loading and unloading processes, reducing forklift and labor requirements. By minimizing trips and optimizing container use, companies can significantly lower CO₂ emissions during transportation.
            </p>
            <p>
              Many industries also experience improved cost predictability, since standardized bale sizes simplify freight negotiations and handling logistics.
            </p>
          </div>

          {/* Scrap Value */}
          <div id="scrap-value" className={styles.section}>
            <h2>Maximizing Scrap Value</h2>
            <p>
              Properly baled tyre scrap attracts higher resale prices. Recyclers prefer uniform, clean bales because they are easier to handle and process, leading to better revenue streams.
            </p>
            <p>
              Sorting scrap by type and density allows for premium pricing on high-quality bales. Industries can also track bale weight and composition to provide transparency to buyers, building trust and long-term partnerships.
            </p>
            <div className={styles.quoteBox}>
              <strong>Insight:</strong> "Well-organized bales increase resale value by 15-20% compared to loose scrap."
            </div>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety & Compliance</h2>
            <p>
              Tyre balers reduce workplace hazards by keeping areas clean and organized. Built-in safety features such as emergency stops, interlocks, and overload protection safeguard operators.
            </p>
            <p>
              Properly baled scrap also reduces fire risks associated with loose tyre piles. Regulatory compliance is easier to maintain when waste is systematically processed, meeting ISO and environmental standards.
            </p>
            <ul className={styles.list}>
              <li>Emergency stop switches for immediate shutdown</li>
              <li>Interlocks preventing operation when doors are open</li>
              <li>Hydraulic overload protection to avoid mechanical failures</li>
            </ul>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainable Practices</h2>
            <p>
              By converting tyre scrap into manageable bales, companies improve recyclability and reduce landfill dependency. This supports CSR initiatives and aligns with environmental regulations.
            </p>
            <p>
              Recycling baled scrap reduces resource waste and encourages the reuse of materials in manufacturing new products, promoting a circular economy. Many companies also highlight baling programs as part of their sustainability reports.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <h2>Easy Operation & Reliability</h2>
            <p>
              Operators require minimal training to use these machines safely. Hydraulics ensure consistent performance, and maintenance is straightforward, guaranteeing maximum uptime.
            </p>
            <p>
              Modern balers also include predictive maintenance alerts and remote monitoring dashboards, enabling proactive servicing and preventing unplanned downtime.
            </p>
          </div>

          {/* Long Term */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Benefits</h2>
            <ul className={styles.list}>
              <li>Significant labor and cost savings over time</li>
              <li>Increased scrap resale revenue</li>
              <li>Long-lasting hydraulic systems for decades of operation</li>
              <li>Improved safety, workflow, and compliance</li>
              <li>Supports sustainability and CSR initiatives</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Vikah Ecotech</h2>
            <p>
              Vikah Ecotech offers durable, reliable, and user-friendly tyre balers in India. Our machines are backed by strong service and installation support, ensuring smooth operations and long-term ROI.
            </p>
            <p>
              We also provide customized solutions based on facility size, scrap volume, and workflow requirements, making our balers ideal for small, medium, and large industrial setups.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={PCB3} alt="Final Thoughts" />
              <span className={styles.caption}>Optimized tyre scrap bales ready for transport</span>
            </div>
            <h2>Final Thoughts</h2>
            <p>
              Tyre scrap balers are essential for industrial efficiency, safety, and sustainability. Compact bales reduce costs, improve resale value, and streamline operations.
            </p>
            <p>
              Investing in high-quality balers provides a measurable long-term impact on operational performance, compliance, and environmental stewardship.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Essential Insights</h2>
            <ul className={styles.list}>
              <li>Efficiently manages tyre scrap waste</li>
              <li>Optimizes storage space and transport costs</li>
              <li>Uniform bales improve resale value</li>
              <li>Enhances safety and compliance</li>
              <li>Provides long-term operational savings</li>
              <li>Supports sustainability and recycling goals</li>
              <li>Reduces manual handling and labor risks</li>
              <li>Enables predictive maintenance and operational monitoring</li>
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
