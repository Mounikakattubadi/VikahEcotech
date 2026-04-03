import React, { useState, useEffect } from "react";
import styles from "../Baler/Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";
import BlogImg6 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How do tumble back feeders help recycling lines?",
    answer:
      "They provide a steady, controlled flow of raw materials, reducing manual handling and preventing jams in the recycling process.",
  },
  {
    question: "Can feeding & discharge conveyors prevent bottlenecks?",
    answer:
      "Yes, these heavy-duty conveyors ensure smooth transport of materials, reducing delays and labor requirements.",
  },
  {
    question: "Who should use vibrators in the recycling line?",
    answer:
      "Facilities handling fine powders, granules, or shredded materials benefit from vibrators to prevent clumping and maintain a consistent flow.",
  },
  {
    question: "Do these feeding systems improve overall efficiency?",
    answer:
      "Absolutely. They streamline material handling, save labor, reduce downtime, and optimize the recycling workflow.",
  },
  {
    question: "Are there different types of feeders for specific materials?",
    answer:
      "Yes. There are vibratory feeders, screw feeders, belt feeders, and gravity-fed systems, each optimized for different materials like plastics, rubber, or metal scraps.",
  },
  {
    question: "How to choose the right feeding system?",
    answer:
      "Consider material type, size, density, flow characteristics, and line speed. Consulting a material handling expert can help select the best solution.",
  },
  {
    question: "How often should feeding equipment be maintained?",
    answer:
      "Regular maintenance should be done weekly for high-use components, and full inspection every 3–6 months depending on usage and material type.",
  },
];

const benefitsData = [
  {
    icon: "⚙️",
    title: "Smooth Material Flow",
    text: "Prevents bottlenecks and ensures steady feeding into machines.",
  },
  {
    icon: "📈",
    title: "Higher Productivity",
    text: "Improves throughput and increases line efficiency.",
  },
  {
    icon: "💰",
    title: "Lower Costs",
    text: "Reduces labor, downtime, and operational expenses.",
  },
  {
    icon: "🛡️",
    title: "Safer Operations",
    text: "Minimizes manual handling and reduces workplace risks.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Material Loading",
    text: "Raw materials are loaded into feeders or conveyors.",
  },
  {
    step: "02",
    title: "Controlled Feeding",
    text: "Equipment regulates flow to avoid overloading or jams.",
  },
  {
    step: "03",
    title: "Smooth Transport",
    text: "Conveyors transfer material between machines efficiently.",
  },
  {
    step: "04",
    title: "Continuous Processing",
    text: "Materials move through the recycling line without interruption.",
  },
];

const OtherEquipmentBlog1 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Benefits of Feeding Equipment" },
    { id: "how-it-works", title: "How It Works" },
    { id: "types-of-equipment", title: "Types of Feeding Equipment" },
    { id: "process", title: "Feeding Process" },
    { id: "why-you-need-it", title: "Why You Need It" },
    {
      id: "does-it-improve-efficiency",
      title: "Does It Improve Efficiency?",
    },
    { id: "who-should-use-it", title: "Who Should Use It?" },
    { id: "maintenance-tips", title: "Maintenance Tips" },
    { id: "faqs", title: "FAQs" },
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
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                Feeding & Handling Equipment
              </span>

              <h1 className={styles.heroTitle}>
                Feeding & Handling Equipment for Smooth Recycling Operations
              </h1>

              <p className={styles.heroDescription}>
                Discover how tumble back feeders, conveyors, and vibrators
                improve recycling efficiency, reduce downtime, and optimize
                material flow.
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
                src={BlogImg1}
                alt="Feeding Equipment"
                className={styles.heroImage}
              />
            </div>
          </div>

          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Benefits</span>
              <h2>Why Feeding Equipment Matters</h2>
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

          <section id="introduction" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg1} alt="Feeding Equipment" />
                <span>
                  Tumble back feeder keeping materials flowing efficiently
                </span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Introduction</span>
                <h2>Smooth Material Flow for Recycling Plants</h2>
                <p>
                  Efficient material feeding and handling are essential for
                  modern recycling operations.
                </p>
                <p>
                  Proper feeding systems reduce bottlenecks, prevent jams, and
                  improve overall productivity across recycling lines.
                </p>
              </div>
            </div>
          </section>

          <section id="how-it-works" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg2} alt="Feeding Conveyor" />
                <span>
                  Feeding conveyors streamline material transport
                </span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>How It Works</span>
                <h2>How Feeding Equipment Works</h2>
                <p>
                  Feeding equipment controls the delivery of raw materials into
                  recycling lines.
                </p>
                <p>
                  Tumble back feeders, vibrators, and conveyors ensure smooth,
                  steady flow while reducing overloading and downtime.
                </p>
              </div>
            </div>
          </section>

          <section id="types-of-equipment" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Equipment Types</span>
              <h2>Types of Feeding Equipment</h2>
            </div>

            <ul className={styles.list}>
              <li>
                <strong>Vibratory Feeders:</strong> Best for powders and
                granular materials.
              </li>
              <li>
                <strong>Screw Feeders:</strong> Ideal for heavy or viscous
                materials.
              </li>
              <li>
                <strong>Belt Feeders:</strong> Used for plastics, metals, and
                rubber.
              </li>
              <li>
                <strong>Gravity Feed Systems:</strong> Simple low-maintenance
                systems.
              </li>
              <li>
                <strong>Combination Systems:</strong> Handle multiple material
                types efficiently.
              </li>
            </ul>
          </section>

          <section id="process" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Process</span>
              <h2>Feeding Process</h2>
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

          <section
            id="does-it-improve-efficiency"
            className={styles.sectionCard}
          >
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg3} alt="Material Flow Vibrators" />
                <span>Vibrators keeping material flow consistent</span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Efficiency</span>
                <h2>Efficiency Improvements Through Automation</h2>
                <p>
                  Automated feeding systems reduce downtime, prevent
                  blockages, and maintain steady material flow.
                </p>
                <p>
                  This leads to higher throughput, better machine life, and
                  lower operational costs.
                </p>
              </div>
            </div>
          </section>

          <section id="maintenance-tips" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg6} alt="Conveyor Maintenance" />
                <span>
                  Regular maintenance ensures peak performance
                </span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Maintenance</span>
                <h2>Maintenance Tips for Longevity</h2>
                <p>
                  Inspect belts, screws, and vibratory components regularly for
                  wear and tear.
                </p>
                <p>
                  Routine cleaning, lubrication, and sensor calibration help
                  extend equipment life and reduce downtime.
                </p>
              </div>
            </div>
          </section>

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

      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/other-equipment">Other Equipment →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/ourproducts">All Products →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/contact">Contact Us →</a>
        </div>

        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/enquire">Enquire Us →</a>
        </div>
      </aside>
    </div>
  );
};

export default OtherEquipmentBlog1;