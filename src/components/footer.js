import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';  // Import solid icons
import { faFacebookSquare, faTwitterSquare, faLinkedin, faPinterestSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';  // Import brand icons
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="about-right-icon">
        <figure className="">
        
          {/* <img src="assets1/images/logo3.png" alt="" className="img-fluid" /> */}
          </figure>
      </div>
      <div className="footer-outer-margin" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="footer-content1" data-aos="flip-left">
              <img style={{width:'60px'}} src="/assets1/images/logo3.png"className="img-fluid" alt="Your Logo" />
                <figure>
                  <h6>Tamil United Church-Toronto</h6>
                </figure>
                <p className="red-light-footer-p">Welcome to the Tamil United Church in Toronto, where we gather in faith, fellowship, and love. Tamil United Church Mission is located in Scarborough Ontario.  </p>
                <div className="social-icons teams-social-icons">
                  <ul className="list-unstyled">
                    <li><a href="https://www.facebook.com/profile.php?id=100057766620107&sk=photos_by" className="text-decoration-none red-hover footer-additional"><FontAwesomeIcon icon={faFacebookSquare} style={{ color: 'FFB923' }}/></a></li>
                    {/* <li><a href="#" className="text-decoration-none red-hover"><FontAwesomeIcon icon={faTwitterSquare}style={{ color: 'FFB923' }} /></a></li>
                    <li><a href="#" className="text-decoration-none red-hover"><FontAwesomeIcon icon={faLinkedin}style={{ color: 'FFB923' }} /></a></li>
                    <li><a href="#" className="text-decoration-none red-hover"><FontAwesomeIcon icon={faPinterestSquare}style={{ color: 'FFB923' }} /></a></li> */}
                    <li><a href="https://www.youtube.com/channel/UCD6BFm4s2dc8gQhf__LyKQA" className="text-decoration-none red-hover"><FontAwesomeIcon icon={faYoutube} style={{ color: 'FFB923' }}/></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 d-xl-block d-none"></div>
            <div className="col-xl-2 col-lg-3 col-md-2 col-sm-12 d-lg-block d-none">
              {/* Content for col-xl-2 goes here */}
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 d-md-block d-none">
              <ul className="list-unstyled support-footer" data-aos="flip-left">
                <li className="list-item footer-margin-left">
                  <h5 className="footer-link footer-services-heading">
                    Support
                  </h5>
                </li>
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  <a href="/ministries" className="text-decoration-none footer-link-p">
                    Ministries
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  <a href="/contact" className="text-decoration-none footer-link-p">
                    Contact Us
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  <a href="/about" className="text-decoration-none footer-link-p">
                    About Us
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  <a href="/prayerrequest" className="text-decoration-none footer-link-p">
                    Prayer Request
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-list">
                <div className="icon-list-box1" data-aos="flip-left">
                  <ul className="list-unstyled contact-us-ul">
                    <li className="list-item">
                      <h5 className="footer-link footer-get-heading">
                        Get in Touch
                      </h5>
                    </li>
                    <li className="list-item position-reletive addres-list icon-list1">
                      <div className="number"><a href="mailto:tamiluct2023@gmail.com" className="text-decoration-none footer-link-p ml-0"><span className="footer-additional">Email: </span> c.k.thangarajah@gmail.com</a></div>
                    </li>
                    <li className="list-item position-reletive addres-list icon-list1">
                      <div className="contact-number"><a href="tel:+1(416)821-0037" className="text-decoration-none footer-link-p ml-0"><span className="footer-additional">Phone:</span> +1(416)821-0037</a></div>
                    </li>
                    <li className="list-item position-reletive addres-list icon-list1">
                      <div className="contact-number"><a href="tel:+1(416)821-0037" className="text-decoration-none footer-link-p ml-0"><span className="footer-additional">Fax:</span> +1(416)821-0037</a></div>
                    </li>
                    <li className="list-item position-reletive addres-list icon-list1">
                      <div className="contact-address"><a href="#" className="text-decoration-none footer-link-p ml-0"><span className="footer-additional">Address: </span> 963 Pharmacy Ave, Scarborough  ON, Canada.</a></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar text-center">
        <div className="container">
          <div className="row">
            <div className="footer-bar-content w-100 overflow-hidden">
             <a href="tel:+917418291374">
              <p className="text-size-16 mb-0">
                Copyright © 2023 Mr.Jenish All Rights Reserved
              </p></a>
           
              <a style={{ color: '#FFB923' }} href="https://www.instagram.com/mr_jenish_6_5">
                      <p className="text-size-16 mb-0"style={{ color: 'FFB923' }}><FontAwesomeIcon style={{ color: '#FFB923' }} icon={faInstagram} />        Follow Me </p> 
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
