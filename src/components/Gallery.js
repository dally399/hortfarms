import React from 'react';
import './Gallery.css'

//other imports
import hass1 from '../assets/hass-avocado-1.jpeg'
import hass2 from '../assets/hass-avocado-2.jpg'
import hass3 from '../assets/hass-avocado-3.jpg'
import hass4 from '../assets/Fuerte-avocados.jpg'
import hass5 from '../assets/Hass-Avocado-Farming-In-Kenya-1200x900.webp'
import hass6 from '../assets/hasss.webp'
import hass7 from '../assets/images (1).jpeg'
import hass8 from '../assets/images.jpeg'
import hass9 from '../assets/licensed-image.jpeg'

function Gallery() {
  return (
    <div className="gallery">
       <img src={hass1} alt=''/>
       <img src={hass2} alt=''/>
       <img src={hass3} alt=''/>
       <img src={hass4} alt=''/>
       <img src={hass5} alt=''/>
       <img src={hass6} alt=''/>
       <img src={hass7} alt=''/>
       <img src={hass8} alt=''/>
       <img src={hass9} alt=''/>
      </div>
  );
}

export default Gallery;
