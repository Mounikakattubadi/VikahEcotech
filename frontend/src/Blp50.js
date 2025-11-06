import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/baler3.png';
import balerImage from './images/baler.png';
import img1 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg';
import img2 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg';

const BLP50 = () => {
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
              alt="BLP50 Plastic Baler machine main view by Vikah Ecotech"
              className="sht2000img"
              style={{ width: "300px", height: "280px" }}
            />
          </div>
          <div className="additional-images">
            <div>
              <img src={img2} alt="BLP50 machine angle view 1 by Vikah Ecotech" onClick={() => handleImageClick(img2)} />
            </div>
            <div>
              <img src={balerImage} alt="BLP50 machine angle view 2 by Vikah Ecotech" onClick={() => handleImageClick(balerImage)} />
            </div>
            <div>
              <img src={img1} alt="BLP50 machine angle view 3 by Vikah Ecotech" onClick={() => handleImageClick(img1)} />
            </div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLP50</h1>
       
          <p>
            The <strong>BLP-50</strong> Plastic Baler is designed for compressing and baling lightweight plastic waste materials 
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
              ➤ Industrial-grade design for continuous operation <br />
              ➤ High compaction ratio for dense bales <br />
              ➤ Automatic cycle and bale ejection <br />
              ➤ Rugged structure with heavy-duty frame <br />
              ➤ Low maintenance and long service life <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLP 50</h3>
        <table>
         <tbody>
            <tr><td>Compaction Force</td><td>50 Ton</td></tr>
            <tr><td>Bale Size</td><td>1000 x 700 x 800 mm</td></tr>
            <tr><td>Bale Weight</td><td>80 – 120 Kg (depending on material)</td></tr>
            <tr><td>Cylinder</td><td>1 Main Cylinder</td></tr>
            <tr><td>Motor Power</td><td>10 HP</td></tr>
            <tr><td>Oil Tank Capacity</td><td>200 Litres</td></tr>
            <tr><td>Machine Weight</td><td>1800 Kg</td></tr>
            <tr><td>Operation</td><td>Automatic / Manual</td></tr>
            <tr><td>Cycle Time</td><td>45 Seconds (Approx.)</td></tr>
            <tr><td>Application</td><td>Bulk plastic films, bottles, drums, packaging waste, etc.</td></tr>
          </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('BLP50')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLP50;
