import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul className='nav-item'>
                    <Link className='footer-link' to='/' ><li>Home</li></Link>
                    <Link className='footer-link' to='/about' ><li>About us</li></Link>                 
                    <Link className='footer-link' to='/services' ><li>Our Services</li></Link>                    
                    <Link className='footer-link' to='/contact' ><li>Contact us</li></Link>                  
                    <Link className='footer-link' to='/faq' ><li>FAQ</li></Link>
                  
                </ul>

                <div class="social_links">
                        <Link className='footer-link' to='https://www.facebook.com/'><BsFacebook className='icon-footer'/></Link>
                        <Link className='footer-link' to='https://web.whatsapp.com/' ><BsWhatsapp className='icon-footer'/></Link>
                        <Link className='footer-link' to='https://www.instagram.com/' ><BsInstagram className='icon-footer'/></Link>
                        <Link className='footer-link' to='https://www.youtube.com/' ><AiFillYoutube className='icon-footer'/></Link>
                    </div>
                <div className='bottom'>
                
                    <span className='line'></span>
                    <p>2023 HortFarms, Ltd. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer