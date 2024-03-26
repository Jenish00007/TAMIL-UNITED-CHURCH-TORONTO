import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg7 from '../images/bgnew2-min.png';
import bg14 from '../images/bgnew1-min.png';
import bg3 from '../images/bgnew3-min.png';


function HeroSlider() {
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
            background: bg14,
            typewriteText: '[ " Free from sin! problems!", "Free from sin! problems!", "Free from sin! problems!", "Free from sin! problems!" ]',
            welcomeText: "You're Welcome Here!",
            mainText: 'Are you struggling with problems? Are you living with struggles in life? We are here to show you the love of Jesus Christ gave the world and embrace you. This is not our Church, this is your Church.',
            buttonLink: '/prayerrequest',
            buttonText: 'Need Prayer',
            sliderItemClass: 'hero-slider-item slider-item-bg-1', // Add class name for the first slide
        },
        {
            background: bg3,
            typewriteText: '[ " Free from sin! problems!", "Free from sin! problems!", "Free from sin! problems!", "Free from sin! problems!" ]',
            welcomeText: "You're Welcome Here!",
            mainText: 'Are you struggling with problems? Are you living with struggles in life? We are here to show you the love of Jesus Christ gave the world and embrace you. This is not our Church, this is your Church.',
            buttonLink: '/prayerrequest',
            buttonText: 'Need Prayer',
            sliderItemClass: 'hero-slider-item slider-item-bg-1', // Add class name for the first slide
        },
    ];
    return (
        
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <img className='' style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }} src={slide.background} alt="Image 1" />

                        {/* {index === 0 && ( */}
                            <div className="container herocontainer">
                                <div className="slider-text text-center">
                                    <a style={{ color: 'black', textShadow: '2px 2px 2px yellow' }} href="#" className="typewrite" data-period="2000" data-type={slide.typewriteText}>
                                        <span className="wrap"></span>
                                    </a>
                                    <h1><span style={{ color: 'black', textShadow: '2px 2px 2px yellow' }}>{slide.welcomeText}</span></h1>
                                    <p style={{ color: 'black', textShadow: '2px 2px 2px  yellow' }}>{slide.mainText}</p>
                                    <div className="slide-button">
                                        <a href={slide.buttonLink} className="default-btn">
                                            {slide.buttonText}
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        {/* )} */}
                    
                    </div>
                ))}
            </Slider>
       
    );
}

export default HeroSlider;
