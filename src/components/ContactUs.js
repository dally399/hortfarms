import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './ContactUs.css'
import NewsletterForm from './NewsletterForm';

import AOS from "aos";
import "aos/dist/aos.css";

import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import FAQ from './FAQ';

function ContactUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scrollTo(0,0);
  }, []);

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26x4lnc', 'template_vhp7doy', form.current, 'Ol3C811FWB2CZEs9S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div className="shell">
    <div className="main-container">
    <section className="contact-container" data-aos="zoom-in-up">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="heading">
          <h2>GET IN TOUCH</h2>
          <p>Send Us A Message</p>
        </div>
        <div className="input">
          <input name="user_name" type="text" placeholder="Your Name*" />
        </div>
        <div className="input">
          <input name="user_email" type="email" placeholder="Your Email*" />
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
        <input className="button" type="submit" value="Send" />
      </form>
      <div className="contact-info">
        <h3 className="heading">OUR INFORMATIONS</h3>
        <ul className="contacts">
          <li>
            <CiLocationOn className='icon-us'/>
            Juja Industrial Park, Kenya
          </li>
          <li>
            <HiOutlineMail className='icon-us'/>
            hortfarmsltdinfo@gmail.com
          </li>
          <li>
            <HiOutlineMail className='icon-us'/>
            Director@hortfarms.co.ke 
          </li>
          <li>
            <HiOutlineMail className='icon-us'/>
            Operations@hortfarms.co.ke
          </li>
          <li>
            <HiOutlineMail className='icon-us'/>
            Info@hortfarms.co.ke
          </li>
          <li>
           <BsTelephone className='icon-us'/>
           (+254) 0701439141
          </li>
    
        </ul>
        <div className="social-links"></div>
      </div>
    </section>

<div className="map-section" data-aos="zoom-in-up" data-aos-duration="1000">
  <span className='locate'>Our Location</span>

 <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255292.12090901556!2d36.73421134551684!3d-1.2154004111972663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f471e53e56885%3A0xc444632845b5fa0a!2sjuja%20industrial%20park!5e0!3m2!1sen!2ske!4v1696596564125!5m2!1sen!2ske"
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
<FAQ/>
<NewsletterForm/>
    </div>
  );
}

export default ContactUs