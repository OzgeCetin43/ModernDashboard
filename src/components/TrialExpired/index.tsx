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
          <h3>Clock is ticking!</h3>
          <p>
            We hope you were able to spend the last 25 days exploring how
            Dashboard can help you save time and increase your productivity!
          </p>
          <p>
            <b>Your Free trial will end in 20 days.</b> When your trial expires,
            you'll revert to our Free plan. If you have Dashboard that use paid
            features, they will be paused.
          </p>
          <p>Paid features include:</p>
          <ul>
            <li>Unlimited access acros devices</li>
            <li>24/7 account monitoring</li>
            <li>One-to-many sharing</li>
          </ul>
          <p>
            To keep using our paid features, upgrade to one of our paid plans.
          </p>
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
