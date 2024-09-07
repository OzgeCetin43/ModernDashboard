import React from "react";

import { UsersByDeviceChart } from "../UsersByDeviceChart";
import { Referrals } from "../Referrals";

import "./Devices.css";

export const Devices: React.FC = () => {
  return (
    <div className="devices-container">
      <div className="devices-container-left">
        <UsersByDeviceChart />
      </div>
      <div className="devices-container-right">
        <Referrals />
      </div>
    </div>
  );
};
