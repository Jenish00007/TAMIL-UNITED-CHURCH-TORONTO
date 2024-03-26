
import React from 'react';

const CyberSecuritySectionLeft = () => {
  return (
    <section className="cyber-security-section overflow-hidden">
      <div  id="jesusheading" className="row">
        <div style={{ marginLeft: '9%' }} className="col-10 text-center"> {/* Add text-center class here */}
          <h4 style={{ marginTop: '-12%' }}  className="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Whom We are</h4>

          <p style={{ fontWeight: '600', color: 'black' ,fontSize:'19px', marginTop: '4%'}} className="security-services-p">Welcome to the Tamil United Church-Toronto.
            Our church is a Tamil church built on Jesus Christ and is based on Love, Faith, Hope and
            Unity. The love of God is shared with all who join us here.
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-4">
            <div className="blogs-section text-center">
              <h5 style={{ fontWeight: '600', color: 'black' }} className="security-services-p text-center">Our Minister
              </h5>
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">

                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%', width: '70%' }} className="img-fluid" src="assets1/images/pastor.jpeg" alt="" />
                  </figure>
                </div>
              </a>
            </div>
            <p style={{ color: 'black' }} className="security-services-p text-center">Get in Touch
            </p>
            <p style={{ fontWeight: '600', color: 'black' }} className="security-services-p text-center">
              Email: c.k.thangarajah@gmail.com
            </p>
            <p style={{ fontWeight: '600', color: 'black' }} className="security-services-p text-center">

              Phone: +1(416)821-0037
            </p>
          </div>
          <div className="col-lg-1 col-md-0 col-sm-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div style={{ marginTop: '10%' }} className="cyber-content" data-aos="fade-up-right">
              <h3> Rev. ChristyKumar Thangarajah</h3>
              <p className="security-services-p">(Minister In Charge Rev. ChristyKumar Thangarajah)</p>

              <p className="security-services-p">We are blessed to have Rev. Christy Kumar.T as the dedicated Minister of our church. With a heart for God and a passion for serving the community, Rev. Christy brings spiritual guidance, wisdom, and compassion to our congregation.</p>

              <p style={{ fontWeight: '600' }} className="security-services-p">Sunday Service Time:4pm (Toronto Time)
              </p>
              <p style={{ fontWeight: '600' }} className="security-services-p">Youth Bible Study: Tuesday 7.30 pm (Online-Zoom)
              </p>
              <p style={{ fontWeight: '600' }} className="security-services-p">Adults Bible Study: Thursday 7.00 pm (Online-Zoom)
              </p>
              <p style={{ fontWeight: '600' }} className="security-services-p">Monthly First Friday Night Prayer: 11.00 pm (Online-Zoom)
              </p>
              <p style={{ fontWeight: '600' }} className="security-services-p">Zoom Id - 609 935 9055 Password  -2002
              </p>

              <p style={{ fontWeight: '600' }} className="security-services-p">

                Address: 963 Pharmacy Ave, Scarborough  ON, Canada.</p>




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

export default CyberSecuritySectionLeft;
