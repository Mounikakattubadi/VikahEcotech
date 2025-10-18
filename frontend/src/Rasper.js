import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import shredderhd from "./images/R1.png";
import shredderhd1 from "./images/R2.png";
import shredderhdimg from "./images/R4.jpg";

const Sht4000 = () => {
    const [mainImage, setMainImage] = useState(shredderhd1);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'shredder';
    const model = 'Rasper';

    const handleDownload = (fileName) => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
        link.download = `${fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            {/* Heading section similar to SecondaryMetalshredder */}
            <header className="tyrecutting-header text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Rasper</h1>
                </div>
            </header>

            {/* Rest of your  existing JSX */}
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
                    <p>
                        The Rasper Model RST-4000 is an advanced tyre processing machine designed for efficient recycling of shredded tyres.
                        Engineered to handle various tyre sizes and types, including PCR and TBR, this high-performance model features
                        precision-cutting blades and a durable granulating chamber. It transforms shredded materials into uniform granules
                        suitable for diverse recycling applications while operating quietly and efficiently. With its compact design and
                        user-friendly interface, the RST-4000 seamlessly integrates into existing recycling lines,
                        delivering reliable and consistent results that prepare shredded tyres for further processing or repurposing.
                    </p>
                </div>
            </div>


            <div className='features-container'>
                <h2>FEATURES AND SPECIFICATIONS</h2>
                <div className='features-content'>
                    <img src={shredderhd} alt="Specifications" className="specifications-image" />
                    <div className='sht200specification'>

                        <p>
                            ➤ Durable, hard-faced knives.  <br></br>
                            ➤Easy maintenance service platform.  <br></br>
                            ➤ Full PLC control panel. <br></br>
                            ➤ Stop and auto-reversal motors.  <br></br>
                            ➤ Specific Stop/Auto Reversal motors Feature  <br></br>
                            ➤ Shaft double protected with drive and mechanical mechanism<br></br>  to avoid damage from in-spherical objects. <br></br>
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
                <td>180 HP (132 kW)</td>
            </tr>
            <tr>
                <td>No Of Motors</td>
                <td>1 No. ABB Motor</td>
            </tr>
            <tr>
                <td>Voltage</td>
                <td>As per Customer's Requirement</td>
            </tr>
            <tr>
                <td>Drive</td>
                <td>ABB 160kW (H.D.), ACS580, 363A SIZE: R9 ,580-01-360A-4+P944+3B SDT</td>
            </tr>
            <tr>
                <td>Electric Equipment’s</td>
                <td>Schneider / ABB</td>
            </tr>
        </tbody>
    </table>
</div>

<div className="cuttingsection">
    <h3>Cutting Section</h3>
    <table>
        <tbody>
            <tr>
                <td>Cutting Chamber</td>
                <td>L1240 mm × W1100 mm × H1000 mm (Hydraulics Opening)</td>
            </tr>
            <tr>
                <td>Number of Shaft</td>
                <td>1 Nos</td>
            </tr>
            <tr>
                <td>Shaft Diameter</td>
                <td>500 mm</td>
            </tr>
            <tr>
                <td>Shaft Length</td>
                <td>2100 mm</td>
            </tr>
            <tr>
                <td>No. of Rotating Blades</td>
                <td>42 Nos. (L 190 mm × W 58 mm × T 100 mm)</td>
            </tr>
            <tr>
                <td>No. of Static Blades</td>
                <td>6 Nos. (L 380 mm × W 120 mm × T 30 mm)</td>
            </tr>
            <tr>
                <td>No. of Fixed Blade Mounting Blocks</td>
                <td>42 Nos. (L 190 mm × W 135 mm × T 50 mm)</td>
            </tr>
            <tr>
                <td>No. of Blades Locking Blocks (Type 4 Hole)</td>
                <td>42 Nos. (L 190 mm × W 56 mm × T 50 mm)</td>
            </tr>
            <tr>
                <td>Screen</td>
                <td>MS 28 mm (Hydraulics Opening)</td>
            </tr>
        </tbody>
    </table>
</div>

<div className="dimensions">
    <h3>Gearbox and Hydraulics</h3>
    <table>
        <tbody>
            <tr>
                <td>Number of Gear Box</td>
                <td>1 No., REGGIANA RIDUTTORI, RR6500L2MC:1</td>
            </tr>
            <tr>
                <td>Number of Couplings</td>
                <td>02 Nos SYTCO Brakes & Torque Limiter</td>
            </tr>
            <tr>
                <td>Type of Coupling</td>
                <td>Gear Coupling 1 Nos., Torque Limiter Coupling 1 Nos (1000/250 A/kes2ps)</td>
            </tr>
            <tr>
                <td>Type of Bearings and Housing</td>
                <td>J&J SNLN-3040-23040-kenw33-2C55, KVT 143 H3040, 2 Nos</td>
            </tr>
            <tr>
                <td>Hydraulics</td>
                <td>4 Nos 2 ton cylinder with Power Pack yuken 80LPM pump – 2 HP motor</td>
            </tr>
        </tbody>
    </table>
</div>

<div className="dimensions">
    <h3>Dimensions and Heights</h3>
    <table>
        <tbody>
            <tr>
                <td>Equipment Dimension (A x B x C)</td>
                <td>L 5500 mm × W 2400 mm × H 3500 mm</td>
            </tr>
            <tr>
                <td>Hopper Opening (G x F)</td>
                <td>L 1280 mm × W 400 mm</td>
            </tr>
            <tr>
                <td>Hopper Height (E)</td>
                <td>850 mm</td>
            </tr>
            <tr>
                <td>Discharge Height (D)</td>
                <td>1800 mm</td>
            </tr>
            <tr>
                <td>In Feed Height</td>
                <td>2865 mm</td>
            </tr>
        </tbody>
    </table>
</div>
        </div>
    );
};

export default Sht4000;
