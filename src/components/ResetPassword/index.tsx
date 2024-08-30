import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

import "./ResetPassword.css";

export const ResetPassword: React.FC = () => {
  return (
    <div className="reset-password-container">
      <div className="reset-password-container-content">
        <h3>Forgot Password</h3>
        <small>Reset password with Dashboard</small>
        <IoIosMail />
        <p>Enter your email and instructions will be sent to you!</p>
        <form className="reset-password-form">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter e-mail"
          />
          <button className="reset-password-button">Send Reset Link</button>
        </form>
      </div>
      <div className="remember-password-container">
        <p>
          Wait, I remember my password... <Link to="/sign-in">Click here</Link>
        </p>
      </div>
    </div>
  );
};
