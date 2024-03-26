import React, { useState } from 'react';

const GalleryCard3 = () => {
  // Example data for blog posts
  const OutreachImages = [
      {
        id: 1,
        image: 'assets1/images/GalleryCard3/gallery3-1.jpeg',
      },
      {
        id: 1, 
        image: 'assets1/images/GalleryCard3/gallery3-2.jpeg', 
      },
      {
        id: 1,
        image: 'assets1/images/GalleryCard3/gallery3-3.jpeg', 
      },    
      {
        id: 1,
        image: 'assets1/images/GalleryCard3/gallery3-4.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/GalleryCard3/gallery3-6.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/GalleryCard3/gallery3-7.jpeg',
      },
    
     
      {
        id: 1,
        image: 'assets1/images/gallery/gallery41.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery42.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery43.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery44.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery45.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery46.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery47.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery48.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery49.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery50.jpeg',
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
                        {/* <a href="#"> */}
                          <img alt="" src={post.image} />
                        {/* </a> */}
                        <span className="post-meta-category">
                          <a href="#">{post.category}</a>
                        </span>
                      </div>
                      <div className="post-item-description">
                        <span className="post-meta-date">
                          {post.date}
                        </span>
                        
                        <h2>
                          <a href="#">{post.title}</a>
                        </h2>
                        <p >{post.content}</p>
                        {/* <a href={post.link} className="item-link">Read More <i className="fa fa-arrow-right"></i></a> */}
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

export default GalleryCard3;
