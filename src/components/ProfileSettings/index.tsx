import React, { useState } from "react";
import { FaRegImages, FaCameraRetro } from "react-icons/fa";
import { FaGithub, FaDribbble, FaPinterest } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

import { PersonalDetails } from "../PersonalDetails";
import { ChangePassword } from "../ChangePassword";

import avatar from "../../assets/images/avatar.jpg";

import "./ProfileSettings.css";

export const ProfileSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("personal-details");

  let content = <PersonalDetails />;

  if (activeTab === "change-password") {
    content = <ChangePassword />;
  }

  return (
    <div className="profile-settings-container">
      <div className="profile-settings-cover-container">
        <button className="profile-settings-change-cover-button">
          <FaRegImages />
          <span>Change Cover</span>
        </button>
        <div className="profile-settings-avatar-container">
          <div className="profile-avatar-container">
            <img src={avatar} alt="avatar" />
            <FaCameraRetro />
          </div>
          <h2>Dave Adame</h2>
          <small>Founder / Lead Designer / Developer</small>
        </div>
      </div>
      <div className="profile-settings-portfolio-container">
        <div className="profile-settings-portfolio-header">
          <h3>Portfolio</h3>
          <button className="portfolio-add-button">+ Add</button>
        </div>
        <ul className="profile-settings-portfolio-list">
          <li>
            <FaGithub />
            <input type="text" value="@daveadame" />
          </li>
          <li>
            <TbWorld />
            <input type="text" value="www.dashboard.com" />
          </li>
          <li>
            <FaDribbble />
            <input type="text" value="@dave_adame" />
          </li>
          <li>
            <FaPinterest />
            <input type="text" value="Adame Dave" />
          </li>
        </ul>
      </div>
      <div className="profile-settings-content-header">
        <ul>
          <li
            className={
              activeTab === "personal-details" ? "active-settings-tab" : ""
            }
            onClick={() => setActiveTab("personal-details")}
          >
            Personal Details
          </li>
          <li
            className={
              activeTab === "change-password" ? "active-settings-tab" : ""
            }
            onClick={() => setActiveTab("change-password")}
          >
            Change Password
          </li>
          <li
            className={activeTab === "experience" ? "active-settings-tab" : ""}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </li>
          <li
            className={
              activeTab === "privacy-policy" ? "active-settings-tab" : ""
            }
            onClick={() => setActiveTab("privacy-policy")}
          >
            Privacy Policy
          </li>
        </ul>
        <div className="profile-setting-content">{content}</div>
      </div>
    </div>
  );
};
