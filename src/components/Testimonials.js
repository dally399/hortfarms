import React, { useState } from 'react';
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
        name: 'Zen',
        role: 'Author',
        description: 'Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She is also known as the best selling book author.',
        image: 'https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg'
      },
      {
        name: 'Jonathan',
        role: 'Treymont Inc.',
        description: 'Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.',
        image: 'https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg'
      },
      {
        name: 'Charlie',
        role: 'Hallmark Inc.',
        description: 'Charlie Green is a European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.',
        image: 'https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg'
      },
      {
        name: 'Sarah',
        role: 'Zara Inc.',
        description: 'Sarah Dam is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.',
        image: 'https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3'
      }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  function handleSlideClick(index) {
    setActiveSlide(index);
  }

  return (
    <div className="main-body">
    <main>
      <h1>Testimonials</h1>
      <div className="testimonial">
        <div className="slide-row" id="slide" style={{ transform: `translateX(-${activeSlide * 800}px)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="slide-col" key={index}>
              <div className="user-text">
                <p>{testimonial.description}</p>
                <h2>{testimonial.name}</h2>
                <p>{testimonial.role}</p>
              </div>
              <div className="user-img">
                <img src={testimonial.image} alt="avatar" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="indicator">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`btn ${activeSlide === index ? 'active' : ''}`}
            onClick={() => handleSlideClick(index)}
          ></span>
        ))}
      </div>
    </main>
    </div>
  );
}

export default Testimonials;
