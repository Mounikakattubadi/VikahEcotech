import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../Pages/ProductsPage.css";
import styles from "../../Styles/ProductHeader.module.css";

import she800_main from "../../images/Applications/shredewaste.jpeg";
import she800_angle1 from "../../images/Applications/shredewaste2.webp";
import she800_specs from "../../images/Applications/shredewaste3.webp";
import she800_angle2 from "../../images/Applications/shredewaste4.jpg";
import SEOHelmet from "../../components/SEO/SEOHelmet";

const Ewaste = () => {
  const [mainImage, setMainImage] = useState(she800_main);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = "shredder";
  const model = "E-waste";

  const handleImageClick = (img) => setMainImage(img);

  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewImage = () => {
    window.open(mainImage, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ================= SEO HELMET ================= */}
      <SEOHelmet
        title="E-Waste Shredder Machine Manufacturer in India | SHE-400 | Vikah Ecotech"
        description="SHE-400 is a heavy-duty e-waste shredder machine designed for safe and efficient shredding of electronic waste and PCB boards."
        keywords="e-waste shredder machine, pcb shredder, electronic waste shredder"
        canonical="https://vikahecotech.com/ewaste"
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          {
            name: "Primary Shredders",
            url: "https://vikahecotech.com/primary-shredder",
          },
          { name: "E-Waste Shredder", url: "https://vikahecotech.com/ewaste" },
        ]}
        product={{
          name: "SHE-400 E-Waste Shredder Machine",
          description:
            "Heavy-duty primary e-waste shredder for shredding electronic waste, PCB boards, appliances and electrical scrap.",
          image: "https://vikahecotech.com/images/st.jpeg",
          sku: "SHE-400",
          category: "E-Waste Recycling Machinery",
          url: "https://vikahecotech.com/ewaste",
          price: "3000000",
        }}
      />

      {/* ================= HEADER ================= */}
      <header className={styles.productHeader}>
        <div className={styles.headerContent}>
          <div className={styles.breadcrumb}>
            Home / Products / <span>E-Waste Shredder Machine</span>
          </div>

          <h1 className={styles.productTitle}>
            E-Waste <span>Shredder</span>
          </h1>

          <p className={styles.productSubtitle}>
            Advanced primary shredding solution designed for safe and efficient
            processing of electronic waste, PCB boards, appliances, and
            electrical scrap in recycling facilities.
          </p>

          <div className={styles.headerButtons}>
            <button
              className={styles.primaryBtn}
              onClick={() => handleDownload("Ewaste Shredder")}
            >
              Download Brochure
            </button>

            <button className={styles.secondaryBtn} onClick={handleViewImage}>
              View  Image
            </button>
          </div>
        </div>
      </header>

      {/* ================= PRODUCT TOP ================= */}
      <div className="productpagetop">
        <div className="imagetop">
          <div className="main-image-container">
            <div className="main-image-wrapper">
              <img
                src={mainImage}
                alt="SHE-400 e-waste shredder machine by Vikah Ecotech"
                className="sht2000img"
                loading="lazy"
              />
              <span
                className="view-image-icon"
                onClick={() =>
                  window.open(mainImage, "_blank", "noopener,noreferrer")
                }
                title="View full image"
              >
                🔍
              </span>
            </div>
          </div>

          <div className="additional-images">
            <img
              src={she800_angle1}
              alt="E-waste shredder side view"
              onClick={() => handleImageClick(she800_angle1)}
            />
            <img
              src={she800_main}
              alt="E-waste shredder front view"
              onClick={() => handleImageClick(she800_main)}
            />
            <img
              src={she800_angle2}
              alt="E-waste shredder cutting chamber"
              onClick={() => handleImageClick(she800_angle2)}
            />
          </div>
        </div>

        <div className="productdetails">
          <h1>SHE-400 E-Waste Shredder</h1>
          <p>
            The <strong>SHE-400 E-Waste Primary Shredder</strong> is an
            industrial shredding machine engineered for efficient processing of
            electronic waste such as PCB boards, mobile phones, laptops,
            household appliances, and mixed electrical scrap. Built with a
            high-torque, low-speed shredding mechanism, it ensures safe size
            reduction while protecting valuable recoverable materials for
            downstream recycling processes.
          </p>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="features-container">
        <h2>Features & Advantages</h2>

        <div className="features-content">
          <img
            src={she800_specs}
            alt="E-waste shredder specifications"
            className="specifications-image"
          />

          <div className="sht200specification">
            <p>
              ➤ Twin-shaft high-torque shredding technology
              <br />
              ➤ Low-speed operation for safe e-waste processing
              <br />
              ➤ Hardened alloy steel cutting blades
              <br />
              ➤ Automatic overload reverse protection
              <br />
              ➤ PLC-based automation and monitoring
              <br />
              ➤ Low noise and vibration design
              <br />
            </p>
          </div>
        </div>
      </div>

      {/* ================= TECHNICAL SPECS ================= */}
      <h2 className="technical-heading">Technical Specifications</h2>

      <div className="featurestable">
        <h3>Electrical System</h3>
        <table>
          <tbody>
            <tr>
              <td>Total Power</td>
              <td>60 HP</td>
            </tr>
            <tr>
              <td>No. of Motors</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Voltage</td>
              <td>As per Client Requirement</td>
            </tr>
            <tr>
              <td>Drive</td>
              <td>Electric</td>
            </tr>
            <tr>
              <td>Control Panel</td>
              <td>MCC / PLC Controlled</td>
            </tr>
            <tr>
              <td>Motor Make</td>
              <td>Siemens / Crompton</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cuttingsection">
        <h3>Cutting Section</h3>
        <table>
          <tbody>
            <tr>
              <td>Cutting Chamber</td>
              <td>800 × 700 mm</td>
            </tr>
            <tr>
              <td>Rotor Diameter</td>
              <td>320 mm</td>
            </tr>
            <tr>
              <td>Blade Thickness</td>
              <td>40 mm</td>
            </tr>
            <tr>
              <td>Processing Capacity</td>
              <td>4000 – 6000 kg/hr</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="dimensions">
        <h3>Dimensions & Weight</h3>
        <table>
          <tbody>
            <tr>
              <td>Length</td>
              <td>3500 mm</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>1500 mm</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>2400 mm</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>Approx. 7000 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= CTA ================= */}
      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Now</button>
        </Link>

        <button
          className="downloadspeci-button"
          onClick={() => handleDownload("Ewaste Shredder")}
        >
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default Ewaste;
