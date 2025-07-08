import React from "react";
import styles from "../../assets/styles/Login.module.css"; 

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Sign up</h2>
        <form>
          <label htmlFor="loginUsername">User name:</label>
          <input type="text" id="loginUsername" name="loginUsername" required />

          <label htmlFor="loginPassword">Password:</label>
          <input type="password" id="loginPassword" name="loginPassword" required />

          <button className={styles.buttonokno} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
