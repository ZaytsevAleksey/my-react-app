import React from 'react';
import styles from "../../assets/styles/Connect.module.css";

const ConnectSection = () => {
  return (
    <section className={styles.content_section_text2}>
      <div className={styles.container}>
        <img 
          src="img/Frame 427320330.jpg" 
          alt="connect image" 
          className={styles.image3} 
        />
        <div className={styles.connect}> 
          <h1>Connect With Recruiter</h1>
          <h2>
            Get instant access to a curated pool of top creative & tech talent 
            actively seeking their next role. Find highly qualified job!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;