import React from "react";
import Chart from "react-apexcharts";
import { MdElectricBolt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { OrganicTrafficMap } from "../OrganicTrafficMap";

import { organicTrafficCountries } from "../../assets/data/organic-traffic-countries";

import "./OrganicTraffic.css";

export const OrganicTraffic: React.FC = () => {
  const series: any = [
    {
      name: "Total Earnings",
      data: [30, 60, 40, 70, 50, 90],
    },
  ];

  const options: any = {
    chart: {
      height: 350,
      dropShadow: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#45cb85"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Total Earnings",
      align: "left",
    },
    grid: {
      borderColor: "#21212125",
      row: {
        opacity: 0,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Earnings",
      },
      min: 20,
      max: 100,
    },
  };

  return (
    <div className="organic-traffic-container">
      <div className="organic-traffic-left-container">
        <div className="organic-traffic-inner-left-container">
          <h3>Organic Traffic in The World</h3>
          <OrganicTrafficMap />
        </div>
        <ul className="organic-traffic-inner-right-container">
          {organicTrafficCountries.map((organicTraffic) => (
            <li key={organicTraffic.id}>
              <img src={organicTraffic.flag} alt={organicTraffic.country} />
              <div>
                <h3>{organicTraffic.total}</h3>
                <small>
                  {organicTraffic.country}, Last month{" "}
                  <span>{organicTraffic.percentage}%</span>
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="organic-traffic-right-container">
        <div className="organic-traffic-right-inner-container">
          <Chart
            width="200%"
            height="200%"
            options={options}
            series={series}
            type="line"
          />
        </div>
        <div className="organic-traffic-right-inner-container">
          <div className="organic-traffic-item">
            <MdElectricBolt />
            <div>
              <p>Total ideas</p>
              <small>235</small>
            </div>
          </div>
          <div className="organic-traffic-item">
            <FaLocationDot />
            <div>
              <p>Total location</p>
              <small>26</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
