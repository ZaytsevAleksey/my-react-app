import React from 'react';
import styles from "../../assets/styles/Quote.module.css";

const TestimonialSection: React.FC = () => {
  return (
    <section className={styles.content_section_text1}>
      <div className={styles.container}>
        <div className={styles.photo}>
          <img 
            src="/img/Ellipse512.jpg" 
            alt="Zhao Cui - Founder at Jobly.co" 
            className={styles.image2}
            loading="lazy" 
          />
        </div>
        <blockquote>
          <h1>
            Creating an Online Presence is Hard.
            <br /> 
            Jobly Makes it Easy for Recruiters to See You
          </h1>
          <br />
          <div className={styles.chel}>
            <h2>Zhao Cui</h2>
            <h3>Founder at Jobly.co</h3>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialSection;