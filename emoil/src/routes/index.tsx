import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import OilRegister from '../pages/OilRegister';
import EmployeeRegister from '../pages/EmployeeRegister';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/oil" component={OilRegister} />
    <Route path="/employee" component={EmployeeRegister} />
  </Switch>
);

export default Routes;
