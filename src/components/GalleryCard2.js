import React, { useState } from 'react';

const GalleryCard2 = () => {
  // Example data for blog posts
  const OutreachImages = [
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach1.JPG',
      },
      {
        id: 1, 
        image: 'assets1/images/outreach/Outreach2.jpeg', 
      },
       
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach4.jpeg',
      // },
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach5.jpeg',
      },
      
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach6.JPG',
      // },
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach7.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach8.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach9.JPG',
      },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach10.JPG',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach11.jpg',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach12.jpg',
      // },
     
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach15.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach16.jpeg',
      },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach17.jpeg',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach18.jpeg',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach19.jpeg',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach20.jpeg',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach21.jpeg',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach22.jpeg',
      // },
      // {
      //   id: 1,
      //   image: 'assets1/images/outreach/Outreach23.jpeg',
      // },
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach3.jpeg', 
      }, 
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach13.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/outreach/Outreach14.jpg',
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

export default GalleryCard2;
