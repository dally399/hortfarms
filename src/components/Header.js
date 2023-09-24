import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Header.css"
import image1 from "../assets/hero.jpg"
import image2 from "../assets/alternative-906138_1920.jpg"

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Header() {
  return (
    <div className="header-container">
    <>
      <Swiper style={{padding:"0"}}
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"100%"}}> 
        <img src={image1} alt="" />
        
         </SwiperSlide>
        <SwiperSlide style={{height:"100%"}}><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide style={{height:"100%"}}><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide style={{height:"100%"}}><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide style={{height:"100%"}}><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide style={{height:"100%"}}><img src={image1} alt="" /></SwiperSlide>
      </Swiper>
    </>
    </div>
  );
}
