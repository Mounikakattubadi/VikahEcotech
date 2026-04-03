import React, { useState, useEffect } from "react";
import styles from "../Baler/Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";
import BlogImg5 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How do classifiers separate materials efficiently?",
    answer:
      "Classifiers use advanced sieving to sort materials into precise sizes, ensuring uniform output for further processing or resale.",
  },
  {
    question: "Why are overband magnetic steel separators important?",
    answer:
      "They remove ferrous materials like steel wires, improving material purity, reducing machine wear, and enhancing operator safety.",
  },
  {
    question: "Does separation improve recycling quality?",
    answer:
      "Yes. Proper separation ensures that powders, granules, and chips meet quality standards, leading to higher resale value and smoother downstream processing.",
  },
  {
    question: "Who benefits from screening and separation equipment?",
    answer:
      "Facilities processing rubber, plastics, paper, and cardboard gain efficiency, quality control, and safety by using classifiers and magnetic separators.",
  },
  {
    question: "How to choose the right screening equipment?",
    answer:
      "Consider material type, particle size, volume, and line speed. Different classifiers and separators are optimized for powders, granules, or mixed scrap.",
  },
  {
    question: "How often should separation equipment be maintained?",
    answer:
      "Weekly inspections for high-use parts, monthly checks for moving components, and periodic professional servicing ensures longevity and consistent performance.",
  },
];

const benefitsData = [
  {
    icon: "🧲",
    title: "Cleaner Materials",
    text: "Remove steel, contaminants, and oversized particles effectively.",
  },
  {
    icon: "⚙️",
    title: "Machine Protection",
    text: "Reduce wear and tear on shredders, conveyors, and granulators.",
  },
  {
    icon: "📈",
    title: "Higher Efficiency",
    text: "Improve throughput and reduce downtime across recycling lines.",
  },
  {
    icon: "💰",
    title: "Better Resale Value",
    text: "Pure, sorted materials have higher market value.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Material Feeding",
    text: "Mixed material enters the screening and separation line.",
  },
  {
    step: "02",
    title: "Size Classification",
    text: "Classifiers separate powders, granules, and larger particles.",
  },
  {
    step: "03",
    title: "Magnetic Separation",
    text: "Ferrous contaminants are removed from the material flow.",
  },
  {
    step: "04",
    title: "Final Output",
    text: "Clean, sorted material is ready for recycling or resale.",
  },
];

const OtherEquipmentBlog2 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "benefits", title: "Benefits of Separation Equipment" },
    { id: "how-it-works", title: "How It Works" },
    { id: "types-of-equipment", title: "Types of Equipment" },
    { id: "process", title: "Separation Process" },
    { id: "why-you-need-it", title: "Why You Need It" },
    {
      id: "does-it-improve-quality",
      title: "Does It Improve Quality?",
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
                Screening & Separation Equipment
              </span>

              <h1 className={styles.heroTitle}>
                Screening & Separation Equipment for Cleaner, Safer, and
                Efficient Recycling
              </h1>

              <p className={styles.heroDescription}>
                Learn how classifiers and magnetic separators improve material
                purity, reduce contamination, and optimize recycling quality.
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
                alt="Screening Equipment"
                className={styles.heroImage}
              />
            </div>
          </div>

          <section id="benefits" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Benefits</span>
              <h2>Why Screening & Separation Matters</h2>
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
                <img src={BlogImg1} alt="Screening Equipment" />
                <span>
                  Classifiers and magnetic separators ensuring purity
                </span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Introduction</span>
                <h2>Cleaner Recycling Through Better Separation</h2>
                <p>
                  Screening and separation equipment is essential for modern
                  recycling facilities handling plastics, rubber, metals, and
                  paper.
                </p>
                <p>
                  Proper separation improves quality, prevents contamination,
                  and protects downstream machines from damage.
                </p>
              </div>
            </div>
          </section>

          <section id="how-it-works" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg2} alt="Separation Equipment" />
                <span>
                  Advanced sieving and magnetic separation in action
                </span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>How It Works</span>
                <h2>How Separation Equipment Works</h2>
                <p>
                  Classifiers separate materials by size while magnetic
                  separators remove ferrous contaminants from the flow.
                </p>
                <p>
                  This improves material purity, reduces machine wear, and
                  ensures smoother recycling operations.
                </p>
              </div>
            </div>
          </section>

          <section id="types-of-equipment" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Equipment Types</span>
              <h2>Types of Screening & Separation Equipment</h2>
            </div>

            <ul className={styles.list}>
              <li>
                <strong>Vibratory Classifiers:</strong> Ideal for powders and
                granules.
              </li>
              <li>
                <strong>Rotary Screens:</strong> Suitable for bulk materials.
              </li>
              <li>
                <strong>Magnetic Separators:</strong> Remove ferrous metals from
                material flow.
              </li>
              <li>
                <strong>Air Classifiers:</strong> Separate light and heavy
                materials.
              </li>
              <li>
                <strong>Combination Systems:</strong> Integrate multiple
                separation technologies.
              </li>
            </ul>
          </section>

          <section id="process" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Process</span>
              <h2>Separation Process</h2>
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
            id="does-it-improve-quality"
            className={styles.sectionCard}
          >
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img src={BlogImg3} alt="High-Quality Separated Material" />
                <span>
                  Consistent output improves recycling efficiency
                </span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Quality</span>
                <h2>Does It Improve Quality?</h2>
                <p>
                  Proper separation ensures that powders, granules, and chips
                  meet quality standards.
                </p>
                <p>
                  This improves resale value, reduces contamination, and
                  ensures smooth downstream processing.
                </p>
              </div>
            </div>
          </section>

          <section id="maintenance-tips" className={styles.sectionCard}>
            <div className={styles.contentGrid}>
              <div className={styles.imageCard}>
                <img
                  src={BlogImg5}
                  alt="Maintenance of Separation Equipment"
                />
                <span>
                  Regular maintenance ensures longevity and performance
                </span>
              </div>

              <div className={styles.textCard}>
                <span className={styles.sectionTag}>Maintenance</span>
                <h2>Maintenance Tips</h2>
                <p>
                  Inspect screens, separators, and moving parts weekly to
                  prevent failures and downtime.
                </p>
                <p>
                  Regular cleaning, lubrication, and calibration improve
                  reliability and long-term performance.
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

export default OtherEquipmentBlog2;