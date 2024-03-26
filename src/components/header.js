import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you are using react-router
import { useLocation } from 'react-router-dom';
const Header = () => {
 
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <>
      {/* Start Preloader Section */}
      {/* <div className="preloader">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div> */}
      {/* End Preloader Section */}

      {/* Start Header Section */}
      <header className="header header-style-one">
        {/* Start Navbar Area */}
        <div className="navbar-area">
          {/* Menu For Mobile Device */}
          <div className="mobile-nav">
            <Link to="index.html" className="logo">
              <img src="assets1/images/logo3.png" alt="" />
            </Link>
          </div> 

          {/* Menu For Desktop Device */}
          <div className="construction-nav-one">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" to="index.html">
                  <img data-cfsrc="assets1/images/logo3.png" alt="" />
                  <noscript>
                    <img src="assets1/images/logo3.png" alt="" />
                  </noscript>
                </Link>

                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link ${isActive('/')}`}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`}>
                        Gallery
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/ministries" className={`nav-link ${isActive('/ministries')}`}>
                        Ministries
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/events" className={`nav-link ${isActive('/events')}`}>
                        Events
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/prayerrequest" className={`nav-link ${isActive('/prayerrequest')}`}>
                        Prayer Request
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <div className="other-option">
                    <a className="default-btn" href="/contact">
                      Contact Us
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* End Navbar Area */}
      </header>
    </>
  );
};

export default Header;