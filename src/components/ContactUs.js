import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <section className="contact-container">
      <div className="contact-logo">
      </div>
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
  );
}

export default ContactUs