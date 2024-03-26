// Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import NewsletterSection from '../components/NewsletterSection';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/Map';
import bg2 from '../images/bg2.jpg';
import AppNavbar from '../components/Nav';
const Contact = () => {
  return (
    <>
      {/* <Header /> */}
      <AppNavbar/>
      <section className="cyber-security-section overflow-hidden"style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center center',height:'600px' }}>
        <div className="container">
          <div className="home-banner-section overflow-hidden">
            <div className="banner-container-box">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4 text-center">
                    <div className="about-banner-text" data-aos="fade-up">
                      <h1 className="text-white about-h1" data-aos="zoom-out-left">Contact</h1>
                      <p  className="text-white banner-paragraph" data-aos="zoom-out-right">We would love to hear from you! Whether you have questions, feedback, or just want to say hello,
                        feel free to reach out to us using the contact information below or by filling out the contact form.</p>
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
      <ContactForm />
      <MapSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Contact;
