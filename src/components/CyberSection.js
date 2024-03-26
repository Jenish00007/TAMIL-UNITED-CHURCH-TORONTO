import React from 'react';

const CyberSecuritySection = () => {
  return (
    <section className="cyber-security-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src="assets1/images/gallery/gallery19.jpeg" alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-1"></div>
          <div className="col-lg-6 col-md-5 col-sm-12">
            <div style={{ marginTop: '10%'}} className="cyber-content" data-aos="fade-up-right">
              <h3> Worship With <span className="cyber-text">Us</span></h3>
              <p className="security-services-p">We’re passionate about creating music that encourages people to pursue a relationship with Jesus. Come worship with us this weekend, and listen now on your favorite digital music platform.</p>
              <div className="cyber-contact-btn">
                {/* <a href="contact.html" className="text-decoration-none">Contact Us</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;
