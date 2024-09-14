import React from "react";

import "./CRM.css";
import { BalanceOverview, SalesAndDeal, SalesOverview } from "../../components";

export const CRM: React.FC = () => {
  return (
    <div className="crm-container">
      <SalesOverview />
      <SalesAndDeal />
      <BalanceOverview />
    </div>
  );
};
