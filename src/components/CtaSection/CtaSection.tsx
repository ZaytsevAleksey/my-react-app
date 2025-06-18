import React from 'react';
import styles from "../../assets/styles/CtaSection.module.css";

const CtaSection = () => {
  return (
    <section className={styles.content_section_CTA}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Set up your profile.<br />Let jobs find you.</h1>
          <a href="." className={styles.Join_Now}>Join Now</a>
        </div>
        <img 
          src="img/Rectangle 15.jpg" 
          alt="image" 
          className={styles.image4} 
        />
      </div>
    </section>
  );
};

export default CtaSection;