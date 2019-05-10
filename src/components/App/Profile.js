import React, { Component } from "react";
import Header from "../CraftersComponent/DEconnectHeader";
import ProfileTab from '../ProfileTab'

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row" >
        <div className="col-md-9" >
          <ProfileTab />
        </div>
        <div className="col-md-3" >
          <h4> Matches </h4>
        </div>
        </div>
      </div>
    );
  }
}

export default Profile;
