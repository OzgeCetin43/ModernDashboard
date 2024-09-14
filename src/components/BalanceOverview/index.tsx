import React from "react";
import Chart from "react-apexcharts";

import "./BalanceOverview.css";

export const BalanceOverview: React.FC = () => {
  const series: any = [
    {
      name: "Revenue",
      data: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250],
    },
    {
      name: "Expenses",
      data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199],
    },
  ];

  const options: any = {
    colors: ["#45cb85", "#f06548"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <div className="balance-overview-container">
      <h3>Balance Overview</h3>
      <ul className="balance-overview-info-list">
        <li>
          <h2>$584K</h2>
          <small>Revenue</small>
        </li>
        <li>
          <h2>$497K</h2>
          <small>Expenses</small>
        </li>
        <li>
          <h2>3.6%</h2>
          <small>Profit Ratio</small>
        </li>
      </ul>
      <Chart options={options} series={series} type="area" />
    </div>
  );
};
