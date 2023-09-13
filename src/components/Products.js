import React from 'react';
import './Products.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//other imports
import product1 from '../assets/product-fuerte.jpeg'
import hass from '../assets/product-hass.jpeg'
import pineapples from '../assets/pinapple.jpg'
import mango from '../assets/Mango.jpg'
import fuerte from '../assets/product-fuerte.jpeg'

function Products() {
  return (
    <div className="main-body-container">
      <span className="container-heading">Our Products</span>
      <span className='description-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam delectus sint illum labore sit error placeat nostrum nemo? Laboriosam, iure.</span>
    <div className="body-container">
      <div className="content-left">
          <img src={hass} alt="" loading='lazy' />
      </div>
      <div className="content-right">
        <span className='hass-title'>Hass Avocados</span>
        <span className='hass-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet repellat molestias suscipit culpa hic maxime amet non excepturi saepe officia rerum sequi, earum explicabo laboriosam assumenda dolorem labore eum.</span>
      </div>
 
      <div className="content-left-mid">
        <span className='fuerte-title'>Fuerte Avocados</span>
        <span className='fuerte-container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil iusto odit facere, perferendis cum id? Nihil ducimus excepturi enim molestias eligendi? Porro, assumenda! Atque suscipit debitis non eos modi.</span>
      </div>

      <div className="content-right-mid">
        <img src={fuerte} alt="" loading='lazy' />
      </div>

      <div className="content-left">
        <img src={pineapples} alt="" />
      </div>
      <div className="content-right">
        <span className='hass-title'>Pineapples</span>
        <span className='hass-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet repellat molestias suscipit culpa hic maxime amet non excepturi saepe officia rerum sequi, earum explicabo laboriosam assumenda dolorem labore eum.</span>
      </div>
 
      <div className="content-left-mid">
        <span className='fuerte-title'>Mangos</span>
        <span className='fuerte-container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil iusto odit facere, perferendis cum id? Nihil ducimus excepturi enim molestias eligendi? Porro, assumenda! Atque suscipit debitis non eos modi.</span>
      </div>

      <div className="content-right-mid">
          <img src={mango} alt="" />
      </div>
    </div>

    <div className="swiperjs-container">
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={product1} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
    </div>
    </div>
  )
}

export default Products