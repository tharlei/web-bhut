import React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route';

import CarsList from '../pages/Cars/List'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={CarsList} />
      {/* <Route path='/city' exact component={City} /> */}
      {/* <Route path='/users/:id' component={Edit} isPrivate/>
			<Route path='/users' component={List} isPrivate/>
			<Route path='*' component={NotFound} /> */}
    </Switch>
  );
}

export default Routes;
