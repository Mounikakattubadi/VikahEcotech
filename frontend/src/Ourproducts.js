import React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Baler from "./images/baler.png";
import tyrefolding from "./images/tyre folding1.jpg"
import Tyrecuttingimg from "./images/tyrecutting1.jpg";
import shredderhdimg from "./images/Shedder _ Final PNG.png"
import img1 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg';
import img2 from './images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg';
import shredderhd from "./images/shredder_hd.jpg"
import shredderhd1 from "./images/shredder_hd1.jpg"
import OtherEquipment from './OtherEquipment';


function Ourproducts() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
  return (
    <div>
        <div className="about-top-section text-white text-center py-5">
        <h1 className="display-5 fw-bold">Our Products</h1>
        <p className="lead">At Vikah Ecotech, we specialize in designing and manufacturing high-quality recycling balers machinery that is tailored
             to meet the diverse needs of industries and facilities involved in waste management and recycling processes</p>
        <p><a href="/" className="text-white-50 text-decoration-none">Home</a> &gt; <span className="text-white">Products</span></p>
      </div>
            <div className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading">Our Products</h2>
          <div className="row justify-content-center">
            {/* Product Cards */}
            
            {/* <div className="col-6 col-md-3 mb-4">
            <Link to="/Baler">
              <div className="product-card">
                <img src={Baler} alt="Balers" className="product-img" />
                <div className="product-label">Balers</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/shredder">
              <div className="product-card">
                <img src={shredderhdimg} alt="Shredders" className="product-img" />
                <div className="product-label">Shredders</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/tyrecutting">
              <div className="product-card">
                <img src={Tyrecuttingimg} alt="Cutting Equipment" className="product-img" />
                <div className="product-label">Cutting Equipment</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/tyrefolding">
              <div className="product-card">
                <img src={tyrefolding} alt="Folding Equipment" className="product-img" />
                <div className="product-label">Folding Equipment</div>
              </div></Link>
            </div> */}
            <div className="col-6 col-md-3 mb-4">
            <Link to="/blt150">
              <div className="product-card">
                <img src={Baler} alt="Balers" className="product-img" />
                <div className="product-label">Blt150</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/blt200">
              <div className="product-card">
                <img src={img1} alt="Balers" className="product-img" />
                <div className="product-label">Blt200</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/blt250">
              <div className="product-card">
                <img src={img2} alt="Balers" className="product-img" />
                <div className="product-label">Blt250</div>
              </div></Link>
            </div>
            
            <div className="col-6 col-md-3 mb-4">
            <Link to="/plasticbaler">
              <div className="product-card">
                <img src={Baler} alt="Balers" className="product-img" />
                <div className="product-label">Plastic Baler</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/pcb">
              <div className="product-card">
                <img src={img1} alt="Balers" className="product-img" />
                <div className="product-label">Paper and Cardboard Balers</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/metalbaler">
              <div className="product-card">
                <img src={img2} alt="Balers" className="product-img" />
                <div className="product-label">metal baler</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/sht6000">
              <div className="product-card">
                <img src={shredderhd} alt="Balers" className="product-img" />
                <div className="product-label">Sht6000</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/sht8000">
              <div className="product-card">
                <img src={shredderhd1} alt="Balers" className="product-img" />
                <div className="product-label">sht8000</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/sht12000">
              <div className="product-card">
                <img src={shredderhdimg} alt="Balers" className="product-img" />
                <div className="product-label">sht12000</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/metalshredder">
              <div className="product-card">
                <img src={shredderhdimg} alt="Balers" className="product-img" />
                <div className="product-label">Metal Shredder</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/plasticshredder">
              <div className="product-card">
                <img src={shredderhd} alt="Balers" className="product-img" />
                <div className="product-label">Plastic Shredder</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/papershredder">
              <div className="product-card">
                <img src={shredderhdimg} alt="Balers" className="product-img" />
                <div className="product-label">Paper Shredder</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/rasper">
              <div className="product-card">
                <img src={shredderhdimg} alt="Balers" className="product-img" />
                <div className="product-label">Rasper</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/secondarymetalshredder">
              <div className="product-card">
                <img src={shredderhd1} alt="Balers" className="product-img" />
                <div className="product-label">Secondary Metal Shredder</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/secondaryplasticshredder">
              <div className="product-card">
                <img src={shredderhd} alt="Balers" className="product-img" />
                <div className="product-label">Secondary plastic Shredder</div>
              </div></Link>
            </div>
            <div className="col-6 col-md-3 mb-4">
            <Link to="/secondarypcb">
              <div className="product-card">
                <img src={shredderhd} alt="Balers" className="product-img" />
                <div className="product-label">Secondary paper and cardboard shredder</div>
              </div></Link>
            </div>

<OtherEquipment/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourproducts
