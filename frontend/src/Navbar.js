import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [productMenu, setProductMenu] = useState('');
  const [subProductMenu, setSubProductMenu] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
    resetMenus();
  };

  const resetMenus = () => {
    setProductMenu('');
    setSubProductMenu('');
    setShowDropdown(false);
  };

  const handleBack = () => {
    if (subProductMenu) {
      setSubProductMenu('');
    } else {
      setProductMenu('');
    }
  };

  const handleNavigation = () => {
    setIsNavbarCollapsed(true);
    resetMenus();
  };

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
    setProductMenu('');
    setSubProductMenu('');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        resetMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={resetMenus}>
          <img className="logo" src={logo} alt="vikahecotech" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link nav-hover" onClick={handleNavigation}>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/About" className="nav-link nav-hover" onClick={handleNavigation}>
                About us
              </Link>
            </li>

            {/* Our Products Dropdown */}
            <div ref={dropdownRef} className="nav-item dropdown mx-2">
              <button
                className="nav-link dropdown-toggle nav-hover btn btn-link text-center text-lg-center w-100"
                type="button"
                id="navbarDropdown"
                onClick={handleDropdownToggle}
              >
                Our Products
              </button>

              {/* Main Products Menu */}
              {showDropdown && !productMenu && (
                <ul className="dropdown-menu show" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item" onClick={() => setProductMenu('Primary Shredder')}>Primary Shredder</button></li>
                  <li><button className="dropdown-item" onClick={() => setProductMenu('Secondary Shredder')}>Secondary Shredder</button></li>
                  <li><button className="dropdown-item" onClick={() => setProductMenu('baler')}>Baler</button></li>
                  <li><Link to="/othereqptemp" className="dropdown-item" onClick={handleNavigation}>Other Equipment</Link></li>
                 <li><Link to="/ourproducts" className="dropdown-item" onClick={handleNavigation}>All Products</Link></li>
                </ul>
              )}

              {/* Primary Shredder Submenu */}
              {productMenu === 'Primary Shredder' && !subProductMenu && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={handleBack}>← Back</button></li>
                  <li><Link to="/shredder" className="dropdown-item" onClick={handleNavigation}>Primary Shredder</Link></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('tyreShredder')}>Tyre Shredder</button></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('plasticShredder')}>Plastic Shredder</button></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('paperShredder')}>Paper & Cardboard Shredder</button></li>

                  {/* 👉 Direct link to E-Waste (no submenu) */}
                  <li><Link to="/ewaste" className="dropdown-item" onClick={handleNavigation}>E-Waste Shredder</Link></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('metalShredder')}>Metal Shredder</button></li>
                </ul>
              )}

              {/* Tyre Shredder Submenu */}
              {subProductMenu === 'tyreShredder' && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>← Back</button></li>
                  <li><Link to="/tyreshredder" className="dropdown-item" onClick={handleNavigation}>Tyre Shredder</Link></li>
                  <li><Link to="/sht6000" className="dropdown-item" onClick={handleNavigation}>SHT6000</Link></li>
                  <li><Link to="/sht8000" className="dropdown-item" onClick={handleNavigation}>SHT8000</Link></li>
                  <li><Link to="/sht12000" className="dropdown-item" onClick={handleNavigation}>SHT12000</Link></li>
                </ul>
              )}

              {/* ✅ Plastic Shredder Submenu */}
              {subProductMenu === 'plasticShredder' && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>← Back</button></li>
                  <li><Link to="/plasticshredder" className="dropdown-item" onClick={handleNavigation}>Plastic Shredder</Link></li>
                  <li><Link to="/shp100" className="dropdown-item" onClick={handleNavigation}>SHP100</Link></li>
                  <li><Link to="/shp150" className="dropdown-item" onClick={handleNavigation}>SHP150</Link></li>
                  <li><Link to="/shp200" className="dropdown-item" onClick={handleNavigation}>SHP200</Link></li>
                </ul>
              )}

              {/* ✅ Paper & Cardboard Shredder Submenu */}
              {subProductMenu === 'paperShredder' && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>← Back</button></li>
                  <li><Link to="/papershredder" className="dropdown-item" onClick={handleNavigation}>Paper & Cardboard Shredder</Link></li>
                  <li><Link to="/shc6000" className="dropdown-item" onClick={handleNavigation}>SHC6000</Link></li>
                  <li><Link to="/shc8000" className="dropdown-item" onClick={handleNavigation}>SHC8000</Link></li>
                  <li><Link to="/shc12000" className="dropdown-item" onClick={handleNavigation}>SHC12000</Link></li>
                </ul>
              )}

              {/* ✅ Metal Shredder Submenu */}
              {subProductMenu === 'metalShredder' && (
                <ul className="dropdown-menu show">
                  <li>
                    <button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>
                      ← Back
                    </button>
                  </li>

                  {/* Main category link */}
                  <li>
                    <Link to="/metalshredder" className="dropdown-item" onClick={handleNavigation}>
                      Metal Shredder
                    </Link>
                  </li>

                  {/* Models */}
                  <li>
                    <Link to="/shm2000" className="dropdown-item" onClick={handleNavigation}>
                      SHM2000
                    </Link>
                  </li>

                  <li>
                    <Link to="/shm2200" className="dropdown-item" onClick={handleNavigation}>
                      SHM2200
                    </Link>
                  </li>

                  <li>
                    <Link to="/shm2600" className="dropdown-item" onClick={handleNavigation}>
                      SHM2600
                    </Link>
                  </li>
                </ul>
              )}

              {/* Secondary Shredder Submenu */}
              {productMenu === 'Secondary Shredder' && !subProductMenu && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={handleBack}>← Back</button></li>
                  <li><Link to="/secondaryShredder" className="dropdown-item" onClick={handleNavigation}>Secondary Shredder</Link></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('rasper')}>Rasper</button></li>
                  <li><Link to="/secondarymetalshredder" className="dropdown-item" onClick={handleNavigation}>Metal Shredder</Link></li>
                  <li><Link to="/secondaryplasticshredder" className="dropdown-item" onClick={handleNavigation}>Plastic Shredder</Link></li>
                  <li><Link to="/secondarypcb" className="dropdown-item" onClick={handleNavigation}>Paper and Cardboard Shredder</Link></li>
                </ul>
              )}

              {/* ✅ Rasper Submenu */}
              {subProductMenu === 'rasper' && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>← Back</button></li>
                  <li><Link to="/rasper_secondaryshredders" className="dropdown-item" onClick={handleNavigation}>Rasper</Link></li>
                  <li><Link to="/rst4000" className="dropdown-item" onClick={handleNavigation}>RST4000</Link></li>
                  <li><Link to="/rst6000" className="dropdown-item" onClick={handleNavigation}>RST6000</Link></li>
                </ul>
              )}
              {/* Baler Submenu */}
              {productMenu === 'baler' && !subProductMenu && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={handleBack}>← Back</button></li>
                  <li><Link to="/baler" className="dropdown-item" onClick={handleNavigation}>Balers</Link></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('tyreScrapBaler')}>Tyre Scrap Baler</button></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('plasticBaler')}>Plastic Balers</button></li>
                  <li><button className="dropdown-item" onClick={() => setSubProductMenu('cardboardBaler')}>Paper & Cardboard Balers</button></li>
