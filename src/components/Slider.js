import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

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

export default function Slider() {
  return (
    <div className="swiper-container-body">   
    <>
      <Swiper
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
          <img src={hass1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hass2} alt=''/>
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
        <img src={hass6} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass7} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass8} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hass9} alt=''/>
        </SwiperSlide>
      </Swiper>
    </>

    </div>
  );
}
