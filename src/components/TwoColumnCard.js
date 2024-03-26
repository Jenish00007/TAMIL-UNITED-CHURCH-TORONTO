import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TwoColumnSlider = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'assets1/images/TwoColumnSliider/gallery35.jpeg',
    },
    {
      id: 2,
      image: 'assets1/images/TwoColumnSliider/gallery21.jpeg',
    },
    {
      id: 3,
      image: 'assets1/images/TwoColumnSliider/gallery40.jpeg',
    },
    {
      id: 4,
      image: 'assets1/images/TwoColumnSliider/gallery19.jpeg',
    },
    {
      id: 5,
      image: 'assets1/images/TwoColumnSliider/gallery1.jpg',
    },
    {
      id: 6,
      image: 'assets1/images/TwoColumnSliider/gallery5.jpg',
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 2000); // Set the interval time in milliseconds (e.g., 2000 ms for 2 seconds)

    return () => clearInterval(intervalId);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <section className="blog-posts overflow-hidden">
      <div className="container">
        <div className="row wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div id="blog" className="col-xl-12" data-aos="fade-up">
            <Slider {...settings} ref={sliderRef}>
              {blogPosts.map((post) => (
                <div key={post.id} className="post-item border mb-4">
                  <div className="post-item-wrap position-relative">
                    {post.image && (
                      <div className="post-image">
                        <a href="#">
                          <img style={{ height: '50%' }} alt="" src={post.image} />
                        </a>
                      </div>
                    )}
                    {/* ... rest of the code */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSlider;
