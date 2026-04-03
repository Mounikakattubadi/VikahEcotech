import React, { useEffect } from "react";
import "../../Pages/ProductsPage.css";

function SecondaryMetalshredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* HERO HEADER */}
      <header className="secondary-metal-hero text-white text-center d-flex align-items-center">
        <div className="container">
          <span className="badge bg-warning text-dark px-3 py-2 mb-3 fs-6">
            Advanced Metal Recycling Solution
          </span>

          <h1 className="display-3 fw-bold mb-3">
            Secondary Metal Shredder
          </h1>

          <p className="lead mx-auto mb-4" style={{ maxWidth: "850px" }}>
            High-performance shredding solutions designed for precise size
            reduction of pre-shredded ferrous and non-ferrous metals such as
            aluminum, copper, brass, steel, and more.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a
              href="tel:+914049471616"
              className="btn btn-warning btn-lg px-4 fw-semibold shadow"
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
                Efficient Secondary Metal Processing
              </h2>
              <p className="lead text-muted">
                Vikah Ecotech secondary metal shredders are engineered to
                deliver uniform output size, improved recycling efficiency, and
                better material recovery for downstream applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="balerbackimg py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="machine-content bg-white p-4 p-md-5 rounded-4 shadow-sm h-100">
                <h3 className="fw-bold mb-4 text-dark">
                  Precision in Metal Size Reduction
                </h3>

                <p className="text-muted fs-5">
                  Our secondary metal shredders play a critical role in the
                  recycling process by reducing the size of metal fragments
                  produced during primary shredding.
                </p>

                <p>
                  These machines are engineered for consistent output sizing,
                  making them ideal for downstream processing such as metal
                  separation, melting, granulation, and refining.
                </p>

                <p>
                  At Vikah Ecotech, we ensure that each secondary shredder is
                  built with durable materials, advanced automation systems, and
                  customizable screen options to achieve the desired output size
                  while maintaining low energy consumption.
                </p>

                <p>
                  Whether processing aluminum, copper, brass, or steel
                  fragments, our shredders help optimize your recycling line by
                  producing cleaner and more uniform metal output.
                </p>

                <p className="mb-0">
                  This not only improves operational efficiency but also
                  increases the resale value of recycled materials.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 border-top border-4 border-warning">
                <h4 className="fw-bold mb-4">Why Choose Our Machine?</h4>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Uniform Output Size</h6>
                  <p className="text-muted small mb-0">
                    Consistent metal particle sizing for better downstream
                    processing.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Energy Efficient</h6>
                  <p className="text-muted small mb-0">
                    Designed to reduce power consumption without compromising
                    performance.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Heavy-Duty Construction</h6>
                  <p className="text-muted small mb-0">
                    Manufactured with robust materials for long-lasting
                    industrial use.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-1">✔ Customizable Solutions</h6>
                  <p className="text-muted small mb-0">
                    Tailored screen sizes and configurations to suit different
                    metal recycling requirements.
                  </p>
                </div>

                <div className="bg-warning bg-opacity-10 rounded-4 p-3 text-center">
                  <h5 className="fw-bold mb-3">
                    Need a Customized Machine?
                  </h5>

                  <p className="text-muted small mb-3">
                    Contact our team for a machine configuration based on your
                    material type, output size, and production capacity.
                  </p>

                  <a
                    href="/contact"
                    className="btn btn-warning w-100 fw-semibold py-2"
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
              <div className="bg-dark text-white rounded-4 shadow p-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                <div>
                  <h4 className="fw-bold mb-1">
                    Looking for a Custom Secondary Metal Shredder?
                  </h4>
                  <p className="mb-0 text-light">
                    Our team can help you select the right machine for your
                    recycling plant.
                  </p>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  <a
                    href="mailto:info@vikahecotech.com"
                    className="btn btn-outline-light"
                  >
                    Email Inquiry
                  </a>

                  <a
                    href="tel:+914049471616"
                    className="btn btn-warning fw-semibold"
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

export default SecondaryMetalshredder;