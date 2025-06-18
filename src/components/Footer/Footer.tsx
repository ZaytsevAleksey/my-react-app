import React from 'react';
import styles from "../../assets/styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.page__footer}>
      <div className={styles.footer_r}>
        <p className={styles.footer_text1}>Jobly.co</p>
        <br />
        <p className={styles.footer_text2}>We support a pool of diverse young creatives and engineers.</p>
        <br />
        <p className={styles.footer_text3}>© {new Date().getFullYear()} Jobly.co Copyright and All rights reserved.</p>
      </div>
      <div className={styles.footer_l}>
        <a href="terms" className={styles.footer_link}>Terms and Conditions</a> · 
        <a href="privacy" className={styles.footer_link}>Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;