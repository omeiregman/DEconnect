import React from "react";
import profileImage from "../CraftersComponent/img/profile-img.png";
import "./smallprofilecomponent.css"

const SmallProfileComponent = ({}) => (
  <div className="row small-profile-component">
    <div className="profile-picture-container">
      <img src={profileImage} alt="profile display picture" />
    </div>
    <div className="profile-basic-profile-container">
      <div className="profile-basic-profile">
        <p className="profile-name"> Amarachi Ezechukwu</p>
        <p className="professional-role"> Quality Assurance Tester </p>
        <p className="professional-role"> 63% </p>
      </div>
    </div>
  </div>
);

export default SmallProfileComponent;
