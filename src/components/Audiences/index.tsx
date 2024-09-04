import React from "react";

import { AudienceMetricsChart } from "../AudienceMetricsChart";

import "./Audiences.css";
import { AudienceMetricsByCountryChart } from "../AudienceMetricsByCountryChart";

export const Audiences: React.FC = () => {
  return (
    <div className="audiences-container">
      <div className="audiences-container-left">
        <h3>Audiences Metrics</h3>
        <div className="audiences-main-metrics-container">
          <div className="audiences-metrics-container">
            <p>
              854 <span>49%</span>
            </p>
            <small>Avg. Session</small>
          </div>
          <div className="audiences-metrics-container">
            <p>
              1,278 <span>60%</span>
            </p>
            <small>Conversion Rate</small>
          </div>
          <div className="audiences-metrics-container">
            <p>
              3m 40sec <span>37%</span>
            </p>
            <small>Avg. Session Duration</small>
          </div>
        </div>
        <AudienceMetricsChart />
      </div>
      <div className="audiences-container-right">
        <h3>Audiences Sessions by Country</h3>
        <AudienceMetricsByCountryChart />
      </div>
    </div>
  );
};
