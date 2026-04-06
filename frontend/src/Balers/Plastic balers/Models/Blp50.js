import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../Pages/ProductsPage.css";

import mainSpecImage from '../../../images/Applications/plas16.jpg';
import balerImage from '../../../images/Applications/plas17.jpeg';
import img1 from '../../../images/Applications/plas18.jpeg';
import img2 from '../../../images/Applications/plasticbaler2.jpg';
import styles from "../../../Styles/ProductHeader.module.css";


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

  // 🔍 Open current image in new tab
  const handleViewImage = () => {
    window.open(mainImage, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
    <header className={styles.productHeader}>
  <div className={styles.headerContent}>
    <div className={styles.breadcrumb}>
      Home / Products / <span>BLP-50 Plastic Baler</span>
    </div>

    <h1 className={styles.productTitle}>
      BLP-<span>50</span>
    </h1>

    <p className={styles.productSubtitle}>
      Heavy-duty plastic baler machine built for compressing PET bottles,
      plastic films, packaging waste, and sheets with higher bale density,
      improved efficiency, and reliable hydraulic performance.
    </p>

    <div className={styles.headerButtons}>
      <button
        className={styles.primaryBtn}
        onClick={() => handleDownload("blp 50")}
      >
        Download Brochure
      </button>

      <button
        className={styles.secondaryBtn}
        onClick={handleViewImage}
      >
        View Machine Image
      </button>
    </div>
  </div>
</header>
      <div className='productpagetop'>
        <div className='imagetop'>
          <div className="main-image-container">

            {/* 🔍 Wrapper with icon */}
            <div className="main-image-wrapper">
              <img
                src={mainImage}
                alt="BLP50 Plastic Baler machine main view by Vikah Ecotech"
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
          <h1>BLP-50</h1>
       
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
                <tr><td>Model</td><td>BLP 50</td></tr>
                <tr><td>Compression Force (Ton)</td><td>50</td></tr>
                <tr><td>Bale size (L*W*H) mm</td><td>1500*750*(700-1000)</td></tr>
                <tr><td>Feed opening size (L*H) mm</td><td>1500*600</td></tr>
                <tr><td>Capacity (Bales/Hr)</td><td>3-5</td></tr>
                <tr><td>Bale weight (Kg)</td><td>350-500</td></tr>
                <tr><td>Voltage (customizable) (V/Hz)</td><td>380V/50Hz</td></tr>
                <tr><td>Power (Kw/Hp)</td><td>7.5Kw / 10Hp</td></tr>
                <tr><td>Machine size (L*W*H) mm</td><td>1850*1200*3300</td></tr>
                <tr><td>Machine weight (Kg)</td><td>2300</td></tr>
            </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
          <button className="login-button">Enquire Us</button>
        </Link>
        <button className="downloadspeci-button" onClick={() => handleDownload('blp 50')}>
          Download Specifications
        </button>
      </div>
    </>
  );
};

export default BLP50;
