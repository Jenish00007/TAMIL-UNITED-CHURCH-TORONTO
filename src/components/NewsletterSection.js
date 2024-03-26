import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="blogs-section-starts form-section-starts overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-section" data-aos="fade-up">
              <h3 className="text-center" data-aos="fade-up">
                Subscribe Our Channel
              </h3>
              <p className="text-center form-section-p" data-aos="fade-up-left">
                Stay connected with the Tamil United Church community by subscribing to our Channel.
                Receive updates on upcoming events, inspirational messages, and the latest news from
                our church family.
              </p>
              <div className="input-group mb-3 input-field-form text-center">
                <div className="input-group-append form-button mx-auto">
                  <a href="https://www.youtube.com/channel/UCD6BFm4s2dc8gQhf__LyKQA">
                    <button className="btn-form-section" type="submit">
                      Subscribe
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
