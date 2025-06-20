import React from 'react';
import styles from "../../assets/styles/Hero.module.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/signup');
  };

  const handleHireNow = () => {
    navigate('/recruiters');
  };
  return (
    <section className={styles.content_section_hero}>
      <div className={styles.container}>
        <h1>
          Candidates with Creative & <br /> 
          Engineering Backgrounds
        </h1>
        <h2>
          This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch <br />
          your career here.
        </h2>
        <button 
          id="JoinNow" 
          className={styles.JoinNow}
          onClick={handleJoinNow}
        >
          Join Now
        </button>
        <p>
          Looking for candidates?{' '}
          <button 
            className={styles.Hirenow}
            onClick={handleHireNow}
          >
            Hire now
          </button>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;