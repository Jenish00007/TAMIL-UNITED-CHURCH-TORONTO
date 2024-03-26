// Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import YoutubeVideosSection from '../components/videoscard';
import NewsletterSection from '../components/NewsletterSection';
import TwoColumnCard from '../components/TwoColumnCard';
import bg2 from '../images/bg5.jpg';
import EventCalendar from '../components/Eventcalender';
import AppNavbar from '../components/Nav';
import AboutUsSection from '../components/AboutUsSection';
const Events = () => {
  return (
    <>
      {/* <Header/> */}
      <AppNavbar/>
      <section className="cyber-security-section overflow-hidden"style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
    <div className="container">
    <div className="home-banner-section overflow-hidden">
      <div className="banner-container-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4 text-center">
              <div className="about-banner-text" data-aos="fade-up">
                <h1 className="text-white about-h1" data-aos="zoom-out-left">Events</h1>
                <p  className="text-white banner-paragraph" data-aos="zoom-out-right">Welcome to Tamil United Church-Toronto, a vibrant and loving community where we gather in the name of Jesus Christ. Our church is more than a building; it's a family of believers committed to worship, fellowship, and service.</p>
                <div className="about-btn">
                  <a href="/" className="text-white">Home <span className="about-text-color"> / Events</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
     <AboutUsSection/>
  
     <YoutubeVideosSection/>
     <NewsletterSection/>
     <Footer/>
    </>
  );
};

export default Events;
