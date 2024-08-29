import React from "react";

import "./PrivacyPolicy.css";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container">
      <h3>Security:</h3>
      <p>Two-factor Authentication</p>
      <small>
        Two-factor authentication is an enhanced security meansur. Once enabled,
        you'll be required to give two types of identification when you log into
        Google Authentication and SMS are Supported.
      </small>
      <p>Secondary Verification</p>
      <small>
        The first factor is a password and the second commonly includes a text
        with a code sent to your smartphone, or biometrics using your
        fingerprint, face, or retina.
      </small>
      <p>Backup Codes</p>
      <small>
        A backup code is automatically generated for you when you turn on
        two-factor authentication through your iOS or Android Twitter app. You
        can also generate a backup code on twitter.com.
      </small>
      <h3>Application Notifications:</h3>
      <p>Direct messages</p>
      <small>Messages from people you follow</small>
      <p>Show desktop notifications</p>
      <small>
        Choose the option you want as your default setting. Block a site: Next
        to "Not allowed to send notifications," click Add.
      </small>
      <p>Show email notifications</p>
      <small>
        Under Settings, choose Notifications. Under Select an account, choose
        the account to enable notifications for.
      </small>
      <p>Show chat notifications</p>
      <small>
        To prevent duplicate mobile notifications from the Gmail and Chat apps,
        in settings, turn off Chat notifications.
      </small>
      <p>Show purchase notifications</p>
      <small>
        Get real-time purchase alerts to protect yourself from fraudulent
        charges.
      </small>
      <h3>Delete This Account:</h3>
      <small>
        Go to the Data & Privacy section of your profile Account. Scroll to
        "Your data & privacy options." Delete your Profile Account. Follow the
        instructions to delete your account :
      </small>
      <input type="password" placeholder="Enter your password" />
      <div className="privacy-policy-actions">
        <button className="privacy-policy-close-and-delete-this-account">
          Close & Delete This Account
        </button>
        <button className="privacy-policy-cancel-button">Cancel</button>
      </div>
    </div>
  );
};
