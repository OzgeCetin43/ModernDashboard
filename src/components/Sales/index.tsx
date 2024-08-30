import React from "react";

import { saleAnalytics } from "../../assets/data/sale-analytics";

import "./Sales.css";

export const Sales: React.FC = () => {
  return (
    <ul className="sales-container">
      {saleAnalytics.map((sale) => (
        <li key={sale.id}>
          <img src={sale.image} alt={sale.title} />
          <p>{sale.title}</p>
          <div className="sales-price-container">
            <h2>${sale.price}</h2>
            {sale?.percentage && (
              <span
                className={
                  sale?.percentage > 25 ? "high-percentage" : "low-percentage"
                }
              >
                {sale?.percentage}%
              </span>
            )}
          </div>
          <small>{sale.description}</small>
          {sale?.percentage && <progress value={sale.percentage} max={100} />}
        </li>
      ))}
    </ul>
  );
};
