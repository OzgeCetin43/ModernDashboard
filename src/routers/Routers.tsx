import React from "react";
import { Routes, Route } from "react-router-dom";

import { Chat, Help, Home, TaskBoard, UserProfile } from "../pages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-messages" element={<Chat />} />
      <Route path="/user-taskboard" element={<TaskBoard />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default Routers;
