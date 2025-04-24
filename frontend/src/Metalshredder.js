import React from 'react';
import { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles for consistency

function Metalshredder() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Metal Shredder</h1>
          <p className="lead">
            Vikah Ecotech manufactures high-quality metal shredders designed to efficiently process and shred various metals 
            such as ferrous and non-ferrous materials, including aluminum, copper, brass, and more.
          </p>
        </div>
      </header>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Revolutionizing Metal Shredding</h3>
              <p>
                At Vikah Ecotech, we specialize in providing cutting-edge metal shredding technology designed to meet the 
                growing demands of metal recycling. Our machines are built with the latest technology to efficiently shred 
                metals of various types, ensuring that businesses and recycling facilities can handle large volumes of metal waste 
                in a cost-effective and environmentally friendly way.
              </p>
              <p>
                Our team of engineers works diligently to design robust and reliable shredders that guarantee high performance and 
                efficiency. By investing in our metal shredders, your facility can increase operational efficiency, reduce waste, 
                and contribute to a more sustainable environment.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">We’ll be happy to assist you with your metal shredder requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Metalshredder;
