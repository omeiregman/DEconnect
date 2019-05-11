import React from "react";
import SmallProfileComponent from "../SmallProfileComponent";
import "./professionalmatches.css";

const ProfileTabComponent = ({}) => (
  <div className="matches-tab-container">
    <div className="small-profile-container" >
      <SmallProfileComponent />
      <SmallProfileComponent />
      <SmallProfileComponent />
      <SmallProfileComponent />
      <SmallProfileComponent />
    </div>
  </div>
);

export default ProfileTabComponent;
