import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import contactcss from './About.module.css';
import t9 from "./images/eco sustain 2025/images/contactbg.png";

const offices = [
  {
    country: "India",
    flag: "🇮🇳",
    company: "Vikah Ecotech (Head Office)",
    isHead: true,
    addresses: [
      "Admin off: #406, 4th Floor, Patel Towers, Above EasyBuy, Near Nagole RTO Office, Nagole, Hyderabad-500068, Telangana, India",
      "Unit: Plot No - 81, Phase-III, Mahalaxmi Nagar, IDA Cherlapally, Rangareddy District, Hyderabad-500051"
    ],
    phone: "+914049471616",
    mobile: "+91 9515162108",
    email: "Info@VikahEcotech.com",
    website: "www.vikhaecotech.com"
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    company: "LAVA RUBBER FZ LLC",
    addresses: [
      "FDRK4258, Compass Building, A1 Shohada Road, Al Hamra Industrial Zone – FZ, Ras Al Khaimah, UAE",
      "Unit: Plot No-9, Indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad"
    ],
    phone: "+971585513239",
    email: "Info@VikahEcotech.com"
  },
  {
    country: "Oman",
    flag: "🇴🇲",
    company: "GLOBAL METAL AND RUBBER RECYCLING",
    addresses: [
      "303, 3rd Floor, Bin Ham Group Building, Al Khuwair, Muscat, Sultanate of Oman",
      "Unit: Plot No-9, Indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad"
    ],
    phone: "+968 79211933",
    email: "Info@VikahEcotech.com"
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    company: "LAKSS RECYCLING LIMITED",
    addresses: [
      "Albert Street, New Zealand",
      "Unit: Plot No-9, Indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad"
    ],
    phone: "+64223136208",
    email: "info@lakssrecycling.com"
  }
];

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true
    });
  }, []);

  return (
    <>
      <div className="about-us-page text-dark">
        {/* Hero (reusing About hero style) */}
        <div className={contactcss.aboutWrapper}>
          <img src={t9} alt="Contact background" className={contactcss.image} />
          <div className={contactcss.textOverlay}>
            <h1>Contact Us</h1>
            <p>Reach out to us at any of our global offices</p>
          </div>
        </div>

        {/* Timeline-style office list */}
        <div className="container py-5 contact-timeline">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`zigzag-container ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className={`zigzag-card ${office.isHead ? 'head-office' : ''}`}>
                <div className="contact-title">
                  <span>{office.flag}</span> {office.country}
                </div>
                <h5>{office.company}</h5>

                {office.addresses.map((addr, i) => (
                  <p key={i} className="mb-1">
                    <i className="bi bi-geo-alt me-2" /> {addr}
                  </p>
                ))}

                <p className="mb-1">
                  <i className="bi bi-telephone me-2" />
                  <strong>Phone:</strong> {office.phone}
                </p>

                {office.mobile && (
                  <p className="mb-1">
                    <i className="bi bi-phone me-2" />
                    <strong>Mobile:</strong> {office.mobile}
                  </p>
                )}

                <p className="mb-1">
                  <i className="bi bi-envelope me-2" />
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </p>

                {office.website && (
                  <p className="mb-0">
                    <i className="bi bi-globe me-2" />
                    <strong>Website:</strong>{" "}
                    <a
                      href={`https://${office.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {office.website}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
