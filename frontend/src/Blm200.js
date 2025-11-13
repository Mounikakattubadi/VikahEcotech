import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import mainSpecImage from './images/baler3.png';

// 👉 Replace with your own metal baler images
import metalImg1 from './images/baler.png';
import metalImg2 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg';
import metalImg3 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg';

const Blm200 = () => {
  const [mainImage, setMainImage] = useState(metalImg1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const machinery = 'Baler';
  const model = 'Metal Balers';

  const handleImageClick = (img) => setMainImage(img);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/blm200.pdf`;
    link.download = 'blm200.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className='productpagetop'>
        <div className='imagetop'>
          <div className="main-image-container">
            <img src={mainImage} alt="BLM200" className="sht2000img" style={{ width: "300px", height: "280px" }} />
          </div>

          <div className="additional-images">
            <div><img src={metalImg2} onClick={() => handleImageClick(metalImg2)} /></div>
            <div><img src={metalImg3} onClick={() => handleImageClick(metalImg3)} /></div>
            <div><img src={metalImg1} onClick={() => handleImageClick(metalImg1)} /></div>
          </div>
        </div>

        <div className="productdetails">
          <h1>BLM200</h1>
          <p>
            The <strong>BLM-200</strong> is ideal for medium-to-heavy metal scrap including steel sheets, 
            alloy scrap, and fabricated metal waste. Designed with reinforced steel body.
          </p>
        </div>
      </div>

      <div className='features-container'>
        <h2>FEATURES AND SPECIFICATIONS</h2>
        <div className='features-content'>
          <img src={mainSpecImage} className="specifications-image" />
          <div className='sht200specification'>
            <p>
              ➤ 200-ton hydraulic compaction<br />
              ➤ Heavy-duty steel body<br />
              ➤ Auto bale eject<br />
              ➤ Oil cooling system<br />
              ➤ PLC control panel<br />
            </p>
          </div>
        </div>
      </div>

      <h1 className="technical-heading">Technical Specifications</h1>

      <div className="featurestable">
        <h3>MODEL NO: BLM 200</h3>
        <table>
          <tbody>
            <tr><td>Compression Force</td><td>200 Ton</td></tr>
            <tr><td>Bale Size</td><td>1200 × 800 × (700–900)</td></tr>
            <tr><td>Chamber Size</td><td>1600 × 900 × 700 mm</td></tr>
            <tr><td>Capacity</td><td>4–6 Bales/hr</td></tr>
            <tr><td>Bale Weight</td><td>250–450 Kg</td></tr>
            <tr><td>Power</td><td>15 HP</td></tr>
            <tr><td>Machine Weight</td><td>2200 Kg</td></tr>
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

export default Blm200;
