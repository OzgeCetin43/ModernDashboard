import React from "react";

import { traffics } from "../../assets/data/traffics";
import { visits } from "../../assets/data/visits";

import "./Traffics.css";

export const Traffics: React.FC = () => {
  return (
    <div className="traffics-container">
      <div className="traffics-container-left">
        <h3>Browser Used & Traffic Reports</h3>
        <table>
          <thead>
            <tr>
              <th>Browser</th>
              <th>Sessions</th>
              <th>Bounce Rate</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            {traffics.map((traffic) => (
              <tr key={traffic.id}>
                <td>
                  <div className="traffics-browser-container">
                    <img src={traffic.image} alt={traffic.browser} />
                    <p>{traffic.browser}</p>
                  </div>
                </td>
                <td>
                  <p>
                    {traffic.sessions}{" "}
                    <span>({traffic.sessionPercentage}%)</span>
                  </p>
                </td>
                <td>{traffic.bounceRate}</td>
                <td>
                  <p>
                    {traffic.transactions}{" "}
                    <span>({traffic.transactionPercentage}%)</span>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="traffics-container-right">
        <h3>Total Visits</h3>
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Sessions</th>
              <th>Prev. Period</th>
              <th>% Change</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <tr key={visit.id}>
                <td>{visit.channel}</td>
                <td>
                  <p>
                    {visit.sessions} <span>({visit.sessionPercentage}%)</span>
                  </p>
                </td>
                <td>
                  <p>
                    {visit.prevPeriod}{" "}
                    <span>({visit.prevPeriodPercentage}%)</span>
                  </p>
                </td>
                <td className={visit.className}>
                  {visit.change > 0 ? "+" : ""}
                  {visit.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <i>Last data updated - 15 min ago</i>
      </div>
    </div>
  );
};
