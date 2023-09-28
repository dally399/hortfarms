import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from "../assets/hero.jpg"
import image2 from "../assets/hero-pineapple.jpg"
import image3 from "../assets/alexander-schimmeck-vTXtQ8ZBzvY-unsplash.jpg"


import './Hero.css'
import 'animate.css';
import {Link} from 'react-router-dom'

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
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
        <div className="background-container">
        <img src={image1} alt="" loading='lazy'/>
      <div className="intro-side">
        
        <span className='h-mid animate__animated animate__bounceInDown'>AVOCADOS</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>By HortFarms</span>

       <Link className="link" to='/products'> <button className='Btn-hero animate__animated animate__bounceInDown'  >See Products</button> </Link> 
         
      </div>     
    </div>
        </SwiperSlide>


        <SwiperSlide style={{height:"100%"}}>
           <div className="background-container">
        <img src={image2} alt="" loading='lazy'/>
      <div className="left-side">
        
        <span className='h-mid animate__animated animate__bounceInDown'>PINEAPPLES</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>By HortFarms</span>

       <Link className="link" to='/products'> <button className='Btn-hero animate__animated animate__bounceInDown'  >Products</button> </Link> 
         
      </div>     
    </div>
        </SwiperSlide>


        <SwiperSlide style={{height:"100%"}}>
           <div className="background-container">
        <img src={image3} alt="" loading='lazy'/>
      <div className="left-side">
        
        <span className='h-mid animate__animated animate__bounceInDown'>MANGOS</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>By HortFarms</span>

       <Link className="link" to='/products'> <button className='Btn-hero animate__animated animate__bounceInDown'  >Products</button> </Link> 
         
      </div>     
    </div>
        </SwiperSlide>

      </Swiper>
    </>
    </div>
  );
}
