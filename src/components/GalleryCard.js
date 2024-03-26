import React, { useState } from 'react';

const GalleryCard = () => {
  // Example data for blog posts
  const blogPostsData = [
    {
      id: 1,
      image: 'assets1/images/gallery/gallery16.jpeg',
      // category: 'Lifestyle',
      // date: 'Jan 21, 2017',
      // comments: 33,
      // title: 'Standard post with a single image',
      // content: 'Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.',
      // link: 'single-post.html',
    },
    
      {
        id: 1,
        image: 'assets1/images/gallery/gallery17.jpeg',
     
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery18.jpeg',
     
      },
  
      {
        id: 1,
        image: 'assets1/images/gallery/gallery24.jpeg',
      
      },    
    
      // {
      //   id: 1,
      //   image: 'assets1/images/gallery/gallery32.jpeg',
      // },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery34.jpeg',
      },
      
      // {
      //   id: 1,
      //   image: 'assets1/images/gallery/gallery37.jpeg',
      // },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery38.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery39.jpeg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery5.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery3.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery4.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/gallery54.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/GalleryCard5/Event1.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/GalleryCard5/Event2.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic1.jpg',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic2.JPG',
      },
      // {
      //   id: 1,
      //   image: 'assets1/images/gallery/pic3.png',
      // },
      {
        id: 1,
        image: 'assets1/images/gallery/pic4.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic5.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic6.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic7.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic8.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic9.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic10.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic11.png',
      },
      {
        id: 1,
        image: 'assets1/images/gallery/pic12.png',
      },
    
     
  ];

  return (
    <section className="blog-posts overflow-hidden">
      <div className="container">
        <div className="row wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div id="blog" className="col-xl-12" data-aos="fade-up">
            <div className="row">
              {blogPostsData.map((post) => (
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

export default GalleryCard;
