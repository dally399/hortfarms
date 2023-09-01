import React from 'react'
import Hero from './Hero';
import Card from './Card';
import Banner from './Banner';
import Achievements from './Achievements';
import Testimonials from './Testimonials';
import NewsletterForm from './NewsletterForm';
import Slider from './Slider';
import WhatWeDo from './WhatWeDo';


function Home() {
  return (
    <div>
     
    <><Hero/></>      
    <><Card/></>
    <WhatWeDo/>
    <><Banner/></>
    <Slider/>
    <Achievements/>
    <Testimonials/>
    <NewsletterForm/>
   
    </div>
  )
}

export default Home