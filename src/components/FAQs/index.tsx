import React from "react";
import { FaStar } from "react-icons/fa6";

import { faqs } from "../../assets/data/faqs";
import { latestUpdates } from "../../assets/data/latest-updates";

import "./FAQs.css";
import { tutorials } from "../../assets/data/tutorials";

export const FAQs: React.FC = () => {
  return (
    <div className="faqs-main-container">
      <div className="faqs-container">
        <div className="faqs-left-container">
          <h1>How we can help you?</h1>
          <input type="text" placeholder="Search your question..." />
          <small>
            Popular searched:{" "}
            <span className="faqs-tag">Apps, Developers, Repair, Billing</span>
          </small>
          <ul className="faqs-list">
            {faqs.map((faq) => {
              const Icon = faq.icon;

              return (
                <li key={faq.id}>
                  <div className="faq-list-header">
                    <Icon />
                    <p>{faq.question}</p>
                  </div>
                  <small>{faq.answer}</small>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="faqs-right-container">
          <div className="faq-navigation-container">
            <h3>Navigation</h3>
            <h4>Ask Question</h4>
            <ul>
              <li>
                <p>Tutorials</p>
              </li>
              <li>
                <p>Help center</p>
              </li>
              <li>
                <p>Knowledgebase</p>
              </li>
              <li>
                <p>Articles</p>
                <span>42</span>
              </li>
              <li>
                <p>Video Tutorials</p>
                <span>648</span>
              </li>
              <li>Ask our community</li>
              <li>Contact us</li>
            </ul>
          </div>
          <ul className="faq-latest-updates-container">
            <h3>Latest Updates</h3>
            {latestUpdates.map((update) => {
              const Icon = update.icon;

              return (
                <li key={update.id}>
                  <Icon />
                  <div>
                    <p>{update.description}</p>
                    <small>{update.time}</small>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="faq-tutorial-container">
        <h3>Featured Tutorials</h3>
        <ul>
          {tutorials.map((tutorial) => (
            <li key={tutorial.id}>
              <img src={tutorial.cover} alt={tutorial.title} />
              <h2>{tutorial.title}</h2>
              <p>{tutorial.description}</p>
              <div>
                <small>{tutorial.date}</small>
                <b>
                  <FaStar />
                  <span>{tutorial.star}</span>
                </b>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
