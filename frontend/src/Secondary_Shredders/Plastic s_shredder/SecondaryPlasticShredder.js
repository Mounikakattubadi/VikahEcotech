import React, { useEffect } from "react";
import "../../Pages/ProductsPage.css";

function SecondaryPlasticShredder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* HERO HEADER */}
      <header className="secondary-plastic-hero text-white text-center d-flex align-items-center">
        <div className="container">
          <span className="badge bg-info text-dark px-3 py-2 mb-3 fs-6">
            Advanced Plastic Recycling Solution
          </span>

          <h1 className="display-3 fw-bold mb-3">
            Secondary Plastic Shredder
          </h1>

          <p className="lead mx-auto mb-4" style={{ maxWidth: "850px" }}>
            High-performance shredding solutions designed for precise size
            reduction of pre-shredded plastic materials including PET, HDPE,
            LDPE films, PP, and other recyclable plastics.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a
              href="tel:+914049471616"
              className="btn btn-info btn-lg px-4 fw-semibold shadow text-dark"
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
                Efficient Plastic Size Reduction
              </h2>
              <p className="lead text-muted">
                Vikah Ecotech secondary plastic shredders are engineered to
                deliver uniform particle sizing, cleaner output, and better
                efficiency for recycling and reprocessing applications.
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
                  Fine Plastic Size Reduction for High-Quality Output
                </h3>

                <p className="text-muted fs-5">
                  Our secondary plastic shredders are specially developed to
                  further reduce plastic pieces after initial shredding, making
                  them ideal for downstream processing such as granulation,
                  washing, and pelletizing.
                </p>

                <p>
                  These machines ensure consistent particle size and improved
                  efficiency in recycling operations, helping create a more
                  uniform plastic stream for reprocessing.
                </p>

                <p>
                  Built with hardened cutters, customizable screens, and smart
                  control systems, Vikah’s secondary plastic shredders provide
                  precise control over output size while minimizing dust
                  generation and energy consumption.
                </p>

                <p>
                  Whether you are processing PET bottles, HDPE containers, PP
                  materials, or soft LDPE films, our shredders help refine and
                  standardize your plastic waste for higher recycling value.
                </p>

                <p className="mb-0">
                  This stage is essential for producing better-quality raw
                  material that can be reused in manufacturing and recycling
                  applications.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 border-top border-4 border-info">
                <h4 className="fw-bold mb-4">Why Choose Our Machine?</h4>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Uniform Particle Size</h6>
                  <p className="text-muted small mb-0">
                    Produces consistent plastic flakes for efficient downstream
                    processing.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Low Dust Generation</h6>
                  <p className="text-muted small mb-0">
                    Designed to minimize dust and maintain cleaner working
                    conditions.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-1">✔ Energy Efficient</h6>
                  <p className="text-muted small mb-0">
                    Advanced design ensures low power consumption with high
                    shredding performance.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-1">✔ Customizable Output</h6>
                  <p className="text-muted small mb-0">
                    Different screen sizes and blade configurations available
                    for specific recycling needs.
                  </p>
                </div>

                <div className="bg-info bg-opacity-10 rounded-4 p-3 text-center">
                  <h5 className="fw-bold mb-3">
                    Need a Customized Machine?
                  </h5>

                  <p className="text-muted small mb-3">
                    Contact our team for a customized plastic shredding solution
                    based on your material type, output size, and production
                    requirements.
                  </p>

                  <a
                    href="/contact"
                    className="btn btn-info text-dark w-100 fw-semibold py-2"
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
                    Looking for a Custom Secondary Plastic Shredder?
                  </h4>
                  <p className="mb-0 text-light">
                    Our team can help you choose the ideal machine for your
                    plastic recycling plant.
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
                    className="btn btn-info text-dark fw-semibold"
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

export default SecondaryPlasticShredder;