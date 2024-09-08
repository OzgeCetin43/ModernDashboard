import React from "react";
import Chart from "react-apexcharts";
import { VscPieChart } from "react-icons/vsc";
import { FaLongArrowAltUp } from "react-icons/fa";

import "./SalesOverview.css";
import { salesOverviews } from "../../assets/data/sales-overviews";

export const SalesOverview: React.FC = () => {
  const series: any = [
    {
      name: "Sales",
      data: [28, 45, 35, 50, 32, 55, 23, 60, 28, 45, 35, 50],
    },
    {
      name: "Profit",
      data: [14, 25, 20, 25, 12, 20, 15, 20, 14, 25, 20, 25],
    },
  ];

  const options: any = {
    colors: ["#3577f1", "#4b38b3"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
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
    yaxis: {
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$" + val + "K";
        },
      },
    },
  };

  return (
    <div className="sales-overview-container">
      <div className="sales-overview-container-left">
        <h3>Sales Overview</h3>
        <div className="sales-overview-inner-container">
          <div className="sales-overview-left">
            <VscPieChart className="sales-overview-pie-icon" />
            <h1>$6,556.55</h1>
            <span>
              <FaLongArrowAltUp />
              <small>3.2%</small>
            </span>
            <button>Download Report</button>
          </div>
          <div className="sales-overview-right">
            <Chart options={options} series={series} type="bar" />
          </div>
        </div>
      </div>
      <div className="sales-overview-container-right">
        <div>
          {salesOverviews.map((sale) => {
            const Icon = sale.icon;

            return (
              <div key={sale.id} className="sales-overview-item">
                <div className="sales-overview-item-left">
                  {sale?.price && <h2>{sale?.price}K</h2>}
                  {sale?.amount && <h2>{sale?.amount}</h2>}
                  <p>{sale.label}</p>
                </div>
                <div className="sales-overview-item-right">
                  <Icon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
