import React from "react";

import team1 from "../../assets/images/message-1.jpg";
import team2 from "../../assets/images/message-2.jpg";
import team3 from "../../assets/images/message-3.jpg";
import image1 from "../../assets/images/activity-file-1.jpg";
import image2 from "../../assets/images/activity-file-2.jpg";
import image3 from "../../assets/images/activity-file-3.jpg";

import "./ProfileActivities.css";

export const ProfileActivities: React.FC = () => {
  return (
    <div className="profile-activities-container">
      <h3>Activities</h3>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">OP</div>
          <p>Oliver Phillips</p>
          <b className="new-tag">New</b>
        </div>
        <small>We talked about a project on linkedin.</small>
        <i>Today</i>
      </div>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">NM</div>
          <p>Nancy Martino</p>
          <b className="in-progress-tag">In Progress</b>
        </div>
        <small>📃 Create new project Building product</small>
        <div className="profile-activity-team-container">
          <img src={team1} alt="team member" />
          <img src={team2} alt="team member" />
          <img src={team3} alt="team member" />
        </div>
        <i>Yesterday</i>
      </div>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">NC</div>
          <p>Natasha Carey</p>
          <b className="completed-tag">Completed</b>
        </div>
        <small>Adding a new event with attachments</small>
        <div className="activity-attachments-container">
          <img src={image1} alt="activity attachment" />
          <img src={image2} alt="activity attachment" />
          <img src={image3} alt="activity attachment" />
        </div>
        <i>25 Nov</i>
      </div>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">BJ</div>
          <p>Bethany Johnson</p>
        </div>
        <small>added a new member to dashboard</small>
        <i>19 Nov</i>
      </div>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">OR</div>
          <p>Your order is places</p>
          <b className="out-of-delivery-tag">Out of Delivery</b>
        </div>
        <small>
          These customers can rest assured their order has been placed.
        </small>
        <i>16 Nov</i>
      </div>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">LP</div>
          <p>Lewis Pratt</p>
        </div>
        <small>
          They all have something to say beyond the words on the page. They can
          come across as casual or neutral, exotic or graphic.
        </small>
        <i>22 Oct</i>
      </div>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">RE</div>
          <p>Monthly sales report</p>
        </div>
        <small>
          2 days left notification to submit the monthly sales report.
        </small>
        <i>15 Oct</i>
      </div>
      <div className="profile-activities-item">
        <div className="profile-activity-info">
          <div className="profile-activity-circle">NT</div>
          <p>New ticket received</p>
          <b className="completed-tag">Completed</b>
        </div>
        <small>User Erica245 submitted a ticket.</small>
        <i>26 Aug</i>
      </div>
    </div>
  );
};
