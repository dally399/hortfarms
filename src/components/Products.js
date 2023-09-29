import React, {useEffect} from 'react';
import './Products.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
//other imports

import AOS from "aos";
import "aos/dist/aos.css";

import hass from '../assets/product-hass.jpeg'
import pineapples from '../assets/pinapple.jpg'
import mango from '../assets/Mango.jpg'
import fuerte from '../assets/product-fuerte.jpeg'
import NewsletterForm from './NewsletterForm';

import image1 from '../assets/hero-pineapple.jpg'
import image2 from '../assets/alexander-schimmeck-vTXtQ8ZBzvY-unsplash.jpg'
import image3 from '../assets/hitoshi-namura-ePsIKxISjNU-unsplash.jpg'

function Products() {
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
    window.scrollTo(0,0);
  },[]);
  return (
    <div className="shell">
    <div className="main-body-container">
      <span className="container-heading" data-aos="fade-up">Our Products</span>
      <span className='description-heading' data-aos="fade-up">
      Our avocados, mangoes, and pineapples are all hand-picked at the peak of ripeness and shipped directly to you. We offer a wide variety of sizes and quantities to choose from, so you can find the perfect amount for your needs. No matter which fruit you choose, you are sure to enjoy its delicious flavor and health benefits.
      <p>Our Mission is to provide quality products and services that exceeds specifications and expectations of customers and business patners at all times.</p>
        </span>
    <div className="body-container">
      <div className="content-left">
          <img src={hass} alt="" loading='lazy'  data-aos="fade-right"  data-aos-duration="500" />
      </div>
      <div className="content-right" data-aos="fade-left"  data-aos-duration="500">
        <span className='hass-title'>Hass Avocados</span>
        <span className='hass-content'>
        Hass avocados are the most popular avocado variety in the world, and for good reason. They have a rich, buttery flavor and a smooth, creamy texture. Hass avocados are also highly nutritious, containing a variety of vitamins, minerals, and healthy fats.

 <p>Flavor: Rich, buttery</p>
<p>Texture: Smooth, creamy</p>
<p>Nutrition: Vitamins A, C, E, and K, as well as potassium, fiber, and healthy fats</p>

Uses: Hass avocados are versatile fruits that can be enjoyed in a variety of ways. They can be eaten fresh, added to salads, sandwiches, and wraps, or used to make guacamole, hummus, and other dips and spreads.
          </span>
      </div>
 
      <div className="content-left-mid" data-aos="fade-right"  data-aos-duration="500">
        <span className='fuerte-title'>Fuerte Avocados</span>
        <span className='fuerte-container'>
        Fuerte avocados are another popular avocado variety. They have a slightly sweeter and fruitier flavor than Hass avocados, and their flesh is slightly firmer. Fuerte avocados are also a good source of vitamins, minerals, and healthy fats.
<p>Flavor: Slightly sweeter and fruitier than Hass avocados</p>
<p>Texture: Slightly firmer than Hass avocados</p>
<p>Nutrition: Vitamins A, C, E, and K, as well as potassium, fiber, and healthy fats
</p>

Uses: Fuerte avocados can be enjoyed in the same ways as Hass avocados. They are especially good for slicing and adding to salads and sandwiches.
          </span>
      </div>

      <div className="content-right-mid">
        <img src={fuerte} alt="" loading='lazy' data-aos="fade-left"  data-aos-duration="500" />
      </div>

      <div className="content-left">
        <img src={pineapples} alt="" data-aos="fade-right"  data-aos-duration="500"/>
      </div>
      <div className="content-right" data-aos="fade-left"  data-aos-duration="500">
        <span className='hass-title'>Pineapples</span>
        <span className='hass-content'>
        Pineapples are tropical fruits with a sweet, tangy flavor and a bright yellow color. Pineapples are a good source of vitamins C and B6, as well as manganese and copper.
<p>Flavor: Sweet, tangy</p>
<p>Texture: Slightly fibrous</p>
<p>Nutrition: Vitamins C and B6, as well as manganese and copper</p>

Uses: Pineapples can be eaten fresh, added to salads, smoothies, and desserts, or used to make juice and jam. 
          </span>
      </div>
 
      <div className="content-left-mid" data-aos="fade-right"  data-aos-duration="500">
        <span className='fuerte-title'>Mangoes</span>
        <span className='fuerte-container'>
        Mangoes are tropical fruits with a sweet, juicy flavor and a bright orange color. Mangoes are a good source of vitamins A, C, and E, as well as fiber and potassium.
<p>Flavor: Sweet, juicy</p>
<p>Texture: Firm but slightly yielding</p>
<p>Nutrition: Vitamins A, C, and E, as well as fiber and potassium</p>

Uses: Mangoes can be eaten fresh, added to salads, smoothies, and desserts, or used to make chutney and salsa.
          </span>
      </div>

      <div className="content-right-mid">
          <img src={mango} alt="" data-aos="fade-left"  data-aos-duration="500"/>
      </div>
    </div>

    <div className="swiperjs-container" data-aos="fade-up" data-aos-duration="1000">
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"600px"}}>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{height:"600px"}}>
          <img src={image2} alt="" />
        </SwiperSlide>
       
        <SwiperSlide style={{height:"600px"}}>
          <img src={image3} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
    </div>
    <NewsletterForm/>
    </div>
  )
}

export default Products