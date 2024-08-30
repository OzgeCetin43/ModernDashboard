import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../assets/images/avatar.jpg";

import "./Lock.css";

export const Lock: React.FC = () => {
  return (
    <div className="lock-container">
      <div className="lock-container-content">
        <h3>Lock Screen</h3>
        <small>Enter your password to unlock the screen!</small>
        <img src={avatar} alt="avatar" />
        <p>Dave Adame</p>
        <form className="lock-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <button className="unlock-button">Unlock</button>
        </form>
      </div>
      <div className="lock-sign-in-container">
        <p>Not you? return </p>
        <Link to="sign-in">Sign in</Link>
      </div>
    </div>
  );
};
