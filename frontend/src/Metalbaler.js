import React from 'react';
import { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles for consistency

function Metalbaler() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;  // For compatibility with older browsers
  }, []); // Empty dependency array ensures it runs only once on page load
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Metal Balers</h1>
          <p className="lead">
            Vikah Ecotech is your trusted manufacturer of high-performance metal scrap baler machinery 
            designed to streamline your metal waste, such as light ferrous metals and non-ferrous metals 
            (e.g., Aluminum, Copper, Brass, etc.).
          </p>
        </div>
      </header>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Revolutionizing Metal Scrap Recycling</h3>
              <p>
                At Vikah Ecotech, we focus on innovation, efficiency, and reliability. Our metal baler machinery 
                is designed to handle the toughest metal scrap, making it easier for businesses to manage and recycle 
                their metal waste. We offer high-performance equipment tailored to your needs, whether it’s for aluminum, 
                copper, brass, or other metal types.
              </p>
              <p>
                Our team of skilled engineers works tirelessly to develop cutting-edge balers that enhance the metal recycling 
                process, contributing to a more sustainable environment. By investing in our technology, you can streamline 
                your recycling operations, reduce costs, and increase overall efficiency.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">We’ll be happy to assist you with your metal baler requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Metalbaler;
