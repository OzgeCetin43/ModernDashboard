import React from "react";
import { Link } from "react-router-dom";
import { CiCoffeeCup } from "react-icons/ci";

import "./UserLogout.css";

export const UserLogout: React.FC = () => {
  return (
    <div className="user-logout-container">
      <div className="user-logout-container-content">
        <CiCoffeeCup />
        <p>You are Logged Out</p>
        <small>Thank you for using Dashboard admin template</small>
        <Link to="/sign-in" className="user-logout-sign-in-button">
          Sign In
        </Link>
      </div>
    </div>
  );
};
