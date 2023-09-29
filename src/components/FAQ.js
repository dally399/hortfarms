import React, { useState, useEffect } from 'react';
import './FAQ.css';

function FAQ() {
  useEffect(() =>{
    window.scrollTo(0,0);
  },[]);

  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const faqData = [
    {
      id: 1,
      question: 'What types of fruits do you source and export?',
      answer:
      ' We source and export a wide variety of fruits, including  mangoes, avocados and pineapples. We can also source and export more specialized fruits like the hass and fuerte avocados.'
    },
    {
      id: 2,
      question: 'How do you ensure the quality of your fruits?',
      answer:
      ' We have a strict quality control process in place to ensure that our fruits are of the highest quality. We work with experienced and reputable growers who produce fruits that meet our strict standards. We also inspect all of our fruits before they are exported to ensure that they are fresh and free from defects.'
    },
    {
      id: 3,
      question: 'What are your export markets?',
      answer:
      'We export our fruits to a wide range of markets around the world, including Europe, North America, Asia, and the Middle East. We are constantly expanding our export markets and are always looking for new opportunities to partner with importers and distributors.'
    },
    {
      id: 4,
      question: 'What are your shipping and logistics options?',
      answer:
      'We offer a variety of shipping and logistics options to meet the needs of our customers. We can ship our fruits by air or by sea, depending on the customers preference. We also offer a variety of packaging options to ensure that our fruits arrive at their destination in perfect condition.'
    },
    {
      id: 5,
      question: 'How can I get started with importing fruits?',
      answer:
      'If you are new to importing fruits, we recommend that you contact us to discuss your needs. We can help you to identify the right suppliers, negotiate contracts, and arrange for shipping and logistics.'
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <button
              id={`accordion-button-${item.id}`}
              aria-expanded={activeItem === index}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {activeItem === index && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
