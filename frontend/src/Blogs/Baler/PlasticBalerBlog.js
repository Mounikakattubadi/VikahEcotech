import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Helmet } from "react-helmet";
import PlasticBaler1 from "../../images/Applications/plasticbaler1.jpg";
import PlasticBaler2 from "../../images/Applications/plasticbaler2.jpg";
import PCB1 from "../../images/Applications/pcb1.webp";
import PCB3 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Which plastics can be baled using hydraulic balers?",
    answer:
      "PET bottles, HDPE, LDPE, PP plastic, packaging films, plastic wrappers, and industrial plastic waste.",
  },
  {
    question: "Is baling necessary before recycling?",
    answer:
      "Yes, baling reduces volume, improves storage efficiency, cuts transport costs, and increases recycling speed.",
  },
  {
    question: "Are hydraulic balers safe to operate?",
    answer:
      "Modern balers include emergency stops, interlocks, sensors, and overload protection for maximum operator safety.",
  },
  {
    question: "Can small industries also use plastic balers?",
    answer:
      "Absolutely, hydraulic balers are available in compact, medium, and large capacities for all-scale industries.",
  },
];

const PlasticBalerBlog = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "challenge", title: "Challenges in Plastic Waste Handling" },
    { id: "types", title: "Types of Plastic Waste" },
    { id: "how", title: "How Hydraulic Plastic Balers Work" },
    { id: "benefits", title: "Benefits of Using Plastic Balers" },
    { id: "cost", title: "Cost & Transport Savings" },
    { id: "value", title: "Boosting Scrap Value" },
    { id: "safety", title: "Safety & Compliance" },
    { id: "sustainability", title: "Supporting Sustainability" },
    { id: "operation", title: "Ease of Operation" },
    { id: "long-term", title: "Long-Term Advantages" },
    { id: "why-us", title: "Why Choose Vikah Ecotech" },
    { id: "conclusion", title: "Conclusion" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faqs", title: "FAQs" },
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

      {/* SEO Helmet */}
      <Helmet>
        <title>
          Hydraulic Baling Solutions for Plastic Recycling | Plastic Waste Management India
        </title>

        <meta
          name="description"
          content="Discover how hydraulic baling machines provide efficient plastic recycling solutions in India. Learn about benefits, cost savings, sustainability and industrial applications."
        />

        <meta
          name="keywords"
          content="plastic baling machine, hydraulic baler for plastic, plastic recycling equipment, industrial balers India, PET bottle baler"
        />

        <link
          rel="canonical"
          href="https://vikahecotech.com/plastic-baler-info"
        />

        <meta
          property="og:title"
          content="Hydraulic Baling Solution for Plastic Recycling | Vikah Ecotech"
        />
        <meta
          property="og:description"
          content="Learn how hydraulic balers compress PET, HDPE, LDPE, and industrial plastic waste for efficient recycling and cost reduction."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://vikahecotech.com/plastic-baler-info"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hydraulic Baling Solution for Plastic Recycling",
            description:
              "A detailed guide on hydraulic balers used for plastic waste recycling, cost optimization, and industrial waste management.",
            author: { "@type": "Organization", name: "Vikah Ecotech" },
            publisher: { "@type": "Organization", name: "Vikah Ecotech" },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://vikahecotech.com/plastic-baler-info",
            },
          })}
        </script>
      </Helmet>

      {/* ---> LEFT NAVIGATION */}
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

      {/* MAIN CONTENT */}
      <div className={styles.blogWrapper}>
        <div className={styles.blogInner}>
          <h1 className="mulch-heading">
            Hydraulic Baling Solutions for Plastic Recycling in India
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={PlasticBaler1} alt="Plastic Baling Machine" />
              <span className={styles.caption}>Hydraulic baler compressing PET plastic</span>
            </div>
            <p>
              Plastic waste in India has grown rapidly due to high consumption of
              packaging materials, PET bottles, and industrial plastic products.
              Managing this waste efficiently requires a reliable and sustainable solution.
            </p>
            <p>
              Hydraulic baling machines play a crucial role in plastic recycling by compressing
              loose plastic into compact, dense bales. These standardized bales reduce storage
              issues, lower transport costs, and improve the efficiency of recycling units.
            </p>
            <p>
              Industries using hydraulic balers experience up to 70% reduction in plastic waste
              volume, making waste management faster, safer, and more profitable.
            </p>
          </div>

          {/* Challenges */}
          <div id="challenge" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={PCB1} alt="Plastic Waste Challenges" />
              <span className={styles.caption}>Unmanaged plastic waste causing clutter</span>
            </div>

            <h2>Challenges in Plastic Waste Handling</h2>
            <p>
              Loose plastic waste creates several operational and safety challenges in industrial
              facilities. Common issues include:
            </p>
            <ul className={styles.list}>
              <li>Large storage space requirements</li>
              <li>Fire hazards due to lightweight plastic</li>
              <li>Difficulty in manual handling</li>
              <li>Higher transport costs due to low density</li>
              <li>Slow recycling operations caused by irregular waste sizes</li>
            </ul>
            <p>
              Hydraulic balers eliminate these challenges by standardizing the size and density of
              plastic scrap, creating a more streamlined workflow.
            </p>
          </div>

          {/* Types of Plastic */}
          <div id="types" className={styles.section}>
            <h2>Types of Plastic Waste Ideal for Baling</h2>
            <ul className={styles.list}>
              <li>PET bottles</li>
              <li>HDPE & LDPE sheets</li>
              <li>PP and PE scrap</li>
              <li>Plastic packaging films</li>
              <li>Plastic wrappers and industrial offcuts</li>
            </ul>
            <p>
              Baling these materials increases their recyclability and enhances resale value.
              Recyclers prefer baled plastic because it is easier to transport, handle, and process.
            </p>
          </div>

          {/* How Balers Work */}
          <div id="how" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={PlasticBaler2} alt="How Plastic Balers Work" />
              <span className={styles.caption}>High-pressure baling process</span>
            </div>

            <h2>How Hydraulic Plastic Balers Work</h2>
            <p>
              Hydraulic plastic balers use high-pressure compression to reduce the volume of
              plastic waste. The process involves:
            </p>
            <ul className={styles.list}>
              <li>Feeding loose plastic into the baler chamber</li>
              <li>Applying hydraulic pressure to compress the waste</li>
              <li>Binding the bale using wires or straps</li>
              <li>Automatically ejecting the bale for storage or transport</li>
            </ul>
            <p>
              Modern balers include sensors and PLC controls for consistent bale size and density.
            </p>
          </div>

          {/* Benefits */}
          <div id="benefits" className={styles.section}>
            <h2>Benefits of Using Plastic Balers</h2>
            <ul className={styles.list}>
              <li>Reduces waste volume by up to 70%</li>
              <li>Frees valuable storage space</li>
              <li>Improves recycling speed and workflow</li>
              <li>Reduces manual labour and handling time</li>
              <li>Enhances workplace safety and cleanliness</li>
            </ul>
          </div>

          {/* Cost Savings */}
          <div id="cost" className={styles.section}>
            <h2>Cost & Transport Savings</h2>
            <p>
              Compact bales significantly lower transport frequency,
              resulting in up to **30–40% yearly logistics savings**.
            </p>
            <p>
              Standardized bale sizes also help in predictable freight costing and
              improve container space utilization.
            </p>
          </div>

          {/* Scrap Value */}
          <div id="value" className={styles.section}>
            <h2>Boosting Scrap Value</h2>
            <p>
              Clean, uniform bales attract better pricing from recycling buyers.
              Industries can increase scrap revenue by **15–25%** using hydraulic balers.
            </p>
            <div className={styles.quoteBox}>
              “Baled plastic scrap sells faster and at higher prices than loose plastic.”
            </div>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety & Compliance</h2>
            <p>
              Hydraulic balers improve safety by preventing loose plastic accumulation
              and reducing fire risks.
            </p>
            <ul className={styles.list}>
              <li>Emergency stop features</li>
              <li>Door interlocks</li>
              <li>Hydraulic overload protection</li>
              <li>Automated compression sensors</li>
            </ul>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Supporting Sustainability Goals</h2>
            <p>
              Baling promotes recycling, reduces landfill usage, and supports
              **CSR and ESG compliance**.
            </p>
            <p>
              Industries using balers contribute significantly to a cleaner,
              circular economy by enabling better plastic recovery.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <h2>Ease of Operation</h2>
            <p>
              Hydraulic balers are simple to use, require minimal training, and
              offer consistent performance.
            </p>
            <p>
              Features like auto-cycle mode and remote monitoring improve productivity.
            </p>
          </div>

          {/* Long Term */}
          <div id="long-term" className={styles.section}>
            <h2>Long-Term Advantages</h2>
            <ul className={styles.list}>
              <li>Lower operational costs</li>
              <li>Higher scrap output and resale value</li>
              <li>Better warehouse organization</li>
              <li>Long-lasting hydraulic systems</li>
            </ul>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Vikah Ecotech</h2>
            <p>
              Vikah Ecotech provides durable, efficient, and user-friendly hydraulic
              plastic balers customized to industry requirements.
            </p>
            <p>
              Our machines ensure maximum ROI, long-term performance, and strong service support.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={PCB3} alt="Plastic Bale" />
              <span className={styles.caption}>Plastic bales ready for recycling</span>
            </div>
            <h2>Conclusion</h2>
            <p>
              Hydraulic baling machines are essential for efficient plastic recycling.
              They reduce waste, optimize storage, cut transport costs, and support sustainability.
            </p>
            <p>
              Investing in a reliable baler ensures long-term operational savings and
              improved recycling performance.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Reduces plastic waste volume drastically</li>
              <li>Improves recycling workflow</li>
              <li>Increases scrap resale value</li>
              <li>Enhances workplace safety</li>
              <li>Supports CSR & sustainability goals</li>
              <li>Reduces transport and storage costs</li>
            </ul>
          </div>

          {/* FAQs */}
          <div id="faqs" className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    openFAQ === index ? styles.activeFAQ : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={styles.faqQuestion}>
                    {faq.question}
                    <span className={styles.faqIcon}>
                      {openFAQ === index ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === index && (
                    <div className={styles.faqAnswer}>{faq.answer}</div>
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

export default PlasticBalerBlog;
