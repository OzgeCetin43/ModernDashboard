import React from "react";

import "./Experience.css";

export const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <form className="experience-form">
        <div className="experience-form-col-1">
          <div>
            <label htmlFor="job-title">Job Title</label>
            <input
              type="text"
              name="job-title"
              id="job-title"
              value="Founder / Lead Designer / Developer"
            />
          </div>
        </div>
        <div className="experience-form-col-3">
          <div>
            <label htmlFor="company-name">Company Name</label>
            <input
              type="text"
              name="company-name"
              id="company-name"
              value="Themesbrand"
            />
          </div>
          <div>
            <label htmlFor="experience-year-start">Experience Year Start</label>
            <input
              type="number"
              name="experience-year-start"
              id="experience-year-start"
              value={2017}
            />
          </div>
          <div>
            <label htmlFor="experience-year-end">Experience Year End</label>
            <input
              type="number"
              name="experience-year-end"
              id="experience-year-end"
              value={2024}
            />
          </div>
        </div>
        <div className="experience-form-col-1">
          <div>
            <label htmlFor="job-description">Job Description</label>
            <textarea
              rows={10}
              name="job-description"
              id="job-description"
              value="You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites."
            />
          </div>
        </div>
        <div className="experience-actions">
          <button className="experience-update-button">Update</button>
          <button className="experience-add-new-button">Add New</button>
          <button className="experience-delete-button">Delete</button>
        </div>
      </form>
    </div>
  );
};
