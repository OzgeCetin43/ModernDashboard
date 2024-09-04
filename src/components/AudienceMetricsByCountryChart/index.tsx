import React from "react";
import Chart from "react-apexcharts";

export const AudienceMetricsByCountryChart: React.FC = () => {
  const options: any = {
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: -1,
              to: 0,
              color: "#ffcc5f",
              name: "0-50",
            },
          ],
        },
      },
    },
  };

  const series: any = [
    {
      name: "Fri",
      data: formatData([
        0, 0, 0, 0, 20, 40, 45, 45, 30, 20, 5, 5, 15, 35, 35, 20, 45, 40, 25, 5,
        20, 25, 40, 5,
      ]),
    },
    {
      name: "Thu",
      data: formatData([
        0, 0, 15, 10, 40, 25, 35, 25, 30, 10, 5, 5, 5, 20, 30, 30, 10, 15, 15,
        5, 55, 20, 20, 5,
      ]),
    },
    {
      name: "Wed",
      data: formatData([
        0, 0, 5, 10, 35, 25, 30, 30, 5, 20, 0, 0, 15, 10, 20, 5, 40, 25, 20, 30,
        45, 20, 15, 5,
      ]),
    },
    {
      name: "Tue",
      data: formatData([
        0, 0, 4, 0, 28, 28, 12, 28, 44, 28, 28, 8, 0, 8, 16, 32, 20, 36, 36, 44,
        28, 32, 4, 4,
      ]),
    },
    {
      name: "Mon",
      data: formatData([
        0, 4, 0, 4, 4, 0, 4, 12, 16, 24, 16, 8, 16, 4, 20, 32, 48, 44, 36, 36,
        90, 28, 8, 16,
      ]),
    },
  ];

  function formatData(data: any) {
    let newData = [];
    let categories = [
      "1h",
      "2h",
      "3h",
      "4h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h",
      "10h",
      "11h",
      "12h",
      "13h",
      "14h",
      "15h",
      "16h",
      "17h",
      "18h",
      "19h",
      "20h",
      "21h",
      "22h",
      "23h",
      "1d",
    ];

    for (var i = 0; i < categories.length; i++) {
      newData.push({
        x: categories[i],
        y: data[i],
      });
    }
    return newData;
  }

  return (
    <Chart
      options={options}
      series={series}
      type="heatmap"
      width="100%"
      height="100%"
    />
  );
};
