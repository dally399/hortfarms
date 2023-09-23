import React, { useEffect } from 'react'
import './ContactUs.css'
import NewsletterForm from './NewsletterForm';

import AOS from "aos";
import "aos/dist/aos.css";

import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

function ContactUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="shell">
    <div className="main-container">
    <section className="contact-container">
      <form className="contact-form">
        <div className="heading">
          <h2>GET IN TOUCH</h2>
          <p>Send Us A Message</p>
        </div>
        <div className="input">
          <input name="username" type="text" placeholder="Your Name*" />
        </div>
        <div className="input">
          <input name="email" type="email" placeholder="Your Email*" />
        </div>
        <div className="input">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message*"
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <input className="button" type="button" value="Submit" />
      </form>
      <div className="contact-info">
        <h3 className="heading">OUR INFORMATIONS</h3>
        <ul className="contacts">
          <li>
            <CiLocationOn className='icon-us'/>
            123 Main Street, Suite 456, Anytown
          </li>
          <li>
            <HiOutlineMail className='icon-us'/>
            info@apexenterprises.com
          </li>
          <li>
           <BsTelephone className='icon-us'/>
            555-123-4567
          </li>
          <li>
          <BsTelephone className='icon-us'/>
            555-987-6543
          </li>
        </ul>
        <div className="social-links"></div>
      </div>
    </section>

<div className="map-section" data-aos="zoom-in-up" data-aos-duration="1000">
  <span className='locate'>Our Location</span>

 <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.55994431717!2d34.11568455!3d0.4504969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fa198981abd19%3A0x3ca0969960bd9651!2sMjini!5e0!3m2!1sen!2ske!4v1693475549290!5m2!1sen!2ske"
      width="100%"
      height="600"
      title='Hortfarms Ltd Location'
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>
<NewsletterForm/>
    </div>
  );
}

export default ContactUs