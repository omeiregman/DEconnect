import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../CraftersComponent/DEconnectHeader";
import ProfileTab from "../ProfileTab";
import InterestTab from "../InterestsTab";
import ProfessionalMatches from "../ProfessionalMatches";
import LoadingPage from "../LoadingPage";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.auth.user,
      type: "self",
      loading: false
    };
  }

  viewMatchProfile = data => {
    this.setState(
      {
        ...this.state,
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            user: data,
            type: "match",
            loading: false,
          });
        }, 1000);
      }
    );
  };

  render() {
    const { auth } = this.props;
    const { loading } = this.state;
    return loading ? (
      <LoadingPage message="loading profile" />
    ) : (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ProfileTab user={this.state.user} type={this.state.type} />
              <InterestTab user={this.state.user} />
            </div>
            <div className="col-md-4">
              <ProfessionalMatches viewMatchProfile={this.viewMatchProfile} />
            </div>
          </div>
        </div>
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
