import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Tradefairs.css';
import envirotechimg from './images/envirotech/envirotechimg.png';
import ifatimg from './images/ifat-india-300x218.png';
import ecosustainimg from './images/ecosustain.png';

const TradeFairs = () => {
   useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

  return (
    <div className="tradefairs-wrapper">
      {/* Full-width Top Gradient Section */}
      <div className="about-top-section text-white text-center py-5">
        <h1 className="display-5 fw-bold">Trade Fairs & Exhibitions</h1>
        <p className="lead">Explore the key environmental expos and sustainability events we participate in, where innovation meets responsibility.</p>
        <p><Link to="/" className="text-white-50 text-decoration-none">Home</Link> &gt; <span className="text-white">Trade Fairs & Exhibitions</span></p>
      </div>

      <div className="container my-5">
        <div className="row gy-4">
          {/* EnviroTech Asia */}
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column">
              <img src={envirotechimg} alt="EnviroTech Asia" className="tradefairs-img" />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="mb-2">EnviroTech Asia 2024</h5>
                  <p>The 7th edition will provide a platform for business leaders, investors, government officials, industry experts,
             and NGOs to share insights and opportunities in environmental protection and green business. It will be one of the largest gatherings 
             in the environment sector, bringing together key stakeholders to drive sustainable development and environmental preservation.</p>
          <p><strong>Date:</strong> 3–5 Dec 2024</p>
                  <p className="mb-1"><strong>Date:</strong> 3–5 Dec 2024</p>
                  <p><strong>Location:</strong> Yashobhoomi Convention Center, Dwarka, Delhi</p>
                </div>
                <Link to="" className="tradefairs-btn mt-3 align-self-start">Know More</Link>
              </div>
            </div>
          </div>

          {/* IFAT India */}
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column">
              <img src={ifatimg} alt="IFAT India" className="tradefairs-img" />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="mb-2">IFAT India 2024</h5>
                  <p>Eco Sustain Expo & Conference, an exceptional event meticulously crafted by HITEX, Hyderabad that 
            brings together a diverse community of professionals, visionaries, policymakers, researchers, and
             solution providers, all bound by a resolute dedication to shaping a sustainable future.</p>
        
                  <p className="mb-1"><strong>Date:</strong> 16–18 Oct 2024</p>
                  <p className="mb-1"><strong>Location:</strong> Mumbai Exhibition Centre</p>
                  <p><strong>Booth No:</strong> D016, Hall:3</p>
                </div>
                <Link to="/ifat" className="tradefairs-btn mt-3 align-self-start">Know More</Link>
              </div>
            </div>
          </div>

          {/* Eco Sustain */}
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column">
              <img src={ecosustainimg} alt="Eco Sustain Expo" className="tradefairs-img" />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="mb-2">Eco Sustain Expo & Conference</h5>
                  <p>The 7th edition will provide a platform for business leaders, investors, government officials, industry experts,
             and NGOs to share insights and opportunities in environmental protection and green business. It will be one of the largest gatherings 
             in the environment sector, bringing together key stakeholders to drive sustainable development and environmental preservation.</p>
                  <p className="mb-1"><strong>Date:</strong> 16–18 Aug 2024</p>
                  <p className="mb-1"><strong>Location:</strong> HITEX Exhibition Center, Hyderabad</p>
                  <p><strong>Booth No:</strong> 4N01</p>
                </div>
                <Link to="/CompletedTradefair1" className="tradefairs-btn mt-3 align-self-start">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeFairs;
