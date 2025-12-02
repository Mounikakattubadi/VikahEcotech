import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/Applications/plas14.webp';
import balerImage from './images/Applications/plas12.jpg';
import img1 from './images/Applications/plas13.webp';
import img2 from './images/Applications/plas1.webp';

const BLP30 = () => {
  const [mainImage, setMainImage] = useState(img1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = 'Baler';
  const model = 'Plastic Balers';

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 🔍 Open current image in new tab
  const handleViewImage = () => {
    window.open(mainImage, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className='productpagetop'>
        <div className='imagetop'>
          <div className="main-image-container">

            {/* 🔍 Wrapper added here */}
            <div className="main-image-wrapper">
              <img
                src={mainImage}
                alt="BLP30 Plastic Baler machine main view by Vikah Ecotech"
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
            <div>
              <img src={img2} alt="BLP30 machine angle view 1 by Vikah Ecotech" onClick={() => handleImageClick(img2)} />
            </div>
            <div>
              <img src={balerImage} alt="BLP30 machine angle view 2 by Vikah Ecotech" onClick={() => handleImageClick(balerImage)} />
            </div>
            <div>
              <img src={img1} alt="BLP30 machine angle view 3 by Vikah Ecotech" onClick={() => handleImageClick(img1)} />
            </div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLP30</h1>
       
          <p>
            The <strong>BLP-30</strong> Plastic Baler is designed for compressing and baling lightweight plastic waste materials 
            like PET bottles, packaging films, and plastic sheets. Its efficient hydraulic system ensures high compaction 
            with low energy consumption, making it ideal for recycling facilities and packaging industries.
          </p>
        </div>
      </div>

      <div className='features-container'>
        <h2>FEATURES AND SPECIFICATIONS</h2>
        <div className='features-content'>
          <img src={mainSpecImage} alt="Vikah Ecotech machine specifications overview"
            className="specifications-image" />
          <div className='sht200specification'>
             <p>
              ➤ High compression ratio for plastic waste <br />
              ➤ Compact design for small spaces <br />
              ➤ Low noise and vibration <br />
              ➤ User-friendly control panel <br />
              ➤ Auto bale ejection system <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLP 30</h3>
        <table>
          <tbody>
              <tr><td>Model</td><td>BLP 30</td></tr>
              <tr><td>Compression Force (Ton)</td><td>30</td></tr>
              <tr><td>Bale size (L*W*H) mm</td><td>1100*700*(650-900)</td></tr>
              <tr><td>Feed opening size (L*H) mm</td><td>1100*500</td></tr>
              <tr><td>Capacity (Bales/Hr)</td><td>3-6</td></tr>
              <tr><td>Bale weight (Kg)</td><td>150-250</td></tr>
              <tr><td>Voltage (customizable) (V/Hz)</td><td>380V/50Hz</td></tr>
              <tr><td>Power (Kw/Hp)</td><td>5.5Kw / 7.5Hp</td></tr>
              <tr><td>Machine size (L*W*H) mm</td><td>1500*950*3150</td></tr>
              <tr><td>Machine weight (Kg)</td><td>1200</td></tr>
          </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('blp 30')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLP30;
