import React from 'react'
import './Blog.css'

import blog1 from '../assets/avocado-img2.jpg'
import NewsletterForm from './NewsletterForm';

function Blog() {
  return ( 
   <div className="blog-header">
    <div className="blog-heading">
      <span>Latest In The Blogs</span>
    </div>
    <div className="blog-container-top">      

    <div class="card_blog">
    <div class="temporary_text"> 
        <img src={blog1} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">The Importance of Modern Techniques in Agriculture</span>
        <span class="card_blog_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_blog_description">
        In today's world, it is more important than ever to use modern techniques in agriculture. These techniques can help farmers to produce more food while using fewer resources. This is essential to feeding a growing global population.

In this blog post, we will discuss some of the most important modern techniques in agriculture. We will also explain how these techniques can help farmers to produce more food while reducing their environmental impact.
          </p>
    
      </div>
      </div>   
    
      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog1} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">This is a Title</span>
        <span class="card_blog_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_blog_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
      </div>
      </div>

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog1} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">This is a Title</span>
        <span class="card_blog_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_blog_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
      </div>
      </div> 

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog1} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">This is a Title</span>
        <span class="card_blog_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_blog_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
      </div>
      </div>

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog1} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">This is a Title</span>
        <span class="card_blog_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_blog_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
      </div>
      </div>

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog1} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">This is a Title</span>
        <span class="card_blog_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_blog_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
      </div>   
      

      </div>         
    </div> 
    <NewsletterForm/> 
   </div>
  )
}

export default Blog