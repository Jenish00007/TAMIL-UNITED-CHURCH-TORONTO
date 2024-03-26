import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/style.css';

// Import your background images
import bg7 from '../images/bgnew2.png';
import bg12 from '../images/bgnew1.png';
import bg3 from '../images/bgnew3.png';


const HeroSlider = () => {
  const sliderStyle = {
    width: '100%',
    margin: 'auto',

  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      background: bg7,
      typewriteText: '[ " Free from sin! problems!", "Free from sin! problems!", "Free from sin! problems!", "Free from sin! problems!" ]',
      welcomeText: "You're Welcome Here!",
      mainText: 'Are you struggling with problems? Are you living with struggles in life? We are here to show you the love of Jesus Christ gave the world and embrace you. This is not our Church, this is your Church.',
      buttonLink: '/prayerrequest',
      buttonText: 'Need Prayer',
      sliderItemClass: 'hero-slider-item slider-item-bg-1', // Add class name for the first slide
    },
    {
      background: bg12,
      typewriteText: '',
      welcomeText: "",
      mainText: '',
      buttonLink: '',
      buttonText: '',
      sliderItemClass: '', 
    },
    {
      background: bg3,
      typewriteText: '',
      welcomeText: "",
      mainText: '',
      buttonLink: '/prayerrequest',
      buttonText: '',
      sliderItemClass: '', 
    },
  ];

  return (
    <div style={sliderStyle}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={slide.sliderItemClass}>
            <section  style={{ backgroundImage: `url(${slide.background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '600px' }} className="cyber-security-section">
              <div className="d-table">
                <div className="d-tablecell">
                  <div className="container">
                    <div style={{marginTop:'220px'}} className="slider-text">
                      <a style={{color:'yellow',textShadow: '5px 5px 5px black' }}href="#" className="typewrite" data-period="2000" data-type={slide.typewriteText}>
                        <span className="wrap"></span>
                      </a>
                      <h1><span style={{color:'Yellow',textShadow: '5px 5px 5px black' }}>{slide.welcomeText}</span></h1>
                      <p  style={{color:'yellow',textShadow: '5px 5px 5px black' }}>{slide.mainText}</p>
                      <div className="slide-button">
                        <a href={slide.buttonLink} className="default-btn">
                          {slide.buttonText}
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                 </div>
                 <img style={{width:'60px',marginLeft:'90%',marginTop:'-13%'}} src="/assets1/images/logo4.png"className="img-fluid" alt="Your Logo" />
             
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
