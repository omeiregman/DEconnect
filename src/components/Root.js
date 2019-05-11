import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./common/PrivateRoute";

import Home from "./HomeScreen/HomeScreenComponent";

import SignIn from "./Auth/Signin";
import SignUp from "./Auth/Signup";
import Profile from "./App/Profile";
import EditProfile from "./App/EditProfile";
import LoadingScreen from "./LoadingPage";

import LinkedInPopup from "../components/LinkedInPopup";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: this.props.auth.isAuthenticated,
      redirect: false
    };
  }
  render() {
    const { authenticated } = this.state;
    return (
      <Switch>
        <PrivateRoute
          exact
          path="/edit-profile"
          component={EditProfile}
          auth={this.props.auth}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={Profile}
          auth={this.props.auth}
        />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/linkedin" component={LinkedInPopup} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect from="/" to="/signin" />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Root);
