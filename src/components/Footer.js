import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";


function Footer() {
  return (
     
    <footer class="footer">
        <div class="footer_contain">
            <div class="row_footer">
                <div class="footer_column">
                    <h4>Company</h4>
                    <ul>
                        <Link to='/about' ><li>About us</li></Link>
                        <Link to='/services' ><li>Our Services</li></Link>
                        <Link to='/policy' ><li>Privacy Policy</li></Link>
                        <Link to='/contact' ><li>Contact us</li></Link>
                    </ul>
                </div>
                <div class="footer_column">
                    <h4>Get Help</h4>
                    <ul>
                       <Link to='/faq' ><li>FAQ</li></Link> 
                       <Link to='/options' ><li>Payment Options</li></Link> 
                       <Link to='/terms' ><li>Terms and Conditions</li></Link>
                       <Link to='/cookies' ><li>Cookies</li></Link> 
                    </ul>
                </div>

                <div class="footer_column">
                    <h4>Follow us</h4>
                    <div class="social_links">
                        <Link to='' ><BsFacebook className='icon-footer'/></Link>
                        <Link to='' ><BsWhatsapp className='icon-footer'/></Link>
                        <Link to='' ><BsInstagram className='icon-footer'/></Link>
                        <Link to='' ><AiFillYoutube className='icon-footer'/></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer