import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './ProductCarousel.css'
import 'swiper/css'; // Import Swiper styles

const ProductCarousel = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      breakpoints: {
        560: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section>
      <h2>Trending this week</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam magnam obcaecati
        error consequatur repellat fugiat, deleniti nisi eum voluptates.
      </p>
      <div className="swiper-container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Swiper slides go here */}
          </div>
        </div>
        <div className="swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
