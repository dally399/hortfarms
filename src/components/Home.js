import React, {useEffect} from 'react'
import Hero from './Hero';
import Card from './Card';
import Banner from './Banner';
import Achievements from './Achievements';
import NewsletterForm from './NewsletterForm';
import Slider from './Slider';
import WhatWeDo from './WhatWeDo';
import Certification from './Certification';

function Home() {
  useEffect(() =>{
    window.scrollTo(0,0);
  },[]);

  return (
    <div>
    
    <><Hero/></> 
    <><Card/></> 
    <><Banner/></>       
    <Slider/> 
    <WhatWeDo/>
    <Achievements/>
    <Certification/>
    <NewsletterForm/>
   
    </div>
  )
}

export default Home