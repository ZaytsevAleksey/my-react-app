import React from 'react';
import './styles.css';

const ContentSection = () => {
  return (
    <section className="content_section_text1">
      <div className="container">
        <div className="photo">
          <img src="img/Ellipse 512.jpg" alt="photo_avatar" className="image2"/>
        </div>
        <blockquote>
          <h1> 
            Creating an Online Presence is Hard.<br /> 
            Jobly Makes it Easy for Recruiters to See you
          </h1>
          <br />
          <div className="chel">
            <h2>Zhao Cui</h2>
            <h3>Founder at Jobly.co</h3>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default ContentSection;