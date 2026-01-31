import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";
import BlogImg5 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How do bead wire removers improve tyre pre-processing?",
    answer: "They efficiently extract steel bead wires before shredding, reducing machine stress and recovering valuable steel."
  },
  {
    question: "Why use strip cutters in recycling lines?",
    answer: "Strip cutters slice tyres into manageable strips, preventing blockages and improving downstream shredding throughput."
  },
  {
    question: "Does block cutting help recycling efficiency?",
    answer: "Yes. By cutting rubber strips into smaller blocks, block cutters ensure consistent feed size and smoother processing."
  },
  {
    question: "Who should use side wall removers?",
    answer: "Any facility processing car or truck tyres benefits. Side wall removers simplify cutting and prepare cleaner material for shredding."
  },
  {
    question: "How to choose the right tyre cutting equipment?",
    answer: "Consider tyre types (car, truck, industrial), desired output size, machine capacity, and maintenance requirements."
  },
  {
    question: "How often should cutting machines be serviced?",
    answer: "Regular inspection and maintenance, ideally weekly for high-use parts and monthly for thorough cleaning, ensures longevity and reduces downtime."
  }
];

const OtherEquipmentBlog3 = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction: Importance of Tyre Pre-Processing" },
    { id: "how-it-works", title: "How Tyre Cutting & Preparation Equipment Works" },
    { id: "types-of-machines", title: "Types of Tyre Cutting & Preparation Machines" },
    { id: "why-you-need-it", title: "Why You Need Tyre Cutting & Preparation Equipment" },
    { id: "efficiency-improvement", title: "How Equipment Improves Recycling Efficiency" },
    { id: "who-should-use-it", title: "Who Should Use Tyre Preparation Equipment?" },
    { id: "key-benefits", title: "Key Benefits of Pre-Processing Equipment" },
    { id: "maintenance-tips", title: "Maintenance Tips for Tyre Cutting Machines" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY + 200;
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

      {/* LEFT TOC */}
      <nav className={styles.toc}>
        <h3>Explore This Blog</h3>
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
            Cutting & Preparation Equipment for Efficient Tyre Recycling
          </h1>

          {/* INTRODUCTION */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Cutting Equipment" />
              <span className={styles.caption}>Bead wire removers and cutters in action</span>
            </div>
            <p>
              Tyre recycling is a multi-step process, and pre-processing is critical for efficiency. Cutting and preparation equipment removes steel beads, slices tyres into strips, cuts blocks, and prepares material for shredding. Without this step, shredders face jams, uneven feed, and increased wear.
            </p>
            <p>
              Investing in proper tyre cutting machines not only protects expensive shredders but also recovers valuable steel and ensures consistent material size. A smooth pre-processing workflow directly contributes to higher throughput, safer operations, and improved material quality.
            </p>
          </div>

          {/* HOW IT WORKS */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Strip Cutter Equipment" />
              <span className={styles.caption}>Strip cutters prepare tyres for shredding</span>
            </div>
            <h2>How Tyre Cutting & Preparation Equipment Works</h2>
            <p>
              Bead wire removers first extract steel wires from the tyre, which reduces machine wear and allows for steel recovery. Strip cutters then slice tyres into long strips, and block cutters divide these strips into smaller, manageable sizes. Side wall removers eliminate unwanted rubber walls, preparing clean material for shredding.
            </p>
            <p>
              Advanced equipment may include automated feeding, sensors to detect blockage, and adjustable cutting speeds. This ensures consistent output, minimizes human error, and improves overall line efficiency.
            </p>
          </div>

          {/* TYPES OF MACHINES */}
          <div id="types-of-machines" className={styles.section}>
            <h2>Types of Tyre Cutting & Preparation Machines</h2>
            <ul className={styles.list}>
              <li><strong>Bead Wire Removers:</strong> Extract steel beads safely and efficiently.</li>
              <li><strong>Strip Cutters:</strong> Slice tyres into uniform strips for easier shredding.</li>
              <li><strong>Block Cutters:</strong> Reduce strips into smaller blocks for consistent feed.</li>
              <li><strong>Side Wall Removers:</strong> Remove sidewalls to produce cleaner rubber for shredders.</li>
              <li><strong>Combination Pre-Processing Lines:</strong> Fully automated systems combining all the above functions to maximize efficiency.</li>
            </ul>
          </div>

          {/* WHY YOU NEED IT */}
          <div id="why-you-need-it" className={styles.section}>
            <h2>Why You Need Tyre Cutting & Preparation Equipment</h2>
            <p>
              Shredders without proper pre-processing face frequent jams, uneven feed, and faster wear. Pre-processing machines eliminate these problems by standardizing tyre size, removing steel, and cleaning the material. This reduces downtime, extends shredder lifespan, and allows operators to focus on higher-value tasks.
            </p>
          </div>

          {/* EFFICIENCY IMPROVEMENT */}
          <div id="efficiency-improvement" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg3} alt="Block Cutting Equipment" />
              <span className={styles.caption}>Block cutters for uniform feed sizes</span>
            </div>
            <h2>How Equipment Improves Recycling Efficiency</h2>
            <p>
              Standardizing tyre pieces ensures shredders work at maximum efficiency with minimal interruptions. Removing obstacles like steel beads and sidewalls reduces machine wear and improves safety. Facilities can process more tyres in less time while maintaining consistent quality.
            </p>
            <p>
              Pre-processing also optimizes downstream processes, including grinding, granulation, and separation, improving overall plant productivity and cost-effectiveness.
            </p>
          </div>

          {/* WHO SHOULD USE IT */}
          <div id="who-should-use-it" className={styles.section}>
            <h2>Who Should Use Tyre Preparation Equipment?</h2>
            <p>
              Any facility processing passenger, truck, or industrial tyres will benefit. Recycling plants, tyre shredding units, and large-scale rubber processing operations can improve throughput, protect machines, and recover steel using cutting and preparation equipment.
            </p>
          </div>

          {/* BENEFITS */}
          <div id="key-benefits" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg4} alt="Side Wall Remover Equipment" />
              <span className={styles.caption}>Clean and safe pre-processed material</span>
            </div>
            <h2>Key Benefits of Pre-Processing Equipment</h2>
            <ul className={styles.list}>
              <li>Reduced machine wear and downtime</li>
              <li>Consistent feed size for shredders</li>
              <li>Recovery of valuable steel from tyres</li>
              <li>Cleaner and safer material for operators</li>
              <li>Increased throughput and operational efficiency</li>
              <li>Minimized labour costs and human error</li>
              <li>Optimized shredding and recycling workflow</li>
            </ul>
          </div>

          {/* MAINTENANCE */}
          <div id="maintenance-tips" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg5} alt="Maintenance of Cutting Equipment" />
              <span className={styles.caption}>Proper maintenance extends equipment life</span>
            </div>
            <h2>Maintenance Tips for Tyre Cutting Machines</h2>
            <ul className={styles.list}>
              <li>Inspect moving parts weekly and clean thoroughly.</li>
              <li>Lubricate bearings, motors, and cutting mechanisms regularly.</li>
              <li>Check sensor calibration and feeding alignment monthly.</li>
              <li>Replace worn blades and cutting edges on schedule.</li>
              <li>Schedule professional servicing for optimal longevity.</li>
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
                            <a href="/othereqptemp">Other Equipment →</a>
                          </div>
                  
                          <div className={`${styles.relatedCard} ${styles.floatCard}`}>
                            <a href="//ourproducts">All Products →</a>
                          </div>
                  
                          <div className={`${styles.relatedCard} ${styles.floatCard}`}>
                            <a href="/Contact">Contact Us →</a>
                          </div>
                  
                          <div className={`${styles.relatedCard} ${styles.floatCard}`}>
                            <a href="/enquire">Enquire Us →</a>
                          </div>
                  
                        </aside>
    </div>
  );
};

export default OtherEquipmentBlog3;
