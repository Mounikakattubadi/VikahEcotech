import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import gif from "../images/green_combo_top.gif";
import Baler from "../images/baler.png";
import Baler1 from "../images/baler1.png";
import tyrefolding from "../images/tyre folding1.jpg";
import envirotechimg from "../images/envirotech/envirotechimg.png";
import ifatimg from "../images/ifat-india-300x218.png";
import ecosustainimg from "../images/ecosustain.png";
import rsme from "../images/Recyclingexpo_middleeast_2025/logo_rsme.jpg";
import bgImage from "../images/backimg.avif";
import ece from "../images/eco sustain 2025/ese.png";
import Homecards from "./Homecards";
import bharatrecycling from "../images/bharatrecycling.png";


function Home() {
  const productsRef = useRef(null);
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const scrollCards = (direction) => {
  //   const container = document.getElementById("tradeCardScroll");
  //   const scrollAmount = 320;
  //   if (direction === "left") {
  //     container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  //   } else {
  //     container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load

  const testimonials = [
    {
      company: "EUROPEAN ASIAN METALS LTD (UK)",
      feedback:
        "We recently purchased a Baler machine from Vikah Ecotech and we couldn’t be happier with the product. The quality of the machine is top notch, and it has significantly increased our baling production. The customer service provided by the team at Vikah Ecotech was exceptional. We highly recommend Vikah Ecotech machinery to anyone in the recycling industry.",
      author: "J.Shannu",
      image: Baler,
    },
    {
      company: "LG ENVIRONMENTAL SERVICES LLC (SAUDI ARABIA)",
      feedback:
        "I have been using Vikah Ecotech Tyre Cutting and Folding equipments and I have to say that their machines are built to last. I recently added a shredder line and it has been performing beyond my expectations. The precision and reliability of their shredders are truly impressive. Thank you Vikah Ecotech for providing such high quality machines.",
      author: "Mohammad El Assai",
      image: tyrefolding,
    },
    {
      company: "MTC (NEW ZEALAND)",
      feedback:
        "After extensive research, we decided to purchase a new baler machine from Vikah Ecotech, and it was one of the best decisions we made for our business. The machine has streamlined our baling process, saving us both time and money. The time at Vikah Ecotech was extremely helpful throughout the purchasing process guiding all customizable solutions and also their after sales support has been fantastic. We are extremely satisfied with our purchase.",
      author: "Capt Ject",
      image: Baler1,
    },
    {
      company: "VENKATA SIVA SAI INDUSTRIES (INDIA)",
      feedback:
        "We recently bought a baler machine for waste tyres and the quality of the machine is exceptionally good with no maintenance. The quality of the structure and the baling force are top quality. After sales service by the team in Vikah are very helpful and attending all our queries in no time. Happy with their service. Keep going Vikah Ecotech.",
      author: "K.Kumar",
      image: Baler,
    },
    {
      company: "GREEN EARTH RECYCLERS PTE LTD (SINGAPORE)",
      feedback:
        "We purchased a complete tyre recycling line from Vikah Ecotech, and the performance has been outstanding. The installation was smooth, and the machines run efficiently with minimal downtime. Their team provided excellent technical guidance and ensured we understood every part of the process. Truly a reliable partner for long-term industrial needs.",
      author: "Daniel Wong",
      image: tyrefolding, // or any image you prefer
    },

  ];

  const [current, setCurrent] = React.useState(0);

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [activeTab, setActiveTab] = useState("upcoming");

const scrollRef = useRef(null);

const scrollCards = (direction) => {
  const container = scrollRef.current;
  if (!container) return;

  const card = container.querySelector(".trade-card");
  if (!card) return;

  const cardWidth = card.getBoundingClientRect().width + 20;

  if (direction === "left") {
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  } else {
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  }
};


  return (
    <>
      <div
        className="home-container"
        onClick={scrollToProducts}
        style={{ cursor: "pointer" }}
      >
        <img src={gif} alt="Top Animation" />
      </div>

      {/* Content section with Bootstrap grid layout */}
      <div className="container my-5">
        <div className="text-center mx-auto" style={{ maxWidth: "800px" }}>
          <h2 className="green-heading mb-3">
            Your Partner in Sustainable Recycling Solutions
          </h2>
          <p className="mb-4">
            At Vikah Ecotech, we are dedicated to pioneering innovative
            solutions in the field of recycling machinery manufacturing. With a
            commitment to sustainability and environmental stewardship, we
            design and produce cutting-edge machinery that empowers industries
            to efficiently process waste materials and contribute to a circular
            economy.
          </p>
          <Link to="/About">
            <button className="btn btn-success">Learn More</button>
          </Link>
        </div>
      </div>

      <div ref={productsRef}>
        <Homecards />
      </div>


      {/* Trade Fair Section */}
      <div className="container my-5">
        <h2 className="green-heading text-center mb-4">
          Trade Fairs & Exhibitions
        </h2>

        {/* Tab Buttons */}
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn-tab mx-2 ${activeTab === "upcoming" ? "active" : ""
              }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Trade Fair
          </button>
          <button
            className={`btn-tab mx-2 ${activeTab === "completed" ? "active" : ""
              }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed Trade Fairs
          </button>
        </div>

        <div className="position-relative">
          {/* Scroll Buttons */}
          <button
            className="scroll-btn left"
            onClick={() => scrollCards("left")}
          >
            &#8249;
          </button>
          <button
            className="scroll-btn right"
            onClick={() => scrollCards("right")}
          >
            &#8250;
          </button>

          {/* Scrollable Cards */}
          <div
  ref={scrollRef}
  className={`trade-scroll-wrapper d-flex ${
    activeTab === "upcoming" ? "single-card" : ""
  }`}
>
            {activeTab === "upcoming" && (
              <>
                {/* 1. Recycling Expo Middle East */}
                <div className="trade-card position-relative">
                  <div className="upcoming-badge">Upcoming Trade Fair</div>
                  <img
                    src={rsme}
                    alt="Recycling Expo Middle East"
                    className="trade-img"
                  />
                  <div className="trade-content p-3">
                    <h5>Recycling Expo Middle East</h5>
                    <p>
                      Organized by Eljays44, a seasoned global event company,
                      Recycling Expo Middle East 2025 is a premier B2B platform
                      uniting industry leaders, innovators, and decision-makers.
                    </p>
                    <p><strong>Date:</strong> June-2026</p>
                    <p><strong>Location:</strong> The Arena, Riyadh, Saudi Arabia</p>
                    <p><strong>Booth No:</strong> A52</p>
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

                {/* 2. IFAT Germany 2026 */}
                <div className="trade-card position-relative">
                  <div className="upcoming-badge">Upcoming Trade Fair</div>
                  <img src={ifatimg} alt="IFAT Germany 2026" className="trade-img" />
                  <div className="trade-content p-3">
                    <h5>IFAT Germany</h5>
                    <p>
                      IFAT Germany is the world’s leading trade fair for environmental
                      technologies, focusing on water, sewage, waste, and recycling.
                    </p>
                    <p><strong>Date:</strong> 09-09-2026 to 11-09-2026</p>
                    <p><strong>Location:</strong> Bombay Exhibition Centre</p>
                    <p><strong>Hall No:</strong> 02</p>
                    <p><strong>Booth No:</strong> C021</p>
                    <a
                      href="https://ifat.de/en/trade-fair/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore IFAT Germany
                    </a>
                  </div>
                </div>

                {/* 3. Bharat Recycling Show 2026 */}
                <div className="trade-card position-relative">
                  <div className="upcoming-badge">Upcoming Trade Fair</div>
                  <img
                    src={bharatrecycling}
                    alt="Bharat Recycling Show 2026"
                    className="trade-img"
                  />
                  <div className="trade-content p-3">
                    <h5>Bharat Recycling Show</h5>
                    <p>
                      Bharat Recycling Show is a premier platform dedicated to India’s
                      recycling and waste management industry, bringing together
                      manufacturers, recyclers, and innovators.
                    </p>
                    <p><strong>Date:</strong> 31-08-2026 to 02-09-2026</p>
                    <p><strong>Location:</strong> Bombay Exhibition Centre Nesco, Mumbai </p>
                    <p><strong>Hall No:</strong> 4</p>
                    <p><strong>Booth No:</strong> B410</p>
                    <a
                      href="https://www.bharatrecyclingshow.com/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore Bharat Recycling Show
                    </a>
                  </div>
                </div>
              </>
            )}

            {activeTab === "completed" && (
              <>
                <div className="trade-card position-relative">
                  <img src={ifatimg} alt="IFAT India" className="trade-img" />
                  <div className="trade-content p-3">
                    <h5>IFAT India</h5>
                    <p>
                      IFAT India brings together professionals from water,
                      sewage, waste, and recycling industries to foster
                      knowledge sharing, networking, and collaboration among
                      policymakers, industry leaders, and environmental experts.
                    </p>
                    <p>
                      <strong>Date:</strong> 14-10-2025 to 16-10-2025
                    </p>
                    <p>
                      <strong>Location:</strong> Bombay Exhibition Centre,
                      Mumbai
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

                <div className="trade-card position-relative">
                  <img src={ece} alt="Eco Sustain Expo" className="trade-img" />
                  <div className="trade-content p-3">
                    <h5>Eco Sustain Expo & Conference</h5>
                    <p>
                      Eco Sustain Expo & Conference, an exceptional event
                      meticulously crafted by HITEX, Hyderabad that brings
                      together a diverse community of professionals,
                      visionaries, policymakers, researchers, and solution
                      providers, all bound by a resolute dedication to shaping a
                      sustainable future.
                    </p>
                    <p>
                      <strong>Date:</strong> 22-08-2025 to 24-08-2025
                    </p>
                    <p>
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
                      Images and Videos
                    </Link>
                  </div>
                </div>
                {/* Completed Card 2 */}
                <div className="trade-card">
                  <img
                    src={envirotechimg}
                    alt="EnviroTech Asia"
                    className="trade-img"
                  />
                  <div className="trade-content p-3">
                    <h5>EnviroTech Asia 2024</h5>
                    <p>
                      The 7th edition will provide a platform for business
                      leaders, investors, government officials, industry
                      experts, and NGOs to share insights and opportunities in
                      environmental protection and green business. It will be
                      one of the largest gatherings in the environment sector,
                      bringing together key stakeholders to drive sustainable
                      development and environmental preservation.
                    </p>
                    <p>
                      <strong>Date:</strong> 3–5 Dec 2024
                    </p>
                    <p>
                      <strong>Location:</strong> Yashobhoomi Convention Center,
                      Dwarka, Delhi
                    </p>
                    <Link to="/Tradefairs" className="btn btn-success">
                      Know More
                    </Link>
                  </div>
                </div>

                {/* Completed Card 3 */}
                <div className="trade-card">
                  <img src={ifatimg} alt="IFAT India" className="trade-img" />
                  <div className="trade-content p-3">
                    <h5>IFAT India</h5>
                    <p>
                      IFAT India has been bringing together professionals and
                      experts from various sectors of the water, sewage, waste,
                      and recycling industry, providing the entire industry with
                      a platform for knowledge exchange, networking, and the
                      opportunity to forge partnerships between industry
                      players, policy makers, and environmental experts.
                    </p>
                    <p>
                      <strong>Date:</strong> 16–18 Oct 2024
                    </p>
                    <p>
                      <strong>Location:</strong> Mumbai Exhibition Centre
                    </p>
                    <p>
                      <strong>Booth No:</strong> D016, Hall:3
                    </p>
                    <Link to="/ifat" className="btn btn-success">
                      Images and videos
                    </Link>
                  </div>
                </div>

                {/* Completed Card 4 */}
                <div className="trade-card">
                  <img
                    src={ecosustainimg}
                    alt="Eco Sustain Expo"
                    className="trade-img"
                  />
                  <div className="trade-content p-3">
                    <h5>Eco Sustain Expo & Conference</h5>
                    <p>
                      Eco Sustain Expo & Conference, an exceptional event
                      meticulously crafted by HITEX, Hyderabad that brings
                      together a diverse community of professionals,
                      visionaries, policymakers, researchers, and solution
                      providers, all bound by a resolute dedication to shaping a
                      sustainable future.
                    </p>
                    <p>
                      <strong>Date:</strong> 16–18 Aug 2024
                    </p>
                    <p>
                      <strong>Location:</strong> HITEX Exhibition Center,
                      Hyderabad
                    </p>
                    <p>
                      <strong>Booth No:</strong> 4N01
                    </p>
                    <Link to="/completedTradefair1" className="btn btn-success">
                      Images and Videos
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className="testimonial-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="testimonial-card">
          <h4 className="green-heading mb-4">What Our Clients Say</h4>
          <button className="testimonial-btn left" onClick={prev}>
            &#8249;
          </button>

          <div className="testimonial-content">
            {/* 👇 Add image here */}
            <img
              src={testimonials[current].image}
              alt={testimonials[current].author}
              className="testimonial-avatar"
            />

            <h5 className="testimonial-company">
              {testimonials[current].company}
            </h5>
            <p className="testimonial-text">
              "{testimonials[current].feedback}"
            </p>
            <p className="testimonial-author">
              – {testimonials[current].author}
            </p>
          </div>

          <button className="testimonial-btn right" onClick={next}>
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
