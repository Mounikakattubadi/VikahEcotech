import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import Baler4 from "./images/baler.png"
import bp3 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg"
import bp4 from "./images/Applications/app12.jpg"
import bp2 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.45 AM.jpeg"
import bp1 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.51 AM(1).jpeg"

const BLT200 = () => {
    const [mainImage, setMainImage] = useState(bp2);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'Baler';
    const model = 'BLT-200';

    const handleDownload = (fileName) => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
        link.download = `${fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleViewImage = () => {
        window.open(mainImage, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <div className='productpagetop'>
                <div className='imagetop'>
                    <div className="main-image-container">
                        <div className="main-image-wrapper">
                            <img
                                src={mainImage}
                                alt="BLT200 machine main view by Vikah Ecotech"
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
                            <img
                                className='angle1'
                                src={bp1}
                                alt="BLT200 machine angle view 1 by Vikah Ecotech"
                                onClick={() => handleImageClick(bp1)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle2'
                                src={Baler4}
                                alt="BLT200 machine angle view 2 by Vikah Ecotech"
                                onClick={() => handleImageClick(Baler4)}
                            />
                        </div>
                        <div>
                            <img
                                className='angle3'
                                src={bp4}
                                alt="BLT200 machine angle view 3 by Vikah Ecotech"
                                onClick={() => handleImageClick(bp4)}
                            />
                        </div>
                    </div>
                </div>

                <div className="productdetails">
                    <h1>{model}</h1>

                    <p>
                        Our BLT-200 is engineered to efficiently compress and package used/waste tyres for storage,
                        transportation and recycling process. Our BLT-200 comes with a robust hydraulic system and
                        a sturdy compression chamber which can compact a large number of tyres into dense and uniform
                        bales quickly and efficiently. Our BLT-200 is equipped with user friendly controls and safety
                        features, such as emergency stop functions and safety guards, so operators can easily and safely
                        operate the BLT-200 to achieve optimal compression results.
                    </p>
                </div>
            </div>

            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={bp3} alt="Specifications" className="specifications-image" />
                    <div className='sht200specification'>
                        <p>
                            ➤ Our BLT-200 comes with a robust hydraulic system  <br />
                            ➤ Our BLT-200 is equipped with user friendly controls and safety features <br />
                            ➤ Operators can easily and safely operate the BLT-200 to achieve optimal compression results <br />
                            ➤ Lowering transportation costs and enhancing overall efficiency <br />
                            ➤ Specific Stop/Auto Reversal motors Feature <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="technical-heading">Technical Specifications</h1>
            <div className="featurestable">
                <h3>MODEL NO:  BLT200</h3>
                <table>
                    <tbody>
                        {/* General Information */}
                        <tr><th colSpan="2">General Information</th></tr>
                        <tr><td>Model</td><td>BLT 200</td></tr>
                        <tr><td>Application</td><td>Designed for compressing and packaging used/waste tyres for storage, transport, and recycling</td></tr>
                        <tr><td>Structure</td><td>MS (Mild Steel) heavy-duty frame</td></tr>
                        <tr><td>Operation Type</td><td>Hydraulic door opening (manual & electric operation)</td></tr>
                        <tr><td>Machine Type</td><td>Integrated vertical baler (manual door opening)</td></tr>
                        <tr><td>Baler Weight</td><td>9000 kg</td></tr>
                        <tr><td>Machine Weight</td><td>7000 kg</td></tr>
                        <tr><td>Capacity</td><td>4–5 bales/hour</td></tr>
                        <tr><td>Overall Height</td><td>4700 mm</td></tr>

                        {/* Compression & Hydraulic System */}
                        <tr><th colSpan="2">Compression & Hydraulic System</th></tr>
                        <tr><td>Compaction Force</td><td>200 Ton</td></tr>
                        <tr><td>No. of Cylinders</td><td>2 (Compaction) + 2 (Door Locking)</td></tr>
                        <tr><td>Cylinder Size</td><td>2000 mm (H)</td></tr>
                        <tr><td>Compaction Type</td><td>Vertical hydraulic compression</td></tr>
                        <tr><td>Pump Type</td><td>Piston Pump</td></tr>
                        <tr><td>Hydraulic Oil Drive</td><td>Dual vane pump with high LPM (high flow rate)</td></tr>
                        <tr><td>Oil Tank Capacity</td><td>600 Litres</td></tr>
                        <tr><td>Hydraulic Components</td><td>England brand sealing parts; brand superposition-type valve group</td></tr>
                        <tr><td>Motor–Pump Connection</td><td>Direct coupling for perfect concentricity and extended life</td></tr>

                        {/* Chamber & Bale Details */}
                        <tr><th colSpan="2">Chamber & Bale Details</th></tr>
                        <tr><td>Chamber Size (L × W × H)</td><td>1800 × 1000 × 2100 mm</td></tr>
                        <tr><td>Bale Size (L × W × H)</td><td>1800 × 1000 × (700–1250) mm</td></tr>
                        <tr><td>Bale Weight</td><td>1000 – 1600 kg</td></tr>
                        <tr><td>Feed Opening Size (L × H)</td><td>1800 × 750 mm</td></tr>
                        <tr><td>No. of Ties</td><td>5 Nos</td></tr>
                        <tr><td>No. of Doors</td><td>4 total (2 Front + 2 Rear)</td></tr>

                        {/* Electrical & Power System */}
                        <tr><th colSpan="2">Electrical & Power System</th></tr>
                        <tr><td>Electric Motor</td><td>20 HP + 2 HP</td></tr>
                        <tr><td>Total Power</td><td>22 kW / 30 HP</td></tr>
                        <tr><td>Voltage (Customizable)</td><td>380V / 50Hz</td></tr>
                        <tr><td>Power Supply</td><td>240W AC</td></tr>
                        <tr><td>Drive Type</td><td>Dual motor setup</td></tr>
                        <tr><td>Motor Connection</td><td>Direct drive to pump for maximum efficiency</td></tr>

                        {/* Safety & Control Features */}
                        <tr><th colSpan="2">Safety & Control Features</th></tr>
                        <tr><td>Tower Light</td><td>Auto red light during baling process (safety indication)</td></tr>
                        <tr><td>Limit Switch</td><td>Ensures structural & hydraulic safety; reduces cycle time</td></tr>
                        <tr><td>Safety Guards</td><td>Provided around moving parts</td></tr>
                        <tr><td>Emergency Stop</td><td>Equipped for operator safety</td></tr>
                        <tr><td>Control Type</td><td>Manual & Electric valve operation</td></tr>

                        {/* Performance & Application */}
                        <tr><th colSpan="2">Performance & Application</th></tr>
                        <tr><td>Suitable Materials</td><td>Automobile tyres, waste rubber, rubber raw materials</td></tr>
                        <tr><td>Output</td><td>Dense, uniform tyre bales</td></tr>
                        <tr><td>Productivity</td><td>4–5 bales per hour</td></tr>
                        <tr><td>Benefits</td><td>Reduces storage space, lowers transportation costs, improves recycling efficiency</td></tr>
                        <tr><td>Ideal For</td><td>Tyre recycling plants, rubber waste management units, and industrial recycling centers</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="buttons-container">
                <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('blt200')}>
                    Download Specifications
                </button>
            </div>
        </>
    );
};

export default BLT200;
