import React from "react";

import { SalesChart } from "../SalesChart";
import { DealTypeChart } from "../DealTypeChart";

import "./SalesAndDeal.css";

export const SalesAndDeal: React.FC = () => {
  return (
    <div className="sales-and-deal-container">
      <div className="sales-and-deal-container-left">
        <h3>Sales Forecast</h3>
        <SalesChart />
      </div>
      <div className="sales-and-deal-container-right">
        <h3>Deal Type</h3>
        <DealTypeChart />
      </div>
    </div>
  );
};
