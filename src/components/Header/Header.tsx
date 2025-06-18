import React from 'react';
import { Link } from "react-router-dom";
import styles from "../../assets/styles/Header.module.css";

const Header: React.FC = () => {
  const handleSignUpClick = () => {
    console.log('Sign Up clicked');
  };

  const handleLoginClick = () => {
    console.log('Login clicked');
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.log}>
          <p>Jobly</p>
        </div>
        <nav>
          <a href=" " className={styles.ForRecruiters}>For Recruiters</a>
          <button id="SignUp" className={styles.SignUp} onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button id="Login" className={styles.Login} onClick={handleLoginClick}>
            Log in
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;