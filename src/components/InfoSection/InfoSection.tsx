import React from 'react';
import styles from "../../assets/styles/InfoSection.module.css";
import CardList from "../CardList/CardList"; 

interface FormsSectionProps {
  infImageSrc?: string;
  children?: React.ReactNode;
}
const FormsSection: React.FC<FormsSectionProps> = ({ 
  infImageSrc = "img/Frame 1625.jpg", 
  children 
}) => {
  return (
    <section className="content_section_forms">
      <div className="container">
        <h1>Everything you want to know in one place.</h1>
        <img 
          id="infImage" 
          src={infImageSrc} 
          alt="Info Image" 
          className="inf-image" 
        />
        <div className="features" id="features-container">
          {children}
        </div>
      </div>
    </section>
  );
};

export default FormsSection;