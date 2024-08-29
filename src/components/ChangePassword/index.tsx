import React from "react";

import { loginHistory } from "../../assets/data/login-history";

import "./ChangePassword.css";

export const ChangePassword: React.FC = () => {
  return (
    <div className="change-password-container">
      <form className="change-password-form">
        <div className="change-password-form-col-3">
          <div>
            <label htmlFor="old-password">Old Password*</label>
            <input
              type="password"
              name="old-password"
              id="old-password"
              placeholder="Enter current password"
              required
            />
          </div>
          <div>
            <label htmlFor="new-password">New Password*</label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              placeholder="Enter new password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password*</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm password"
              required
            />
          </div>
        </div>
        <div className="change-password-actions">
          <button className="change-password-button">Change Password</button>
        </div>
      </form>
      <div className="login-history-header">
        <h3>Login History</h3>
        <small>All Logout</small>
      </div>
      <ul className="login-history-content">
        {loginHistory.map((history) => {
          const Icon = history.icon;

          return (
            <div>
              <li key={history.id}>
                <Icon />
                <div>
                  <h3>{history.title}</h3>
                  <i>{history.description}</i>
                </div>
              </li>
              <small>Logout</small>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
