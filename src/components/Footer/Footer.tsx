import React from 'react';
import styles from "../../assets/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.logo}>Jobly.co</p>
          <p className={styles.description}>We support a pool of diverse young creatives and engineers.</p>
          <p className={styles.copyright}>© 2023 Jobly.co Copyright and All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <a href="/terms" className={styles.link}>Terms and Conditions</a>
          <span> · </span>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;