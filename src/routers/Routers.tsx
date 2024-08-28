import React from "react";
import { Routes, Route } from "react-router-dom";

import { Chat, Home, UserProfile } from "../pages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-messages" element={<Chat />} />
    </Routes>
  );
};

export default Routers;
