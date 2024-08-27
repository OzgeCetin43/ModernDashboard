import React from "react";

import { projects } from "../../assets/data/projects";

import "./ProfileProjects.css";

export const ProfileProjects: React.FC = () => {
  return (
    <div className="profile-projects-container">
      <h3>Projects</h3>
      <ul className="profile-project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="profile-project-header">
              <h1>{project.label}</h1>
              <small className={project.className}>{project.tag}</small>
            </div>
            <small>
              Last Update: <b>{project.lastUpdateDate}</b>
            </small>
            <p>
              Members: <span>{project.members}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
