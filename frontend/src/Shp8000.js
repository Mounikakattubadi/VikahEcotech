import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import shredderhd from "./images/shredder_hd.jpg"
import shredderhd1 from "./images/shredder_hd1.jpg"
import shredderhdimg from "./images/Shedder _ Final PNG.png"

const Shp8000 = () => {
    const [mainImage, setMainImage] = useState(shredderhd);

    const handleImageClick = (image) => {
        setMainImage(image);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'shredder';
    const model = 'SHP8000';
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
                        <img src={mainImage} alt="sht2000" className="sht2000img" />
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
                        SHP-8000 Plastic Shredder is an industrial-grade dual shaft shredder 
                        designed to handle large volumes of mixed plastic waste. 
                        Its robust blades and powerful motors ensure consistent shredding 
                        of hard and soft plastics into uniform flakes for recycling.
                    </p>
                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={shredderhdimg} alt="Specifications" className="specifications-image" />
                    <div className='sht200specification'>
                       <p>
                            ➤ Twin-shaft shredding system for high efficiency<br />
                            ➤ Replaceable alloy steel blades<br />
                            ➤ PLC automation and overload protection<br />
                            ➤ Maintenance platform for easy access<br />
                            ➤ Low-speed, high-torque operation for durability<br />
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="technical-heading">Technical Specifications</h1>
            <div className="featurestable">
                <h3>Electrical System</h3>
                <table>
                    <tbody>
                        <tr><td>Power</td><td>80 HP</td></tr>
                        <tr><td>No Of Motors</td><td>2</td></tr>
                        <tr><td>Voltage</td><td>As per Client’s Requirement</td></tr>
                        <tr><td>Drive</td><td>Electric</td></tr>
                        <tr><td>Panel</td><td>PLC Based Control Panel</td></tr>
                        <tr><td>Motor Make</td><td>Siemens / Crompton</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="cuttingsection">
                <h3>Cutting Section</h3>
                <table>
                     <tbody>
                        <tr><td>Cutting Chamber</td><td>1000 x 650 mm</td></tr>
                        <tr><td>Knives Thickness</td><td>30 mm</td></tr>
                        <tr><td>Knives Diameter</td><td>350 mm</td></tr>
                        <tr><td>Hopper Height</td><td>1200 mm</td></tr>
                        <tr><td>Production Capacity</td><td>8000 Kg/hr</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="dimensions">
                <h3>Dimensions and Weight</h3>
                <table>
                    <tbody>
                        <tr><td>Equipment Length</td><td>4000 mm</td></tr>
                        <tr><td>Equipment Width</td><td>1450 mm</td></tr>
                        <tr><td>Equipment Height</td><td>3200 mm</td></tr>
                        <tr><td>Equipment Weight (Approx)</td><td>9500 Kg</td></tr>
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

export default Shp8000;

