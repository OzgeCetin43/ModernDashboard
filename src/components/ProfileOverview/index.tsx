import React from "react";
import { HiUserAdd } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsFileEarmarkPdfFill, BsFiletypePsd } from "react-icons/bs";

import { suggestions } from "../../assets/data/suggestions";
import { posts } from "../../assets/data/posts";

import team1 from "../../assets/images/message-1.jpg";
import team2 from "../../assets/images/message-2.jpg";
import team3 from "../../assets/images/message-3.jpg";
import team4 from "../../assets/images/message-4.jpg";

import "./ProfileOverview.css";

export const ProfileOverview: React.FC = () => {
  return (
    <div className="profile-overview-container">
      <div className="profile-overview-inner-container">
        <div className="profile-overview-info-container">
          <h3>Info</h3>
          <div className="profile-overview-item">
            <p>Full Name:</p>
            <small>Dave Adame</small>
          </div>
          <div className="profile-overview-item">
            <p>Mobile:</p>
            <small>+(1) 987 6543</small>
          </div>
          <div className="profile-overview-item">
            <p>E-Mail:</p>
            <small>daveadame@dashboard.com</small>
          </div>
          <div className="profile-overview-item">
            <p>Location:</p>
            <small>California, United States</small>
          </div>
          <div className="profile-overview-item">
            <p>Joining Date:</p>
            <small>24 Nov 2022</small>
          </div>
        </div>
        <div className="profile-overview-about-container">
          <h3>About</h3>
          <p className="profile-about-text">
            Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it
            will be Occidental. To an English person, it will seem like
            simplified English, as a skeptical Cambridge friend of mine told me
            what Occidental is European languages are members of the same
            family.
          </p>
          <p className="profile-about-text">
            You always want to make sure that your fonts work well together and
            try to limit the number of fonts you use to three or less.
            Experiment and play around with the fonts that you already have in
            the software you’re working with reputable font websites. This may
            be the most commonly encountered tip I received from the designers I
            spoke with. They highly encourage that you use different fonts in
            one design, but do not over-exaggerate and go overboard.
          </p>
          <div className="profile-about-detail-container">
            <div className="profile-about-detail-item">
              <FaRegUser />
              <div>
                <p>Designation:</p>
                <small>Lead Designer / Developer</small>
              </div>
            </div>
            <div className="profile-about-detail-item">
              <TbWorld />
              <div>
                <p>Website:</p>
                <small>www.dashboard.com</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-oveview-skills-container">
        <h3>Skills</h3>
        <ul className="profile-oveview-skills-list">
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Php</li>
          <li>Python</li>
          <li>React</li>
        </ul>
      </div>
      <div className="profile-overview-inner-container">
        <div className="profile-overview-suggestion-container">
          <h3>Suggestions</h3>
          <ul className="profile-overview-suggestion-list">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <div className="suggestion-info-container">
                  <img src={suggestion.image} alt={suggestion.name} />
                  <div>
                    <h2>{suggestion.name}</h2>
                    <small>{suggestion.title}</small>
                  </div>
                </div>
                <HiUserAdd />
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-overview-post-container">
          <h3>Popular Posts</h3>
          <ul className="profile-overview-post-list">
            {posts.map((post) => (
              <li key={post.id}>
                <img src={post.image} alt={post.title} />
                <div>
                  <h1>{post.title}</h1>
                  <small>{post.date}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="profile-overview-activity-container">
        <h3>Recent Activity</h3>
        <div className="profile-activity-item">
          <div>
            <div className="profile-activity-circle">JS</div>
            <h2>Jacqueline Steve</h2>
          </div>
          <small>We has changed 2 attributes on 05:16 PM</small>
          <p>
            In an awareness campaign, it is vital for people to begin put 2 and
            2 together and begin to recognize your cause. Too much or too little
            spacing, as in the example below, can make things unpleasant for the
            reader. The goal is to make your text as comfortable to read as
            possible. A wonderful serenity has taken possession of my entire
            soul, like these sweet mornings of spring which I enjoy with my
            whole heart.
          </p>
        </div>
        <div className="profile-activity-item">
          <div>
            <div className="profile-activity-circle">ME</div>
            <h2>Megan Elmore</h2>
          </div>
          <small>Adding a new event with attachments - 04:45 PM</small>
          <div className="profile-activity-attachments-container">
            <div className="activity-attachment">
              <BsFileEarmarkPdfFill />
              <div className="activity-attachment-info">
                <h3>Business Template - UI/UX Design</h3>
                <small>685 KB</small>
              </div>
            </div>
            <div className="activity-attachment">
              <BsFiletypePsd />
              <div className="activity-attachment-info">
                <h3>Business Template - UI/UX Design</h3>
                <small>685 KB</small>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-activity-item">
          <div>
            <div className="profile-activity-circle">NT</div>
            <h2>New ticket received</h2>
          </div>
          <small>
            User <span>Erica245</span> submitted a ticket - 02:33 PM
          </small>
        </div>
        <div className="profile-activity-item">
          <div>
            <div className="profile-activity-circle">NM</div>
            <h2>Nancy Martino</h2>
          </div>
          <small>Commented on 12:57 PM</small>
          <p className="activity-comment-text">
            " A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
            Each design is a new, unique piece of art birthed into this world,
            and while you have the opportunity to be creative and make your own
            style choices. "
          </p>
        </div>
        <div className="profile-activity-item">
          <div>
            <div className="profile-activity-circle">LA</div>
            <h2>Lewis Arnold</h2>
          </div>
          <small>Create new project building product - 10:05 AM</small>
          <p>
            Every team project can have a dashboard. Use the dashboard to share
            information with your team to understand and contribute to your
            project.
          </p>
          <div className="activity-team-container">
            <img src={team4} alt="team member" />
            <img src={team2} alt="team member" />
            <img src={team3} alt="team member" />
            <img src={team1} alt="team member" />
            <div className="team-member-extra">2+</div>
          </div>
        </div>
      </div>
      <div className="profile-overview-project-container">
        <h3>Projects</h3>
        <ul>
          <li>
            <div className="profile-project-header">
              <h1>ABC Project Customization</h1>
              <p className="in-progress-tag">In Progress</p>
            </div>
            <i>
              Last Update: <b>4 hr ago</b>
            </i>
            <small>Members:</small>
            <div className="activity-team-container">
              <img src={team4} alt="team member" />
              <img src={team2} alt="team member" />
              <img src={team3} alt="team member" />
              <img src={team1} alt="team member" />
            </div>
          </li>
          <li>
            <div className="profile-project-header">
              <h1>Client - John</h1>
              <p className="completed-tag">Completed</p>
            </div>
            <i>
              Last Update: <b>1 hr ago</b>
            </i>
            <small>Members:</small>
            <div className="activity-team-container">
              <img src={team4} alt="team member" />
              <img src={team2} alt="team member" />
              <img src={team3} alt="team member" />
              <img src={team1} alt="team member" />
            </div>
          </li>
          <li>
            <div className="profile-project-header">
              <h1>Brand Logo Design</h1>
              <p className="new-tag">New</p>
            </div>
            <i>
              Last Update: <b>2 hr ago</b>
            </i>
            <small>Members:</small>
            <div className="activity-team-container">
              <img src={team4} alt="team member" />
              <img src={team2} alt="team member" />
              <img src={team3} alt="team member" />
              <img src={team1} alt="team member" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
