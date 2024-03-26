import React from 'react';
import pic1 from '../images/women/pic1.png';
import pic2 from '../images/women/pic2.png';
import pic3 from '../images/women/pic3.png';
import pic4 from '../images/women/pic4.png';


const WomenPic = () => {

  const Images = [
    {
      id: 1,
      image:pic1,
    },
    {
      id: 2,
      image:pic2,
    },
    {
      id: 3,
      image: pic3,
    },
    {
      id: 4,
      image: pic4,
    },
  ];

  return (
    <section className="blog-posts overflow-hidden">
      <div className="container">
        <div className="row wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div id="blog" className="col-xl-12" data-aos="fade-up">
            <div className="row">
              {Images.map((post) => (
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

export default WomenPic;
