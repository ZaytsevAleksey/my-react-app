import React from 'react';
import styles from "../../assets/styles/Preloader.module.css";

const Preloader: React.FC = () => {
  return (
    <div id="preloader">
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;