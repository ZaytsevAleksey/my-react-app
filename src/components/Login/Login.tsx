import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  if (!isOpen) return null;

  return (
    <div 
      id="loginModal" 
      className="modal" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Log in</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;