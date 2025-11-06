import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/baler3.png';
import balerImage from './images/baler.png';
import img1 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg';
import img2 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg';

const BLP40 = () => {
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

  return (
    <>
      <div className='productpagetop'>
        <div className='imagetop'>
          <div className="main-image-container">
            <img
              src={mainImage}
              alt="BLP40 Plastic Baler machine main view by Vikah Ecotech"
              className="sht2000img"
              style={{ width: "300px", height: "280px" }}
            />
          </div>
          <div className="additional-images">
            <div>
              <img src={img2} alt="BLP40 machine angle view 1 by Vikah Ecotech" onClick={() => handleImageClick(img2)} />
            </div>
            <div>
              <img src={balerImage} alt="BLP40 machine angle view 2 by Vikah Ecotech" onClick={() => handleImageClick(balerImage)} />
            </div>
            <div>
              <img src={img1} alt="BLP40 machine angle view 3 by Vikah Ecotech" onClick={() => handleImageClick(img1)} />
            </div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLP40</h1>
       
          <p>
            The <strong>BLP-40</strong> Plastic Baler is designed for compressing and baling lightweight plastic waste materials 
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
              ➤ Heavy-duty hydraulic system for higher compaction <br />
              ➤ Easy to operate and maintain <br />
              ➤ Auto bale ejector for faster unloading <br />
              ➤ Energy-efficient motor <br />
              ➤ Compact footprint for limited space installations <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLP 40</h3>
            <table>
              <tbody>
                <tr><td>Model</td><td>BLP 40</td></tr>
                <tr><td>Compression Force (Ton)</td><td>40</td></tr>
                <tr><td>Bale size (L*W*H) mm</td><td>1100*750*(650-900)</td></tr>
                <tr><td>Feed opening size (L*H) mm</td><td>1100*500</td></tr>
                <tr><td>Capacity (Bales/Hr)</td><td>3-5</td></tr>
                <tr><td>Bale weight (Kg)</td><td>200-350</td></tr>
                <tr><td>Voltage (customizable) (V/Hz)</td><td>380V/50Hz</td></tr>
                <tr><td>Power (Kw/Hp)</td><td>5.5Kw / 7.5Hp</td></tr>
                <tr><td>Machine size (L*W*H) mm</td><td>1500*1000*3150</td></tr>
                <tr><td>Machine weight (Kg)</td><td>1700</td></tr>
              </tbody>
            </table>

      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('blp 40')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLP40;
