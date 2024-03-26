
import React from 'react';

const AboutUsSection = () => {
  const aboutItems = [
    {
      icon: 'assets1/images/about-round-icon1.png',
      title: 'UPCOMING EVENT',
      // description: 'Join us for our upcoming events that focus on community, worship, and spiritual enrichment. Discover new ways to connect with God and fellow believers.',
      E1:'Ash Wednesday-Feb 14th 2024 7pm',
      E2:'Maundy Thursday-March 28th 2024 7pm',
      E3:'Good Friday March 29th 2024 9am',
      E4:'Easter Sunday-March 31st 2024 9am',
      E5:'',
      E6:'',
      E7:'',
      link: '/events'
    },
    {
      icon: 'assets1/images/about-round-icon2.png',
      title: 'SPECIAL EVENT',
      description: 'Annual Carol Service ',
      E1:'Church Picnic',
      E2:'',
      link: '/events'
    },
    {
      icon: 'assets1/images/about-round-icon3.png',
      title: 'OUR MINISTRIES',
      description: "At Tamil United Church, our mission is to serve our community with love, compassion, and faith. We are committed to creating a welcoming and inclusive space for worship, fellowship, and spiritual growth.",
      E1:'',
      link: '/ministries'
    },
  ];

  return (
    <section className="about-us-section-start aboutus-page">
      <div className="about-right-icon position-relative">
        <figure className="whyus-icon"><img src="assets1/images/about-us-section-right-icon.png" alt="" className="img-fluid" /></figure>
      </div>
      <div className="container">
      <div  className="row">
          <div  className="col-12">
            {/* <h3 className="text-center">Why Choose Our Church</h3>
            <p className="text-center">Why Choose Our Church</p> */}
          </div>
        </div>
        <div style={{ marginTop: '5%' }} className="row">
          {aboutItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-12">
              <div className="about-us-content" data-aos="fade-up">
                <div className="icons-rounded-box">
                  <figure className="mb-0"><img src={item.icon} alt="" /></figure>
                </div>
                <h4>{item.title}</h4>
                <p className="security-services-p">{item.description}</p>
                <p className="security-services-p">{item.E1}</p>
                <p className="security-services-p">{item.E2}</p>
                <p className="security-services-p">{item.E3}</p>
                <p className="security-services-p">{item.E4}</p>
                <p className="security-services-p">{item.E5}</p>
                <p className="security-services-p">{item.E6}</p>
                <p className="security-services-p">{item.E7}</p>
               
                <a href={item.link} className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
