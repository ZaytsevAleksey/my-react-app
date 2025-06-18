import React from 'react';
import './styles.css';

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      id="registerModal" 
      className="modal" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <span 
          className="close" 
          onClick={onClose}
        >
          &times;
        </span>
        <h2>Sign Up</h2>
        <form id="registerForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;