import React, { useState } from "react";
import Chart from "react-apexcharts";
import Cards from "react-credit-cards-2";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

import { balance } from "../../assets/data/balance";
import { transactions } from "../../assets/data/transactions";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./UserBalance.css";

export const UserBalance: React.FC = () => {
  const [cardValues, setCardValues] = useState<{
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    focus: any;
  }>({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  var options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#3577f175", "#4b38b375"],
    xaxis: {
      labels: {
        formatter: function (value: number) {
          return value;
        },
      },
    },
  };

  var series: any = [
    {
      type: "area",
      name: "High",
      data: [28, 45, 35, 50, 32, 55, 23, 60],
    },
    {
      type: "area",
      name: "Low",
      data: [14, 25, 20, 25, 12, 20, 15, 20],
    },
  ];

  const onInputChange = (e: any) => {
    setCardValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onInputFocus = (e: any) => {
    setCardValues((values) => {
      return { ...values, focus: e.target.name };
    });
  };

  return (
    <div className="user-balance-container">
      <div className="user-balance-left-container">
        <div className="user-balance-header">
          <div className="user-balance-header-item">
            <h3>Balance</h3>
            <h1>$5971.67</h1>
            <small>+3.5%</small>
          </div>
          {balance.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="user-balance-header-item">
                <Icon className="user-balance-icon" />
                <p>{item.title}</p>
                <h2>${item.price}K</h2>
                <small>
                  {item?.increase ? (
                    <FaLongArrowAltUp className="balance-increase-arrow" />
                  ) : item.decrease ? (
                    <FaArrowDown className="balance-decrease-arrow" />
                  ) : null}
                  <span>{item?.increase || item?.decrease}</span>
                </small>
              </div>
            );
          })}
        </div>
        <div className="user-balance-content-container">
          <div className="user-balance-transaction-container">
            <h3>Transactions</h3>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <div className="transaction-user-info">
                    <img src={transaction.image} alt={transaction.name} />
                    <div>
                      <p>{transaction.name}</p>
                      <small>{transaction.date}</small>
                    </div>
                  </div>
                  <b className={transaction.className}>${transaction.price}</b>
                </li>
              ))}
            </ul>
            <button className="transaction-load-more-button">Load More</button>
          </div>
          <div className="user-balance-chart-container">
            <Chart
              options={options}
              series={series}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="user-balance-right-container">
        <Cards
          number={cardValues.number}
          expiry={cardValues.expiry}
          cvc={cardValues.cvc}
          name={cardValues.name}
          focused={cardValues.focus}
        />
        <form className="credit-card-form">
          <div className="credit-card-form-item">
            <label htmlFor="number">Card Number*</label>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              maxLength={16}
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
            <small>E.g.: 49..., 51..., 36..., 37...</small>
          </div>
          <div className="credit-card-form-item">
            <label htmlFor="expiry">Expiration Date*</label>
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
          </div>
          <div className="credit-card-form-item">
            <label htmlFor="name">Name on Card</label>
            <input
              type="text"
              name="name"
              placeholder="Name on Card"
              pattern="[a-z A-Z-]+"
              required
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
          </div>
          <div className="credit-card-form-item">
            <label htmlFor="cvc">CVC*</label>
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              maxLength={3}
              required
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
          </div>
          <div className="credit-card-form-item">
            <label htmlFor="amount">Amount*</label>
            <input type="number" name="amount" placeholder="Amount" required />
          </div>
          <div className="credit-card-form-actions">
            <button className="credit-card-send-button">Send Money</button>
          </div>
        </form>
      </div>
    </div>
  );
};
