import React, { useEffect } from "react";
import "../../Pages/ProductsPage.css";

function SecondaryPcb() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div>
      {/* HERO HEADER */}
      <header className="secondary-pcb-hero text-white text-center d-flex align-items-center">
        <div className="container position-relative">
          <span className="badge bg-success px-3 py-2 mb-3 fs-6">
            Advanced Recycling Solution
          </span>

          <h1 className="display-3 fw-bold mb-3">
            Secondary Paper & Cardboard Shredder
          </h1>

          <p className="lead mx-auto mb-4" style={{ maxWidth: "850px" }}>
            High-performance shredding and compaction solutions designed for
            refined processing of pre-shredded paper, cardboard, cartons, and
            packaging waste.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3 hero-btns">
            <a
              href="tel:+914049471616"
              className="btn btn-success btn-lg px-4 fw-semibold shadow"
            >
              Call Now
            </a>

            <a
              href="mailto:info@vikahecotech.com"
              className="btn btn-outline-light btn-lg px-4 fw-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </header>

      {/* INTRO SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="fw-bold mb-3">
                Efficient Paper & Cardboard Processing
              </h2>
              <p className="lead text-muted">
                Vikah Ecotech secondary paper and cardboard shredders are
                designed to provide consistent output size, improved recycling
                efficiency, and easier downstream processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="balerbackimg py-5">
        <div className="container">
          <div className="row g-4">
            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <div className="machine-content bg-white p-4 p-md-5 rounded-4 shadow-sm h-100">
                <h3 className="fw-bold mb-4 text-dark">
                  Optimized Processing for Paper and Cardboard Recycling
                </h3>

                <p className="text-muted fs-5">
                  Our secondary shredders are developed to work alongside
                  primary shredders and compactors, offering refined size
                  reduction for already processed paper and cardboard waste.
                </p>

                <p>
                  These machines are essential for achieving uniform shredded
                  material that is ideal for storage, transportation, baling,
                  and further recycling processes.
                </p>

                <p>
                  Vikah Ecotech's secondary paper and cardboard shredding
                  systems are built for high throughput and continuous
                  operation, helping recyclers and waste managers improve
                  operational efficiency while reducing logistics costs.
                </p>

                <p>
                  With customizable cutting systems, automated controls, and
                  heavy-duty construction, our machines ensure reliable
                  performance and consistent output quality.
                </p>

                <p className="mb-0">
                  Whether processing cardboard cartons, office paper,
                  corrugated boxes, or mixed packaging waste, our shredders
                  help refine and standardize the material for better
                  recycling outcomes.
                </p>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 border-top border-4 border-success">
                <h4 className="fw-bold mb-4">Why Choose Our Machine?</h4>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Uniform Output Material</h6>
                  <p className="text-muted small mb-0">
                    Ensures consistent shredding for smoother downstream
                    recycling operations.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ High Throughput</h6>
                  <p className="text-muted small mb-0">
                    Built for continuous operation and large-volume paper waste
                    processing.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Energy Efficient</h6>
                  <p className="text-muted small mb-0">
                    Advanced design helps reduce energy consumption while
                    maintaining strong performance.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-1">✔ Customizable Design</h6>
                  <p className="text-muted small mb-0">
                    Available with different blade and screen configurations to
                    match your recycling needs.
                  </p>
                </div>

                <div className="bg-success bg-opacity-10 rounded-4 p-3 text-center">
                  <h5 className="fw-bold mb-3">
                    Need a Customized Machine?
                  </h5>

                  <p className="text-muted small mb-3">
                    Contact our team for a customized paper and cardboard
                    shredding solution based on your material type and required
                    output size.
                  </p>

                  <a
                    href="/contact"
                    className="btn btn-success w-100 fw-semibold py-2"
                  >
                    Contact for Customized Machine
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT BAR */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="contact-bar-box text-white d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4">
                <div className="text-center text-lg-start">
                  <h4 className="fw-bold mb-1">
                    Looking for a Custom Paper & Cardboard Shredder?
                  </h4>
                  <p className="mb-0 text-light">
                    Our team can help you select the right shredding solution
                    for your recycling plant.
                  </p>
                </div>

                <div className="contact-bar-buttons">
                  <a
                    href="mailto:info@vikahecotech.com"
                    className="btn btn-outline-light"
                  >
                    Email Inquiry
                  </a>

                  <a
                    href="tel:+914049471616"
                    className="btn btn-success fw-semibold"
                  >
                    +91 4049471616
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondaryPcb;