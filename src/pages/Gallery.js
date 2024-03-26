// Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import YoutubeVideosSection from '../components/videoscard';
import NewsletterSection from '../components/NewsletterSection';
import GalleryCard from '../components/GalleryCard';
import GalleryCard2 from '../components/GalleryCard2';
import GalleryCard3 from '../components/GalleryCard3';
import GalleryCard4 from '../components/GalleryCard4';
import GalleryCard5 from '../components/GalleryCard5';
import TwoColumnCard from '../components/TwoColumnCard';
import bg2 from '../images/bg6.jpg';
import AppNavbar from '../components/Nav';
import GallerySlider1 from '../components/Galleryslider1'
import WomenPic from '../components/WomenPic';
const Gallery = () => {
  const images = [
    'assets1/images/galleryslider1/gallery2.jpg',
    'assets1/images/galleryslider1/gallery27.jpeg',
    'assets1/images/galleryslider1/gallery20.jpeg',
    'assets1/images/galleryslider1/gallery25.jpeg',
    'assets1/images/galleryslider1/gallery6.jpeg',
    'assets1/images/galleryslider1/gallery7.jpeg',
    'assets1/images/galleryslider1/gallery8.jpeg',
    'assets1/images/galleryslider1/gallery9.jpeg',
    'assets1/images/galleryslider1/gallery10.jpeg',
    'assets1/images/galleryslider1/gallery11.jpeg',
    'assets1/images/galleryslider1/gallery12.jpeg',
    'assets1/images/galleryslider1/gallery15.jpeg',
    // Add more image paths as needed
  ];
  return (
    <>
      {/* <Header/> */}
      <AppNavbar />
      <section className="cyber-security-section overflow-hidden" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="home-banner-section overflow-hidden">
            <div className="banner-container-box">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4 text-center">
                    <div className="about-banner-text" data-aos="fade-up">
                      <h1 className="text-white about-h1" data-aos="zoom-out-left">Gallery</h1>
                      <p className="text-white banner-paragraph" data-aos="zoom-out-right">Explore moments of joy, worship, and community in our photo gallery. These images capture the spirit of our church family and the various events and activities we've shared.</p>
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
      <TwoColumnCard />
      <h3 className="text-center" data-aos="fade-up">Our Outreach Photos</h3>
      <GalleryCard2 />
      {/* <GalleryCard4 /> */}
      <h3 className="text-center" data-aos="fade-up">Women Fellowship Photos</h3>
      <WomenPic/>
      <h3 className="text-center" data-aos="fade-up">Children's Ministry Photos </h3>
      <GalleryCard5 />
      <h3 className="text-center" data-aos="fade-up">Gallery Photos</h3>
      <GalleryCard/>
      <h3 className="text-center" data-aos="fade-up">More Photos</h3>
      <GalleryCard3 />
      <GallerySlider1 images={images} />


      <h3 className="text-center mt-5" data-aos="fade-up">Message Videos</h3>

      <section className="about-us-section-start blogs-section-starts overflow-hidden">
        <div style={{ marginTop: '5%' }} className="container">
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                {/* <video
                  title="Video 1"
                  width="100%"
                  height="220"
                  src="assets1/videos/video1.mp4"
                  frameBorder="0"
                  allowFullScreen
                ></video> */}
                <video controls width="100%" height="220"
                 src="assets1/videos/video1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                {/* <iframe
                  title="Video 2"
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/CgYkYk4KstE?si=eOuOED99MJgW9zRX"
                  frameBorder="0"
                  allowFullScreen
                ></iframe> */}
                <video controls width="100%" height="220"
                 src="assets1/videos/video2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                {/* <iframe
                  title="Video 3"
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/DiwX_jtad3Q?si=7RAdlSeOWHQUBK9w"
                  frameBorder="0"
                  allowFullScreen
                ></iframe> */}
                <video controls width="100%" height="220"
                 src="assets1/videos/video3.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                {/* <iframe
                  title="Video 3"
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/DiwX_jtad3Q?si=7RAdlSeOWHQUBK9w"
                  frameBorder="0"
                  allowFullScreen
                ></iframe> */}
                <video controls width="100%" height="220"
                 src="assets1/videos/video4.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>


      <YoutubeVideosSection />
      <section className="about-us-section-start blogs-section-starts overflow-hidden">
        <div style={{ marginTop: '5%' }} className="container">
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                <iframe
                  title="Video 1"
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/WMOlxYn4vJc?si=jczb05eKptM0nYtc"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                <iframe
                  title="Video 2"
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/CgYkYk4KstE?si=eOuOED99MJgW9zRX"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                <iframe
                  title="Video 3"
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/DiwX_jtad3Q?si=7RAdlSeOWHQUBK9w"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-section-start blogs-section-starts overflow-hidden">
        <div style={{ marginTop: '5%' }} className="container">

        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                <iframe
                  title="Video 1"
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/jP_kqj5l3cU?rel=0"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                <iframe
                  title="Video 2"
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/sW6vPCVC4wY?si=q2YaQMjczJA0AKtw"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="blogs-section">
                <iframe
                  title="Video 3"
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/gx_RyhH0gLo?si=xTPsbMneSPtUZYKc"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Gallery;
