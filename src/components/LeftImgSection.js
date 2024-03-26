import React from 'react';
import pic from '../images/pray1.jpeg'
const LeftImgSection = () => {
  return (
    <section className="cyber-security-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div  className="cyber-content-img mt-2">
              <figure className="mb-0"><img src={pic} alt="" className="cyber-security-provider-img" /></figure>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="cyber-content">
              <h3>Confidentiality <span className="cyber-text"> and </span> Respect</h3>
              <p className="security-services-p">We understand that prayer requests often involve sensitive and personal matters. Please be assured that your prayer requests are treated with the utmost confidentiality and respect. Our prayer team is committed to maintaining a safe and supportive environment, and your privacy is important to us. If there are specific details you would prefer to keep private, feel free to mention that in your request.</p>
              {/* <p className="security-services-p cyber-p-margin-bottom">Vamus elementum semper nisi aenean vulputate eleife nd tellus onsec tet ueradip.</p> */}
              <div className="cyber-contact-btn">
                <a href="/contact" className="text-decoration-none">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImgSection;
