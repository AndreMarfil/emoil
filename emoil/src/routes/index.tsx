import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import OilRegister from '../pages/OilRegister';
import EmployeeRegister from '../pages/EmployeeRegister';
import CustomerRegister from '../pages/CustomerRegister';
import OilChangeRegister from '../pages/OilChangeRegister';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" isPrivate exact component={Main} />
    <Route path="/oil" isPrivate component={OilRegister} />
    <Route path="/employee" isPrivate component={EmployeeRegister} />
    <Route path="/customer" isPrivate component={CustomerRegister} />
    <Route path="/oilChange" isPrivate component={OilChangeRegister} />
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
