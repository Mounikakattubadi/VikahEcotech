import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg4 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How do secondary shredders boost productivity?",
    answer: "By providing uniform, manageable material, secondary shredders streamline handling, processing, and recycling, allowing faster operations and higher throughput."
  },
  {
    question: "Can secondary shredders reduce operational costs?",
    answer: "Yes, by minimizing manual labor, optimizing storage, and reducing transport trips, they significantly lower operational costs."
  },
  {
    question: "Are secondary shredders reliable for continuous operation?",
    answer: "Absolutely. They are built for durability, high-volume throughput, and minimal downtime, making them ideal for industrial operations."
  },
  {
    question: "Do secondary shredders support safety compliance?",
    answer: "Yes, features like emergency stops, interlocks, and overload protection ensure operator safety and regulatory compliance."
  }
];

const SecondaryShredderBlog4 = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "productivity", title: "Enhanced Productivity" },
    { id: "workflow", title: "Streamlined Workflow" },
    { id: "cost", title: "Operational Cost Reduction" },
    { id: "efficiency", title: "Efficiency & Reliability" },
    { id: "safety", title: "Safety Features" },
    { id: "sustainability", title: "Sustainability Benefits" },
    { id: "maintenance", title: "Maintenance & Longevity" },
    { id: "long-term", title: "Long-Term Advantages" },
    { id: "why-us", title: "Why Choose Our Shredders" },
    { id: "conclusion", title: "Conclusion" },
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

          <h1 className="mulch-heading">
            Boosting Industrial Productivity and Reducing Costs with Secondary Shredders
          </h1>

          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Secondary Shredders Productivity" />
              <span className={styles.caption}>Enhancing industrial productivity efficiently</span>
            </div>
            <p>
              Secondary shredders play a crucial role in industrial operations by improving workflow, reducing costs, and increasing productivity. They ensure materials are shredded into uniform, manageable sizes for easier handling, storage, and processing.
            </p>
          </div>

          <div id="productivity" className={styles.section}>
            <h2>Enhanced Productivity</h2>
            <p>
              By producing consistent material sizes, secondary shredders streamline operations, enabling faster processing and higher throughput. This allows facilities to meet production targets efficiently and reduce downtime.
            </p>
          </div>

          <div id="workflow" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Streamlined Workflow" />
              <span className={styles.caption}>Seamless workflow with uniform shredded materials</span>
            </div>
            <h2>Streamlined Workflow</h2>
            <p>
              Uniform material output reduces bottlenecks and simplifies handling, storage, and further processing. Facilities benefit from smoother material flow and reduced operational delays.
            </p>
          </div>

          <div id="cost" className={styles.section}>
            <h2>Operational Cost Reduction</h2>
            <p>
              Secondary shredders minimize manual labor, optimize storage space, and reduce transportation needs. This leads to significant cost savings in both operations and logistics.
            </p>
          </div>

          <div id="efficiency" className={styles.section}>
            <h2>Efficiency & Reliability</h2>
            <p>
              Designed for continuous operation, these shredders deliver reliable, consistent performance. Facilities experience fewer interruptions, improved productivity, and predictable results.
            </p>
          </div>

          <div id="safety" className={styles.section}>
            <h2>Safety Features</h2>
            <p>
              Equipped with emergency stops, interlocks, and overload protection, secondary shredders ensure operator safety and regulatory compliance, minimizing workplace hazards.
            </p>
          </div>

          <div id="sustainability" className={styles.section}>
            <h2>Sustainability Benefits</h2>
            <p>
              By producing uniform, recyclable material, secondary shredders support sustainability initiatives, reduce landfill dependency, and promote circular economy practices in industrial operations.
            </p>
          </div>

          <div id="maintenance" className={styles.section}>
            <h2>Maintenance & Longevity</h2>
            <p>
              Regular maintenance ensures long-term reliability and peak performance. Secondary shredders are built for durability, providing consistent output over extended periods.
            </p>
          </div>

          <div id="long-term" className={styles.section}>
            <h2>Long-Term Advantages</h2>
            <ul className={styles.list}>
              <li>Higher operational productivity</li>
              <li>Lower labor and logistics costs</li>
              <li>Improved workflow and reduced downtime</li>
              <li>Enhanced safety and compliance</li>
              <li>Supports sustainable practices and recycling goals</li>
            </ul>
          </div>

          <div id="why-us" className={styles.section}>
            <h2>Why Choose Our Shredders</h2>
            <p>
              Our secondary shredders deliver reliability, efficiency, and safety. They are designed to maximize productivity, reduce costs, and help facilities achieve operational excellence while supporting sustainability goals.
            </p>
          </div>

          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg4} alt="Processed Industrial Material" />
              <span className={styles.caption}>Optimized shredded material ready for processing</span>
            </div>
            <h2>Conclusion</h2>
            <p>
              Secondary shredders are essential for industrial productivity, cost efficiency, and workflow optimization. By producing uniform, manageable material, they streamline operations, enhance safety, and support sustainable industrial practices.
            </p>
          </div>

          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Boosts industrial productivity and operational efficiency</li>
              <li>Reduces labor, storage, and transport costs</li>
              <li>Ensures uniform output for smoother workflow</li>
              <li>Supports safety compliance and sustainability initiatives</li>
              <li>Durable and reliable for long-term industrial use</li>
            </ul>
          </div>

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

export default SecondaryShredderBlog4;
