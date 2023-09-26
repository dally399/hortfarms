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
import main from "../assets/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"

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
        <img src={main} alt="" loading='lazy'/>
      <div className="left-side">
        
        <span className='h-top animate__animated animate__bounceInDown'>A New Way To Invest In Agriculture </span> <br />
        <span className='h-mid animate__animated animate__bounceInDown'>Experience The Real</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>Agriculture</span>

       <Link className="link" to='/about'> <button className='Btn-hero animate__animated animate__bounceInDown'  >Read More</button> </Link> 
         
      </div>     
    </div>


         </SwiperSlide>
        <SwiperSlide style={{height:"100%"}}>
        <div className="background-container">
        <img src={image1} alt="" loading='lazy'/>
      <div className="left-side">
        
        <span className='h-top animate__animated animate__bounceInDown'>A New Way To Invest In Agriculture </span> <br />
        <span className='h-mid animate__animated animate__bounceInDown'>Experience The Real</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>Agriculture</span>

       <Link className="link" to='/about'> <button className='Btn-hero animate__animated animate__bounceInDown'  >Read More</button> </Link> 
         
      </div>     
    </div>
        </SwiperSlide>


        <SwiperSlide style={{height:"100%"}}>
           <div className="background-container">
        <img src={image2} alt="" loading='lazy'/>
      <div className="left-side">
        
        <span className='h-top animate__animated animate__bounceInDown'>A New Way To Invest In Agriculture </span> <br />
        <span className='h-mid animate__animated animate__bounceInDown'>Experience The Real</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>Agriculture</span>

       <Link className="link" to='/about'> <button className='Btn-hero animate__animated animate__bounceInDown'  >Read More</button> </Link> 
         
      </div>     
    </div>
        </SwiperSlide>


        <SwiperSlide style={{height:"100%"}}>
           <div className="background-container">
        <img src={image3} alt="" loading='lazy'/>
      <div className="left-side">
        
        <span className='h-top animate__animated animate__bounceInDown'>A New Way To Invest In Agriculture </span> <br />
        <span className='h-mid animate__animated animate__bounceInDown'>Experience The Real</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>Agriculture</span>

       <Link className="link" to='/about'> <button className='Btn-hero animate__animated animate__bounceInDown'  >Read More</button> </Link> 
         
      </div>     
    </div>
        </SwiperSlide>

      </Swiper>
    </>
    </div>
  );
}
