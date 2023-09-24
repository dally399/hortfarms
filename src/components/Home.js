import React from 'react'
// import Hero from './Hero';
import Card from './Card';
import Banner from './Banner';
import Achievements from './Achievements';
import NewsletterForm from './NewsletterForm';
import Slider from './Slider';
import WhatWeDo from './WhatWeDo';
import Header from './Header';


function Home() {
  return (
    <div>
     <Header/>
    {/* <><Hero/></>  */}
    <><Card/></> 
    <><Banner/></>       
    {/* <><Card/></> */}
    <Slider/> 
    <WhatWeDo/>
    {/* <><Banner/></> */}
    {/* <Slider/> */}
    <Achievements/>
    <NewsletterForm/>
   
    </div>
  )
}

export default Home