import React from "react";
import profileImage from "../CraftersComponent/img/profile-img.png";
import "./smallprofilecomponent.css";

const SmallProfileComponent = ({ data, viewMatchProfile }) => (
  <div className="row small-profile-component" onClick={() => viewMatchProfile(data)} >
    <div className="profile-picture-container">
      <img src={data.picture} alt="profile display picture" />
    </div>
    <div className="profile-basic-profile-container">
      <div className="profile-basic-profile">
        <p className="profile-name"> {`${data.firstName} ${data.lastName}`}</p>
        <p className="professional-role"> {data.status} </p>
        <p className="professional-role"> 63% </p>
      </div>
    </div>
  </div>
);

export default SmallProfileComponent;
