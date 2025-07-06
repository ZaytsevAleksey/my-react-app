import React from "react";
import styles from "../../assets/styles/Register.module.css";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Sign up</h2>
        <form>
          <label htmlFor="username">User name:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button className={styles.buttonokno} type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;