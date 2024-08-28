import React from "react";
import { IoChatboxEllipsesOutline, IoSend } from "react-icons/io5";
import { FaPhoneFlip, FaRegFaceSmile } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdAttach } from "react-icons/io";

import avatar from "../../assets/images/history-3.jpg";
import attachment from "../../assets/images/chat-1.jpg";

import { chatHistory } from "../../assets/data/chat-history";
import { chatPeople } from "../../assets/data/chat-people";

import "./ChatMessages.css";
import { documents } from "../../assets/data/documents";

export const ChatMessages: React.FC = () => {
  return (
    <div className="chat-messages-container">
      <div className="chat-messages-left-container">
        <div className="chat-messages-left-header">
          <IoChatboxEllipsesOutline />
          <p>Chat</p>
        </div>
        <div className="chat-messages-left-title">
          <h4>History</h4>
          <span>+</span>
        </div>
        <ul className="chat-messages-left-content">
          {chatHistory.map((history) => (
            <li key={history.id}>
              <img src={history.image} alt={history.name} />
              <small>{history.name}</small>
            </li>
          ))}
        </ul>
        <div className="chat-messages-left-main-content">
          <input type="text" placeholder="Search chats..." />
          <ul className="chat-people-container">
            {chatPeople.map((person) => (
              <li key={person.id}>
                <div className="chat-person-image-container">
                  <img src={person.image} alt={person.fullName} />
                  {person?.isActive && (
                    <div className="chat-person-active-circle" />
                  )}
                  <div>
                    <h2>{person.fullName}</h2>
                    <p>Hi! I'm {person.fullName}</p>
                  </div>
                </div>
                {person?.newMessageNumber && (
                  <small
                    className={
                      person?.newMessageNumber > 5
                        ? "message-number message-a-lot"
                        : "message-number"
                    }
                  >
                    {person.newMessageNumber}
                  </small>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="chat-messages-center-container">
        <div className="chat-messages-center-header">
          <div className="chat-message-header-info">
            <div>
              <img src={avatar} alt="Alfredo Elliott" />
              <div className="chat-message-last-seen-info">
                <h2>Alfredo Elliott</h2>
                <small>Last seen 5 mins ago</small>
              </div>
            </div>
            <div className="chat-message-actions">
              <FaPhoneFlip />
              <FaSearch />
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
        <div className="chat-messages-center-content">
          <p className="chat-message-text">Good morning 😍</p>
          <p className="chat-message-answer">
            Good morning, How are you? What about our next meeting?
          </p>
          <p className="chat-message-text">
            Yeah everything is fine. Our next meeting tomorrow at 10.00 AM
          </p>
          <p className="chat-message-text">
            Hey, I'm going to meet a friend of mine at the department store. I
            have to buy some presents for my parents 🎁.
          </p>
          <p className="chat-message-answer">Wow that's great</p>
          <p className="chat-message-text">
            <img src={attachment} alt="chat message attachment" />
          </p>
        </div>
        <div className="chat-messages-center-footer">
          <IoMdAttach />
          <input type="text" placeholder="Write the message..." />
          <div>
            <FaRegFaceSmile />
            <IoSend />
          </div>
        </div>
      </div>
      <div className="chat-messages-right-container">
        <div className="chat-messages-right-header">
          <img src={avatar} alt="Alfredo Elliott" />
          <h3>Alfredo Elliott</h3>
          <small>Last seen 5 mins ago</small>
        </div>
        <div className="chat-messages-right-content">
          <h3>Personal Details</h3>
          <ul className="chat-messages-personal-details">
            <li>
              Number: <b>+(256) 2451 8975</b>
            </li>
            <li>
              E-mail: <b>alfredo.elliott@gmail.com</b>
            </li>
            <li>
              Location: <b>California, USA</b>
            </li>
          </ul>
          <h3>Attached Files</h3>
          <ul className="chat-messages-attached-files">
            {documents.map((document) => {
              const Icon = document.icon;

              return (
                <li>
                  <Icon />
                  <div>
                    <h4>{document.fileName}</h4>
                    <small>{document.size}</small>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
