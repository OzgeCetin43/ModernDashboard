import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import logo from "../../assets/images/logo.svg";

import "./UserSignIn.css";
import { Link } from "react-router-dom";

export const UserSignIn: React.FC = () => {
  return (
    <div className="user-sign-in-container">
      <div className="user-sign-in-container-content">
        <img src={logo} alt="logo" />
        <h3>Welcome Back!</h3>
        <small>Sign in o continue to Dashboard</small>
        <form className="user-sign-in-form">
          <label htmlFor="user-name">User Name</label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            placeholder="Enter user name"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <Link to="/password-reset">Forgot password?</Link>
          <button className="user-sign-in-button">Sign In</button>
        </form>
        <small>or</small>
        <p>Sign In with </p>
        <div className="user-sign-in-social-media">
          <FaFacebookSquare />
          <FaGithubSquare />
          <FaTwitterSquare />
        </div>
      </div>
    </div>
  );
};
