import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";

// Images
import BlogImg1 from "../../images/Applications/plasticbaler1.jpg";
import BlogImg3 from "../../images/Applications/plasticbaler2.jpg";
import BlogImg4 from "../../images/Applications/pcb3.webp";

const faqsData = [
  {
    question: "Can shredders improve recycling efficiency?",
    answer: "Yes, shredders reduce waste size and standardize materials, making recycling processes faster and more effective. Smaller, uniform pieces are easier to sort, clean, and process, resulting in higher material recovery rates."
  },
  {
    question: "Do shredders support sustainable waste management?",
    answer: "Absolutely. Shredded materials are easier to recycle, reduce landfill dependency, and align with eco-friendly industrial practices, helping industries meet environmental regulations and sustainability goals."
  },
  {
    question: "What materials can be shredded for recycling?",
    answer: "Shredders can process plastics, rubber, paper, wood, metal scrap, e-waste, and other industrial waste, depending on facility requirements and shredder type."
  },
  {
    question: "Are shredders cost-effective for waste management?",
    answer: "Yes, shredders save labor, space, and transport costs while improving material resale or recycling value. Automated operations reduce manual handling, further lowering operational expenses."
  },
  {
    question: "Which industries benefit most from shredders?",
    answer: "Industries such as automotive, plastic manufacturing, rubber processing, paper, metal recycling, and e-waste management gain efficiency, cost reduction, and sustainability benefits from shredders."
  },
  {
    question: "How does shredder automation improve productivity?",
    answer: "Automation allows continuous operation, predictive maintenance, and integration with conveyors or balers. This reduces downtime, human error, and ensures consistent output quality."
  },
  {
    question: "How long do industrial shredders last?",
    answer: "With proper maintenance, high-quality shredders can last over 10 years. Regular servicing of blades, motors, and controls ensures reliable performance and minimal operational interruptions."
  }
];

