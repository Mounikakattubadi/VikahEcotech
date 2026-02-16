import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../Pages/ProductsPage.css";
// import "../../Other Equipments/Tyrecutting.css";
// import "../../Pages/Models.css";

import shm4000_main from "../../images/Applications/shredm5.jpg";
import shm4000_angle1 from "../../images/Applications/shredm6.jpg";
import shm4000_angle2 from "../../images/Applications/shredm7.jpg";
import SEOHelmet from "../../components/SEO/SEOHelmet";



const Shm4000 = () => {
  const [mainImage, setMainImage] = useState(shm4000_main);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = "metal-shredder";
  const model = "SHM-4000";

  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <>
<SEOHelmet
        title="SHM-4000 Metal Shredder Machine Manufacturer in India | Vikah Ecotech"
        description="SHM-4000 is a heavy-duty primary metal shredder machine designed for high-capacity shredding of ferrous and non-ferrous metal scrap."
        keywords="metal shredder machine, primary metal shredder, metal scrap shredder"
        canonical="https://vikahecotech.com/shm4000"
        breadcrumb={[
          { name: "Home", url: "https://vikahecotech.com" },
          { name: "Primary Shredders", url: "https://vikahecotech.com/primary-shredder" },
          { name: "SHM-4000", url: "https://vikahecotech.com/shm4000" },
        ]}
        product={{
          name: "SHM-4000 Metal Shredder Machine",
          description:
            "Heavy-duty primary metal shredder designed for high-capacity processing of ferrous and non-ferrous metal scrap.",
          image: "https://vikahecotech.com/images/Shredder.png",
          sku: "SHM-4000",
          category: "Metal Recycling Machinery",
          url: "https://vikahecotech.com/shm4000",
          price: "5000000"
        }}
      />

      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">SHM-4000 Metal Shredder</h1>
          <p className="lead">Primary Shredders for Metal Recycling</p>
        </div>
      </header>

      {/* ================= PRODUCT TOP ================= */}
      <div className="productpagetop">
        <div className="imagetop">
          <div className="main-image-container">
            <div className="main-image-wrapper">
              <img
                src={mainImage}
                alt="SHM-4000 metal shredder machine by Vikah Ecotech"
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
              src={shm4000_angle1}
              alt="SHM-4000 metal shredder side view"
              onClick={() => handleImageClick(shm4000_angle1)}
            />
            <img
              src={shm4000_main}
              alt="SHM-4000 metal shredder front view"
              onClick={() => handleImageClick(shm4000_main)}
            />
            <img
              src={shm4000_angle2}
              alt="SHM-4000 metal shredder cutting chamber"
              onClick={() => handleImageClick(shm4000_angle2)}
            />
          </div>
        </div>

        <div className="productdetails">
          <h1>SHM-4000 Metal Shredder Machine</h1>
          <p>
            The <strong>SHM-4000 Metal Shredder</strong> is a heavy-duty primary
            shredding solution engineered for high-capacity processing of
            ferrous and non-ferrous metal scrap. Designed with a robust
            twin-shaft configuration and hardened alloy steel blades, this
            shredder delivers consistent output, high torque, and long
            operational life for industrial recycling plants.
          </p>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="features-container">
        <h2>Features & Advantages</h2>
        <div className="features-content">
          <img
            src={shm4000_angle1}
            alt="SHM-4000 metal shredder features"
            className="specifications-image"
          />
          <div className="sht200specification">
            <p>
              ➤ Twin-shaft high-torque shredding system
              <br />
              ➤ Hardened alloy steel cutting blades
              <br />
              ➤ Automatic overload and reverse protection
              <br />
              ➤ PLC-controlled electrical panel
              <br />
              ➤ Vibration-damped heavy-duty frame
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
              <td>Power</td>
              <td>180 – 220 HP</td>
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
          </tbody>
        </table>
      </div>

      <div className="cuttingsection">
        <h3>Cutting Section</h3>
        <table>
          <tbody>
            <tr>
              <td>Cutting Chamber</td>
              <td>4000 × 900 mm</td>
            </tr>
            <tr>
              <td>Blade Thickness</td>
              <td>50 mm</td>
            </tr>
            <tr>
              <td>Blade Diameter</td>
              <td>500 mm</td>
            </tr>
            <tr>
              <td>Rotor Diameter</td>
              <td>360 mm</td>
            </tr>
            <tr>
              <td>Production Capacity</td>
              <td>4000 – 4500 kg/hr</td>
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
              <td>4300 mm</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>1650 mm</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>2450 mm</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>Approx. 12,000 kg</td>
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
          onClick={() => handleDownload("shm4000")}
        >
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default Shm4000;
