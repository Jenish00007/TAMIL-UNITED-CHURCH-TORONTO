// GallerySlider.js
import React from 'react';
import Slider from 'react-slick';

const GallerySlider1 = ({ images }) => {
  const sliderStyle = {
    width: '80%',
    margin: 'auto',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true, // Set to true for right-to-left scrolling
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
   // Set the autoplay speed in milliseconds (e.g., 3000 ms for 3 seconds)
  };

  return (
    
    <section className="cyber-security-section overflow-hidden">
    <div style={sliderStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img  src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default GallerySlider1;
