import React from "react";
import { Link } from "react-router-dom";

import profileImage from "../CraftersComponent/img/profile-img.png";
import locationImage from "../../images/location.png";
import twitterImage from "../CraftersComponent/img/twitter.png";
import instagramImage from "../CraftersComponent/img/instagram.png";
import "./profiletab.css";

const ProfileTabComponent = ({ user }) => (
  <div className="profile-tab-container">
    <div className="row">
      <div className="profile-picture-container">
        <img src={profileImage} alt="profile display picture" />
      </div>
      <div className="profile-basic-profile-container">
        <div className="profile-basic-profile">
          <p className="profile-name">
            {" "}
            {`${user.firstName} ${user.lastName}`}{" "}
          </p>
          <p className="professional-role"> Quality Assurance Tester </p>
          <p className="professional-location">
            <img src={locationImage} alt="Lagos, NG" /> {user.location}
          </p>
          <div className="professional-links">
            <p className="professional-location">
              <img src={locationImage} alt="Lagos, NG" /> {user.website}
            </p>
            <p className="professional-location">
              <img src={instagramImage} alt="Lagos, NG" /> {user.instagram}
            </p>
            <p className="professional-location">
              <img src={twitterImage} alt="Lagos, NG" /> {user.twitter}
            </p>
          </div>
        </div>
      </div>
      <Link to="/edit-profile"> Edit </Link>
    </div>
    <div className="bio">
      <p>
        {user.bio}
      </p>
    </div>
  </div>
);

export default ProfileTabComponent;
