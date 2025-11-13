import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import shm2200_main from "./images/shredder_hd.jpg";
import shm2200_angle1 from "./images/shredder_hd1.jpg";
import shm2200_angle2 from "./images/Shedder _ Final PNG.png";

const Shm2200 = () => {
    const [mainImage, setMainImage] = useState(shm2200_main);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = "metal-shredder";
    const model = "SHM2200";

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
                        <img src={mainImage} alt={model} className="sht2000img" />
                    </div>

                    <div className="additional-images">
                        <div>
                            <img
                                className='angle1'
                                src={shm2200_angle1}
                                alt="Angle 1"
                                onClick={() => handleImageClick(shm2200_angle1)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle2'
                                src={shm2200_main}
                                alt="Angle 2"
                                onClick={() => handleImageClick(shm2200_main)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle3'
                                src={shm2200_angle2}
                                alt="Angle 3"
                                onClick={() => handleImageClick(shm2200_angle2)}
                            />
                        </div>
                    </div>
                </div>

                <div className="productdetails">
                    <h1>{model}</h1>
                    <p>
                        The SHM-2200 Metal Shredder is an advanced machine engineered for high-capacity metal scrap processing.
                        It offers robust twin-shaft design, ISO-certified heavy-duty blades, and is optimized for shredding ferrous
                        and non-ferrous metals at scale.
                    </p>
                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={shm2200_angle1} alt="Specifications" className="specifications-image" />
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
                        <tr><td>Power</td><td>60 HP</td></tr>
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
                        <tr><td>Cutting Chamber</td><td>2200 x 900 mm</td></tr>
                        <tr><td>Blade Thickness</td><td>45 mm</td></tr>
                        <tr><td>Rotor Diameter</td><td>360 mm</td></tr>
                        <tr><td>Hopper Height</td><td>1300 mm</td></tr>
                        <tr><td>Discharge Height</td><td>1200 mm</td></tr>
                        <tr><td>Feeding Mechanism</td><td>Auto</td></tr>
                        <tr><td>Production Capacity</td><td>3000-4000 Kg/hr</td></tr>
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
                        <tr><td>Weight (Approx)</td><td>8000 Kg</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('shm2200')}>
                    Download Specifications
                </button>
            </div>
        </>
    );
};

export default Shm2200;
