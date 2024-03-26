import React from 'react';

const GalleryCard4 = () => {
  // Example data for blog posts
  const OutreachImages = [
    {
      id: 1,
      image: 'assets1/images/women/pic1.JPG',
    },
    {
      id: 2,
      image: 'assets1/images/women/pic2.JPG',
    },
    {
      id: 3,
      image: 'assets1/images/women/pic3.JPG',
    },
    {
      id: 4,
      image: 'assets1/images/women/pic4.JPG',
    },
  ];

  return (
    <section className="blog-posts overflow-hidden">
      <div className="container">
        <div className="row wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div id="blog" className="col-xl-12" data-aos="fade-up">
            <div className="row">
              {OutreachImages.map((post) => (
                <div key={post.id} className="col-xl-3 col-lg-6">
                  <div className="float-left w-100 post-item border mb-4">
                    <div className="post-item-wrap position-relative">
                      <div className="post-image">
                        <img alt="" src={post.image} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCard4;
