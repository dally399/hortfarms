import React from 'react'
import './Blog.css'

import blog1 from '../assets/avocado-img2.jpg'

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

      <div className="blog-container-bottom">
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
   </div>
  )
}

export default Blog