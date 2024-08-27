import React, { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

import { ProfileOverview } from "../ProfileOverview";

import avatar from "../../assets/images/avatar.jpg";

import "./Profile.css";

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  let content = <ProfileOverview />;

  return (
    <>
      <div className="user-profile-container">
        <div className="profile-header-container">
          <div className="profile-user-info">
            <img src={avatar} alt="avatar" className="user-profile-avatar" />
            <div>
              <h1>Dave Adame</h1>
              <small>Owner & Founder</small>
              <div className="user-profile-location">
                <FaMapLocationDot />
                <span>California, United States</span>
              </div>
            </div>
          </div>
          <div className="profile-user-info">
            <div className="profile-follow-container">
              <p>24.3K</p>
              <small>Followers</small>
            </div>
            <div className="profile-follow-container">
              <p>1.3K</p>
              <small>Following</small>
            </div>
          </div>
        </div>
        <ul className="user-profile-tabs-container">
          <li
            className={
              activeTab === "overview" ? "user-profile-active-tab" : ""
            }
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </li>
          <li
            className={
              activeTab === "activities" ? "user-profile-active-tab" : ""
            }
            onClick={() => setActiveTab("activities")}
          >
            Activities
          </li>
          <li
            className={
              activeTab === "projects" ? "user-profile-active-tab" : ""
            }
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </li>
          <li
            className={
              activeTab === "documents" ? "user-profile-active-tab" : ""
            }
            onClick={() => setActiveTab("documents")}
          >
            Documents
          </li>
        </ul>
      </div>
      <div className="user-profile-content">{content}</div>
    </>
  );
};
