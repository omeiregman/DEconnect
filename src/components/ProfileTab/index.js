import React from "react";
import { Link } from "react-router-dom";

import profileImage from "../CraftersComponent/img/profile-img.png";
import locationImage from "../../images/location.png";
import twitterImage from "../CraftersComponent/img/twitter.png";
import instagramImage from "../CraftersComponent/img/instagram.png";
import "./profiletab.css";

const ProfileTabComponent = ({ user, type }) => (
  <div className="profile-tab-container">
    <div className="row">
      <div className="profile-picture-container">
        <img src={user.picture ? user.picture : profileImage} alt="profile display picture" />
      </div>
      <div className="profile-basic-profile-container">
        <div className="profile-basic-profile">
          <p className="profile-name">
            {" "}
            {`${user.firstName} ${user.lastName}`}{" "}
          </p>
          <p className="professional-role"> {user.status} </p>
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
      {type === "self" && <Link to="/edit-profile"> Edit </Link>}
    </div>
    <div className="bio">
      <p>{user.bio}</p>
    </div>
    <div className="connect">
      {type !== "self" && user.connected ? (
        <React.Fragment>
          <p>Connected</p>
          <button>Send Message</button>
        </React.Fragment>
      ) : type !== "self" && !user.connected ? (
        <button>Connect</button>
      ) : null}
    </div>
  </div>
);

export default ProfileTabComponent;
