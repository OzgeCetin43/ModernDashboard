import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Balance,
  Chat,
  CRM,
  ForgotPassword,
  Help,
  Home,
  LockScreen,
  Logout,
  Settings,
  SignIn,
  TaskBoard,
  UserProfile,
} from "../pages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-messages" element={<Chat />} />
      <Route path="/user-taskboard" element={<TaskBoard />} />
      <Route path="/help" element={<Help />} />
      <Route path="/user-balance" element={<Balance />} />
      <Route path="/user-settings" element={<Settings />} />
      <Route path="/lock-screen" element={<LockScreen />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/password-reset" element={<ForgotPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/crm-dashboard" element={<CRM />} />
    </Routes>
  );
};

export default Routers;
