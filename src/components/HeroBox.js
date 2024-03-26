import React from 'react';

const HeroBox = () => {
  return (
    <section className="cyber-security-section overflow-hidden">
    <div className="container">
    <div className="home-banner-section overflow-hidden">
      <div className="banner-container-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4 text-center">
              <div className="about-banner-text" data-aos="fade-up">
                <h1 className="text-white about-h1">About Us</h1>
                <p className="text-white banner-paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="about-btn">
                  <a href="about-us.html" className="text-decoration-none">Home <span className="about-text-color"> / About</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4">
              <div className="about-us-section-page" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3 data-aos="zoom-out-left">About Us</h3>
                    <p>At [Your Church Name], we strive to create a welcoming and nurturing environment where individuals and families can experience the love of Christ and grow in their faith. Here's why you should choose our church</p>
                    <ul className="list-unstyled about-us-list">
                      <li><i className="fa-solid fa-shield-virus"></i><a href="index.html" className="text-decoration-none list-text">Strong Community</a></li>
                      <li><i className="fa-solid fa-shield-virus"></i><a href="index.html" className="text-decoration-none list-text">Inspiring Worship</a></li>
                      <li><i className="fa-solid fa-shield-virus"></i><a href="about-us.html" className="text-decoration-none list-text">Community Outreach</a></li>
                      <li><i className="fa-solid fa-shield-virus"></i><a href="services.html" className="text-decoration-none list-text">Engaging Ministries</a></li>
                      <li><i className="fa-solid fa-shield-virus"></i><a href="services.html" className="text-decoration-none list-text">Commitment to Faith</a></li>
                      <li><i className="fa-solid fa-shield-virus"></i><a href="case-studies.html" className="text-decoration-none list-text">Inclusive Atmosphere</a></li>
                    </ul>
                    <div className="banner-btn-about discover-btn-banner about-order-services">
                      <a href="services.html" className="text-decoration-none">Contact Us</a>
                     
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="about-section-img">
                      <figure className="mb-0"><img src="assets/images/about-us-page-right-img.png" alt="" className="" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
    </section>
  );
};

export default HeroBox;
