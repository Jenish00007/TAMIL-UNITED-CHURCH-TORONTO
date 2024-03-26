// Home.js
import React from 'react';
import Headers from '../components/header';
import AppNavbar from '../components/Nav';
import Footer from '../components/footer';
import CardsSection from '../components/CardsSection';
import AboutUsSection from '../components/AboutUsSection';
import YoutubeVideosSection from '../components/videoscard';
import NewsletterSection from '../components/NewsletterSection';
import CyberSecuritySectionLeft from '../components/CyberSecuritySectionLeft';
import CyberSecuritySectionRight from '../components/CyberSecuritySetionRight';
import CyberSecuritySection from '../components/CyberSection';
import HeroHeading from '../components/HeroHeading';
import HeroSlider from '../components/heroslider';
import bg2 from '../images/bg2.jpg';
import bg3 from '../images/bg3.jpg';
import bg5 from '../images/bg5.jpg';
const Home = () => {
  const images = [
    bg2,
    bg3,
    bg5
    // Add more image paths as needed
  ];
  return (
    <>
     {/* <Headers/>  style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center center',height:'600px' }}*/}
     <AppNavbar/>
    <HeroSlider images={images}/>
   
   
    <CyberSecuritySectionLeft/>
     <CardsSection/>
     <AboutUsSection/>
     
     <CyberSecuritySectionRight/>
     <CyberSecuritySection/>
     <YoutubeVideosSection/>
     <NewsletterSection/>
     <Footer/>
    </>
  );
};

export default Home;
