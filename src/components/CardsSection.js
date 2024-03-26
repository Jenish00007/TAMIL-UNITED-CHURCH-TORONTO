// Home.js
import React from 'react';

const CardsSection = () => {
  return (
    <section className="cyber-security-section cyber-security-section2 overflow-hidden">
    <div className="container">

    <div className="cards-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-4 text-md-left text-center">
            <div className="cards-outer outer-card1" data-aos="fade-up">
              <h6 className="heading-background">Slogan 1</h6>
              <p className="card-heading-p vertical-bar-line">Be still before the Lord and wait patiently for him; fret not yourself over the one who prospers in his way, over the man who carries out evil devices!</p>
              <p className="date-p">Psalm 37:7 </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-4 text-md-left text-center">
            <div className="cards-outer outer-padding-left outer-card2" data-aos="fade-up">
              <h6 className="heading-background">Slogan 2</h6>
              <p className="card-heading-p vertical-bar-line">And let the beauty of the LORD our God be upon us: and establish thou the work of our hands upon us; yea, the work of our hands establish thou it.</p>
              <p className="date-p">Psalms 90:17</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-4 text-md-left text-center" data-aos="fade-up">
            <div className="outer-padding-left-last outer-card3">
              <h6 className="heading-background">Slogan 3</h6>
              <p className="card-heading-p">Wait for the Lord and keep his way, and he will exalt you to inherit the land; you will look on when the wicked are cut off.</p>
              <p className="date-p">Psalm 37:34 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}

export default CardsSection;
