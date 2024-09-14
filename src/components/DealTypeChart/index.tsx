import React from "react";
import Chart from "react-apexcharts";

export const DealTypeChart: React.FC = () => {
  const series: any = [
    {
      name: "Pending",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Loss",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Won",
      data: [44, 76, 78, 13, 43, 10],
    },
  ];

  const options: any = {
    title: {
      text: "",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    yaxis: {
      stepSize: 20,
    },
    xaxis: {
      categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
    },
  };

  return <Chart options={options} series={series} type="radar" />;
};
