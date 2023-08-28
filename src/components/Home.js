import React from 'react'
import Hero from './Hero';
import Card from './Card';
import Banner from './Banner';
import Achievements from './Achievements';
import Testimonials from './Testimonials';
import ProductCarousel from './ProductCarousel';

function Home() {
  return (
    <div>
     
    <><Hero/></>      
    <><Card/></>
    <><Banner/></>
    <Achievements/>
    <Testimonials/>
    <ProductCarousel/>

    </div>
  )
}

export default Home