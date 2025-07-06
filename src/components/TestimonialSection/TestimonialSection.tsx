import React from "react";
import styles from "../../assets/styles/Testimonial.module.css";

const QuoteSection: React.FC = () => (
  <section className={styles.quote}>
    <div className={styles.container}>
      <div className={styles.images}>
        <img src="img/kovichki.png" alt="mas" className={styles.img_dop1} />
        <img src="img/Ellipse 512.jpg" alt="" className={styles.img_dop2} />
      </div>
      <blockquote>
        <h1>
          Creating an Online Presence is Hard.<br />
          Jobly Makes it Easy for Recruiters to See you
        </h1>
        <br />
        <div className={styles.author}>
          <h4>Zhao Cui</h4>
          <p>Founder at Jobly.co</p>
        </div>
      </blockquote>
    </div>
  </section>
);

export default QuoteSection;
