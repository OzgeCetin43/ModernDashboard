import React from "react";

import "./CRM.css";
import { SalesOverview } from "../../components";

export const CRM: React.FC = () => {
  return (
    <div className="crm-container">
      <SalesOverview />
    </div>
  );
};
