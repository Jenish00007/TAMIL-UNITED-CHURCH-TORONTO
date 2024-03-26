// Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutUsSection from '../components/AboutUsSection';
import YoutubeVideosSection from '../components/videoscard';
import NewsletterSection from '../components/NewsletterSection';
import LeftImgSection from '../components/LeftImgSection';
import bg2 from '../images/bg6.jpg';
// import childrenministrie from '../images/children-ministrie.jpg';
// import worshipministrie from '../images/worship-ministrie.jpg';
// import prayerministrie from '../images/prayer-ministrie.jpg';
// import youthministrie from '../images/youth-ministrie.jpg';
// import communityprayer from '../images/community-prayer.jpg';
import AppNavbar from '../components/Nav';
const Ministries = () => {
  return (
    <>
     {/* <Header/> */}
     <AppNavbar/>
     <section className="cyber-security-section overflow-hidden"style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="container">
    <div className="home-banner-section overflow-hidden">
      <div className="banner-container-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4 text-center">
              <div className="about-banner-text" data-aos="fade-up">
                <h1 className="text-white about-h1" data-aos="zoom-out-left">Ministries</h1>
                <p  className="text-white banner-paragraph" data-aos="zoom-out-right">Welcome to Tamil United Church-Toronto, where we are committed to serving our community and spreading the message of love, hope, and faith. Our ministries are dedicated to meeting the diverse needs of our congregation and fostering a sense of fellowship among believers.</p>
                <div className="about-btn">
                  <a href="/" className="text-white">Home <span className="about-text-color"> / Ministries</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>


    <section style={{ marginTop: '7%' }} className="cyber-security-section cyber-security-section2 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="cyber-content" data-aos="fade-up-left">
              <h3> Children's  <span className="cyber-text">Ministry</span></h3>
              <p className="security-services-p">Nurturing the next generation is a priority at Tamil United Church-Toronto. Our children's ministry is committed to providing a safe and loving environment where kids can learn about the love of Jesus. From Sunday School to special events, we strive to make each child feel valued and supported in their faith journey.</p>
              {/* <div className="cyber-contact-btn">
                <a href="contact.html" className="text-decoration-none">Ask for Prayer</a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-5 col-md-4 col-sm-12 text-md-right text-center">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src='assets1/images/children-ministrie.png' alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cyber-security-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src="assets1/images/gallery/gallery16.jpeg" alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-1"></div>
          <div className="col-lg-6 col-md-5 col-sm-12">
            <div className="cyber-content" data-aos="fade-up-right">
              <h3> Worship  <span className="cyber-text">Ministry</span></h3>
              <p className="security-services-p">Join us in the joyous celebration of worship. Our worship ministry is dedicated to creating an atmosphere where individuals can encounter God through music, prayer, and reflection. Whether you have a musical talent to share or a passion for creating a sacred space, there's a place for you in our worship community.</p>
              <div className="cyber-contact-btn">
                {/* <a href="contact.html" className="text-decoration-none">Contact Us</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<section className="cyber-security-section cyber-security-section2 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <div className="cyber-content" data-aos="fade-up-left">
              <h3>Community <span className="cyber-text">Outreach</span></h3>
              <p className="security-services-p">As followers of Jesus, we are called to love and serve our neighbors. Our community outreach ministry seeks to meet the practical needs of those around us, showing the love of Christ through acts of kindness, service projects, and partnerships with local organizations.</p>
              {/* <div className="cyber-contact-btn">
                <a href="contact.html" className="text-decoration-none">Ask for Prayer</a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-5 col-md-4 col-sm-12 text-md-right text-center">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src="assets1/images/outreach/Outreach23.jpeg" alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="cyber-security-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src='assets1/images/childrens/childrens4.png' alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-1"></div>
          <div className="col-lg-6 col-md-5 col-sm-12 mt-5">
            <div className="cyber-content" data-aos="fade-up-right">
              <h3> Youth   <span className="cyber-text">Ministry</span></h3>
              <p className="security-services-p">Empowering young people to live out their faith is at the heart of our youth ministry. Through engaging programs, events, and small groups, we aim to guide teenagers in their spiritual growth and help them navigate the challenges of adolescence with a strong foundation in Christ.</p>
              <div className="cyber-contact-btn">
                {/* <a href="contact.html" className="text-decoration-none">Contact Us</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cyber-security-section cyber-security-section2 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <div className="cyber-content" data-aos="fade-up-left">
              <h3>Prayer  <span className="cyber-text">Ministry</span></h3>
              <p className="security-services-p">Prayer is a powerful and essential aspect of our Christian walk. The prayer ministry at Tamil United Church-Toronto is dedicated to interceding for the needs of our church, community, and beyond. Join us for weekly prayer meetings, and let's seek God's guidance and blessing together.</p>
              {/* <div className="cyber-contact-btn">
                <a href="contact.html" className="text-decoration-none">Ask for Prayer</a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-5 col-md-4 col-sm-12 text-md-right text-center">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src='assets1/images/prayerministry.jpeg' alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="cyber-security-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="blogs-section">
              <a href="single-post.html">
                <div className="images-blog" data-aos="fade-up">
                  <figure className="mb-0">
                    <img style={{ marginBottom: '10%' }} className="img-fluid" src="assets1/images/worship.jpg" alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-1"></div>
          <div className="col-lg-6 col-md-5 col-sm-12">
            <div className="cyber-content" data-aos="fade-up-right">
              <h3> Small    <span className="cyber-text">Groups</span></h3>
              <p className="security-services-p">Life is meant to be shared, and our small groups provide a space for deeper connections and spiritual growth. Join a group that aligns with your interests, stage of life, or study focus. These gatherings foster relationships, encourage accountability, and provide support in your faith journey.</p>
              <div className="cyber-contact-btn">
                {/* <a href="contact.html" className="text-decoration-none">Contact Us</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
     {/* <LeftImgSection/> */}
     <AboutUsSection/>
     <YoutubeVideosSection/>
     <NewsletterSection/>
     <Footer/>
    </>
  );
};

export default Ministries;
