import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/Slider.module.css";

const images = [
  "img/Slide1.jpg",
  "img/Slide2.jpg",
  "img/Slide3.jpg",
];

const SliderSection: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.bloktem}>
      <div className={styles.slider}>
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Image ${idx + 1}`}
            className={`${styles.heroImage} ${active === idx ? styles.active : ""}`}
          />
        ))}
        {/* Кнопки убраны */}
      </div>
    </section>
  );
};

export default SliderSection;