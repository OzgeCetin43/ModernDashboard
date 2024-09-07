import React from "react";

import { socialMediaLikes } from "../../assets/data/social-media-likes";

import "./SocialMediaLike.css";

export const SocialMediaLike: React.FC = () => {
  return (
    <div className="social-media-like-container">
      <ul className="social-media-items">
        {socialMediaLikes.map((like) => (
          <li key={like.id}>
            <img src={like.shape} alt="shape" className="social-media-shape" />
            <div className="social-media-like-container-inner">
              <img
                src={like.icon}
                alt="social media icon"
                className="social-media-icon"
              />
              <div className="social-media-total-like-container">
                <p>Total Likes</p>
                <div>
                  <span>{like.totalLikes}</span>
                  <small>+{like.totalLikePercentage}%</small>
                </div>
              </div>
            </div>
            <div className="social-media-info-container">
              <div>
                <p>Target</p>
                <small>{like.target}</small>
              </div>
              <div>
                <p>Duration</p>
                <small>{like.duration}</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
