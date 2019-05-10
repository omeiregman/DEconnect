import React from "react";
import "./profiletab.css";
import profileImage from "../CraftersComponent/img/profile-img.png";
import locationImage from "../../images/location.png";
import twitterImage from "../CraftersComponent/img/twitter.png";
import instagramImage from "../CraftersComponent/img/instagram.png";

const ProfileTabComponent = ({}) => (
  <div className="profile-tab-container">
    <div className="row">
      <div className="profile-picture-container">
        <img src={profileImage} alt="profile display picture" />
      </div>
      <div className="profile-basic-profile-container">
        <div className="profile-basic-profile">
          <p className="profile-name"> Amarachi Ezechukwu</p>
          <p className="professional-role"> Quality Assurance Tester </p>
          <p className="professional-location">
            <img src={locationImage} alt="Lagos, NG" /> Lagos, NG
          </p>
          <div className="professional-links">
            <p className="professional-location">
              <img src={locationImage} alt="Lagos, NG" /> www.amarachisom.com
            </p>
            <p className="professional-location">
              <img src={instagramImage} alt="Lagos, NG" /> @christy_amara
            </p>
            <p className="professional-location">
              <img src={twitterImage} alt="Lagos, NG" /> @amarachi_official
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bio">
      <p>
        I am a QA driven by passion to make things perfect, I pay attention to
        details and i am always ready to work things out in the best possible
        way{" "}
      </p>
    </div>
  </div>
);

export default ProfileTabComponent;
