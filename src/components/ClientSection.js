import React from 'react';

const ClientSection = () => {
  const clientsData = [
    {
      img: 'assets1/images/client-section-img1.png',
      quotesIcon: 'assets1/images/quotes-icon.png',
      name: 'Mohan',
      // position: 'CEO - Company',
      testimonial: 'Tamil United Church has been a blessing to me and my family. The sense of community and the teachings have enriched our lives.',
      stars: [1, 2, 3, 4]
    },
    {
      img: 'assets1/images/client-section-img2.png',
      quotesIcon: 'assets1/images/quotes-icon.png',
      name: 'Esthar',
      // position: 'CEO - Company',
      testimonial: "The welcoming atmosphere and the focus on love and service make Tamil United Church a special place for spiritual growth.",
      stars: [1, 2, 3, 4, 5]
    },
  ];

  return (
    <section className="clients-section clients-section-right-img1">
      <div className="position-relative">
        <figure className="about2-left-img"><img src="assets1/images/about-section2-left-img.png" alt="" className="img-fluid" /></figure>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {/* <h3 className="text-center">What Clients Say</h3> */}
            <p className="text-center client-section-main-p mt-5">Being part of Tamil United Church has truly been a blessing. The sense of community and the emphasis on love and service have deeply impacted my spiritual journey.</p>
          </div>
        </div>
        <div className="row">
          {clientsData.map((client, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
              <div className="clients-outer-box position-relative" data-aos="fade-up">
                <figure className="clients-outer-box-figure"><img src={client.img} alt="" /></figure>
                <figure className="position-absolute icon-figure-quotes"><img src={client.quotesIcon} alt="" /></figure>
                <div className="clients-right-content" data-aos="fade-up">
                  <span className="spencer-span">{client.name}</span>
                  <span className="ceo-p">{client.position}</span>
                </div>
                <p className="clients-sectionp2">{client.testimonial}</p>
                <ul className="list-unstyled">
                  {client.stars.map((star, starIndex) => (
                    <li key={starIndex}><i className="fa-solid fa-star"></i></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default ClientSection;
