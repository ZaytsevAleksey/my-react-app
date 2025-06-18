import React from 'react';
import styles from "../../assets/styles/Quote.module.css";

const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles.container}>
        <div className={styles.photo}>
          <img src="/img/Ellipse 512.jpg" alt="Founder avatar" className={styles.image} />
        </div>
        <blockquote>
          <h1 className={styles.title}>
            Creating an Online Presence is Hard.<br /> 
            Jobly Makes it Easy for Recruiters to See you
          </h1>
          <div className={styles.author}>
            <h2>Zhao Cui</h2>
            <h3>Founder at Jobly.co</h3>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;