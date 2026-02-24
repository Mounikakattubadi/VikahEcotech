import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg2 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg3 from "../../images/Applications/pcb1.webp";
import BlogImg4 from "../../images/Applications/pcb3.webp";
import BlogImg6 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "How do tumble back feeders help recycling lines?",
    answer: "They provide a steady, controlled flow of raw materials, reducing manual handling and preventing jams in the recycling process."
  },
  {
    question: "Can feeding & discharge conveyors prevent bottlenecks?",
    answer: "Yes, these heavy-duty conveyors ensure smooth transport of materials, reducing delays and labor requirements."
  },
  {
    question: "Who should use vibrators in the recycling line?",
    answer: "Facilities handling fine powders, granules, or shredded materials benefit from vibrators to prevent clumping and maintain a consistent flow."
  },
  {
    question: "Do these feeding systems improve overall efficiency?",
    answer: "Absolutely. They streamline material handling, save labor, reduce downtime, and optimize the recycling workflow."
  },
  {
    question: "Are there different types of feeders for specific materials?",
    answer: "Yes. There are vibratory feeders, screw feeders, belt feeders, and gravity-fed systems, each optimized for different materials like plastics, rubber, or metal scraps."
  },
  {
    question: "How to choose the right feeding system?",
    answer: "Consider material type, size, density, flow characteristics, and line speed. Consulting a material handling expert can help select the best solution."
  },
  {
    question: "How often should feeding equipment be maintained?",
    answer: "Regular maintenance should be done weekly for high-use components, and full inspection every 3–6 months depending on usage and material type."
  }
];

const OtherEquipmentBlog1 = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "how-it-works", title: "How It Works" },
    { id: "types-of-equipment", title: "Types of Feeding Equipment" },
    { id: "why-you-need-it", title: "Why You Need It" },
    { id: "does-it-improve-efficiency", title: "Does It Improve Efficiency?" },
    { id: "who-should-use-it", title: "Who Should Use It?" },
    { id: "benefits", title: "What Are the Benefits?" },
    { id: "maintenance-tips", title: "Maintenance Tips" },
    { id: "faqs", title: "FAQs" }
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

          <h1 className="mulch-heading">
            Feeding & Handling Equipment for Smooth Recycling Operations
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Feeding Equipment" />
              <span className={styles.caption}>Tumble back feeder keeping materials flowing</span>
            </div>
            <p>
              Efficient material feeding and handling are the backbone of modern recycling operations. With increasing volumes of industrial waste, including plastics, rubber, metals, and paper, recycling facilities need reliable equipment that ensures continuous flow and operational efficiency. Without proper feeding systems, lines can experience jams, inconsistent throughput, and higher labor costs.
            </p>
            <p>
              Investing in advanced feeding and handling equipment not only increases productivity but also improves safety, reduces manual intervention, and ensures consistent product quality. By automating material flow, recycling plants can process larger volumes faster, which is critical for meeting environmental regulations and business goals.
            </p>
          </div>

          {/* How it Works */}
          <div id="how-it-works" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg2} alt="Feeding Conveyor" />
              <span className={styles.caption}>Feeding conveyors streamline material transport</span>
            </div>
            <h2>How Feeding Equipment Works</h2>
            <p>
              Feeding equipment is designed to control the delivery of raw materials into recycling lines. Tumble back feeders release a measured quantity of materials into processing machines, preventing overloading or underfeeding. Vibratory feeders shake materials gently to prevent clumping, ensuring a uniform flow into downstream equipment.
            </p>
            <p>
              Conveyors, both feeding and discharge types, transport materials between machines efficiently. Automated sensors can detect blockages or uneven flow, adjusting speeds dynamically. This ensures that material processing remains smooth, reducing downtime and maximizing line efficiency.
            </p>
          </div>

          {/* Types of Equipment */}
          <div id="types-of-equipment" className={styles.section}>
            <h2>Types of Feeding Equipment</h2>
            <p>
              Choosing the right feeding equipment depends on the type, size, and density of the material being processed. Here are the most common types:
            </p>
            <ul className={styles.list}>
              <li><strong>Vibratory Feeders:</strong> Ideal for granular or powdery materials, they use vibration to maintain even material distribution.</li>
              <li><strong>Screw Feeders:</strong> Controlled rotating screws move materials at consistent rates, perfect for heavy or viscous materials.</li>
              <li><strong>Belt Feeders:</strong> Conveyor belts transport bulk materials smoothly, often used for metals, plastics, and rubber.</li>
              <li><strong>Gravity Feed Systems:</strong> Simple, low-maintenance systems that rely on gravity to feed materials into processing lines.</li>
              <li><strong>Combination Systems:</strong> Some facilities use hybrid systems to handle multiple material types efficiently.</li>
            </ul>
            <p>
              Selecting the right equipment ensures minimal downtime, consistent flow, and optimized processing, all of which directly impact profitability and recycling efficiency.
            </p>
          </div>

          {/* Why You Need It */}
          <div id="why-you-need-it" className={styles.section}>
            <h2>Why Feeding Equipment is Essential</h2>
            <p>
              Recycling operations without proper feeding and handling equipment face frequent bottlenecks, production delays, and higher operational costs. Feeding systems maintain a consistent flow, protect machinery from overloading, and ensure uniform output quality.
            </p>
            <p>
              By reducing manual labor and human error, these systems also enhance workplace safety and allow staff to focus on higher-value tasks. Continuous operation leads to better throughput, higher revenue, and improved environmental compliance.
            </p>
          </div>

          {/* Does it Improve Efficiency */}
          <div id="does-it-improve-efficiency" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg3} alt="Material Flow Vibrators" />
              <span className={styles.caption}>Vibrators keeping material flow consistent</span>
            </div>
            <h2>Efficiency Improvements Through Automation</h2>
            <p>
              Automated feeding systems dramatically improve recycling efficiency. They reduce downtime caused by manual interventions, prevent blockages, and maintain a consistent flow to processing machines. This results in faster production rates, optimized throughput, and increased profitability.
            </p>
            <p>
              Facilities using modern feeding equipment report up to 30–40% improvement in line efficiency and significant reductions in labor costs. Consistent material flow also reduces wear and tear on machines, extending their lifespan.
            </p>
          </div>

          {/* Who Should Use It */}
          <div id="who-should-use-it" className={styles.section}>
            <h2>Who Benefits Most from Feeding Equipment?</h2>
            <p>
              Recycling facilities, plastics and rubber manufacturers, metal processing units, and paper/cardboard recyclers benefit the most. Any operation that handles bulk materials requiring steady, reliable flow will see measurable improvements in productivity and safety.
            </p>
            <p>
              Even smaller plants can benefit by reducing manual labor, avoiding bottlenecks, and maintaining consistent output quality. Feeding equipment is scalable and adaptable to diverse material types.
            </p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg4} alt="Benefits of Feeding Equipment" />
              <span className={styles.caption}>Improved workflow and operational efficiency</span>
            </div>
            <h2>Key Benefits of Feeding Equipment</h2>
            <ul className={styles.list}>
              <li>Consistent material flow without jams or stoppages</li>
              <li>Reduced manual labor and operational costs</li>
              <li>Higher throughput and productivity</li>
              <li>Improved safety for operators</li>
              <li>Optimized workflow across the recycling line</li>
              <li>Better quality control and uniform output</li>
              <li>Lower energy consumption and reduced waste</li>
              <li>Scalable solutions for growing recycling needs</li>
            </ul>
          </div>

          {/* Maintenance Tips */}
          <div id="maintenance-tips" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg6} alt="Conveyor Maintenance" />
              <span className={styles.caption}>Regular maintenance ensures peak performance</span>
            </div>
            <h2>Maintenance Tips for Longevity</h2>
            <p>
              Regular maintenance is essential for long-term performance:
            </p>
            <ul className={styles.list}>
              <li>Inspect belts, screws, and vibratory components for wear and tear weekly.</li>
              <li>Lubricate moving parts to prevent friction and overheating.</li>
              <li>Calibrate sensors and automation controls for accurate material flow.</li>
              <li>Clean feeding systems regularly to prevent clogs and contamination.</li>
              <li>Schedule professional inspections periodically to detect potential failures early.</li>
            </ul>
            <p>
              Following these steps reduces unexpected downtime, prolongs equipment life, and ensures maximum efficiency.
            </p>
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
                      <a href="/other-equipment">Other Equipment →</a>
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

export default OtherEquipmentBlog1;
