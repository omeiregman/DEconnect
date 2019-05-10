import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./common/PrivateRoute";

import Home from "./HomeScreen/HomeScreenComponent";

import SignIn from "./Auth/Signin";
import SignUp from "./Auth/Signup";
import Profile from "./App/Profile";

import LinkedInPopup from "../components/LinkedInPopup";

const Root = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/linkedin" component={LinkedInPopup} />
        <Route exact path="/signup" component={SignUp} />

        <Route exact path="/" component={Home} />
      </Switch>
    </section>
  );
};

export default Root;
