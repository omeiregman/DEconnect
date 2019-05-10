import React, { Component } from "react";
import Header from "../CraftersComponent/DEconnectHeader";
import ProfileTab from "../ProfileTab";
import ProfessionalMatches from "../ProfessionalMatches";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ProfileTab />
            </div>
            <div className="col-md-4">
              <ProfessionalMatches />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
