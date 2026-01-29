import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How does folding equipment improve material handling?",
    answer: "Folding equipment compacts processed rubber sheets or components into neat stacks, saving storage space and making handling easier for shipping and warehousing."
  },
  {
    question: "Why is folding important in tyre recycling lines?",
    answer: "It ensures organized storage, reduces clutter, and prevents damage to processed materials, improving overall efficiency."
  },
  {
    question: "Does it reduce labor and operational costs?",
    answer: "Yes. By automating stacking and folding, facilities can reduce manual handling and save time and labor costs."
  },
  {
    question: "Who benefits from folding equipment?",
    answer: "Facilities processing rubber sheets, cut strips, or recycled materials benefit from organized storage, safer handling, and faster logistics."
  }
];

const OtherEquipmentBlog4 = () => {
  const sections = [
    { id: "introduction", title: "Introduction: Overview of Folding & Packing Equipment" },
    { id: "how-it-works", title: "How Folding Machines Work: Step by Step" },
    { id: "why-you-need-it", title: "Importance of Folding Equipment in Recycling Lines" },
    { id: "efficiency-impact", title: "Impact on Efficiency and Workflow Optimization" },
    { id: "safety-benefits", title: "Safety and Material Handling Benefits" },
    { id: "cost-savings", title: "Reducing Labor Costs and Storage Expenses" },
    { id: "who-should-use-it", title: "Who Should Use Folding and Packing Machines?" },
    { id: "benefits", title: "Key Benefits for Recycling Facilities" },
    { id: "implementation-tips", title: "Tips for Implementing Folding Equipment Successfully" },
    { id: "faqs", title: "Frequently Asked Questions" }
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
            Packing & Folding Equipment for Organized, Safe, and Efficient Recycling
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Packing Equipment" />
              <span className={styles.caption}>Folding equipment stacking rubber sheets</span>
            </div>
            <p>
              Packing and folding equipment plays a pivotal role in modern recycling operations. These machines help in compacting processed rubber sheets or cut materials into uniform stacks, improving storage, handling, and transportation efficiency. 
              <strong>Recycling facilities that implement proper folding and packing solutions often see higher throughput, less clutter, and more organized warehouses.</strong>
            </p>
            <p>
              SEO Tip: Include long-tail keywords like "efficient tyre recycling packing equipment," "rubber sheet folding machines," and "automated folding systems for recycling" to improve search visibility.
            </p>
          </div>

          {/* How It Works */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Folding Rubber Sheets" />
              <span className={styles.caption}>Neatly folded rubber sheets ready for storage</span>
            </div>
            <h2>How Folding Machines Work: Step by Step</h2>
            <p>
              Folding machines automatically pick up processed sheets or strips and fold them into uniform stacks. Advanced sensors ensure proper alignment and consistent stack height. Some machines also include conveyors that move the folded stacks to pallets or storage areas, minimizing manual handling.
            </p>
            <p>
              This step not only organizes materials but also prevents damage to fragile sheets, ensuring that the quality of recycled rubber or plastics is maintained.
            </p>
          </div>

          {/* Why You Need It */}
          <div id="why-you-need-it" className={styles.section}>
            <h2>Importance of Folding Equipment in Recycling Lines</h2>
            <p>
              Without automated folding, materials can pile up haphazardly, causing storage inefficiencies and slowing down the recycling process. Folding equipment ensures a streamlined workflow, reduced clutter, and safer storage practices.
            </p>
            <p>
              Facilities aiming for ISO compliance or operational excellence benefit from implementing these machines.
            </p>
          </div>

          {/* Efficiency Impact */}
          <div id="efficiency-impact" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg3} alt="Stacked Rubber Sheets" />
              <span className={styles.caption}>Compact stacks improve handling efficiency</span>
            </div>
            <h2>Impact on Efficiency and Workflow Optimization</h2>
            <p>
              Automated folding reduces labor requirements and accelerates logistics operations. By minimizing human intervention, recycling facilities can process larger volumes without adding staff. This improves turnaround time and ensures consistent workflow across all stages.
            </p>
          </div>

          {/* Safety Benefits */}
          <div id="safety-benefits" className={styles.section}>
            <h2>Safety and Material Handling Benefits</h2>
            <p>
              Folding equipment reduces the need for manual lifting and stacking, lowering the risk of workplace injuries. Organized stacks are easier to transport with forklifts or pallet jacks, ensuring safer material handling.
            </p>
          </div>

          {/* Cost Savings */}
          <div id="cost-savings" className={styles.section}>
            <h2>Reducing Labor Costs and Storage Expenses</h2>
            <p>
              By automating repetitive stacking tasks, facilities save on labor costs and reduce storage space requirements. Uniform stacks maximize warehouse capacity, and faster packing leads to higher operational efficiency.
            </p>
          </div>

          {/* Who Should Use It */}
          <div id="who-should-use-it" className={styles.section}>
            <h2>Who Should Use Folding and Packing Machines?</h2>
            <p>
              Warehouses, tyre recycling facilities, rubber sheet processors, and large-scale recycling operations benefit most. Any facility that handles high volumes of processed material can improve workflow, safety, and storage efficiency.
            </p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg4} alt="Folding Equipment Benefits" />
              <span className={styles.caption}>Organized stacks for storage and shipping</span>
            </div>
            <h2>Key Benefits for Recycling Facilities</h2>
            <ul className={styles.list}>
              <li>Compact, uniform stacks saving storage space</li>
              <li>Reduced manual handling and labor costs</li>
              <li>Faster storage, shipping, and logistics</li>
              <li>Cleaner, safer recycling facility</li>
              <li>Improved operational workflow and efficiency</li>
              <li>Reduced material damage and waste</li>
              <li>Supports compliance with safety and quality standards</li>
            </ul>
          </div>

          {/* Implementation Tips */}
          <div id="implementation-tips" className={styles.section}>
            <h2>Tips for Implementing Folding Equipment Successfully</h2>
            <ul className={styles.list}>
              <li>Evaluate facility layout for optimal placement of folding machines.</li>
              <li>Train staff on safe operation and minimal manual intervention.</li>
              <li>Maintain regular inspection and servicing to reduce downtime.</li>
              <li>Integrate folding equipment with conveyors and pallet systems for end-to-end automation.</li>
              <li>Use sensors and smart controls to ensure uniform stack height and alignment.</li>
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

export default OtherEquipmentBlog4;
