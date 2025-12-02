import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import shredderhd from "./images/Applications/shredp7.jpg"
import shredderhd1 from "./images/Applications/shredp8.jpg"
import shredderhdimg from "./images/Applications/shredp2.jpeg"

const Shp200 = () => {

    const [mainImage, setMainImage] = useState(shredderhd);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'shredder';
    const model = 'SHP-200';

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
                                className='angle1'
                                src={shredderhdimg}
                                alt="Angle 1"
                                onClick={() => handleImageClick(shredderhdimg)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle2'
                                src={shredderhd}
                                alt="Angle 2"
                                onClick={() => handleImageClick(shredderhd)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle3'
                                src={shredderhd1}
                                alt="Angle 3"
                                onClick={() => handleImageClick(shredderhd1)}
                            />
                        </div>
                    </div>
                </div>

                <div className="productdetails">
                    <h1>{model}</h1>
                    <p>
                        <strong>SHP-200 Plastic & PET Bottle Shredder</strong> is a high-performance
                        single-shaft shredder engineered for medium-scale recycling facilities.
                        Designed for durability and efficiency, it delivers a shredding capacity of
                        <strong>200 kg/hr</strong>, suitable for PET bottles, poly bags, plastic film waste,
                        and various polymer materials.
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={shredderhdimg} alt="Specifications" className="specifications-image" />

                    <div className='sht200specification'>
                        <p>
                            ➤ High-efficiency single-shaft shredding system<br />
                            ➤ Upgraded 30-inch hardened alloy steel blades<br />
                            ➤ Heavy-duty MS frame with powder-coated finish<br />
                            ➤ Manual feed hopper (optional conveyor feed)<br />
                            ➤ Low-noise, high-torque shredding<br />
                            ➤ Overload protection & reverse control<br />
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical Specifications */}
            <h1 className="technical-heading">Technical Specifications – SHP-200</h1>

            {/* General Specs */}
            <div className="featurestable">
                <h3>General Specifications</h3>
                <table>
                    <tbody>
                        <tr><td>Model</td><td>SHP-200</td></tr>
                        <tr><td>Brand</td><td>Yes Square</td></tr>
                        <tr><td>Shredding Capacity</td><td>200 kg/hr</td></tr>
                        <tr><td>Shredding Material</td><td>Plastic, PET Bottles, Poly Bags, Film Waste</td></tr>
                        <tr><td>Machine Type</td><td>Single Shaft</td></tr>
                        <tr><td>Operating Mode</td><td>Semi-Automatic</td></tr>
                        <tr><td>Country of Origin</td><td>Made in India</td></tr>
                    </tbody>
                </table>
            </div>

            {/* Cutting Section */}
            <div className="cuttingsection">
                <h3>Cutting Section</h3>
                <table>
                    <tbody>
                        <tr><td>Blade Size</td><td>30 inches (upgraded)</td></tr>
                        <tr><td>Crushing Chamber Size</td><td>30"</td></tr>
                        <tr><td>Blade Material</td><td>Alloy Steel / D2 Hardened Steel</td></tr>
                        <tr><td>Body Material</td><td>Heavy Duty Mild Steel Frame</td></tr>
                        <tr><td>Hopper Type</td><td>Manual / Optional Conveyor Feed</td></tr>
                        <tr><td>Output Size</td><td>15–40 mm (based on screen)</td></tr>
                        <tr><td>Surface Finish</td><td>Painted / Powder Coated</td></tr>
                        <tr><td>Machine Weight</td><td>650–700 kg (Approx.)</td></tr>
                    </tbody>
                </table>
            </div>

            {/* Electrical Section */}
            <div className="dimensions">
                <h3>Electrical System</h3>
                <table>
                    <tbody>
                        <tr><td>Motor Power</td><td>20 HP</td></tr>
                        <tr><td>Voltage</td><td>415 V</td></tr>
                        <tr><td>Frequency</td><td>50/60 Hz</td></tr>
                        <tr><td>Motor Type</td><td>3-Phase Induction Motor</td></tr>
                        <tr><td>Control Panel</td><td>Start/Stop with Overload & Reverse</td></tr>
                    </tbody>
                </table>
            </div>

            {/* Warranty Section */}
            <div className="dimensions">
                <h3>Warranty & Support</h3>
                <table>
                    <tbody>
                        <tr><td>Warranty</td><td>1 Year</td></tr>
                        <tr><td>After-Sales Support</td><td>Available</td></tr>
                        <tr><td>Spare Blades</td><td>Available</td></tr>
                    </tbody>
                </table>
            </div>

            {/* Buttons */}
            <div className="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('shp200')}>
                    Download Specifications
                </button>
            </div>
        </>
    );
};

export default Shp200;
