import React from "react";

import "./PersonalDetails.css";

export const PersonalDetails: React.FC = () => {
  return (
    <div className="personal-details-container">
      <form className="personal-details-form">
        <div className="personal-detail-form-col-2">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input type="text" value="Dave" name="first-name" id="first-name" />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" value="Adame" name="last-name" id="last-name" />
          </div>
        </div>
        <div className="personal-detail-form-col-2">
          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              value="+(1) 987 6543"
              name="phone-number"
              id="phone-number"
            />
          </div>
          <div>
            <label htmlFor="email-address">E-mail Address</label>
            <input
              type="email"
              value="daveadame@dashboard.com"
              name="email-address"
              id="email-address"
            />
          </div>
        </div>
        <div className="personal-detail-form-col-1">
          <div>
            <label htmlFor="joning-date">Joining date</label>
            <input
              type="text"
              value="24 Nov, 2022"
              name="joining-date"
              id="joining-date"
            />
          </div>
        </div>
        <div className="personal-detail-form-col-1">
          <div>
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              value="Photoshop, Illustrator, HTML, CSS, Javascript, Php, Python, React"
              name="skills"
              id="skills"
            />
          </div>
        </div>
        <div className="personal-detail-form-col-2">
          <div>
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              value="Lead Designer / Developer"
              name="designation"
              id="designation"
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              value="www.dashboard.com"
              name="website"
              id="website"
            />
          </div>
        </div>
        <div className="personal-detail-form-col-3">
          <div>
            <label htmlFor="city">City</label>
            <input type="text" value="California" name="city" id="city" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              value="United States"
              name="country"
              id="country"
            />
          </div>
          <div>
            <label htmlFor="zip-code">Zip Code</label>
            <input type="text" value="90011" name="zip-code" id="zip-code" />
          </div>
        </div>
        <div className="personal-detail-form-col-1">
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              rows={10}
              value="Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family. You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard."
              name="description"
              id="description"
            />
          </div>
        </div>
        <div className="personal-details-actions">
          <button className="personal-details-update-button">Update</button>
          <button className="personal-details-cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};
