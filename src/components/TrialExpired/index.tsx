import React from "react";
import { Link } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";

import logo from "../../assets/images/logo.svg";
import hero from "../../assets/images/trial-expired-hero.png";

import "./TrialExpired.css";

export const TrialExpired: React.FC = () => {
  return (
    <div className="trial-expired-container">
      <div className="trial-expired-container-header">
        <IoWarningOutline />
        <p>Your free trial expired in 20 days.</p>
      </div>
      <div className="trial-expired-container-content">
        <div className="trial-expaired-content-left">
          <img src={logo} alt="logo" />
          <p>
            Upgrade your plan from a <b>Free trial</b> to <b>Premium Plan</b>
          </p>
          <Link to="/pricing">Upgrade Account!</Link>
        </div>
        <div className="trial-expaired-content-right">
          <img src={hero} alt="upgrade account" />
        </div>
      </div>
    </div>
  );
};
