import React from "react";
import Chart from "react-apexcharts";
import { FaUsers } from "react-icons/fa6";

import "./UsersByDeviceChart.css";

export const UsersByDeviceChart: React.FC = () => {
  const series: any = [78.56, 105.02, 42.89];

  const options: any = {
    colors: ["#45cb85", "#ffcc5f", "#4b38b3"],
    legend: {
      show: false,
    },
  };

  return (
    <>
      <h3>Users By Device</h3>
      <div className="users-by-device-container">
        <Chart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height="75%"
        />
        <div className="users-by-device-container-info">
          <div>
            <div className="users-by-device-label-circle" />
            <p>Desktop Users</p>
            <p>
              <FaUsers />
              <span>78.56K</span>
            </p>
            <p className="users-by-device-increase">2.08%</p>
          </div>
          <div>
            <div className="users-by-device-label-circle" />
            <p>Mobile Users</p>
            <p>
              <FaUsers />
              <span>105.02K</span>
            </p>
            <p className="users-by-device-decrease">10.52%</p>
          </div>
          <div>
            <div className="users-by-device-label-circle" />
            <p>Tablet Users</p>
            <p>
              <FaUsers />
              <span>42.89K</span>
            </p>
            <p className="users-by-device-decrease">7.36%</p>
          </div>
        </div>
      </div>
    </>
  );
};
