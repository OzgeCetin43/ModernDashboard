import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import avatar from "../../assets/images/avatar.jpg";

import { avatarProfileLinks } from "../../assets/data/avatar-profile-links";

import "./Avatar.css";

export const Avatar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="avatar-container">
      <div
        className="avatar-container-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={avatar} alt="avatar" />
        <div className="avatar-info">
          <h4>Dave Adame</h4>
          <small>Founder</small>
        </div>
      </div>
      {isOpen && (
        <div className="avatar-container-content">
          <small>Welcome Dave!</small>
          <ul className="avatar-profile-link-list">
            {avatarProfileLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.id}>
                  <Icon />
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "avatar-menu-link menu-active-link"
                        : "avatar-menu-link"
                    }
                    onClick={() => setIsOpen((prev) => !prev)}
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
