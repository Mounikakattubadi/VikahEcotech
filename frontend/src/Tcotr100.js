import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import Tyrecuttingimage from './images/tyrecutting1.jpg';
import Tyrecuttingimage1 from './images/tyrecutting2.webp';
import tyrecimage3 from "./images/tyrecutting3.jpg"

const Tcotr100 = () => {
    const [mainImage, setMainImage] = useState(Tyrecuttingimage1);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'tyre-cutting';
    const model = 'TCOTR100';

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
                        <img src={mainImage} alt="sht2000" className="sht2000img" style={{ width: "300px", height: "280px" }} />
                    </div>
                    <div className="additional-images">
                        <div>
                            <img
                                className='angle1'
                                src={tyrecimage3}
                                alt="Angle 1"
                                onClick={() => handleImageClick(tyrecimage3)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle2'
                                src={Tyrecuttingimage}
                                alt="Angle 2"
                                onClick={() => handleImageClick(Tyrecuttingimage)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle3'
                                src={Tyrecuttingimage1}
                                alt="Angle 3"
                                onClick={() => handleImageClick(Tyrecuttingimage1)}
                            />
                        </div>
                    </div>
                </div>
                <div className="productdetails">
                    <h1>{model}</h1>
                    
                    <p>
                        Our TCOTR100 is a high performance tyre shredder model, designed to efficiently process and recycle used/waste tyres with ease.
                        The robust model is built to handle various tyre sizes and types, from PCR to TBR tyres.
                        Equipped with powerful cutting blades and a durable shredding chamber,
                        this TCOTR100 can effectively reduce tyres into smaller and more manageable pieces,
                        making them ready for further recycling or disposal. TCOTR100 operates with precision and speed,
                        ensuring quick and efficient processing of large volumes of tyres.
                    </p>

                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={tyrecimage3} alt="Specifications" className="specifications-image" />
                    <div className='sht200specification'>
                        <p>
                            ➤ Specially Designed Knives with hard face <br />
                            ➤ Service Platform For easy to maintenance <br />
                            ➤ High Throughput low power consumption on drive design <br />
                            ➤ Full PLC controlling electric panel <br />
                            ➤ Specific Stop/Auto Reversal motors Feature <br />
                            ➤ Shaft will be double protected with drive/mechanical mechanism to<br></br> avoid damage by
                            spherical objects. <br />
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="technical-heading">Technical Specifications</h1>
            <div className="featurestable">
                <h3>Electrical System</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Power</td>
                            <td>120 - 160 HP</td>
                        </tr>
                        <tr>
                            <td>No Of Motors</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Voltage</td>
                            <td>As per Clients Requirement</td>
                        </tr>
                        <tr>
                            <td>Drive</td>
                            <td>Electric</td>
                        </tr>
                        <tr>
                            <td>Panel</td>
                            <td>MCC (Shall be suitable to 415v, 3 Phase, 50Hz AC Supply Drive)</td>
                        </tr>
                        <tr>
                            <td>Motor Make</td>
                            <td>Siemens / Crompton</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="cuttingsection">
                <h3>Cutting Section</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Cutting Chamber:</td>
                            <td>1200 x 900 mm</td>
                        </tr>
                        <tr>
                            <td>Blades Thickness</td>
                            <td>35 mm</td>
                        </tr>
                        <tr>
                            <td>Blades Diameter</td>
                            <td>400 mm</td>
                        </tr>
                        <tr>
                            <td>Shaft Diameter</td>
                            <td>180 mm</td>
                        </tr>
                        <tr>
                            <td>Shaft Length</td>
                            <td>1680 mm</td>
                        </tr>
                        <tr>
                            <td>Hopper Height</td>
                            <td>1400 mm</td>
                        </tr>
                        <tr>
                            <td>Discharge Height</td>
                            <td>2550 mm</td>
                        </tr>
                        <tr>
                            <td>Feeding Mechanism</td>
                            <td>Auto</td>
                        </tr>
                        <tr>
                            <td>Production Capacity</td>
                            <td>2000 – 3000 Kg/hr</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="dimensions">
                <h3>Dimensions and Weight</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Equipment Length</td>
                            <td>5000 mm</td>
                        </tr>
                        <tr>
                            <td>Equipment Width</td>
                            <td>1540 mm</td>
                        </tr>
                        <tr>
                            <td>Equipment Height</td>
                            <td>4555 mm</td>
                        </tr>
                        <tr>
                            <td>Transport Height (H)</td>
                            <td>2400 mm</td>
                        </tr>
                        <tr>
                            <td>Equipment Weight (Approx)</td>
                            <td>15500 Kilogram</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('sht2000')}>
                    Download Specifications
                </button>
            </div>
        </>
    );
};

export default Tcotr100;