<li><button className="dropdown-item" onClick={() => setSubProductMenu('metalBaler')}>Metal Balers</button></li>
                </ul>
              )}

              {/* Tyre Scrap Baler Submenu */}
              {subProductMenu === 'tyreScrapBaler' && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>← Back</button></li>
                  <li><Link to="/tyrescrapbaler" className="dropdown-item" onClick={handleNavigation}>Tyre Scrap Baler</Link></li>
                  <li><Link to="/blt150" className="dropdown-item" onClick={handleNavigation}>BLT150</Link></li>
                  <li><Link to="/blt200" className="dropdown-item" onClick={handleNavigation}>BLT200</Link></li>
                  <li><Link to="/blt250" className="dropdown-item" onClick={handleNavigation}>BLT250</Link></li>
                </ul>
              )}

              {/* ✅ Plastic Baler Submenu */}
              {subProductMenu === 'plasticBaler' && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>← Back</button></li>
                  <li><Link to="/plasticbaler" className="dropdown-item" onClick={handleNavigation}>Plastic Balers</Link></li>
                  <li><Link to="/blp30" className="dropdown-item" onClick={handleNavigation}>BLP30</Link></li>
                  <li><Link to="/blp40" className="dropdown-item" onClick={handleNavigation}>BLP40</Link></li>
                  <li><Link to="/blp50" className="dropdown-item" onClick={handleNavigation}>BLP50</Link></li>
                </ul>
              )}

              {/* ✅ Paper & Cardboard Baler Submenu */}
              {subProductMenu === 'cardboardBaler' && (
                <ul className="dropdown-menu show">
                  <li><button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>← Back</button></li>
                  <li><Link to="/pcb" className="dropdown-item" onClick={handleNavigation}>Paper & Cardboard Balers</Link></li>
                  <li><Link to="/blc30" className="dropdown-item" onClick={handleNavigation}>BLC30</Link></li>
                  <li><Link to="/blc40" className="dropdown-item" onClick={handleNavigation}>BLC40</Link></li>
                  <li><Link to="/blc50" className="dropdown-item" onClick={handleNavigation}>BLC50</Link></li>
                </ul>
              )}
{/* ✅ Metal Baler Submenu */}
{subProductMenu === 'metalBaler' && (
  <ul className="dropdown-menu show">
    <li>
      <button className="dropdown-item text-muted" onClick={() => setSubProductMenu('')}>
        ← Back
      </button>
    </li>

    {/* Main page link */}
    <li>
      <Link to="/metalbaler" className="dropdown-item" onClick={handleNavigation}>
        Metal Balers
      </Link>
    </li>

    {/* Models */}
    <li>
      <Link to="/blm150" className="dropdown-item" onClick={handleNavigation}>
        BLM150
      </Link>
    </li>

    <li>
      <Link to="/blm200" className="dropdown-item" onClick={handleNavigation}>
        BLM200
      </Link>
    </li>

    <li>
      <Link to="/blm250" className="dropdown-item" onClick={handleNavigation}>
        BLM250
      </Link>
    </li>
  </ul>
)}

            </div>

            <li className="nav-item mx-2">
              <Link className="nav-link nav-hover" to="/enquire" onClick={handleNavigation}>
                Enquiry
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link nav-hover" to="/Contact" onClick={handleNavigation}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
