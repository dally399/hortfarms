import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="main-container">
    <section className="contact-container">
      <form className="contact-form">
        <div className="heading">
          <h2>CONTACT US</h2>
          <p>feel free to reach out to us, we'd love to hear from you!</p>
        </div>
        <div className="input">
          <i className="fa-regular fa-user"></i>
          <input name="username" type="text" placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-regular fa-envelope"></i>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div className="input">
          <i className="fa-regular fa-message"></i>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <input className="button" type="button" value="Submit" />
      </form>
      <div className="contact-info">
        <h3 className="heading">OUR INFORMATIONS</h3>
        <ul className="contacts">
          <li>
            <i className="fa-solid fa-location-dot"></i>
            123 Main Street, Suite 456, Anytown
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            info@apexenterprises.com
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            555-123-4567
          </li>
          <li>
            <i className="fa-solid fa-print"></i>
            555-987-6543
          </li>
        </ul>
        <div className="social-links"></div>
      </div>
    </section>

<div className="map-section">
  <span className='locate'>Our Location</span>

 <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.55994431717!2d34.11568455!3d0.4504969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fa198981abd19%3A0x3ca0969960bd9651!2sMjini!5e0!3m2!1sen!2ske!4v1693475549290!5m2!1sen!2ske"
      width="800"
      height="600"
      title='Hortfarms Ltd Location'
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </div>
  );
}

export default ContactUs