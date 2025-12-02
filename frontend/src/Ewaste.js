import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import she800_main from "./images/Applications/shredewaste.jpeg";  
import she800_angle1 from "./images/Applications/shredewaste2.webp";
import she800_specs from "./images/Applications/shredewaste3.webp";
import she800_angle2 from "./images/Applications/shredewaste4.jpg";  

const Ewaste = () => {

    const [mainImage, setMainImage] = useState(she800_main);

    const handleImageClick = (img) => {
        setMainImage(img);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'e-waste-primary-shredder';
    const model = 'SHE800';

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
                                className="angle1"
                                src={she800_angle1}
                                alt="Angle 1"
                                onClick={() => handleImageClick(she800_angle1)}
                            />
                        </div>
                        <div>
                            <img
                                className="angle2"
                                src={she800_main}
                                alt="Angle 2"
                                onClick={() => handleImageClick(she800_main)}
                            />
                        </div>
                        <div>
                            <img
                                className="angle3"
                                src={she800_angle2}
                                alt="Angle 3"
                                onClick={() => handleImageClick(she800_angle2)}
                            />
                        </div>
                    </div>
                </div>

                <div className="productdetails">
                    <h1>{model}</h1>
                    <p>
                        The SHE-800 E-Waste Primary Shredder is a heavy-duty industrial machine 
                        engineered for shredding electronic waste such as PCB boards, 
                        laptops, mobile phones, appliances, and mixed electrical scrap. 
                        It delivers high torque, slow RPM shredding ideal for safe and 
                        efficient size reduction before secondary processing.
                        Designed for recycling plants requiring continuous and reliable operation.
                    </p>
                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>

                <div className='features-content'>
                    <img src={she800_specs} alt="Specifications" className="specifications-image" />

                    <div className='sht200specification'>
                        <p>
                            ➤ Robust twin-shaft shredding technology<br />
                            ➤ High-torque, low-speed rotor suitable for e-waste<br />
                            ➤ Hardened alloy steel blades<br />
                            ➤ Auto-reverse overload protection<br />
                            ➤ Shock-absorbing chamber design<br />
                            ➤ PLC integrated automation<br />
                            ➤ Low noise & low vibration operation<br />
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="technical-heading">Technical Specifications</h1>

            <div className="featurestable">
                <h3>Electrical System</h3>
                <table>
                    <tbody>
                        <tr><td>Total Power</td><td>60 HP</td></tr>
                        <tr><td>No Of Motors</td><td>2</td></tr>
                        <tr><td>Voltage</td><td>As per Client Requirement</td></tr>
                        <tr><td>Drive</td><td>Electric</td></tr>
                        <tr><td>Panel</td><td>MCC Type, PLC Controlled</td></tr>
                        <tr><td>Motor Make</td><td>Siemens / Crompton</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="cuttingsection">
                <h3>Cutting Section</h3>
                <table>
                    <tbody>
                        <tr><td>Cutting Chamber</td><td>800 x 700 mm</td></tr>
                        <tr><td>Rotor Diameter</td><td>320 mm</td></tr>
                        <tr><td>Blade Thickness</td><td>40 mm</td></tr>
                        <tr><td>Hopper Height</td><td>1200 mm</td></tr>
                        <tr><td>Discharge Height</td><td>1150 mm</td></tr>
                        <tr><td>Feeding Mechanism</td><td>Auto</td></tr>
                        <tr><td>Processing Capacity</td><td>8000–10000 Kg/hr</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="dimensions">
                <h3>Dimensions and Weight</h3>
                <table>
                    <tbody>
                        <tr><td>Length</td><td>3500 mm</td></tr>
                        <tr><td>Width</td><td>1500 mm</td></tr>
                        <tr><td>Height</td><td>2400 mm</td></tr>
                        <tr><td>Weight (Approx)</td><td>7000 Kg</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('she800')}>
                    Download Specifications
                </button>
            </div>
        </>
    );
};

export default Ewaste;
