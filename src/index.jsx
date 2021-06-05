import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { RegistrationVolunteer } from './components/RegistrationVolunteer';
import { SignUp } from './components/SignUp';
import { Request } from './components/Request';
import { Volunteer } from './components/Volunteer';
import './style.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/pozadavek">
        <Request />
      </Route>
      <Route path="/dobrovolnik">
        <Volunteer />
      </Route>
      <Route path="/registrace-dobrovolnik">
        <RegistrationVolunteer />
      </Route>
      <Route path="/prihlaseni">
        <SignUp />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.querySelector('#app'));
