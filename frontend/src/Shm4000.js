import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import shm4000_main from "./images/Applications/shredm5.jpg";
import shm4000_angle1 from "./images/Applications/shredm6.jpg";
import shm4000_angle2 from "./images/Applications/shredm7.jpg";

const Shm4000 = () => {
    const [mainImage, setMainImage] = useState(shm4000_main);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = "metal-shredder";
    const model = "SHM-4000";

    const handleDownload = (fileName) => {
        const link = document.createElement("a");
        link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
        link.download = `${fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleImageClick = (img) => {
        setMainImage(img);
    };

    return (
        <>
            <div className='productpagetop'>
                <div className='imagetop'>
                    <div className="main-image-container">
                        <div className="main-image-wrapper">
                            <img
                                src={mainImage}
                                alt="SHT8000 Tyre Shredder main view by Vikah Ecotech"
                                className="sht2000img"
                            />
                            <span
                                className="view-image-icon"
                                onClick={() => window.open(mainImage, '_blank', 'noopener,noreferrer')}
                                title="View full image"
                            >
                                🔍
                            </span>
                        </div>
                    </div>

                    <div className="additional-images">
                        <div>
                            <img
                                className='angle1'
                                src={shm4000_angle1}
                                alt="Angle 1"
                                onClick={() => handleImageClick(shm4000_angle1)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle2'
                                src={shm4000_main}
                                alt="Angle 2"
                                onClick={() => handleImageClick(shm4000_main)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle3'
                                src={shm4000_angle2}
                                alt="Angle 3"
                                onClick={() => handleImageClick(shm4000_angle2)}
                            />
                        </div>
                    </div>
                </div>

                <div className="productdetails">
                    <h1>{model}</h1>
                    <p>
                        The SHM-4000 Metal Shredder is an advanced machine engineered for high-capacity metal scrap processing.
                        It offers robust twin-shaft design, ISO-certified heavy-duty blades, and is optimized for shredding ferrous
                        and non-ferrous metals at scale.
                    </p>
                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={shm4000_angle1} alt="Specifications" className="specifications-image" />
                    <div className='sht200specification'>
                        <p>
                            ➤ Twin-shaft high-torque rotor system<br />
                            ➤ Hardened alloy steel blades with extended lifespan<br />
                            ➤ Overload-reverse protection and safety interlocks<br />
                            ➤ PLC-controlled automation and monitoring<br />
                            ➤ Vibration-absorbing frame for smoother operation<br />
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="technical-heading">Technical Specifications</h1>

            <div className="featurestable">
                <h3>Electrical System</h3>
                <table>
                    <tbody>
                        <tr><td>Power</td><td>180-220 HP</td></tr>
                        <tr><td>No Of Motors</td><td>2</td></tr>
                        <tr><td>Voltage</td><td>As per Client’s Requirement</td></tr>
                        <tr><td>Drive</td><td>Electric</td></tr>
                        <tr><td>Panel</td><td>MCC Type, PLC Controlled</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="cuttingsection">
                <h3>Cutting Section</h3>
                <table>
                    <tbody>
                        <tr><td>Cutting Chamber</td><td>4000 x 900 mm</td></tr>
                        <tr><td>Blade Thickness</td><td>50 mm</td></tr>
                      <tr><td>Blade Diameter</td><td>500 mm</td></tr>
                        <tr><td>Rotor Diameter</td><td>360 mm</td></tr>
                        <tr><td>Hopper Height</td><td>1300 mm</td></tr>
                        <tr><td>Discharge Height</td><td>1200 mm</td></tr>
                        <tr><td>Feeding Mechanism</td><td>Auto</td></tr>
                        <tr><td>Production Capacity</td><td>4000-4500 Kg/hr</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="dimensions">
                <h3>Dimensions and Weight</h3>
                <table>
                    <tbody>
                        <tr><td>Length</td><td>4300 mm</td></tr>
                        <tr><td>Width</td><td>1650 mm</td></tr>
                        <tr><td>Height</td><td>2450 mm</td></tr>
                        <tr><td>Weight (Approx)</td><td>12000 Kg</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('shm4000')}>
                    Download Specifications
                </button>
            </div>
        </>
    );
};

export default Shm4000;
