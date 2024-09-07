import React from "react";

import {
  Audiences,
  Devices,
  OrganicTraffic,
  Sales,
  SessionsByCountries,
  SocialMediaLike,
  Traffics,
  TrialExpired,
} from "../../components";

import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h3>Home / Analytics</h3>
      <Sales />
      <TrialExpired />
      <OrganicTraffic />
      <SessionsByCountries />
      <Audiences />
      <Traffics />
      <SocialMediaLike />
      <Devices />
    </div>
  );
};
