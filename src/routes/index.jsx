import React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route';

import Login from '../pages/Login'
import CarsIndex from '../pages/Cars/Index'
import CarsNew from '../pages/Cars/New'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={CarsIndex} isPrivate />
      <Route path='/login' component={Login} />
      <Route path='/cars/new' component={CarsNew} isPrivate />
    </Switch>
  );
}

export default Routes;
