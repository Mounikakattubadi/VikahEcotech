import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../Pages/ProductsPage.css";

import shredderhd from "../../../images/Applications/shredpcb2.jpg"
import shredderhd1 from "../../../images/Applications/shredpcb6.jpg"
import shredderhdimg from "../../../images/Applications/shredpcb7.jpg"

const Shc12000 = () => {
    const [mainImage, setMainImage] = useState(shredderhd);

    const handleImageClick = (image) => {
        setMainImage(image);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'shredder';
    const model = 'SHC-12000';
    const handleDownload = (fileName) => {
        // Create a new anchor element
        const link = document.createElement('a');
        // Set the href to the PDF file
        link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
        // Set the download attribute to the desired file name
        link.download = `${fileName}.pdf`;
        // Append the anchor to the body
        document.body.appendChild(link);
        // Programmatically click the anchor
        link.click();
        // Remove the anchor from the body
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
                        The SHC-12000 is a heavy-duty industrial plastic shredder designed
                        for large-scale operations. Suitable for high-capacity recycling
                        plants, it can process bulky plastic waste, drums, containers, and films.
                        Designed for durability, safety, and continuous operation.
                    </p>
                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={shredderhdimg} alt="Specifications" className="specifications-image" />
                    <div className='sht200specification'>
                        <p>
                            ➤ Heavy-duty twin shaft shredder<br />
                            ➤ Hydraulic pusher feeding system<br />
                            ➤ Full automation and overload protection<br />
                            ➤ Suitable for all types of industrial plastic waste<br />
                            ➤ Robust construction with low maintenance<br />
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="technical-heading">Technical Specifications</h1>
            <div className="featurestable">
                <h3>Electrical System</h3>
                <table>
                    <tbody>
                        <tr><td>Power</td><td>160 HP</td></tr>
                        <tr><td>No Of Motors</td><td>2</td></tr>
                        <tr><td>Voltage</td><td>As per Client’s Requirement</td></tr>
                        <tr><td>Drive</td><td>Electric</td></tr>
                        <tr><td>Panel</td><td>PLC Based MCC</td></tr>
                        <tr><td>Motor Make</td><td>Siemens / Crompton</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="cuttingsection">
                <h3>Cutting Section</h3>
                <table>
                    <tbody>
                        <tr><td>Cutting Chamber</td><td>1400 x 900 mm</td></tr>
                        <tr><td>Knives Thickness</td><td>40 mm</td></tr>
                        <tr><td>Knives Diameter</td><td>450 mm</td></tr>
                        <tr><td>Production Capacity</td><td>12000 Kg/hr</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="dimensions">
                <h3>Dimensions and Weight</h3>
                <table>
                    <tbody>
                        <tr><td>Equipment Length</td><td>5500 mm</td></tr>
                        <tr><td>Equipment Width</td><td>1650 mm</td></tr>
                        <tr><td>Equipment Height</td><td>4800 mm</td></tr>
                        <tr><td>Equipment Weight (Approx)</td><td>17500 Kg</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('sht6000')}>
                    Download Specifications
                </button>
            </div>
        </>

    );
};

export default Shc12000;

