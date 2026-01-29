import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "What types of waste can be processed?",
    answer: "A variety of industrial scrap, plastics, rubber, and other compressible materials can be efficiently managed."
  },
  {
    question: "Is it safe to operate for beginners?",
    answer: "Yes, these machines are designed with operator safety in mind, including emergency stops and interlocks."
  },
  {
    question: "Does it save operational costs?",
    answer: "Absolutely. By compressing scrap into manageable units, storage, handling, and transport costs are reduced."
  },
  {
    question: "How does it improve workflow?",
    answer: "Compact bales free up floor space, reduce clutter, and make material handling faster and more organized."
  }
];

const BalerBlog3 = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-use", title: "Why Use Industrial Balers" },
    { id: "how-it-works", title: "How They Work" },
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
            How Industrial Balers Transform Waste Management & Operations
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Industrial Waste Management" />
              <span className={styles.caption}>Efficient industrial waste handling</span>
            </div>
            <p>
              Industrial facilities produce significant amounts of scrap and recyclable waste. Managing this efficiently is critical for operational flow, safety, and cost control. Industrial balers provide a practical solution by compressing materials into compact, manageable units.
            </p>
            <p>
              With proper use, balers reduce clutter, optimize storage, and streamline logistics. Companies across manufacturing, recycling, and logistics sectors rely on these machines to improve overall efficiency and maintain compliance with environmental regulations.
            </p>
          </div>

          {/* Why Use */}
          <div id="why-use" className={styles.section}>
            <h2>Why Use Industrial Balers</h2>
            <p>
              Balers transform loose scrap into standardized bales, which simplifies handling, storage, and transport. This process reduces manual labor, improves safety, and enhances overall productivity. Facilities adopting balers experience smoother operations and better organized workspaces.
            </p>
          </div>

          {/* How It Works */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Balers in Action" />
              <span className={styles.caption}>Compression process in progress</span>
            </div>
            <h2>How They Work</h2>
            <p>
              Operators feed scrap into the baler, which uses hydraulic or mechanical systems to compress it into dense bales. Straps or wires secure the bales, which are then ready for storage or transport. Advanced machines may include sensors and automation for consistent results.
            </p>
            <p>
              By reducing volume, balers free up floor space and make material transport more efficient. This also allows companies to meet recycling and resale standards more effectively.
            </p>
          </div>

          {/* Efficiency */}
          <div id="efficiency" className={styles.section}>
            <h2>Efficiency & Productivity</h2>
            <p>
              Compact bales increase operational efficiency by reducing manual handling and enabling faster processing. Facilities can process more scrap with fewer resources, making operations cost-effective and sustainable.
            </p>
            <div className={styles.infoBox}>
              <strong>Tip:</strong> Integrating balers with workflow planning ensures maximum productivity and minimal downtime.
            </div>
          </div>

          {/* Space & Workflow */}
          <div id="space-management" className={styles.section}>
            <h2>Space & Workflow Management</h2>
            <p>
              Baled scrap occupies less space, leaving more room for operations and storage. Organized workspaces reduce clutter, minimize hazards, and improve material flow, enabling staff to focus on production instead of handling loose scrap.
            </p>
          </div>

          {/* Cost & Transport */}
          <div id="cost-benefits" className={styles.section}>
            <h2>Cost & Transport Benefits</h2>
            <p>
              Fewer transport trips are needed with compact bales, saving fuel, labor, and equipment costs. Standardized bales also simplify loading, unloading, and logistics planning, providing measurable savings for companies over time.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety Features</h2>
            <p>
              Balers improve workplace safety by reducing loose scrap, which can be a hazard. Emergency stops, interlocks, and overload protection ensure operators remain safe while using the machine.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainability</h2>
            <p>
              Compressed bales facilitate recycling, reduce landfill dependency, and promote environmental responsibility. Companies benefit from reduced resource waste and can demonstrate commitment to sustainability initiatives.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <h2>Ease of Operation</h2>
            <p>
              Machines are user-friendly and require minimal training. Automated and hydraulic systems ensure consistent results while predictive maintenance tools help prevent downtime and prolong machine life.
            </p>
          </div>

          {/* Long-Term */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Benefits</h2>
            <ul className={styles.list}>
              <li>Reduced labor and operational costs</li>
              <li>Increased efficiency and workflow optimization</li>
              <li>Improved safety and compliance</li>
              <li>Enhanced resale value of scrap</li>
              <li>Supports environmental and CSR goals</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Us</h2>
            <p>
              Our balers are reliable, efficient, and backed by strong service support. We provide solutions suitable for any facility size, ensuring consistent performance and long-term value.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg3} alt="Final Thoughts" />
              <span className={styles.caption}>Baled scrap ready for transport</span>
            </div>
            <h2>Final Thoughts</h2>
            <p>
              Industrial balers play a critical role in effective waste management, operational efficiency, and sustainability. Investing in high-quality balers ensures long-term benefits and smooth industrial operations.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Improves operational efficiency and workflow</li>
              <li>Reduces storage and transport costs</li>
              <li>Enhances workplace safety</li>
              <li>Supports sustainability and recycling goals</li>
              <li>Increases scrap resale value</li>
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

    </div>
  );
};

export default BalerBlog3;
