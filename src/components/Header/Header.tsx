import React from 'react';
import { Link } from "react-router-dom";
import styles from "../../assets/styles/Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          Jobly
        </div>
        <nav className={styles.nav}>
          <a href="/recruiters" className={styles.forRecruiters}>For Recruiters</a>
          <button 
            className={styles.signUp}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
          <button 
            className={styles.login}
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;