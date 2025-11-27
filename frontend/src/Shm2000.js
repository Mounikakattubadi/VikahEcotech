import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

import shm_main from "./images/Applications/shredm1.jpg";
import shm_angle1 from "./images/Applications/shredm2.jpg";
import shm_angle2 from "./images/Applications/shredm3.jpg";
import shm_specs from "./images/Applications/shredm4.jpeg";

const Shm2000 = () => {
    const [mainImage, setMainImage] = useState(shm_main);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = "metal-shredder";
    const model = "SHM2000";

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `${process.env.PUBLIC_URL}/shm2000.pdf`;
        link.download = "shm2000.pdf";
        link.click();
    };

    return (
        <>
            {/* Top Section */}
            <div className="productpagetop">
                <div className="imagetop">
                    <div className="main-image-container">
                        <img src={mainImage} alt={model} className="sht2000img" />
                    </div>

                    <div className="additional-images">
                        <img className="angle1" src={shm_angle1} onClick={() => setMainImage(shm_angle1)} />
                        <img className="angle2" src={shm_main} onClick={() => setMainImage(shm_main)} />
                        <img className="angle3" src={shm_angle2} onClick={() => setMainImage(shm_angle2)} />
                    </div>
                </div>

                <div className="productdetails">
                    <h1>{model}</h1>
                    <p>
                        The SHM-2000 Metal Shredder is engineered for heavy-duty shredding of ferrous 
                        and non-ferrous metals. Ideal for recycling yards and industrial scrap processing…
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="features-container">
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className="features-content">
                    <img src={shm_specs} className="specifications-image" />

                    <div className="sht200specification">
                        <p>
                            ➤ Hardened alloy steel blades<br />
                            ➤ Shock-resistant chamber<br />
                            ➤ High torque twin shafts<br />
                            ➤ Automatic overload reverse<br />
                            ➤ PLC control system<br />
                            ➤ Vibration-free structure<br />
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical Specs */}
            <h1 className="technical-heading">Technical Specifications</h1>

            <div className="featurestable">
                <h3>Electrical System</h3>
                <table>
                    <tbody>
                        <tr><td>Power</td><td>50 HP</td></tr>
                        <tr><td>Motors</td><td>2</td></tr>
                        <tr><td>Voltage</td><td>As per requirement</td></tr>
                        <tr><td>Drive</td><td>Electric</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="cuttingsection">
                <h3>Cutting Section</h3>
                <table>
                    <tbody>
                        <tr><td>Chamber</td><td>2000 x 800 mm</td></tr>
                        <tr><td>Blade Thickness</td><td>40 mm</td></tr>
                        <tr><td>Rotor Diameter</td><td>350 mm</td></tr>
                        <tr><td>Capacity</td><td>2000–3000 kg/hr</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="dimensions">
                <h3>Dimensions</h3>
                <table>
                    <tbody>
                        <tr><td>Length</td><td>4200 mm</td></tr>
                        <tr><td>Width</td><td>1600 mm</td></tr>
                        <tr><td>Height</td><td>2400 mm</td></tr>
                        <tr><td>Weight</td><td>7000 kg</td></tr>
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

export default Shm2000;
