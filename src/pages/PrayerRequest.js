// Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import YoutubeVideosSection from '../components/videoscard';
import NewsletterSection from '../components/NewsletterSection';
import LeftImgSection from '../components/LeftImgSection';
import RequestPrayerForm from '../components/RequestPrayer';
import bg2 from '../images/bg2.jpg';
import AppNavbar from '../components/Nav';
const PrayerRequest = () => {
  return (
    <>
      {/* <Header /> */}
      <AppNavbar/>
      <section className="cyber-security-section overflow-hidden"style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="home-banner-section overflow-hidden">
            <div className="banner-container-box">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4 text-center">
                    <div className="about-banner-text" data-aos="fade-up">
                      <h1 className="text-white about-h1" data-aos="zoom-out-left">Prayer Request</h1>
                      <p className="text-white banner-paragraph" data-aos="zoom-out-right">We believe in the power of prayer and the strength that comes from a community united in faith.
                        If you have a prayer request or would like us to pray for someone you know, please feel free to
                        submit your request below.</p>
                      <div className="about-btn">
                        <a href="/" className="text-white">Home <span className="about-text-color"> / Gallery</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeftImgSection />
      <RequestPrayerForm />
      <YoutubeVideosSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default PrayerRequest;

