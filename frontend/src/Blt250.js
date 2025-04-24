import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Shredderimage from './images/shredder.jpg';

import Shredderimage3 from './images/shredderimg3.jpeg';

import Shredderimage2 from './images/shredder.jpg';
import './ProductsPage.css';
import img1 from './images/baler1.png';
import img3 from './images/baler3.png';
import Baler4 from "./images/baler.png"
import bp3 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg"
import bp4 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg"
import bp5 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg"
import bp2 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.45 AM.jpeg"
import bp1 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.51 AM(1).jpeg"





const BLT250 = () => {
    const [mainImage, setMainImage] = useState(Baler4);

    const handleImageClick = (image) => {
        setMainImage(image);
    };



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'Baler'; 
    const model = 'BLT250';

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
                    <img src={mainImage} alt="sht2000" className="sht2000img"  style={{width:"300px",height:"280px"}} />
                </div>
                <div className="additional-images">
                    <div>
                        <img 
                            className='angle1' 
                            src={bp2} 
                            alt="Angle 1" 
                            onClick={() => handleImageClick(bp2)} 
                       
                        />
                    </div>
                    <div>
                        <img 
                            className='angle2' 
                            src={bp5} 
                            alt="Angle 2" 
                            onClick={() => handleImageClick(bp5)} 
                        
                        />
                    </div>
                    <div>
                        <img 
                            className='angle3' 
                            src={Baler4} 
                            alt="Angle 3" 
                            onClick={() => handleImageClick(Baler4)} 
                          
                        />
                    </div>
                </div>
            </div>
            <div className="productdetails">
                <h1>{model}</h1>
                <div className="reviews">
                    <span className="stars">★★★★★</span>
                    <span>5.0 from 392 Reviews</span>
                </div>
                <p>
                Our BLT-250 is engineered to efficiently compress and package used/waste tyres for storage,
                 transportation and recycling process.  Our BLT-250 comes with a robust hydraulic system and
                  a sturdy compression chamber which can compact a large number of tyres into dense and
                   uniform bales quickly and efficiently.  Our BLT-250 is equipped with user friendly controls and
                    safety features, such as emergency stop functions and safety guards, operators can easily and 
                    safely operate the BLT-150 to achieve optimal compression results.

                </p>
              
            </div>
        </div>


        <div className='features-container'>
            <h2>FEATURES AND SPECIFICATIONS</h2>
            <div className='features-content'>
                <img src={img1} alt="Specifications" className="specifications-image" /> 
                <div className='sht200specification'>
                <p>
                        ➤ Our BLT-250 comes with a robust hydraulic system  <br />
                        ➤ Our BLT-250 is equipped with user friendly controls and safety features <br />
                        ➤ operators can easily and safely operate the BLT-200 to achieve optimal compression results <br />
                        ➤ lowering transportation costs and enhancing overall efficiency <br />
                        ➤ Specific Stop/Auto Reversal motors Feature <br />
                         <br />
                    </p>
                </div>
            </div>
        </div>





    <h1 className="technical-heading">Technical Specifications</h1>

    <div className="featurestable">
        <h3>MODEL NO:  BLT250</h3>
        <table>
            <tbody>
                <tr>
                    <td>Compaction Force</td>
                    <td>250 Ton</td>
                </tr>
                <tr>
                    <td>No of Cylinder</td>
                    <td>2 Nos (Compaction), 2 Nos (Door Locking)</td>
                </tr>
                <tr>
                    <td>Cylinder Size</td>
                    <td>2000 mm(H)</td>
                </tr>
                <tr>
                    <td>No of Doors</td>
                    <td>2 (Front) + 2 (Rear)</td>
                </tr>
                <tr>
                    <td>Bale Weight</td>
                    <td>1200 to 2000 Kg</td>
                </tr>
                <tr>
                    <td>No of Ties</td>
                    <td>5 Nos</td>
                </tr>

                <tr>
                    <td>Oil Tank Capacity</td>
                    <td>	600 Litres</td>
                </tr>
                <tr>
                    <td>Hydraulic Oil Drive</td>
                    <td>Dual Vane Pump with high LPM</td>
                </tr>
                <tr>
                    <td>Electric Motor</td>
                    <td>20 HP + 2HP</td>
                </tr>
                <tr>
                    <td>Tower Light</td>
                    <td>For safety precaution an auto Red light will be on during Baling Process</td>
                </tr>
                <tr>
                    <td>Limit Switch</td>
                    <td>To enhance the Safety of Structure / Hydraulics and reduce the cycle time</td>
                </tr>
                <tr>
                    <td>Pump Type</td>
                    <td>Piston Pump</td>
                </tr>
                <tr>
                    <td>Baler Weight</td>
                    <td>11000 kg</td>
                </tr>
                
            </tbody>
        </table>
    </div>






    <div class="buttons-container">
    <Link to={`/enquire?machinery=${machinery}&model=${model}`}>
        <button className="login-button">Enquire Us</button>
    </Link>

    <button className="downloadspeci-button" onClick={() => handleDownload('blt250')}>
        Download Specifications
    </button>
</div>


</>

    );
};

export default BLT250;

