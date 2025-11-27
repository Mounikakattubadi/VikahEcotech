import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/Applications/apppcb1.jpg';
import balerImage from './images/Applications/apppcb2.jpg';
import img1 from './images/Applications/apppcb3.jpg';
import img2 from './images/Applications/apppcb5.jpg';

const BLC30 = () => {
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

  return (
    <>
      <div className='productpagetop'>
        <div className='imagetop'>
          <div className="main-image-container">
            <img
              src={mainImage}
              alt="BLC30 Plastic Baler machine main view by Vikah Ecotech"
              className="sht2000img"
              style={{ width: "300px", height: "280px" }}
            />
          </div>
          <div className="additional-images">
            <div>
              <img src={img2} alt="BLC30 machine angle view 1 by Vikah Ecotech" onClick={() => handleImageClick(img2)} />
            </div>
            <div>
              <img src={balerImage} alt="BLC30 machine angle view 2 by Vikah Ecotech" onClick={() => handleImageClick(balerImage)} />
            </div>
            <div>
              <img src={img1} alt="BLC30 machine angle view 3 by Vikah Ecotech" onClick={() => handleImageClick(img1)} />
            </div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLC30</h1>
       
           <p>
            The <strong>BLC-30</strong> Paper & Cardboard Baler is designed for small-to-medium scale cardboard waste management. 
            It offers efficient compaction of cartons, paper sheets, packaging waste and helps reduce storage and transport costs.
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
              ➤ Compact footprint for easy installation <br />
              ➤ User-friendly controls <br />
              ➤ Safe and efficient operation <br />
              ➤ Lower energy consumption <br />
              ➤ Auto bale ejection option available <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLC 30</h3>
        <table>
         <tbody>
            <tr><td>Model</td><td>BLC 30</td></tr>
            <tr><td>Compression Force (Ton)</td><td>30</td></tr>
            <tr><td>Bale size (L*W*H) mm</td><td>1100*700*(450-900)</td></tr>
            <tr><td>Feed opening size (L*H) mm</td><td>1100*500</td></tr>
            <tr><td>Capacity (Bales/Hr)</td><td>4-7</td></tr>
            <tr><td>Bale weight (Kg)</td><td>120-200</td></tr>
            <tr><td>Voltage (Customizable) (V/Hz)</td><td>380V/50Hz</td></tr>
            <tr><td>Power (Kw/Hp)</td><td>5.5Kw / 7.5Hp</td></tr>
            <tr><td>Machine size (L*W*H) mm</td><td>1550*950*3050</td></tr>
            <tr><td>Machine weight (Kg)</td><td>1340</td></tr>
        </tbody>

        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('blc 30')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLC30;
