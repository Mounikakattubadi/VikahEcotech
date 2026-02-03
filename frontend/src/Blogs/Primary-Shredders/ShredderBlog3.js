import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/tyreshred2.jpg";
import BlogImg3 from "../../images/Applications/tyreshred1.jpg";
import BlogImg4 from "../../images/Applications/shredtyre6.jpg";
import { Helmet } from "react-helmet";

const faqsData = [
  {
    question: "Can Tyre Primary Shredders improve recycling efficiency?",
    answer:
      "Yes, Tyre Primary Shredders reduce whole tyres into uniform pieces, enabling easier separation of rubber, steel, and fabric components. This improves downstream recycling efficiency and reduces processing time.",
  },
  {
    question: "Do Tyre Shredders support sustainable waste management?",
    answer:
      "Absolutely. By processing end-of-life tyres, these shredders reduce landfill disposal, enable recycling into rubber mats, fuel, or granules, and help industries comply with environmental regulations.",
  },
  {
    question: "What types of tyres can be shredded?",
    answer:
      "Tyre Primary Shredders can process passenger car tyres, truck tyres, off-road and industrial tyres, and sometimes even oversized or agricultural tyres, depending on the shredder model.",
  },
  {
    question: "Are Tyre Shredders cost-effective for recycling facilities?",
    answer:
      "Yes, they reduce manual labor, storage requirements, and transport costs. Processed tyre chips have resale value for fuel, rubber mats, playground surfaces, and other applications.",
  },
  {
    question: "Which industries benefit most from Tyre Primary Shredders?",
    answer:
      "Recycling centers, rubber product manufacturers, energy recovery facilities, and automotive waste management industries gain the most efficiency, cost reduction, and sustainability benefits.",
  },
  {
    question: "How does automation improve tyre shredding productivity?",
    answer:
      "Automation enables continuous feeding, prevents jams, integrates with conveyors or magnetic separators, and allows predictive maintenance, reducing downtime and human error.",
  },
  {
    question: "How long do Tyre Primary Shredders last?",
    answer:
      "With proper maintenance, high-quality Tyre Shredders can last over 10 years. Regular servicing of blades, motors, and hydraulic systems ensures consistent and reliable operation.",
  },
];

