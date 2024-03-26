import React from 'react';

const MapSection = () => {
  return (
    <div className="map-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.516077173043!2d-79.30482434914574!3d43.73136493022407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd53513894a7%3A0x694851b1d30bab03!2sWilmar%20Heights%20United%20Church%20Non-Profit%20Homes!5e0!3m2!1sen!2s!4v1659062738815!5m2!1sen!2s"
              width="1114"
              height="366"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
