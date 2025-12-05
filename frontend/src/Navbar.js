// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navbar.css";

const MOBILE_BREAKPOINT = 992;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  // Track scroll to elevate navbar
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track resize so we can update ARIA and close mobile menus when switching layouts
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      // if switching to desktop, ensure menus are closed
      if (!mobile) {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };

    // run once
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (!next) setProductsOpen(false); // close mega when closing drawer
      return next;
    });
  };

  const closeAll = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  const toggleProducts = () => {
    // if on mobile and drawer is closed, open the drawer too for clarity
    setProductsOpen((prev) => {
      const next = !prev;
      if (isMobile && !mobileOpen && next) {
        setMobileOpen(true);
      }
      return next;
    });
  };

  return (
    <header className={`ve-navbar ${elevated ? "ve-navbar--elevated" : ""}`}>
      <div className="container ve-navbar__inner mt-1 mb-1">
        {/* Mobile toggle (CSS places it left on mobile) */}
        <button
          type="button"
          className={`ve-navbar__toggle ${mobileOpen ? "is-open" : ""}`}
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Brand (logo). CSS will move it to the right on mobile */}
        <Link to="/" className="ve-navbar__brand" onClick={closeAll}>
          <img src={logo} alt="Vikah Ecotech" className="ve-navbar__logo" />
        </Link>

        {/* Desktop / mobile nav */}
        <nav
          className={`ve-navbar__menu ${mobileOpen ? "ve-navbar__menu--open" : ""}`}
          aria-hidden={isMobile ? !mobileOpen : false}
        >
          <ul className="ve-navbar__links">
            {/* Home */}
            <li className="ve-navbar__item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "ve-navbar__link" + (isActive ? " ve-navbar__link--active" : "")
                }
                onClick={closeAll}
              >
                Home
              </NavLink>
            </li>

            {/* About */}
            <li className="ve-navbar__item">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  "ve-navbar__link" + (isActive ? " ve-navbar__link--active" : "")
                }
                onClick={closeAll}
              >
                About Us
              </NavLink>
            </li>

            {/* All products */}
            <li className="ve-navbar__item">
              <NavLink
                to="/ourproducts"
                className={({ isActive }) =>
                  "ve-navbar__link" + (isActive ? " ve-navbar__link--active" : "")
                }
                onClick={closeAll}
              >
                Our Products
              </NavLink>
            </li>

            {/* Solutions – mega */}
            <li className="ve-navbar__item ve-navbar__item--has-mega">
              <button
                type="button"
                className={`ve-navbar__link ve-navbar__link--button ${productsOpen ? "ve-navbar__link--active" : ""}`}
                onClick={toggleProducts}
                aria-expanded={productsOpen}
              >
                Recycling Solutions
                <span className={`ve-chevron ${productsOpen ? "ve-chevron--up" : ""}`} />
              </button>

              <div className={`ve-mega ${productsOpen ? "ve-mega--open" : ""}`} role="region" aria-hidden={!productsOpen}>
                <div className="ve-mega__grid">
                  {/* Baler */}
                  <div className="ve-mega__column">
                    <h4 className="ve-mega__title">Balers</h4>
                    <p className="ve-mega__desc">
                      High-density balers for tyre scrap, plastics, metals,
                      paper and cardboard.
                    </p>
                    <Link to="/baler" className="ve-mega__link ve-mega__link--main" onClick={closeAll}>
                      Baler overview →
                    </Link>
                    <div className="ve-mega__group">
                      <span className="ve-mega__group-label">Applications</span>
                      <Link to="/tyrescrapbaler" className="ve-mega__link" onClick={closeAll}>Tyre Scrap Baler</Link>
                      <Link to="/plasticbaler" className="ve-mega__link" onClick={closeAll}>Plastic Balers</Link>
                      <Link to="/pcb" className="ve-mega__link" onClick={closeAll}>Paper &amp; Cardboard Balers</Link>
                      <Link to="/metalbaler" className="ve-mega__link" onClick={closeAll}>Metal Balers</Link>
                    </div>
                  </div>

                  {/* Primary Shredder */}
                  <div className="ve-mega__column">
                    <h4 className="ve-mega__title">Primary Shredders</h4>
                    <p className="ve-mega__desc">
                      Heavy-duty primary shredders for bulky tyres, plastics,
                      metals and e-waste.
                    </p>
                    <Link to="/shredder" className="ve-mega__link ve-mega__link--main" onClick={closeAll}>Primary shredders →</Link>
                    <div className="ve-mega__group">
                      <span className="ve-mega__group-label">Applications</span>
                      <Link to="/tyreshredder" className="ve-mega__link" onClick={closeAll}>Tyre Shredder</Link>
                      <Link to="/plasticshredder" className="ve-mega__link" onClick={closeAll}>Plastic Shredder</Link>
                      <Link to="/papershredder" className="ve-mega__link" onClick={closeAll}>Paper &amp; Cardboard Shredder</Link>
                      <Link to="/ewaste" className="ve-mega__link" onClick={closeAll}>E-Waste Shredder</Link>
                      <Link to="/shm4000" className="ve-mega__link" onClick={closeAll}>Metal Shredder (SHM4000)</Link>
                    </div>
                  </div>

                  {/* Secondary Shredder */}
                  <div className="ve-mega__column">
                    <h4 className="ve-mega__title">Secondary Shredders</h4>
                    <p className="ve-mega__desc">
                      Raspers &amp; secondary shredders for fine granulation and
                      uniform output.
                    </p>
                    <Link to="/secondaryShredder" className="ve-mega__link ve-mega__link--main" onClick={closeAll}>Secondary shredders →</Link>
                    <div className="ve-mega__group">
                      <span className="ve-mega__group-label">Applications</span>
                      <Link to="/rasper_secondaryshredders" className="ve-mega__link" onClick={closeAll}>Rasper</Link>
                      <Link to="/secondarymetalshredder" className="ve-mega__link" onClick={closeAll}>Metal Shredder</Link>
                      <Link to="/secondaryplasticshredder" className="ve-mega__link" onClick={closeAll}>Plastic Shredder</Link>
                      <Link to="/secondarypcb" className="ve-mega__link" onClick={closeAll}>Paper &amp; Cardboard Shredder</Link>
                    </div>
                  </div>

                  {/* Systems / more */}
                  <div className="ve-mega__column">
                    <h4 className="ve-mega__title">Complete Systems</h4>
                    <p className="ve-mega__desc">
                      End-to-end tyre &amp; waste recycling lines with feeding,
                      separation and conveying.
                    </p>
                    <div className="ve-mega__group">
                      <span className="ve-mega__group-label">Equipment</span>
                      <Link to="/othereqptemp" className="ve-mega__link" onClick={closeAll}>Other Equipment</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Trade Fairs */}
            <li className="ve-navbar__item">
              <NavLink to="/tradefairs" end className={({ isActive }) => "ve-navbar__link" + (isActive ? " ve-navbar__link--active" : "")} onClick={closeAll}>Trade Fairs</NavLink>
            </li>

            {/* Enquiry */}
            <li className="ve-navbar__item">
              <NavLink to="/enquire" className={({ isActive }) => "ve-navbar__link ve-navbar__link--cta" + (isActive ? " ve-navbar__link--cta-active" : "")} onClick={closeAll}>Enquiry</NavLink>
            </li>

            {/* Contact */}
            <li className="ve-navbar__item">
              <NavLink to="/Contact" className={({ isActive }) => "ve-navbar__link" + (isActive ? " ve-navbar__link--active" : "")} onClick={closeAll}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
