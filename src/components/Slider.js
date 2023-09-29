import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {Link} from 'react-router-dom'


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

import { AiOutlineArrowRight } from 'react-icons/ai';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="swiper-container-body">
      <span className='slider-title' data-aos="fade-up"
     data-aos-duration="300">Featured Products</span> 
      <span className='slider-description' data-aos="fade-up"
     data-aos-duration="3000">
      Our featured products are the most delicious and fresh fruits and vegetables available. We carefully choose them from the best farms in the country and deliver them to your door so you can enjoy them at their peak ripeness.

        </span>  
        <span className='slider-btn' data-aos="fade-up"
     data-aos-duration="3000">
         <Link className="link" to='/gallery'><button className='Btn'>See more on Gallery <AiOutlineArrowRight className='icon-slider'/></button> </Link> 
        </span>
    <>
      <Swiper data-aos="fade-left"
     data-aos-offset="400"
     data-aos-duration="600"
     
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mango1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mango2} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass3} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass4} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass5} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={pineapple6} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={pineapple7} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass8} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass9} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={mango3} alt=''/>
        </SwiperSlide>
      </Swiper>
    </>

    </div>
  );
}
