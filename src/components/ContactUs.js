import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id="sectioncontactus">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="title-contact">CONTACT US</h1>
          
          {/* Contact Information */}
          <div className="col-md-6 col-12">
            <div className="contact_info">
              <ul className="icon_list pt50">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>
                    Bhaskar Nagar, Moinabad Mandal<br />
                    R.R. District, Hyderabad<br />
                    Telangana State, India-500075<br />
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <span>
                    9885685836, 9177210108, 7978876463, 7908058895
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <span>
                    info@disccon.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Google Map Embed */}
          <div className="col-12 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7617.392073755574!2d78.29777700000001!3d17.330209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73a884f17edcfeca!2sJ%20B%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1566722808133!5m2!1sen!2sin"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
