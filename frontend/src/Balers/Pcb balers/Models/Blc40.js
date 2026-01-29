import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../Pages/ProductsPage.css";

import mainSpecImage from '../../../images/Applications/apppcb4.jpg';
import balerImage from '../../../images/Applications/apppcb6.webp';
import img1 from '../../../images/Applications/apppcb7.avif';
import img2 from '../../../images/Applications/apppcb8.webp';

const BLC40 = () => {
  const [mainImage, setMainImage] = useState(img1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = 'Baler';
  const model = 'Card Board Balers';

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
            
            {/* 🔍 Wrapper & Icon */}
            <div className="main-image-wrapper">
              <img
                src={mainImage}
                alt="BLC40 Cardboard Baler main view by Vikah Ecotech"
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
              <img src={img2} alt="BLC40 machine angle view 1 by Vikah Ecotech" onClick={() => handleImageClick(img2)} />
            </div>
            <div>
              <img src={balerImage} alt="BLC40 machine angle view 2 by Vikah Ecotech" onClick={() => handleImageClick(balerImage)} />
            </div>
            <div>
              <img src={img1} alt="BLC40 machine angle view 3 by Vikah Ecotech" onClick={() => handleImageClick(img1)} />
            </div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLC-40</h1>
       
           <p>
            The <strong>BLC-40</strong> Paper & Cardboard Baler is designed for medium-capacity operations, handling larger volumes of cartons and packaging.
            It provides higher compaction strength and is ideal for recycling plants, warehouses and logistics centres.
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
              ➤ Heavy-duty hydraulic system <br />
              ➤ Auto bale ejection for faster unloading <br />
              ➤ Energy-efficient motor and compact footprint <br />
              ➤ Suitable for moderate to high volumes <br />
              ➤ Easy to maintain and operate <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLC 40</h3>
        <table>
         <tbody>
            <tr><td>Model</td><td>BLC 40</td></tr>
            <tr><td>Compression Force (Ton)</td><td>40</td></tr>
            <tr><td>Bale size (L*W*H) mm</td><td>1100*700*(450-900)</td></tr>
            <tr><td>Feed opening size (L*H) mm</td><td>1100*500</td></tr>
            <tr><td>Capacity (Bales/Hr)</td><td>4-7</td></tr>
            <tr><td>Bale weight (Kg)</td><td>200-250</td></tr>
            <tr><td>Voltage (Customizable) (V/Hz)</td><td>380V/50Hz</td></tr>
            <tr><td>Power (Kw/Hp)</td><td>5.5Kw / 7.5Hp</td></tr>
            <tr><td>Machine size (L*W*H) mm</td><td>1550*1100*3250</td></tr>
            <tr><td>Machine weight (Kg)</td><td>1500</td></tr>
        </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('blc 40')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLC40;
