import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { BiSolidTimer } from "react-icons/bi";

import { notifications } from "../../assets/data/notifications";
import { messages } from "../../assets/data/messages";

import "./Notifications.css";

export const Notifications: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("all");

  let content = (
    <ul className="all-tab-list">
      {notifications.map((notification) => {
        const Icon = notification?.icon;
        return (
          <li key={notification.id}>
            {notification?.icon ? (
              <Icon className="notification-icon" />
            ) : (
              <img src={notification?.image} alt="notification" />
            )}
            <div className="all-tab-content">
              {notification?.author && <h3>{notification?.author}</h3>}
              <p>{notification?.text}</p>
              <small>
                <BiSolidTimer />
                <span>{notification?.time}</span>
              </small>
            </div>
            <input type="checkbox" />
          </li>
        );
      })}
    </ul>
  );

  if (activeTab === "alerts") {
    content = (
      <div className="alerts-tab-container">
        <FaRegBell />
        <h3>Hey! You have no any notifications</h3>
      </div>
    );
  }

  if (activeTab === "messages") {
    content = (
      <ul className="messages-tab-list">
        {messages.map((message) => {
          return (
            <li key={message.id}>
              <img src={message?.image} alt="message" />
              <div className="messages-tab-content">
                {message?.author && <h3>{message?.author}</h3>}
                <p>{message?.text}</p>
                <small>
                  <BiSolidTimer />
                  <span>{message?.time}</span>
                </small>
              </div>
              <input type="checkbox" />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="notifications-container">
      <button
        className="notifications-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="notification-badge">4</span>
        <FaRegBell />
      </button>
      {isOpen && (
        <div className="notifications-detail">
          <div className="notifications-detail-top">
            <h3>Notifications</h3>
            <p>4 New</p>
          </div>
          <div className="notifications-detail-tabs">
            <ul>
              <li
                onClick={() => setActiveTab("all")}
                className={activeTab === "all" ? "active" : ""}
              >
                All (4)
              </li>
              <li
                onClick={() => setActiveTab("messages")}
                className={activeTab === "messages" ? "active" : ""}
              >
                Messages
              </li>
              <li
                onClick={() => setActiveTab("alerts")}
                className={activeTab === "alerts" ? "active" : ""}
              >
                Alerts
              </li>
            </ul>
          </div>
          <div className="notifications-detail-body">
            {content}
            <button className="view-all-notifications-button">
              {activeTab !== "messages"
                ? "View All Notications"
                : "View All Messages"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
