import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const RequestPrayer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email.js logic
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      comments: formData.comments,
    };
console.log(templateParams)
    // Replace 'YOUR_USER_ID' and 'YOUR_TEMPLATE_ID' with your Email.js user ID and template ID
    emailjs
      .send('service_m2shg38', 'template_1c71gzm', templateParams, 'QlaSLTiRcANhwlSL_')
      .then((response) => {
       // console.log('Email sent successfully:', response);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          comments: '',
        });
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
  };
  return (
    <section className="cyber-security-section overflow-hidden">
    <div className="container  mt-5">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 mb-md-0 mb-4">
        <div className="about-us-section-page contact-us-section" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h3 className="contact-us-title" data-aos="fade-up-left">
                Drop Us A Prayer Requests
              </h3>
              <p data-aos="fade-up-right">
              Use the form to submit your prayer request. You can share as much or as little detail as you're comfortable with.
              </p>
              <ul className="list-unstyled about-us-list">
                <li className="contact-li">
                  <div className="icons-rounded-box-contact">
                    <figure className="mb-0">
                      <img src="assets/images/contact-icon1.png" alt="" />
                    </figure>
                  </div>
                  <div className="contact-content">
                    <span className="contact-title">Where We Are:</span>
                    <span className="contact-parah">Tamil United Church Mission is located in 963 Pharmacy Ave, Scarborough  ON, Canada.</span>
                  </div>
                </li>
                <li className="contact-li">
                  <div className="icons-rounded-box-contact">
                    <figure className="mb-0">
                      <img src="assets/images/contact-icon2.png" alt="" />
                    </figure>
                  </div>
                  <div className="contact-content">
                    <span className="contact-title">Phone:</span>
                    <span className="contact-parah">
                    +1(416)821-0037 <span className="pr-2 pl-2"></span> 
                    </span>
                  </div>
                </li>
                <li className="contact-li">
                  <div className="icons-rounded-box-contact">
                    <figure className="mb-0">
                      <img src="assets/images/contact-icon3.png" alt="" />
                    </figure>
                  </div>
                  <div className="contact-content">
                    <span className="contact-title">Email:</span>
                    <span className="contact-parah">c.k.thangarajah@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about-section-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group contact-form-margin">
                    <input
                      type="text"
                      className="form-control input-text"
                      id="validationCustom01"
                      placeholder="Your Name"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group contact-form-margin">
                  <input
                    type="text"
                    className="form-control input-text"
                    id="validationCustom04" 
                    placeholder="Your Phone"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  </div>
                  <div className="form-group contact-form-margin">
                    <input
                      type="text"
                      className="form-control input-text"
                      id="validationCustom02"
                      placeholder="Your Email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group contact-form-margin">
                    <input
                      type="text"
                      className="form-control input-text"
                      id="validationCustom03"
                      placeholder="Subject"
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group contact-form-margin-text-area">
                    <textarea
                      name="comments"
                      id="message"
                      cols="10"
                      rows="10"
                      className="form-control"
                      placeholder="Your Message"
                      value={formData.comments}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="contact-section-btn text-center">
                    <button type="submit" className="btn btn-primary hover-effect">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default RequestPrayer;
