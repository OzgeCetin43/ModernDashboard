import React from "react";

import { OrganicTraffic, Sales, TrialExpired } from "../../components";

import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h3>Home / Analytics</h3>
      <Sales />
      <TrialExpired />
      <OrganicTraffic />
    </div>
  );
};
