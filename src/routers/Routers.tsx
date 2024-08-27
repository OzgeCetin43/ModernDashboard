import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, UserProfile } from "../pages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
  );
};

export default Routers;
