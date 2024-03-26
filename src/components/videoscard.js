import React from 'react';

const YoutubeVideosSection = () => {
  return (
    <section className="about-us-section-start blogs-section-starts overflow-hidden">
      <div style={{ marginTop: '5%' }} className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center" data-aos="fade-up">Our Youtube Videos</h3>
            <p className="text-center" data-aos="fade-up-left">Subscribe to our YouTube channel and stay in touch with us</p>
          </div>
        </div>
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
                src="https://www.youtube.com/embed/f_Ma0Ru0pnw?si=wuA6I1DSbTdx6p1p"
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
                src="https://www.youtube.com/embed/t2OnkP2kyS0?si=Cuc9wOsDgcaoFXMV"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideosSection;
