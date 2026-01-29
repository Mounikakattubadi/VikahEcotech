import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Can balers handle all types of scrap?",
    answer: "Yes, industrial balers can efficiently process various types of compressible waste including plastics, rubber, and other scrap materials."
  },
  {
    question: "Do balers require trained operators?",
    answer: "Basic training is sufficient for safe operation, as most machines are user-friendly and equipped with safety mechanisms."
  },
  {
    question: "How do balers help reduce costs?",
    answer: "By compressing scrap into compact units, balers lower storage, handling, and transportation expenses significantly."
  },
  {
    question: "Are balers environmentally friendly?",
    answer: "Absolutely. Baling scrap improves recyclability, reduces landfill waste, and supports sustainable industrial practices."
  }
];

const BalerBlog4 = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "importance", title: "Importance of Industrial Balers" },
    { id: "operation", title: "How They Operate" },
    { id: "benefits", title: "Key Benefits" },
    { id: "workflow", title: "Workflow & Space Optimization" },
    { id: "cost", title: "Cost & Transport Efficiency" },
    { id: "safety", title: "Safety Advantages" },
    { id: "sustainability", title: "Sustainability & Recycling" },
    { id: "maintenance", title: "Maintenance & Reliability" },
    { id: "long-term", title: "Long-Term Impact" },
    { id: "why-us", title: "Why Choose Our Solutions" },
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
            Enhancing Industrial Operations with Efficient Waste Management Solutions
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Industrial Operations" />
              <span className={styles.caption}>Streamlined industrial operations with organized waste</span>
            </div>
            <p>
              Industrial facilities produce large volumes of scrap and recyclable materials daily. Managing these efficiently is crucial to maintaining smooth operations, safety, and cost control. Industrial balers provide a reliable solution by compressing waste into manageable units, freeing up space, and simplifying handling.
            </p>
          </div>

          {/* Importance */}
          <div id="importance" className={styles.section}>
            <h2>Importance of Industrial Balers</h2>
            <p>
              Compressing loose scrap into compact bales not only improves space utilization but also enhances workflow efficiency. Facilities using balers experience better organization, reduced hazards, and easier compliance with environmental regulations.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Balers Operation" />
              <span className={styles.caption}>Compression and baling in progress</span>
            </div>
            <h2>How They Operate</h2>
            <p>
              Operators feed scrap materials into the machine, which compresses them into dense, uniform bales. Straps or wires secure each bale for storage or transport. Advanced balers may include automated features for consistency, monitoring, and reduced manual intervention.
            </p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <h2>Key Benefits</h2>
            <ul className={styles.list}>
              <li>Reduces space used by loose scrap</li>
              <li>Streamlines material handling and workflow</li>
              <li>Lowers labor and operational costs</li>
              <li>Improves resale value for recyclable materials</li>
              <li>Supports safety and compliance standards</li>
            </ul>
          </div>

          {/* Workflow */}
          <div id="workflow" className={styles.section}>
            <h2>Workflow & Space Optimization</h2>
            <p>
              Bales take up significantly less space than loose scrap, enabling better utilization of industrial floors and storage areas. Organized bales prevent clutter and reduce bottlenecks in workflow, allowing staff to focus on core production tasks.
            </p>
            <div className={styles.infoBox}>
              <strong>Tip:</strong> Stack bales carefully to maximize vertical space and maintain safe access paths for equipment and personnel.
            </div>
          </div>

          {/* Cost */}
          <div id="cost" className={styles.section}>
            <h2>Cost & Transport Efficiency</h2>
            <p>
              Compact bales reduce the number of transport trips required, cutting fuel and labor costs. Standardized bale sizes simplify logistics planning, container utilization, and loading/unloading processes, ensuring measurable savings.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety Advantages</h2>
            <p>
              Balers help maintain clean and organized workplaces, reducing slips, trips, and other hazards. Emergency stop features, interlocks, and overload protection ensure operators remain safe while using the machine.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainability & Recycling</h2>
            <p>
              Compressed bales are easier to recycle, reducing landfill waste and supporting sustainable practices. Companies can demonstrate environmental responsibility and align with circular economy goals.
            </p>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className={styles.section}>
            <h2>Maintenance & Reliability</h2>
            <p>
              Industrial balers are designed for minimal maintenance and long-term reliability. Predictive maintenance alerts and durable components ensure smooth operations, reducing unplanned downtime and maximizing machine lifespan.
            </p>
          </div>

          {/* Long-Term */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Impact</h2>
            <ul className={styles.list}>
              <li>Operational cost savings over time</li>
              <li>Enhanced workflow and productivity</li>
              <li>Improved safety and compliance</li>
              <li>Maximized scrap resale value</li>
              <li>Supports sustainability and environmental goals</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Our Solutions</h2>
            <p>
              Our industrial waste management solutions are efficient, reliable, and backed by excellent support. We provide scalable options for facilities of any size, ensuring long-term operational benefits.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg4} alt="Final Thoughts" />
              <span className={styles.caption}>Organized bales ready for transport</span>
            </div>
            <h2>Final Thoughts</h2>
            <p>
              Industrial balers are a key investment for companies seeking efficient waste management, improved productivity, and sustainable operations. By compressing scrap into compact units, facilities achieve safer, cost-effective, and organized workflows.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Enhances workflow efficiency and operational productivity</li>
              <li>Reduces storage and transport costs</li>
              <li>Supports safety and compliance</li>
              <li>Improves scrap resale value</li>
              <li>Promotes sustainability and recycling</li>
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

    </div>
  );
};

export default BalerBlog4;
