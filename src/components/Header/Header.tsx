import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup'); 
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header>
      <div className="container">
        <div className="log"><p>Jobly</p></div>
        <nav>
          <a href="/recruiters" className="ForRecruiters">For Recruiters</a>
          <button 
            id="SignUp" 
            className="SignUp"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button 
            id="Login" 
            className="Login"
            onClick={handleLogin}
          >
            Log in
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;