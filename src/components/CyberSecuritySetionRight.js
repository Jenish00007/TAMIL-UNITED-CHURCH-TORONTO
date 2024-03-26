import React from 'react';

const CyberSecuritySectionRight = () => {
  return (
    <section className="cyber-security-section cyber-security-section2 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div style={{ marginTop: '10%'}} className="cyber-content" data-aos="fade-up-left">
              <h3>Need Prayer <span className="cyber-text">?</span></h3>
              <p className="security-services-p">There are times when life is overwhelming, and all we have are questions. In those moments, hope can feel far away. The great thing about prayer is that it shifts our perspective toward the One who stands ready to listen. No matter what you’re facing, we’d love to pray with you!</p>
              <div className="cyber-contact-btn">
                <a href="/prayerrequest" className="text-decoration-none">Ask for Prayer</a>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-5 col-md-4 col-sm-12 text-md-right text-center">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src="assets1/images/needprayer.jpg" alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySectionRight;
