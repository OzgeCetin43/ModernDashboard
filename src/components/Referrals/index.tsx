import React from "react";
import Chart from "react-apexcharts";

import hero from "../../assets/images/referrals-hero.png";

import "./Referrals.css";

export const Referrals: React.FC = () => {
  const series: any = [
    {
      name: "Google",
      data: [25.58],
    },
    {
      name: "Youtube",
      data: [18.51],
    },
    {
      name: "Meta",
      data: [23.05],
    },
    {
      name: "Medium",
      data: [15.22],
    },
    {
      name: "Other",
      data: [17.64],
    },
  ];

  const options: any = {
    chart: {
      stacked: true,
    },
    colors: ["#45cb85", "#ffcc5f", "#4b38b3", "#f06548", "#3577f1"],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: "",
    },
    xaxis: {
      categories: [100],
      labels: {
        formatter: function (val: any) {
          return val + "K";
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  };
  return (
    <div className="referrals-container">
      <h3>Top Referrals Pages</h3>
      <div className="referrals-info-container">
        <div>
          <h4>Total Referrals Page</h4>
          <p>725,800</p>
        </div>
        <img src={hero} alt="hero" />
      </div>
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  );
};
