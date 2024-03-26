import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
const isActive = (currentPath, path) => {
  return currentPath === path ? { color: 'red' } : null;
};

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventDate, setEventDate] = useState(new Date());
  const [prayerLists, setPrayerLists] = useState([]);
  const location = useLocation();

  const handleLogin = () => {
    // Check credentials (This is a basic example, in a real app, you would authenticate against a server)
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDateChange = (date) => {
    setEventDate(date);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email.js logic
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      comments: formData.comments,
    };




    
  }

  return (
    <div className="container-fluid">
     
        {isLoggedIn ? (
          <>
            <Navbar style={{ backgroundColor: 'black' }}
              expand="lg"
              className={`construction-nav-one ${isMobileMenuOpen ? 'is-sticky' : ''}`}
              fixed="top"
            >
              <Container>
                <div className="mobile-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Navbar.Brand as={Link} to="">
                    <img style={{ width: '40px' }} src="/assets1/images/logo3.png" alt="Your Logo" />
                  </Navbar.Brand>
                  <h6 className='text-white'>Tamil United Church Toronto</h6>
                </div>


                <Navbar.Toggle onClick={toggleMobileMenu} aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className={isMobileMenuOpen ? 'show' : ''}>
                  <Nav style={{ marginRight: '10%' }} className="navbar-nav m-auto">

                    <li className="nav-item">
                      <Nav.Link
                        as={Link}
                        to="/"
                        className={`nav-link text-white`}
                        style={isActive('')}
                      >
                        Update Events
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={Link}
                        to="/about"
                        className={`text-link text-white`}
                        style={isActive('')}
                      >
                        Prayer List
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={Link}
                        to="/gallery"
                        className={`nav-link text-white`}
                        style={isActive('')}
                      >
                        Update Banners
                      </Nav.Link>
                    </li>

                  </Nav>

                  <div className="other-option">
                    <Button as={Link} to="/contact" onClick={handleLogout} className="default-btn">
                      Logout
                    </Button>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>



            <section className="cyber-security-section overflow-hidden">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="about-us-section-page contact-us-section" data-aos="fade-up">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="contact-us-title" data-aos="fade-up-left">
                            Update Events
                          </h3>
                        </div>
                        <div className="col-12">
                          <div className="about-section-form">
                            <form onSubmit={handleSubmit}>
                              <div className="form-group contact-form-margin">
                                <input
                                  type="text"
                                  className="form-control input-text"
                                  id="validationCustom01"
                                  placeholder="Your Name"
                                  required
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group contact-form-margin">
                                <input
                                  type="text"
                                  className="form-control input-text"
                                  id="validationCustom04"
                                  placeholder="Your Phone"
                                  required
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group contact-form-margin">
                                <input
                                  type="text"
                                  className="form-control input-text"
                                  id="validationCustom02"
                                  placeholder="Your Email"
                                  required
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group contact-form-margin">
                                <input
                                  type="text"
                                  className="form-control input-text"
                                  id="validationCustom03"
                                  placeholder="Subject"
                                  required
                                  name="subject"
                                  value={formData.subject}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group contact-form-margin-text-area">
                                <textarea
                                  name="comments"
                                  id="message"
                                  cols="10"
                                  rows="10"
                                  className="form-control"
                                  placeholder="Your Message"
                                  value={formData.comments}
                                  onChange={handleChange}
                                ></textarea>
                              </div>
                              <div className="contact-section-btn text-center">
                                <button type="submit" className="btn btn-primary hover-effect">
                                  Send Message
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>




            <section className="cyber-security-section overflow-hidden">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="about-us-section-page contact-us-section" data-aos="fade-up">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="contact-us-title" data-aos="fade-up-left">
                            {/* Update Home Page  Baners */}
                          </h3>
                        </div>
                        <div className="col-12">
                          <div className="about-section-form">
                            <form onSubmit={handleSubmit}>

                              <div className="form-group contact-form-margin">
                                <h3>
                                  Banner 1
                                </h3>
                                <input
                                  type="file"
                                  className="form-control input-text"
                                  id="validationCustom04"
                                  placeholder="Your Phone"
                                  required
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group contact-form-margin">
                                <h3>
                                  Banner 2
                                </h3>
                                <input
                                  type="file"
                                  className="form-control input-text"
                                  id="validationCustom02"
                                  placeholder="Your Email"
                                  required
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group contact-form-margin">
                                <h3>
                                  Banner 3
                                </h3>
                                <input
                                  type="file"
                                  className="form-control input-text"
                                  id="validationCustom03"
                                  placeholder="Subject"
                                  required
                                  name="subject"
                                  value={formData.subject}
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="contact-section-btn text-center">
                                <button type="submit" className="btn btn-primary hover-effect">
                                  Send Message
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* special events */}

            <section className="cyber-security-section overflow-hidden">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="about-us-section-page contact-us-section" data-aos="fade-up">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="contact-us-title" data-aos="fade-up-left">
                            Prayer Lists
                          </h3>
                        </div>
                        <div className="col-12">
                          <div className="about-section-form">
                            <form onSubmit={handleSubmit}>

                            <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Email</TableCell>
                              <TableCell>Phone</TableCell>
                              <TableCell>Subject</TableCell>
                              <TableCell>Comments</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {prayerLists.map((list, index) => (
                              <TableRow key={index}>
                                <TableCell>{list.name}</TableCell>
                                <TableCell>{list.email}</TableCell>
                                <TableCell>{list.phone}</TableCell>
                                <TableCell>{list.subject}</TableCell>
                                <TableCell>{list.comments}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </>
        ) : (
          <div className="col-md-4 mx-auto mt-5">
            <h2 className="text-center mb-4">Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
   
  );
};

export default Admin;
