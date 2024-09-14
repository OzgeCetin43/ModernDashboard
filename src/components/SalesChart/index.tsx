import React from "react";
import Chart from "react-apexcharts";

export const SalesChart: React.FC = () => {
  const series: any = [
    {
      data: [37, 12, 18],
    },
  ];

  const options: any = {
    colors: ["#4b38b3", "#45cb85", "#ffcc5f"],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [["Goal"], ["Pending Forecast"], ["Revenue"]],
      labels: {
        style: {
          colors: ["#4b38b3", "#45cb85", "#ffcc5f"],
          fontSize: "12px",
        },
      },
    },
    title: {
      text: "Total Forecasted Value",
      align: "center",
      floating: true,
    },
  };

  return <Chart options={options} series={series} type="bar" />;
};
