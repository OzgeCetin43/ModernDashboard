import React from "react";
import { Routes, Route } from "react-router-dom";

import { Chat, Help, Home, Settings, TaskBoard, UserProfile } from "../pages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-messages" element={<Chat />} />
      <Route path="/user-taskboard" element={<TaskBoard />} />
      <Route path="/help" element={<Help />} />
      <Route path="/user-settings" element={<Settings />} />
    </Routes>
  );
};

export default Routers;
