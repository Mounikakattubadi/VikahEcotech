import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../Pages/ProductsPage.css";

import shredderhd from "../../../images/Applications/shredp1.png"
import shredderhd1 from "../../../images/Applications/shredp2.jpeg"
import shredderhdimg from "../../../images/Applications/shredp6.webp"

const Shp100 = () => {
    const [mainImage, setMainImage] = useState(shredderhd);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'shredder';
    const model = 'SHP-100';

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

                {/* Updated Details */}
                <div className="productdetails">
                    <h1>{model}</h1>
                    <p>
                        The SHP100 Plastic & PET Bottle Shredder is designed for efficient
                        shredding of plastic waste, PET bottles, and poly bags. Built with
                        strong components and a durable single-shaft design, it offers smooth
                        semi-automatic shredding performance suitable for small-scale and
                        medium-scale recycling operations.
                    </p>
                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={shredderhdimg} alt="Specifications" className="specifications-image" />

                    <div className='sht200specification'>
                        <p>
                            ➤ Efficient single-shaft shredding system<br />
                            ➤ Designed for plastics, PET bottles & poly bags<br />
                            ➤ Smooth and consistent shredding operation<br />
                            ➤ Low maintenance & energy-efficient<br />
                            ➤ Semi-automatic operating mode<br />
                            ➤ Best suitable for recycling units & scrap dealers<br />
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="technical-heading">Technical Specifications – YS-PBS100</h1>

            {/* BASE TECHNICAL TABLE */}
            <div className="featurestable">
                <table>
                    <tbody>
                        <tr><td>Model</td><td>YS-PBS100</td></tr>
                        <tr><td>Brand</td><td>Yes Square</td></tr>
                        <tr><td>Shredding Capacity</td><td>100 kg/hr</td></tr>
                        <tr><td>Shredding Material</td><td>Plastic, PET Bottles, Poly Bags</td></tr>
                        <tr><td>Shredder Type</td><td>Single Shaft Shredder</td></tr>
                        <tr><td>Operating Mode</td><td>Semi-Automatic</td></tr>
                        <tr><td>Country of Origin</td><td>Made in India</td></tr>
                    </tbody>
                </table>
            </div>

            {/* MECHANICAL SPECIFICATIONS */}
            <div className="featurestable">
                <h3>Mechanical Specifications</h3>
                <table>
                    <tbody>
                        <tr><td>Blade Size</td><td>24 inches</td></tr>
                        <tr><td>Crushing Chamber Size</td><td>24"</td></tr>
                        <tr><td>Blade Material</td><td>Alloy Steel / D2 (Hardened)</td></tr>
                        <tr><td>Body Material</td><td>Mild Steel (Heavy Duty)</td></tr>
                        <tr><td>Surface Finish</td><td>Painted</td></tr>
                        <tr><td>Hopper Type</td><td>Manual Feed Hopper</td></tr>
                        <tr><td>Output Size</td><td>20–40 mm (depends on screen size)</td></tr>
                        <tr><td>Machine Weight</td><td>460 kg (Approx.)</td></tr>
                    </tbody>
                </table>
            </div>

            {/* ELECTRICAL SPECIFICATIONS */}
            <div className="featurestable">
                <h3>Electrical Specifications</h3>
                <table>
                    <tbody>
                        <tr><td>Motor Power</td><td>15 HP</td></tr>
                        <tr><td>Voltage</td><td>415 V</td></tr>
                        <tr><td>Frequency</td><td>60 Hz</td></tr>
                        <tr><td>Motor Type</td><td>3-Phase Induction Motor</td></tr>
                        <tr><td>Control Type</td><td>Start/Stop Panel with Overload Protection</td></tr>
                    </tbody>
                </table>
            </div>

            {/* SUPPORT & WARRANTY */}
            <div className="featurestable">
                <h3>Support & Warranty</h3>
                <table>
                    <tbody>
                        <tr><td>Warranty</td><td>1 Year</td></tr>
                        <tr><td>After-Sales Support</td><td>Available</td></tr>
                        <tr><td>Spare Blades</td><td>Available</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('sht100')}>
                    Download Specifications
                </button>
            </div>
        </>
    );
};

export default Shp100;
