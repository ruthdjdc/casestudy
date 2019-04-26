import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Users from './users';
import Transactions from './transactions.jsx';
import Cards from './cards.jsx';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/users" component={Users} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/cards" component={Cards} />
    <Route exact path="/" component={LandingPage} />
  </Switch>
)

export default Main;