const ShredderBlog3 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    {
      id: "introduction",
      title:
        "Introduction: Tyre Primary Shredders & Sustainable Waste Management",
    },
    {
      id: "role",
      title: "The Role of Tyre Primary Shredders in Efficient Tyre Recycling",
    },
    {
      id: "operation",
      title: "How Tyre Primary Shredders Operate: Mechanisms & Process",
    },
    {
      id: "types",
      title: "Types of Tyre Primary Shredders and Their Applications",
    },
    { id: "recycling", title: "Boosting Tyre Recycling Efficiency" },
    {
      id: "workflow",
      title: "Optimizing Workflow & Storage with Tyre Shredders",
    },
    { id: "space", title: "Space Utilization and Storage Advantages" },
    { id: "cost", title: "Cost Reduction & Operational Savings" },
    { id: "safety", title: "Safety Considerations and Workplace Compliance" },
    { id: "sustainability", title: "Sustainability and Environmental Impact" },
    {
      id: "maintenance",
      title: "Maintenance, Reliability & Longevity of Tyre Shredders",
    },
    { id: "automation", title: "Automation and Smart Shredder Integration" },
    { id: "troubleshooting", title: "Common Issues & Troubleshooting Tips" },
    { id: "roi", title: "Return on Investment & Long-Term Benefits" },
    { id: "future", title: "Future Trends in Tyre Shredding Technology" },
    { id: "why-us", title: "Why Choose Our Tyre Primary Shredders" },
    {
      id: "conclusion",
      title: "Conclusion: Investing in Tyre Shredders for Maximum Efficiency",
    },
    { id: "key-takeaways", title: "Key Takeaways for Tyre Primary Shredders" },
    {
      id: "faqs",
      title: "Frequently Asked Questions About Tyre Primary Shredders",
    },
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
      <Helmet>
        {/* Page Title */}
        <title>
          Tyre Primary Shredders | Efficient Recycling & Waste Management |
          Vikah Ecotech
        </title>

        {/* Meta Tags */}
        <meta
          name="description"
          content="Learn about Tyre Primary Shredders by Vikahecotech: their types, benefits, and how they improve tyre recycling efficiency, reduce costs, and support sustainable waste management."
        />
        <meta
          name="keywords"
          content="Tyre Primary Shredders, tyre recycling, industrial shredders, sustainable waste management, tyre recycling machines, Vikahecotech"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://vikahecotech.com/primary-shredders-for-tyres"
        />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Tyre Primary Shredders | Efficient Recycling & Waste Management | Vikahecotech"
        />
        <meta
          property="og:description"
          content="Discover how Tyre Primary Shredders by Vikahecotech enhance tyre recycling efficiency, reduce costs, and support sustainable waste management."
        />
        <meta property="og:image" content="https://vikahecotech.com/logo_vk" />
        <meta
          property="og:url"
          content="https://vikahecotech.com/primary-shredders-for-tyres"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vikahecotech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tyre Primary Shredders | Efficient Recycling & Waste Management | Vikahecotech"
        />
        <meta
          name="twitter:description"
          content="Learn about Tyre Primary Shredders by Vikahecotech: improve recycling efficiency, reduce costs, and support sustainable tyre waste management."
        />
        <meta name="twitter:image" content="https://vikahecotech.com/logo_vk" />
        <meta name="twitter:site" content="@vikahecotech" />

        {/* Structured Data: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Tyre Primary Shredders | Efficient Recycling & Waste Management",
      "description": "Learn about Tyre Primary Shredders by Vikahecotech: their types, benefits, and how they improve tyre recycling efficiency, reduce costs, and support sustainable waste management.",
      "url": "https://vikahecotech.com/primary-shredders-for-tyres",
      "publisher": {
        "@type": "Organization",
        "name": "Vikahecotech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vikahecotech.com/logo_vk"
        }
      }
    }
    `}
        </script>

        {/* Structured Data: FAQPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can Tyre Primary Shredders improve recycling efficiency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Tyre Primary Shredders reduce whole tyres into uniform pieces, enabling easier separation of rubber, steel, and fabric components. This improves downstream recycling efficiency and reduces processing time."
          }
        },
        {
          "@type": "Question",
          "name": "Do Tyre Shredders support sustainable waste management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. By processing end-of-life tyres, these shredders reduce landfill disposal, enable recycling into rubber mats, fuel, or granules, and help industries comply with environmental regulations."
          }
        }
        // Add the rest of your FAQs here
      ]
    }
    `}
        </script>
      </Helmet>

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
            Tyre Primary Shredders: Efficient Recycling & Waste Management
            Solutions
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Tyre Primary Shredders in Action" />
              <span className={styles.caption}>
                Processing end-of-life tyres efficiently
              </span>
            </div>
            <p>
              Tyre Primary Shredders are critical for sustainable tyre
              recycling. They reduce whole tyres into manageable chips or
              strips, making storage, transport, and recycling more efficient.
            </p>
            <p>
              Efficient shredding reduces manual labor, enhances facility
              throughput, and ensures proper material recovery, supporting
              environmental and regulatory compliance.
            </p>
          </div>

          {/* Role */}
          <div id="role" className={styles.section}>
            <h2>The Role of Tyre Primary Shredders in Recycling</h2>
            <p>
              Tyre Shredders convert bulky end-of-life tyres into uniform pieces
              suitable for separation into rubber, steel, and fiber components.
              This process enables easier recycling, energy recovery, and
              material reuse.
            </p>
            <p>
              By improving workflow and reducing bottlenecks, tyre shredders
              increase facility efficiency while lowering costs and supporting
              eco-friendly waste management.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg3} alt="Tyre Shredder Operation" />
              <span className={styles.caption}>
                Shredding tyres for recycling applications
              </span>
            </div>
            <h2>How Tyre Primary Shredders Operate</h2>
            <p>
              Tyre Shredders use rotating blades or dual-shaft cutters to break
              tyres into chips. High-torque motors ensure efficient shredding,
              even for truck or industrial tyres.
            </p>
            <p>
              Adjustable cutting settings allow customization of chip size to
              match recycling, energy recovery, or resale requirements.
            </p>
          </div>

          {/* Types */}
          <div id="types" className={styles.section}>
            <h2>Types of Tyre Primary Shredders & Their Applications</h2>
            <ul className={styles.list}>
              <li>
                <strong>Single-Shaft Tyre Shredders:</strong> Ideal for medium
                tyres and steady throughput in smaller facilities.
              </li>
              <li>
                <strong>Dual-Shaft Tyre Shredders:</strong> Handle truck,
                industrial, and oversized tyres efficiently.
              </li>
              <li>
                <strong>Granulators:</strong> Produce smaller rubber granules
                for mats, playground surfaces, or fuel pellets.
              </li>
              <li>
                <strong>High-Speed Rotary Shredders:</strong> Efficient for
                lightweight tyres or secondary shredding stages.
              </li>
              <li>
                <strong>Hammermills:</strong> Reduce shredded tyre chips further
                for energy recovery or fine rubber granules.
              </li>
            </ul>
          </div>

          {/* Recycling */}
          <div id="recycling" className={styles.section}>
            <h2>Boosting Tyre Recycling Efficiency</h2>
            <p>
              Shredded tyres allow efficient separation of steel, fiber, and
              rubber. Recycled rubber can be used in construction, playground
              surfaces, mats, and as fuel in cement kilns.
            </p>
            <p>
              Facilities benefit from reduced landfill dependency, compliance
              with environmental standards, and the creation of valuable
              recycled products.
            </p>
          </div>

          {/* Workflow */}
          <div id="workflow" className={styles.section}>
            <h2>Optimizing Workflow & Storage</h2>
            <p>
              Tyre Shredders streamline the material flow. Chips can be fed
              directly to conveyors, magnetic separators, or storage areas,
              reducing manual handling and improving productivity.
            </p>
          </div>

          {/* Space */}
          <div id="space" className={styles.section}>
            <h2>Space Utilization Advantages</h2>
            <p>
              Shredded tyres take less space than whole tyres, improving storage
              efficiency, warehouse organization, and safety. This enables
              facilities to process higher volumes without expanding their
              footprint.
            </p>
          </div>

          {/* Cost */}
          <div id="cost" className={styles.section}>
            <h2>Cost & Operational Savings</h2>
            <p>
              Tyre Shredders reduce labor, transport, and storage costs.
              Processed chips have resale value, and energy recovery
              opportunities reduce waste-to-landfill expenses.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety Considerations</h2>
            <p>
              Shredding tyres reduces clutter and prevents fire hazards from
              stored whole tyres. Emergency stops, interlocks, and overload
              protection ensure operator safety.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainability Benefits</h2>
            <p>
              Tyre Shredders support environmental sustainability by enabling
              rubber recycling, reducing landfill usage, and contributing to
              circular economy initiatives.
            </p>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className={styles.section}>
            <h2>Maintenance & Longevity</h2>
            <p>
              Regular inspection of blades, motors, and hydraulics ensures long
              shredder life. Proper maintenance minimizes downtime and ensures
              consistent chip quality.
            </p>
          </div>

          {/* Automation */}
          <div id="automation" className={styles.section}>
            <h2>Automation & Smart Integration</h2>
            <p>
              Tyre Shredders with smart sensors, conveyors, and IoT integration
              enable continuous operation, predictive maintenance, and reduced
              human error.
            </p>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" className={styles.section}>
            <h2>Common Issues & Troubleshooting Tips</h2>
            <ul className={styles.list}>
              <li>Tyre jams: Use emergency stop and reverse carefully.</li>
              <li>Blade wear: Inspect and replace blades regularly.</li>
              <li>Motor overload: Ensure proper load handling and cooling.</li>
              <li>Excess vibration: Check alignment and rotor balance.</li>
            </ul>
          </div>

          {/* ROI */}
          <div id="roi" className={styles.section}>
            <h2>Return on Investment & Long-Term Benefits</h2>
            <p>
              Investing in Tyre Primary Shredders provides long-term savings,
              improves material recovery, enhances recycling revenue, and
              reduces labor and landfill costs.
            </p>
          </div>

          {/* Future */}
          <div id="future" className={styles.section}>
            <h2>Future Trends in Tyre Shredding Technology</h2>
            <p>
              AI-driven monitoring, energy-efficient motors, and integration
              with Industry 4.0 are shaping tyre shredding. Smart sensors allow
              predictive maintenance and real-time process optimization.
            </p>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Our Tyre Primary Shredders</h2>
            <p>
              Our Tyre Shredders combine durability, efficiency, and safety.
              Designed for diverse tyre recycling applications, they optimize
              workflow, reduce costs, and support sustainability.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg4} alt="Processed Tyre Chips" />
              <span className={styles.caption}>
                Shredded tyres ready for recycling or energy recovery
              </span>
            </div>
            <h2>Conclusion</h2>
            <p>
              Tyre Primary Shredders are essential for efficient and sustainable
              tyre recycling. They improve workflow, reduce costs, support
              environmental initiatives, and provide long-term operational
              benefits.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Streamlines tyre recycling operations</li>
              <li>Enhances sustainability and material recovery</li>
              <li>Reduces operational, labor, and landfill costs</li>
              <li>Improves workplace safety and workflow</li>
              <li>Durable, reliable, and long-term solution</li>
              <li>Supports automation and smart integration</li>
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
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — Related Pages Sidebar */}
      <aside className={styles.relatedSidebar}>
        <h3 className={styles.relatedTitle}>Related Pages</h3>
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/primary-shredder">Industrial Primary Shredders →</a>
        </div>
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/tyreshredder">Tyre Shredder →</a>
        </div>
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/plasticshredder">Plastic Primary Shredders →</a>
        </div>
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/papershredder">PCB Primary Shredders →</a>
        </div>
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/shm4000">Metal Primary Shredders →</a>
        </div>
        <div className={`${styles.relatedCard} ${styles.floatCard}`}>
          <a href="/ewaste">E-Waste Primary Shredders →</a>
        </div>
      </aside>
    </div>
  );
};

export default ShredderBlog3;
