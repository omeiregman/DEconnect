import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';

import Home from './HomeScreen/HomeScreenComponent';

import SignIn from './Auth/Signin';
import SignUp from './Auth/Signup';
import RegisterCrafter from './CraftersComponent/CrafterRegistration';
import Events from './EventComponent/Event';
import SingleEvent from './EventComponent/SingleEvent';
import EditCrafter from './CraftersComponent/EditCrafter';
import CraftersProfileLink from './CraftersComponent/CraftersProfileLink';
import Dashboard from './DashboardComponent/Dashboard';

import LinkedInPopup from '../components/LinkedInPopup'



const Root = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/crafter/:handle" component={CraftersProfileLink} />
        <PrivateRoute exact path="/crafters/register" component={RegisterCrafter} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/edit" component={EditCrafter} />

        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/linkedin" component={LinkedInPopup} />
        <Route exact path="/signup" component={SignUp} />

        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:name" render={props => <SingleEvent {...props} />} />

        <Route exact path='/' component={Home} />
      </Switch>
    </section>
  );
}

export default Root;
