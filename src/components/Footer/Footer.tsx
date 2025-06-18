import React from 'react';

const PageFooter = () => {
  return (
    <footer className="page__footer">
      <div className="footer_r">
        <p className="footer_text1">Jobly.co</p>
        <br />
        <p className="footer_text2">We support a pool of diverse young creatives and engineers.</p>
        <br />
        <p className="footer_text3">© 2023 Jobly.co Copyright and All rights reserved.</p> 
      </div>
      <div className="footer_l">
        <a href="terms" className="footer_link">Terms and Conditions</a> · 
        <a href="privacy" className="footer_link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default PageFooter;