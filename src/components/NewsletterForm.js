import React from 'react';
import './NewsletterForm.css'

function NewsletterForm() {
  return (
    <form className="form">
      <span className="title">Subscribe to our newsletter.</span>
      <p className="description">
      The leading commercial grower and exporter of premium organic and conventional fresh fruits from Kenya
        </p>
      <div>
        <input placeholder="Enter your email" type="email" name="email" id="email-address" />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
}

export default NewsletterForm;
