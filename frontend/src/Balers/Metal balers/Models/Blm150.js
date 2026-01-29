import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../Pages/ProductsPage.css";

import mainSpecImage from '../../../images/Applications/appm3.jpg';

// 👉 Replace with your own metal baler images
import metalImg1 from '../../../images/Applications/appm1.jpg';
import metalImg2 from '../../../images/Applications/appm2.jpg';
import metalImg3 from '../../../images/Applications/appm4.jpg';

const Blm150 = () => {
  const [mainImage, setMainImage] = useState(metalImg1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = 'Baler';
  const model = 'Metal Balers';

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/blm150.pdf`;
    link.download = 'blm150.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 🔍 View Full Image in new tab
  const handleViewImage = () => {
    window.open(mainImage, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className='productpagetop'>
        <div className='imagetop'>
          <div className="main-image-container">

            {/* 🔍 Add wrapper with icon */}
            <div className="main-image-wrapper">
              <img
                src={mainImage}
                alt="BLM150 Metal Baler"
                className="sht2000img"
              />
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
            <div><img src={metalImg2} alt="BLM150 angle 1" onClick={() => handleImageClick(metalImg2)} /></div>
            <div><img src={metalImg3} alt="BLM150 angle 2" onClick={() => handleImageClick(metalImg3)} /></div>
            <div><img src={metalImg1} alt="BLM150 angle 3" onClick={() => handleImageClick(metalImg1)} /></div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLM-150</h1>
          <p>
            The <strong>BLM-150 Metal Baler</strong> is engineered for compacting light to medium-grade 
            metal scrap including aluminium, copper, brass, and steel offcuts. It delivers strong 
            compression force with high operational reliability.
          </p>
        </div>
      </div>

      <div className='features-container'>
        <h2>FEATURES AND SPECIFICATIONS</h2>
        <div className='features-content'>
          <img src={mainSpecImage} alt="specs" className="specifications-image" />
          <div className='sht200specification'>
            <p>
              ➤ High compression force<br />
              ➤ Hydraulic side & front ejector<br />
              ➤ Heavy-duty welded structure<br />
              ➤ Low maintenance hydraulic unit<br />
              ➤ User-friendly control system<br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLM 150</h3>
        <table>
          <tbody>
            <tr><td>Compression Force (Ton)</td><td>150</td></tr>
            <tr><td>Bale Size (L*W*H) mm</td><td>1200 × 700 × (600–800)</td></tr>
            <tr><td>Chamber Size (L*W*H) mm</td><td>1500 × 800 × 700</td></tr>
            <tr><td>Capacity</td><td>3–5 Bales/hour</td></tr>
            <tr><td>Bale Weight</td><td>200–350 Kg</td></tr>
            <tr><td>Power</td><td>10 HP</td></tr>
            <tr><td>Voltage</td><td>380V / 50Hz (Customizable)</td></tr>
            <tr><td>Machine Size</td><td>2000 × 1100 × 1800 mm</td></tr>
            <tr><td>Machine Weight</td><td>1800 Kg</td></tr>
          </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={handleDownload}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default Blm150;
