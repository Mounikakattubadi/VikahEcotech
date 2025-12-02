import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/Applications/appm3.jpg';

// 👉 Replace with your own metal baler images
import metalImg1 from './images/Applications/appm7.jpg';
import metalImg2 from './images/Applications/appm6.jpg';
import metalImg3 from './images/Applications/appm4.jpg';

const Blm250 = () => {
  const [mainImage, setMainImage] = useState(metalImg1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = 'Baler';
  const model = 'Metal Balers';

  const handleImageClick = (image) => setMainImage(image);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/blm250.pdf`;
    link.download = 'blm250.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 🔍 Open image in new tab
  const handleViewImage = () => {
    window.open(mainImage, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className='productpagetop'>
        <div className='imagetop'>
          <div className="main-image-container">
            
            {/* 🔍 Wrapper with zoom icon */}
            <div className="main-image-wrapper">
              <img
                src={mainImage}
                className="sht2000img"
                alt="BLM250 Metal Baler"
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
            <div><img src={metalImg2} alt="BLM250 view 1" onClick={() => handleImageClick(metalImg2)} /></div>
            <div><img src={metalImg3} alt="BLM250 view 2" onClick={() => handleImageClick(metalImg3)} /></div>
            <div><img src={metalImg1} alt="BLM250 view 3" onClick={() => handleImageClick(metalImg1)} /></div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLM250</h1>
          <p>
            The <strong>BLM-250</strong> is a high-force industrial metal baler designed for large-scale 
            recycling yards. Suitable for ferrous & non-ferrous metals including steel punchings, cast 
            scrap, and automobile pressing.
          </p>
        </div>
      </div>

      <div className='features-container'>
        <h2>FEATURES AND SPECIFICATIONS</h2>
        <div className='features-content'>
          <img src={mainSpecImage} className="specifications-image" alt="BLM250 specifications" />
          <div className='sht200specification'>
            <p>
              ➤ 250-ton powerful compression<br />
              ➤ Robust welded frame<br />
              ➤ Auto-eject system<br />
              ➤ High-density bale output<br />
              ➤ PLC automation<br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLM 250</h3>
        <table>
          <tbody>
            <tr><td>Compression Force</td><td>250 Ton</td></tr>
            <tr><td>Bale Size</td><td>1400 × 900 × (700–900)</td></tr>
            <tr><td>Chamber Size</td><td>1800 × 1000 × 700 mm</td></tr>
            <tr><td>Capacity</td><td>5–7 Bales/hr</td></tr>
            <tr><td>Bale Weight</td><td>300–500 Kg</td></tr>
            <tr><td>Power</td><td>20 HP</td></tr>
            <tr><td>Machine Weight</td><td>2600 Kg</td></tr>
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

export default Blm250;
