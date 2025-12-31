import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css";
import img1 from "./images/baler1.png";
import Baler4 from "./images/Applications/app13.jpg";
import bp5 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg";
import bp2 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.45 AM.jpeg";
import { Helmet } from "react-helmet";

const BLT250 = () => {
  const [mainImage, setMainImage] = useState(Baler4);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = "Baler";
  const model = "BLT-250";

  const handleDownload = (fileName) => {
    // Create a new anchor element
    const link = document.createElement("a");
    // Set the href to the PDF file
    link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
    // Set the download attribute to the desired file name
    link.download = `${fileName}.pdf`;
    // Append the anchor to the body
    document.body.appendChild(link);
    // Programmatically click the anchor
    link.click();
    // Remove the anchor from the body
    document.body.removeChild(link);
  };

  // 🔍 New: view current main image in new tab
  const handleViewImage = () => {
    window.open(mainImage, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>BLT-250 Tyre Scrap Baler Machine | Vikah Ecotech</title>

        <meta
          name="description"
          content="BLT-250 is a heavy-duty tyre scrap baler machine by Vikah Ecotech, designed for high-volume tyre recycling operations requiring maximum bale density and industrial reliability."
        />

        <meta
          name="keywords"
          content="BLT-250 tyre baler, heavy duty tyre scrap baler, tyre recycling baler, industrial baler machine, baler for scrap tyres"
        />

        <link rel="canonical" href="https://vikahecotech.com/blt250" />
      </Helmet>

      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">BLT-250</h1>
        </div>
      </header>

      {/* Rest of your existing JSX */}
      <div className="productpagetop">
        <div className="top-model-buttons">
          <p className="related-title">Related Models</p>
          <Link to="/blt200">
            <button className="model-btn">BLT-200</button>
          </Link>
          <Link to="/blt150">
            <button className="model-btn">BLT-150</button>
          </Link>
        </div>
        <div className="imagetop">
          <div className="main-image-container">
            {/* Wrapped existing img in a wrapper + icon */}
            <div className="main-image-wrapper">
              <img src={mainImage} alt="sht2000" className="sht2000img" />
              <span
                className="view-image-icon"
                onClick={handleViewImage}
                title="View full image"
              >
                🔍
              </span>
            </div>
          </div>
          <div className="additional-images">
            <div>
              <img
                className="angle1"
                src={bp2}
                alt="Angle 1"
                onClick={() => handleImageClick(bp2)}
              />
            </div>
            <div>
              <img
                className="angle2"
                src={bp5}
                alt="Angle 2"
                onClick={() => handleImageClick(bp5)}
              />
            </div>
            <div>
              <img
                className="angle3"
                src={Baler4}
                alt="Angle 3"
                onClick={() => handleImageClick(Baler4)}
              />
            </div>
          </div>
        </div>
        <div className="productdetails">
          <h1>{model}</h1>

          <p>
            The BLT-250 is a heavy-duty industrial baler built for high-volume
            tyre recycling and continuous 24/7 operation. Its 250-ton compaction
            force, oversized hydraulic cylinders, and reinforced frame deliver
            exceptionally dense, transport-ready bales that reduce handling and
            logistics costs. A high-flow piston pump and automated cycle
            controls ensure fast, consistent compression with minimal operator
            effort. Safety is fully integrated with emergency stops, interlocks
            and limit switches for reliable, protected operation. Designed for
            long service life, the BLT-250 features easily accessible
            maintenance points and durable components that minimize downtime.
            It’s the ideal choice for facilities that demand maximum output,
            reliability and uniform bale quality.
          </p>
          <p>
            The BLT series tyre balers are part of our
            <a href="/tyre-scrap-balers"> tyre scrap baler machines </a>
             under
            <a href="/balers"> industrial baler systems </a>
             designed for tyre recycling applications.
          </p>
        </div>
      </div>

      <div className="features-container">
        <h2>FEATURES AND SPECIFICATIONS</h2>
        <div className="features-content">
          <img
            src={img1}
            alt="Specifications"
            className="specifications-image"
          />
          <div className="sht200specification">
            <p>
              ➤ Our BLT-250 comes with a robust hydraulic system <br />
              ➤ Our BLT-250 is equipped with user friendly controls and safety
              features <br />
              ➤ operators can easily and safely operate the BLT-200 to achieve
              optimal compression results <br />➤ lowering transportation costs
              and enhancing overall efficiency <br />
              ➤ Specific Stop/Auto Reversal motors Feature <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>
      <div className="featurestable">
        <h3>MODEL NO: BLT-250</h3>
        <table>
          <tbody>
            <tr>
              <td>Compaction Force</td>
              <td>250 Ton</td>
            </tr>
            <tr>
              <td>No of Cylinder</td>
              <td>2 Nos (Compaction), 2 Nos (Door Locking)</td>
            </tr>
            <tr>
              <td>Cylinder Size</td>
              <td>2000 mm(H)</td>
            </tr>
            <tr>
              <td>No of Doors</td>
              <td>2 (Front) + 2 (Rear)</td>
            </tr>
            <tr>
              <td>Bale Weight</td>
              <td>1200 to 2000 Kg</td>
            </tr>
            <tr>
              <td>No of Ties</td>
              <td>5 Nos</td>
            </tr>

            <tr>
              <td>Oil Tank Capacity</td>
              <td> 600 Litres</td>
            </tr>
            <tr>
              <td>Hydraulic Oil Drive</td>
              <td>Dual Vane Pump with high LPM</td>
            </tr>
            <tr>
              <td>Electric Motor</td>
              <td>20 HP + 2HP</td>
            </tr>
            <tr>
              <td>Tower Light</td>
              <td>
                For safety precaution an auto Red light will be on during Baling
                Process
              </td>
            </tr>
            <tr>
              <td>Limit Switch</td>
              <td>
                To enhance the Safety of Structure / Hydraulics and reduce the
                cycle time
              </td>
            </tr>
            <tr>
              <td>Pump Type</td>
              <td>Piston Pump</td>
            </tr>
            <tr>
              <td>Baler Weight</td>
              <td>11000 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>

        <button
          className="downloadspeci-button"
          onClick={() => handleDownload("blt250")}
        >
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLT250;
