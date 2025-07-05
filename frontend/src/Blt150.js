import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/baler3.png';
import balerImage from './images/baler.png';
import img1 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg';
import img2 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg';

const BLT150 = () => {
  const [mainImage, setMainImage] = useState(img1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = 'Baler';
  const model = 'BLT150';

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
              alt="BLT150 machine main view by Vikah Ecotech"
              className="sht2000img"
              style={{ width: "300px", height: "280px" }}
            />
          </div>
          <div className="additional-images">
            <div>
              <img src={img2} alt="BLT150 machine angle view 1 by Vikah Ecotech" onClick={() => handleImageClick(img2)} />
            </div>
            <div>
              <img src={balerImage} alt="BLT150 machine angle view 2 by Vikah Ecotech" onClick={() => handleImageClick(balerImage)} />
            </div>
            <div>
              <img src={img1} alt="BLT150 machine angle view 3 by Vikah Ecotech" onClick={() => handleImageClick(img1)} />
            </div>
          </div>
        </div>

        <div className="productdetails">
          <h1>{model}</h1>
       
          <p>
            Our BLT-150 is engineered to efficiently compress and package used/waste tyres for storage, transportation, and recycling. It features a robust hydraulic system and a sturdy compression chamber to produce uniform bales quickly and efficiently. The user-friendly controls and safety features ensure optimal and safe operation.
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
              ➤ Robust hydraulic system <br />
              ➤ User-friendly controls and safety features <br />
              ➤ Safe and efficient operation <br />
              ➤ Lower transportation costs <br />
              ➤ Stop/Auto Reversal motors feature <br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLT 150</h3>
        <table>
          <tbody>
            <tr><td>Compaction Force</td><td>150 Ton</td></tr>
            <tr><td>No of Cylinder</td><td>2 Nos (Compaction), 2 Nos (Door Locking)</td></tr>
            <tr><td>Cylinder Size</td><td>2000 mm(H)</td></tr>
            <tr><td>No of Doors</td><td>2 (Front) + 2 (Rear)</td></tr>
            <tr><td>Bale Weight</td><td>800 to 1200 Kg</td></tr>
            <tr><td>No of Ties</td><td>5 Nos</td></tr>
            <tr><td>Oil Tank Capacity</td><td>600 Litres</td></tr>
            <tr><td>Hydraulic Oil Drive</td><td>Dual Vane Pump with high LPM</td></tr>
            <tr><td>Electric Motor</td><td>20 HP + 2 HP</td></tr>
            <tr><td>Tower Light</td><td>Auto red light during baling process for safety</td></tr>
            <tr><td>Limit Switch</td><td>For safety & cycle time reduction</td></tr>
            <tr><td>Pump Type</td><td>Piston Pump</td></tr>
            <tr><td>Baler Weight</td><td>9000 kg</td></tr>
          </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('blt150')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLT150;
