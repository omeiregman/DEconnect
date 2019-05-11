import React from "react";

import "./intereststab.css";

const ProfileTabComponent = ({ user: { otherCraftsSelect } }) => {
  return (
    <div className="interest-tab-container">
      <div className="hero-text-container">
        <p className="hero-text"> Interests: </p>
      </div>
      <div className="row">
        <div className="all-interest-container">
          {otherCraftsSelect.map((interest, i) => (
            <div className="col-md-4 interest-container" key={`interests${i}`} >
              <span className="interest-logo">{interest.text[0]}</span>
              <span>{interest.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileTabComponent;
