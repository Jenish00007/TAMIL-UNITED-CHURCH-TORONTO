import React, { useState } from 'react';

const GalleryCard5 = () => {
  // Example data for blog posts
  const OutreachImages = [
      {
        id: 1,
        image: 'assets1/images/childrens/childrens1.png',
      },
      // {
      //   id: 1, 
      //   image: 'assets1/images/childrens/childrens2.png', 
      // },
      {
        id: 1, 
        image: 'assets1/images/childrens/childrens3.png', 
      },
      {
        id: 1, 
        image: 'assets1/images/childrens/childrens4.png', 
      },
      {
        id: 1, 
        image: 'assets1/images/childrens/childrens5.png', 
      },
      {
        id: 1, 
        image: 'assets1/images/childrens/childrens6.png', 
      },
      {
        id: 1, 
        image: 'assets1/images/childrens/childrens7.png', 
      },
      {
        id: 1, 
        image: 'assets1/images/childrens/childrens8.png', 
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

export default GalleryCard5;