const ShredderBlog3 = () => {
    useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { id: "introduction", title: "Introduction: Industrial Shredders and Modern Waste Management" },
    { id: "role", title: "The Role of Shredders in Efficient Waste Management" },
    { id: "operation", title: "How Industrial Shredders Operate: Mechanisms & Process" },
    { id: "types", title: "Different Types of Shredders and Their Industrial Applications" },
    { id: "recycling", title: "Boosting Recycling Efficiency with Shredded Materials" },
    { id: "workflow", title: "Optimizing Workflow & Storage with Shredders" },
    { id: "space", title: "Space Utilization and Storage Advantages" },
    { id: "cost", title: "Cost Reduction & Operational Savings" },
    { id: "safety", title: "Safety Considerations and Workplace Compliance" },
    { id: "sustainability", title: "Sustainability and Environmental Impact" },
    { id: "maintenance", title: "Maintenance, Reliability & Longevity of Shredders" },
    { id: "automation", title: "Automation and Smart Shredder Integration" },
    { id: "troubleshooting", title: "Common Issues & Troubleshooting Tips" },
    { id: "roi", title: "Return on Investment & Long-Term Benefits" },
    { id: "future", title: "Future Trends in Industrial Shredding Technology" },
    { id: "why-us", title: "Why Choose Our Industrial Shredders" },
    { id: "conclusion", title: "Conclusion: Investing in Shredders for Maximum Efficiency" },
    { id: "key-takeaways", title: "Key Takeaways for Industrial Shredders" },
    { id: "faqs", title: "Frequently Asked Questions About Industrial Shredders" }
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
            Industrial Shredders for Efficient Waste Management & Recycling
          </h1>

          {/* Introduction */}
          <div id="introduction" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg1} alt="Industrial Shredders for Recycling" />
              <span className={styles.caption}>Optimizing scrap processing with shredders</span>
            </div>
            <p>
              Industrial shredders are indispensable in modern waste management. They reduce bulky scrap into smaller, manageable pieces, optimizing storage, transportation, and processing efficiency. This also supports sustainability goals by improving recycling outcomes.
            </p>
            <p>
              Efficient shredding operations reduce manual labor, enhance productivity, and allow facilities to handle larger volumes of material without increasing workforce or space requirements.
            </p>
          </div>

          {/* Role */}
          <div id="role" className={styles.section}>
            <h2>The Role of Shredders in Efficient Waste Management</h2>
            <p>
              Shredders play a central role in industrial waste management. By converting large and irregular materials into uniform sizes, they enable easier sorting, storage, transport, and recycling. This reduces operational challenges and improves facility productivity.
            </p>
            <p>
              Facilities using shredders experience fewer bottlenecks, faster processing times, and improved overall workflow, contributing to higher operational efficiency and reduced overhead costs.
            </p>
          </div>

          {/* Operation */}
          <div id="operation" className={styles.section}>
            <div className={styles.imgRight}>
              <img src={BlogImg3} alt="Shredder Operation" />
              <span className={styles.caption}>Shredders processing scrap materials</span>
            </div>
            <h2>How Industrial Shredders Operate</h2>
            <p>
              Industrial shredders use rotating blades, cutters, or granulators to reduce material size. The shredded output is uniform, suitable for recycling, resale, or further processing. Advanced shredders can handle plastics, rubber, metal, paper, and e-waste.
            </p>
            <p>
              Modern shredders are equipped with adjustable settings to control output size, speed, and torque, allowing customization based on material type and recycling requirements.
            </p>
          </div>

          {/* Types */}
          <div id="types" className={styles.section}>
            <h2>Types of Industrial Shredders & Their Applications</h2>
            <ul className={styles.list}>
              <li><strong>Single-Shaft Shredders:</strong> Ideal for medium-density materials with uniform throughput.</li>
              <li><strong>Dual-Shaft Shredders:</strong> Suitable for heavy-duty scrap like tyres, metals, and plastics.</li>
              <li><strong>Granulators:</strong> Produce granules for recycling or resale, especially plastics and rubber.</li>
              <li><strong>High-Speed Rotary Shredders:</strong> Efficient for lightweight materials like paper and cardboard.</li>
              <li><strong>Industrial Hammermills:</strong> Crush hard materials into smaller pieces for easier processing.</li>
            </ul>
          </div>

          {/* Recycling */}
          <div id="recycling" className={styles.section}>
            <h2>Boosting Recycling Efficiency</h2>
            <p>
              Shredded materials are easier to sort, clean, and process in recycling facilities. Uniform output increases recycling rates, reduces processing time, and lowers contamination risks.
            </p>
            <p>
              Industries can achieve better compliance with environmental standards, improve CSR, and enhance the market value of recycled materials.
            </p>
          </div>

          {/* Workflow */}
          <div id="workflow" className={styles.section}>
            <h2>Optimizing Workflow & Storage</h2>
            <p>
              Shredders enable a streamlined workflow. Material moves smoothly to conveyors, balers, or packaging systems, reducing downtime and minimizing bottlenecks.
            </p>
          </div>

          {/* Space */}
          <div id="space" className={styles.section}>
            <h2>Space Utilization Advantages</h2>
            <p>
              Shredded scrap occupies less space, improving warehouse organization, accessibility, and safety. Compact storage allows facilities to handle more material without expanding floor space.
            </p>
          </div>

          {/* Cost */}
          <div id="cost" className={styles.section}>
            <h2>Cost & Operational Savings</h2>
            <p>
              Shredders reduce manual labor, transport trips, and storage needs. Savings include reduced fuel, labor costs, and logistics expenses, while maximizing material resale or recycling revenue.
            </p>
          </div>

          {/* Safety */}
          <div id="safety" className={styles.section}>
            <h2>Safety Considerations</h2>
            <p>
              By reducing clutter and loose scrap, shredders minimize workplace hazards. Emergency stops, interlocks, and overload protection ensure a safe working environment.
            </p>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className={styles.section}>
            <h2>Sustainability Benefits</h2>
            <p>
              Industrial shredders support eco-friendly practices by making recycling more efficient and reducing landfill dependency. This aligns with corporate sustainability initiatives and environmental regulations.
            </p>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className={styles.section}>
            <h2>Maintenance & Longevity</h2>
            <p>
              Regular maintenance of blades, motors, and controls ensures shredder longevity. Scheduled servicing minimizes downtime and extends machine life, providing consistent output quality.
            </p>
          </div>

          {/* Automation */}
          <div id="automation" className={styles.section}>
            <h2>Automation & Smart Integration</h2>
            <p>
              Smart shredders integrate with sensors, conveyors, and IoT systems. Automation enables continuous operation, predictive maintenance, and reduces human errors, increasing efficiency.
            </p>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" className={styles.section}>
            <h2>Common Issues & Troubleshooting Tips</h2>
            <ul className={styles.list}>
              <li>Material jams: Use emergency stop and reverse functions carefully.</li>
              <li>Blade wear: Inspect and replace worn blades regularly.</li>
              <li>Motor overheating: Ensure proper load management.</li>
              <li>Excess vibration: Check alignment, mounting bolts, and rotor balance.</li>
            </ul>
          </div>

          {/* ROI */}
          <div id="roi" className={styles.section}>
            <h2>Return on Investment & Long-Term Benefits</h2>
            <p>
              Investing in industrial shredders provides long-term cost savings, improved productivity, better recycling output, and reduced labor expenses, ensuring a strong ROI for industrial facilities.
            </p>
          </div>

          {/* Future */}
          <div id="future" className={styles.section}>
            <h2>Future Trends in Industrial Shredding Technology</h2>
            <p>
              Smart sensors, AI-driven maintenance, and energy-efficient motors are shaping the future of shredding. Integration with Industry 4.0 ensures predictive maintenance, real-time monitoring, and increased throughput for sustainable operations.
            </p>
          </div>

          {/* Why Us */}
          <div id="why-us" className={styles.section}>
            <h2>Why Choose Our Industrial Shredders</h2>
            <p>
              Our shredders combine efficiency, safety, durability, and scalability. Designed for diverse industries, they enhance workflow, reduce costs, and improve recycling and sustainability outcomes.
            </p>
          </div>

          {/* Conclusion */}
          <div id="conclusion" className={styles.section}>
            <div className={styles.imgLeft}>
              <img src={BlogImg4} alt="Processed Scrap" />
              <span className={styles.caption}>Shredded materials ready for recycling</span>
            </div>
            <h2>Conclusion</h2>
            <p>
              Industrial shredders are essential for efficient waste management. They improve workflow, reduce costs, support sustainability, and provide long-term operational benefits.
            </p>
          </div>

          {/* Key Takeaways */}
          <div id="key-takeaways" className={styles.section}>
            <h2>Key Takeaways</h2>
            <ul className={styles.list}>
              <li>Streamlines industrial waste management</li>
              <li>Enhances recycling efficiency and sustainability</li>
              <li>Reduces operational and labor costs</li>
              <li>Improves safety and workflow</li>
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

export default ShredderBlog3;
