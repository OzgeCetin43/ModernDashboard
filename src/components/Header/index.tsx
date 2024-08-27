import React from "react";

import { LanguageSwitcher } from "../LanguageSwitcher";
import { Notifications } from "../Notifications";
import { Avatar } from "../Avatar";

import "./Header.css";

type HeaderProps = {
  isOpen: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isOpen }) => {
  return (
    <header
      className="header-container"
      style={{ width: isOpen ? "calc(100% - 300px)" : "calc(100% - 80px)" }}
    >
      <LanguageSwitcher />
      <Notifications />
      <Avatar />
    </header>
  );
};
