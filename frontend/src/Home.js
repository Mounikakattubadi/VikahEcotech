import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import gif from "./images/top3.gif";
import partnerImage from "./images/Tradefair/1.12.jpg";
import Baler from "./images/baler.png";
import Baler1 from "./images/baler1.png";
import tyrefolding from "./images/tyre folding1.jpg";
import Tyrecuttingimg from "./images/tyrecutting1.jpg";
import shredderhdimg from "./images/Shedder _ Final PNG.png";
import envirotechimg from "./images/envirotech/envirotechimg.png";
import ifatimg from "./images/ifat-india-300x218.png";
import ecosustainimg from "./images/ecosustain.png";
import bgImage from "./images/backimg.avif";
import ece from "./images/eco sustain 2025/ese.png";
import shred2 from "./images/secondaryshredder2.jpg";
import Homecards from "./Homecards";

function Home() {
  const productsRef = useRef(null);
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

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeTab, setActiveTab] = useState("upcoming");

  const scrollCards = (direction) => {
    const container = document.getElementById("tradeCardScroll");
    if (direction === "left") {
      container.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
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
<Homecards/>
</div>
      {/* Our Products Section with background image */}
      {/* <div ref={productsRef} className="products-section-bg py-5">
        <div className="container text-center">
          <h2 className="green-heading">Our Products</h2>
          <div className="row justify-content-center">
            
            <div className="col-6 col-md-3 mb-4">
              <Link to="/Baler">
                <div className="product-card">
                  <img src={Baler} alt="Balers" className="product-img" />
                  <div className="product-label">Baler</div>
                </div>
              </Link>
            </div>

           
            <div className="col-6 col-md-3 mb-4">
              <Link to="/shredder">
                <div className="product-card">
                  <img src={shredderhdimg} alt="Primary Shredder" className="product-img" />
                  <div className="product-label">Primary Shredder</div>
                </div>
              </Link>
            </div>

            
            <div className="col-6 col-md-3 mb-4">
              <Link to="/secondaryShredder">
                <div className="product-card">
                  <img src={shred2} alt="Secondary Shredder" className="product-img" />
                  <div className="product-label">Secondary Shredder</div>
                </div>
              </Link>
            </div>

           
            <div className="col-6 col-md-3 mb-4">
              <Link to="/other-equipment">
                <div className="product-card">
               
                  <div className="product-img text-center d-flex align-items-center justify-content-center" style={{ height: '150px', backgroundColor: 'rgb(162, 251, 167)' }}>
                    Click Here
                  </div>
                  <div className="product-label">Other Equipment</div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div> */}
      


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
    <div className={`trade-scroll-wrapper d-flex ${activeTab === 'upcoming' ? 'single-card' : ''}`} id="tradeCardScroll">
      {activeTab === "upcoming" && (
        <>
          {/* Upcoming Card 1 */}
          <div className="trade-card position-relative">
            <div className="upcoming-badge">Upcoming Trade Fair</div>
            <img src={ece} alt="Eco Sustain Expo" className="trade-img" />
            <div className="trade-content p-3">
              <h5>Eco Sustain Expo & Conference</h5>
              <p>
                Eco Sustain Expo & Conference, an exceptional event
                meticulously crafted by HITEX, Hyderabad that brings
                together a diverse community of professionals, visionaries,
                policymakers, researchers, and solution providers, all bound
                by a resolute dedication to shaping a sustainable future.
              </p>
              <p><strong>Date:</strong> 22-08-2025 to 24-08-2025</p>
              <p><strong>Location:</strong> HITEX Exhibition Center, Hyderabad</p>
              <p><strong>Stall No:</strong> C06</p>
              <a
                href="https://ecosustainexpo.in/"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Expo 2025
              </a>
            </div>
          </div>

          {/* Upcoming Card 2 */}
          <div className="trade-card position-relative">
            <div className="upcoming-badge">Upcoming Trade Fair</div>
            <img src={ifatimg} alt="Eco Sustain Expo" className="trade-img" />
            <div className="trade-content p-3">
              <h5>IFAT India</h5>
              <p>
                IFAT India has been bringing together professionals and experts from various sectors of the water, sewage, waste, 
                and recycling industry, providing the entire industry with a platform for knowledge exchange, networking, 
                and the opportunity to forge partnerships between industry players, policy makers, and environmental experts.
              </p>
              <p><strong>Date:</strong> 14-10-2025 to 16-10-2025</p>
              <p><strong>Location:</strong> Bombay Exhibition Centre, Mumbai</p>
              <p><strong>Booth No:</strong> 2 / F025 </p>
              <a
                href="https://ifat.de/en/india/"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Ifat 2025
              </a>
            </div>
          </div>
        </>
      )}

            {activeTab === "completed" && (
              <>
                {/* Completed Card 1 */}
                <div className="trade-card">
                  <img
                    src={envirotechimg}
                    alt="EnviroTech Asia"
                    className="trade-img"
                  />
                  <div className="trade-content p-3">
                    <h5>EnviroTech Asia 2024</h5>
                    <p>
                      The 7th edition will provide a platform for business leaders, investors, government officials, industry experts,
                      and NGOs to share insights and opportunities in environmental protection and green business. It will be one of the largest
                      gatherings in the environment sector, bringing
                      together key stakeholders to drive sustainable development and environmental preservation.
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

                {/* Completed Card 2 */}
                <div className="trade-card">
                  <img src={ifatimg} alt="IFAT India" className="trade-img" />
                  <div className="trade-content p-3">
                    <h5>IFAT India</h5>
                    <p>
                      IFAT India has been bringing together professionals and experts from various sectors of the water, sewage, waste,
                      and recycling industry, providing the entire industry with a platform for knowledge exchange, networking,
                      and the opportunity to forge partnerships between industry players, policy makers, and environmental experts.
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
                      Know More
                    </Link>
                  </div>
                </div>

                {/* Completed Card 3 */}
                <div className="trade-card">
                  <img
                    src={ecosustainimg}
                    alt="Eco Sustain Expo"
                    className="trade-img"
                  />
                  <div className="trade-content p-3">
                    <h5>Eco Sustain Expo & Conference</h5>
                    <p>
                      Eco Sustain Expo & Conference, an exceptional event meticulously crafted by HITEX, Hyderabad that brings together a diverse community
                      of professionals, visionaries, policymakers, researchers,
                      and solution providers, all bound by a resolute dedication to shaping a sustainable future.
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
                      Know More
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
