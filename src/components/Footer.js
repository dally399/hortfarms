import React from 'react'
import './Footer.css'

function Footer() {
  return (
     
    <footer class="footer">
        <div class="footer_contain">
            <div class="row_footer">
                <div class="footer_column">
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Our Services</li>
                        <li>Privacy Policy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div class="footer_column">
                    <h4>Get Help</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>Order Status</li>
                        <li>Payment Options</li>
                        <li>Terms and Conditions</li>
                        <li>Cookies</li>
                    </ul>
                </div>

                <div class="footer_column">
                    <h4>Follow us</h4>
                    <div class="social_links">
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer