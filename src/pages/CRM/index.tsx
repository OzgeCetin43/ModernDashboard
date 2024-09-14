import React from "react";

import "./CRM.css";
import { SalesAndDeal, SalesOverview } from "../../components";

export const CRM: React.FC = () => {
  return (
    <div className="crm-container">
      <SalesOverview />
      <SalesAndDeal />
    </div>
  );
};
