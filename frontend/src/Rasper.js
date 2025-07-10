import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import shredderhd from "./images/secondaryshredder1.jpg";
import shredderhd1 from "./images/secondaryshredder2.jpg";
import shredderhdimg from "./images/secondaryshredder3.jpg";

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

            {/* Rest of your existing JSX */}
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
                            <td>180 HP</td>
                        </tr>
                        <tr>
                            <td>No Of Motors</td>
                            <td>1</td>
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
                            <td>Siemens / Abb / Equivalent
</td>
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
                            <td>1600 x 960 mm</td>
                        </tr>
                        <tr>
                            <td>Blades Thickness</td>
                            <td>45 mm</td>
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

                    </tbody>
                </table>
            </div>

            <div className="dimensions">
                <h3>Dimensions and Weight</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Equipment Length</td>
                            <td>6000 mm</td>
                        </tr>
                        <tr>
                            <td>Equipment Width</td>
                            <td>2200 mm</td>
                        </tr>
                        <tr>
                            <td>Equipment Height</td>
                            <td>4855 mm</td>
                        </tr>
                        <tr>
                            <td>Transport Height (H)</td>
                            <td>2700 mm</td>
                        </tr>
                        <tr>
                            <td>Equipment Weight (Approx)</td>
                            <td>22500 Kilogram</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="buttons-container">
                <Link to={`/login?machinery=${machinery}&model=${model}`}>
                    <button className="login-button">Enquire Us</button>
                </Link>

                <button className="downloadspeci-button" onClick={() => handleDownload('sht8000')}>
                    Download Specifications
                </button>
            </div>
        </div>
    );
};

export default Sht4000;
