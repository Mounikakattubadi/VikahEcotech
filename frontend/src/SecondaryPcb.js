import React from 'react';
import { useEffect } from 'react';
import './Tyrecutting.css'; // Reusing the same styles as Tyrecutting for consistency

function SecondaryPcb() {
  useEffect(() => {
    // Directly set the scroll position to the top of the page
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div>
      <header className="tyrecutting-header text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Secondary Paper and Cardboard Balers</h1>
        </div>
      </header>

      <div className="container text-center my-4">
        <p className="lead">
          Vikah Ecotech provides advanced secondary balers specifically designed for compacting pre-processed paper and cardboard waste into denser, transport-ready bales.
        </p>
      </div>

      <section className="balerbackimg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 machine-content bg-white p-4 rounded shadow-sm">
              <h3 className="machine-title">Optimized Baling for Paper and Cardboard Recycling</h3>
              <p>
                Our secondary balers are developed to work in tandem with primary shredders or compactors, offering
                refined compaction of already processed paper and cardboard material. These machines are vital in achieving uniform bale sizes
                that are ideal for storage, transportation, and further processing.
              </p>
              <p>
                Vikah Ecotech's secondary baling systems are built for high throughput and continuous operation,
                helping recyclers and waste managers improve operational efficiency while reducing logistic costs.
                With customizable compression settings and automated bale tying systems, we ensure that every bale meets your exact requirements.
              </p>
              <p className="mt-4">
                <strong>📧 For inquiries:</strong> <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a><br />
                <strong>📞 Call us:</strong> <a href="tel:+914049471616">+91 4049471616</a>
              </p>
              <p className="text-muted mt-3 mb-0">We’ll be happy to assist you with your secondary paper and cardboard baler requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondaryPcb;
