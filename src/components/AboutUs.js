import React from 'react'
import './AboutUs.css'

// import about from '../assets/background.jpg'

function AboutUs() {
  return (
    <div className="about-section">
      {/* <img src={about} alt="" /> */}
      <div className="inner-container">
        <h1>About Us</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum
          pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
        </p>
        <div className="skills">
          <span>Web Design</span>
          <span>Photoshop & Illustrator</span>
          <span>Coding</span>
        </div>
      </div>
    </div>
  );
} 

export default AboutUs