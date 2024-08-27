import React, { useState } from "react";

import { Header, Sidebar } from "../components";
import Routers from "../routers/Routers";

import "./Layout.css";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="layout-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="layout-content">
        <Header isOpen={isOpen} />
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
