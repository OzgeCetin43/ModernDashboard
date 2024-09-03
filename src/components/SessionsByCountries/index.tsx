import React from "react";
import Chart from "react-apexcharts";

import { SessionMap } from "../SessionMap";

import "./SessionsByCountries.css";

export const SessionsByCountries: React.FC = () => {
  const series: any = [
    {
      data: [1010, 1640, 490, 1225, 1050, 689, 800, 420, 1085, 589],
    },
  ];

  const options: any = {
    chart: {
      type: "bar",
      height: 380,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "#3577f1",
      "#f06548",
      "#45cb85",
      "#4b38b3",
      "#ffcc5f",
      "#f9a3a4",
      "#3577f175",
      "#f0654875",
      "#45cb8575",
      "#4b38b375",
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [
        "India",
        "United States",
        "China",
        "Indonesia",
        "Russia",
        "Bangladesh",
        "Canada",
        "Brazil",
        "Vietnam",
        "United Kingdom",
      ],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    title: {
      text: "Sessions by Countries",
      align: "center",
      floating: true,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
  };

  return (
    <div className="sessions-by-countries-container">
      <div className="sessions-by-countries-container-left">
        <h3>Live Users By Country</h3>
        <SessionMap />
        <table>
          <thead>
            <tr>
              <th>Duration (Secs)</th>
              <th>Sessions</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-30</td>
              <td>2,250</td>
              <td>4,250</td>
            </tr>
            <tr>
              <td>31-60</td>
              <td>1,501</td>
              <td>2,050</td>
            </tr>
            <tr>
              <td>61-120</td>
              <td>750</td>
              <td>1,600</td>
            </tr>
            <tr>
              <td>121-240</td>
              <td>540</td>
              <td>1,040</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sessions-by-countries-container-right">
        <Chart
          options={options}
          series={series}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};
