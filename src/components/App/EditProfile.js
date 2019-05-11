import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../CraftersComponent/DEconnectHeader";
import ProfileTab from "../ProfileTab";
import ProfessionalMatches from "../ProfessionalMatches";
import EditCrafter from "../CraftersComponent/EditCrafter";

class Profile extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        <Header />
          <EditCrafter />
      </div>
    );
  }
}

export const mapStatetoProps = state => {
  console.log(state);
  return {
    auth: state.auth
  };
};

export default connect(mapStatetoProps)(Profile);
