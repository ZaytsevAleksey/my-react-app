import React, { useState, useEffect } from 'react';
import styles from "../../assets/styles/Slider.module.css";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: 'img/Slide1.jpg', alt: 'Image Slide 1' },
    { src: 'img/Slide2.jpg', alt: 'Image Slide 2' },
    { src: 'img/Slide3.jpg', alt: 'Image Slide 3' }
  ];

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [slides.length]);

  return (
    <section className="slider_container">
      <div className="slider">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className={`hero-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};
export default Slider;