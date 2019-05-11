import React from "react";
import SmallProfileComponent from "../SmallProfileComponent";
import "./professionalmatches.css";
import { mockData } from "./mockData";

const ProfileTabComponent = ({ viewMatchProfile }) => (
  <div className="matches-tab-container">
    <div className="small-profile-container">
      {mockData.map((data, i) => (
        <SmallProfileComponent
          data={data}
          key={`profile_${i}`}
          viewMatchProfile={viewMatchProfile}
        />
      ))}
    </div>
  </div>
);

export default ProfileTabComponent;
