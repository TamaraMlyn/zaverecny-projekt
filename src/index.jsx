import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { RegistrationVolunteer } from './components/RegistrationVolunteer';
import { RegistrationWheelchair } from './components/RegistrationWheelchair';
import { SignUp } from './components/SignUp';
import { Request } from './components/Request';
import { Volunteer } from './components/Volunteer';
import { Search } from './components/Search';
import { Header } from './components/Header';
import './style.css';
import { Wheelchair } from './components/Wheelchair';
import PouchDB from 'pouchdb-browser';
import Find from 'pouchdb-find'
import { Provider } from 'use-pouchdb';
import 'dayjs';
import DayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';


PouchDB.plugin(Find)
const db = new PouchDB('local')

const App = () => (
  <MuiPickersUtilsProvider utils={DayJsUtils}>
  <Provider pouchdb={db}>
  <Router>
    <Header />
    <Switch>
      <Route path="/potrebuji-asistenci">
        <Wheelchair />
      </Route>
      <Route path="/pozadavek">
        <Request />
      </Route>
      <Route path="/dobrovolnik">
        <Volunteer />
      </Route>
      <Route path="/registrace/dobrovolnik">
        <RegistrationVolunteer />
      </Route>
      <Route path="/registrace/vozickar">
        <RegistrationWheelchair />
      </Route>
      <Route path="/prihlaseni">
        <SignUp />
      </Route>
      <Route path="/hledani">
        <Search />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  </Router>
  </Provider>
  </MuiPickersUtilsProvider>
);

render(<App />, document.querySelector('#app'));
