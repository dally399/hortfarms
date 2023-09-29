import React, {useEffect} from 'react';
import './Gallery.css'
import NewsletterForm from './NewsletterForm';

//other imports
import mango1 from '../assets/Tommy Atkins mangoes.jpeg'
import mango2 from '../assets/Kent Mango, Value Bundle (6 count).jpeg'
import hass3 from '../assets/hass-avocado-3.jpg'
import hass4 from '../assets/Fuerte-avocados.jpg'
import hass5 from '../assets/Hass-Avocado-Farming-In-Kenya-1200x900.webp'
import pineapple6 from '../assets/34 Pineapple Recipes That Prove the Versatility of This Sweet, Juicy Fruit.jpeg'
import pineapple7 from '../assets/pineapples.jpeg'
import hass8 from '../assets/images.jpeg'
import hass9 from '../assets/licensed-image.jpeg'
import mango3 from '../assets/download.jpeg'
import mango4 from '../assets/Mercado Central Mayorista.jpeg'
import pineapple8 from '../assets/Premium Photo _ Juicy and ripe pineapple on a white background.jpeg'

function Gallery() {
  useEffect(() =>{
    window.scrollTo(0,0);
  },[]);

  return (
    <div className="shell">
    <div className="gallery">
       <img src={mango1} alt=''/>
       <img src={mango2} alt=''/>
       <img src={hass3} alt=''/>
       <img src={hass4} alt=''/>
       <img src={hass5} alt=''/>
       <img src={pineapple6} alt=''/>
       <img src={pineapple7} alt=''/>
       <img src={hass8} alt=''/>
       <img src={hass9} alt=''/>
       <img src={mango3} alt=''/>
       <img src={mango4} alt=''/>
       <img src={pineapple8} alt=''/>
      </div>
      <NewsletterForm/>
      </div>
  );
}

export default Gallery;
