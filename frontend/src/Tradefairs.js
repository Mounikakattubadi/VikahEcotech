import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Tradefairs.css";

import envirotechimg from "./images/envirotech/envirotechimg.png";
import ifatimg from "./images/ifat-india-300x218.png";
import ecosustainimg from "./images/ecosustain.png";
import ece from "./images/eco sustain 2025/ese.png";
import rsme from "./images/Recyclingexpo_middleeast_2025/logo_rsme.jpg";

const TradeFairs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tradefairs-wrapper">
      {/* Full-width Top Gradient Section */}
      <div className="about-top-section text-white text-center py-5">
        <h1 className="display-5 fw-bold">Trade Fairs & Exhibitions</h1>
        <p className="lead">
          Explore the key environmental expos and sustainability events we
          participate in, where innovation meets responsibility.
        </p>
        <p>
          <Link to="/" className="text-white-50 text-decoration-none">
            Home
          </Link>{" "}
          &gt; <span className="text-white">Trade Fairs & Exhibitions</span>
        </p>
      </div>

      <div className="container my-5">
        <div className="row gy-4 p-3">
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column position-relative">
              <div className="upcoming-badge">Upcoming Trade Fair</div>
              <img
                src={rsme}
                alt="Recycling Expo Middle East"
                className="trade-img"
              />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div className="trade-content p-3">
                  <h5>Recycling Expo Middle East</h5>

                  {/* Upcoming: Recycling Expo Middle East 2025 */}
                  <p>
                    Organized by Eljays44, a seasoned global event company,
                    Recycling Expo Middle East 2025 is a premier B2B platform
                    uniting industry leaders, innovators, and decision-makers.
                    Featuring groundbreaking recycling technologies,
                    thought-leadership seminars, interactive zones, and key
                    networking, it drives innovation in the waste management
                    sector.
                  </p>
                  <p>
                    <strong>Date:</strong> 11-11-2025 to 12-11-2025
                  </p>
                  <p>
                    <strong>Location:</strong> The Arena, Riyadh, Saudi Arabia
                  </p>
                  <p>
                    <strong>Booth No:</strong> A52
                  </p>
                  <a
                    href="https://www.recyclingexpome.com/"
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Recycling Expo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column position-relative">
              
              <img src={ifatimg} alt="IFAT India 2025" className="trade-img" />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                {/* Upcoming: IFAT India 2025 */}

                <div className="trade-content p-3">
                  <h5>IFAT India</h5>
                  <p>
                    IFAT India has been bringing together professionals and
                    experts from various sectors of the water, sewage, waste,
                    and recycling industry, providing the entire industry with a
                    platform for knowledge exchange, networking, and the
                    opportunity to forge partnerships between industry players,
                    policy makers, and environmental experts.
                  </p>
                  <p>
                    <strong>Date:</strong> 14-10-2025 to 16-10-2025
                  </p>
                  <p>
                    <strong>Location:</strong> Bombay Exhibition Centre, Mumbai
                  </p>
                  <p>
                    <strong>Booth No:</strong> 2 / B005
                  </p>
                  <Link
                    to="/ifat2025"
                    className="tradefairs-btn mt-3 align-self-start"
                  >
                    Images and Videos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming: Eco Sustain Expo 2025 */}
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column position-relative">
              <img
                src={ece}
                alt="Eco Sustain Expo"
                className="tradefairs-img"
              />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="mb-2">Eco Sustain Expo & Conference</h5>
                  <p>
                    Eco Sustain Expo & Conference, an exceptional event
                    meticulously crafted by HITEX, Hyderabad that brings
                    together a diverse community of professionals, visionaries,
                    policymakers, researchers, and solution providers, all bound
                    by a resolute dedication to shaping a sustainable future. In
                    a world grappling with pressing global challenges like
                    climate change, our event serves as a pivotal platform to
                    drive transformative change in waste management practices,
                    inspire innovative solutions, and ignite a cleaner, greener
                    world. Be part of this impactful movement with HITEX and
                    let’s create a positive ripple effect for our planet.
                  </p>
                  <p className="mb-1">
                    <strong>Date:</strong> 22-08-2025 to 24-08-2025
                  </p>
                  <p className="mb-1">
                    <strong>Location:</strong> HITEX Exhibition Center,
                    Hyderabad
                  </p>
                  <p>
                    <strong>Stall No:</strong> C06
                  </p>
                  <Link
                    to="/ecosustain2025"
                    className="tradefairs-btn mt-3 align-self-start"
                  >
                    images and videos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Completed: EnviroTech Asia 2024 */}
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column">
              <img
                src={envirotechimg}
                alt="EnviroTech Asia"
                className="tradefairs-img"
              />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="mb-2">EnviroTech Asia 2024</h5>
                  <p>
                    The 7th edition will provide a platform for business
                    leaders, investors, government officials, industry experts,
                    and NGOs to share insights and opportunities in
                    environmental protection and green business. It will be one
                    of the largest gatherings in the environment sector,
                    bringing together key stakeholders to drive sustainable
                    development and environmental preservation.
                  </p>
                  <p className="mb-1">
                    <strong>Date:</strong> 3–5 Dec 2024
                  </p>
                  <p>
                    <strong>Location:</strong> Yashobhoomi Convention Center,
                    Dwarka, Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Completed: IFAT India 2024 */}
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column">
              <img src={ifatimg} alt="IFAT India" className="tradefairs-img" />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="mb-2">IFAT India 2024</h5>
                  <p>
                    Eco Sustain Expo & Conference, an exceptional event
                    meticulously crafted by HITEX, Hyderabad that brings
                    together a diverse community of professionals, visionaries,
                    policymakers, researchers, and solution providers, all bound
                    by a resolute dedication to shaping a sustainable future.
                  </p>
                  <p className="mb-1">
                    <strong>Date:</strong> 16–18 Oct 2024
                  </p>
                  <p className="mb-1">
                    <strong>Location:</strong> Mumbai Exhibition Centre
                  </p>
                  <p>
                    <strong>Booth No:</strong> D016, Hall:3
                  </p>
                </div>
                <Link
                  to="/ifat"
                  className="tradefairs-btn mt-3 align-self-start"
                >
                  images and videos
                </Link>
              </div>
            </div>
          </div>

          {/* Completed: Eco Sustain Expo 2024 */}
          <div className="col-md-6">
            <div className="tradefairs-card h-100 d-flex flex-column">
              <img
                src={ecosustainimg}
                alt="Eco Sustain Expo"
                className="tradefairs-img"
              />
              <div className="tradefairs-content flex-grow-1 d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="mb-2">Eco Sustain Expo & Conference</h5>
                  <p>
                    Eco Sustain Expo & Conference, an exceptional event
                    meticulously crafted by HITEX, Hyderabad that brings
                    together a diverse community of professionals, visionaries,
                    policymakers, researchers, and solution providers, all bound
                    by a resolute dedication to shaping a sustainable future. In
                    a world grappling with pressing global challenges like
                    climate change, our event serves as a pivotal platform to
                    drive transformative change in waste management practices,
                    inspire innovative solutions, and ignite a cleaner, greener
                    world. Be part of this impactful movement with HITEX and
                    let’s create a positive ripple effect for our planet.
                  </p>
                  <p className="mb-1">
                    <strong>Date:</strong> 16–18 Aug 2024
                  </p>
                  <p className="mb-1">
                    <strong>Location:</strong> HITEX Exhibition Center,
                    Hyderabad
                  </p>
                  <p>
                    <strong>Booth No:</strong> 4N01
                  </p>
                </div>
                <Link
                  to="/CompletedTradefair1"
                  className="tradefairs-btn mt-3 align-self-start"
                >
                  images and videos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeFairs;
