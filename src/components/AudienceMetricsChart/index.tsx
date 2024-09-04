import React from "react";
import Chart from "react-apexcharts";

export const AudienceMetricsChart: React.FC = () => {
  const series: any = [
    {
      name: "Last Year",
      data: [
        {
          x: "Jan",
          y: 25.3,
          goals: [
            {
              name: "Current Year",
              value: 36.2,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Feb",
          y: 12.5,
          goals: [
            {
              name: "Current Year",
              value: 22.4,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Mar",
          y: 20.2,
          goals: [
            {
              name: "Current Year",
              value: 38.2,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Apr",
          y: 18.5,
          goals: [
            {
              name: "Current Year",
              value: 30.5,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "May",
          y: 40.4,
          goals: [
            {
              name: "Current Year",
              value: 26.4,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Jun",
          y: 25.4,
          goals: [
            {
              name: "Current Year",
              value: 30.8,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Jul",
          y: 15.8,
          goals: [
            {
              name: "Current Year",
              value: 20.2,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Aug",
          y: 22.3,
          goals: [
            {
              name: "Current Year",
              value: 29.6,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Sep",
          y: 19.2,
          goals: [
            {
              name: "Current Year",
              value: 10.9,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Oct",
          y: 25.3,
          goals: [
            {
              name: "Current Year",
              value: 36.2,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Nov",
          y: 12.5,
          goals: [
            {
              name: "Current Year",
              value: 22.4,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
        {
          x: "Dec",
          y: 20.2,
          goals: [
            {
              name: "Current Year",
              value: 38.2,
              strokeHeight: 5,
              strokeColor: "#3577f1",
            },
          ],
        },
      ],
    },
  ];

  const options: any = {
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    colors: ["#212121"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Current Year"],
      markers: {
        fillColors: ["#212121", "#3577f1"],
      },
    },
  };

  return <Chart options={options} series={series} type="bar" />;
};
