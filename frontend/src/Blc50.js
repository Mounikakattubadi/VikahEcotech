import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/baler3.png';
import balerImage from './images/baler.png';
import img1 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg';
import img2 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg';

const BLC50 = () => {
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
              alt="BLC50 Plastic Baler machine main view by Vikah Ecotech"
              className="sht2000img"
              style={{ width: "300px", height: "280px" }}
            />
          </div>
          <div className="additional-images">
            <div>
              <img src={img2} alt="BLC50 machine angle view 1 by Vikah Ecotech" onClick={() => handleImageClick(img2)} />
            </div>
            <div>
              <img src={balerImage} alt="BLC50 machine angle view 2 by Vikah Ecotech" onClick={() => handleImageClick(balerImage)} />
            </div>
            <div>
              <img src={img1} alt="BLC50 machine angle view 3 by Vikah Ecotech" onClick={() => handleImageClick(img1)} />
            </div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLC50</h1>
       
          <p>
            The <strong>BLC-50</strong> Paper & Cardboard Baler is our most powerful model in the series. Built for industrial use, it handles bulk cardboard and paper waste with ease and delivers high throughput and durability.
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
              ➤ Industrial-grade hydraulic system for continuous operation <br />
              ➤ High compaction ratio for dense bales <br />
              ➤ Fully automatic bale cycle options available <br />
              ➤ Robust construction and low maintenance design <br />
              ➤ High throughput for heavy-duty facilities <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLC 50</h3>
        <table>
          <tbody>
            <tr><td>Compaction Force</td><td>50 Ton</td></tr>
            <tr><td>Bale Size</td><td>1100 x 800 x 900 mm</td></tr>
            <tr><td>Bale Weight</td><td>~100 – 150 Kg (depending on material)</td></tr>
            <tr><td>Cylinder</td><td>1 Main Cylinder</td></tr>
            <tr><td>Motor Power</td><td>10 HP</td></tr>
            <tr><td>Oil Tank Capacity</td><td>200 Litres</td></tr>
            <tr><td>Machine Weight</td><td>2000 Kg</td></tr>
            <tr><td>Operation</td><td>Automatic / Manual</td></tr>
            <tr><td>Cycle Time</td><td>~45 Seconds (Approx.)</td></tr>
            <tr><td>Application</td><td>Bulk Cardboard, Paper Waste, Packaging Recycling</td></tr>
          </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('BLC50')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLC50;
