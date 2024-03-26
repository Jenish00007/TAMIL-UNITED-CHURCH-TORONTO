// CombinedNavbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const AppNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? { color: '#FFB923', fontWeight: 'bold' } : { color: 'white' };
  };

  return (
    <Navbar style={{ backgroundColor: 'black' }}
      expand="lg"
      className={`construction-nav-one  ${isMobileMenuOpen ? 'is-sticky' : ''}`}
      // fixed="top"
    >
      <Container>
        <div className="mobile-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Navbar.Brand as={Link} to="/">
            <img style={{ width: '40px' }} src="/assets1/images/logo3.png" alt="Your Logo" />
          </Navbar.Brand>
          <h6 className='text-white'>Tamil United Church-Toronto</h6>
        </div>


       
        <Navbar.Toggle style={{marginTop:'-15px'}} onClick={toggleMobileMenu} aria-controls="responsive-navbar-nav">
          <span className="navbar-toggler-icon">
            {/* You can use an icon here, like FontAwesome or other icon libraries */}
            <div className="navbar-toggler-icon"></div>
            <div className="navbar-toggler-icon"></div>
           
          </span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav" className={isMobileMenuOpen ? 'show' : ''}>
          <Nav style={{ marginRight: '10%' }} className="navbar-nav m-auto">

            <li className="nav-item">
              <Nav.Link
                as={Link}
                to="/"
                className={`nav-link`}
                style={isActive('/')}
              >
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={Link}
                to="/about"
                className={`nav-link`}
                style={isActive('/about')}
              >
                About
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={Link}
                to="/gallery"
                className={`nav-link`}
                style={isActive('/gallery')}
              >
                Gallery
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={Link}
                to="/ministries"
                className={`nav-link`}
                style={isActive('/ministries')}
              >
                Ministries
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={Link}
                to="/events"
                className={`nav-link`}
                style={isActive('/events')}
              >
                Events
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={Link}
                to="/prayerrequest"
                className={`nav-link`}
                style={isActive('/prayerrequest')}
              >
                Prayer Request
              </Nav.Link>
            </li>
          </Nav>

          <div className="other-option">
            <Button as={Link} to="/contact" className="default-btn">
              Contact Us
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
