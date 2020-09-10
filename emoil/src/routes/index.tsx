import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import OilRegister from '../pages/OilRegister';
import EmployeeRegister from '../pages/EmployeeRegister';
import CustomerRegister from '../pages/CustomerRegister';
import OilChangeRegister from '../pages/OilChangeRegister';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/oil" component={OilRegister} />
    <Route path="/employee" component={EmployeeRegister} />
    <Route path="/customer" component={CustomerRegister} />
    <Route path="/oilChange" component={OilChangeRegister} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
