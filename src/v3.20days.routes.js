import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';


import Aside from './components/aside/aside-v3-20days';

import Main from './components/v3.20days/day';
import Day1  from './components/v3.20days/day1';




const App = ({ children }) => (
  <div className="app-wrap">
      <Aside />
      <div className="app-content">
          {children}
      </div>
  </div>
);


export default () => (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          <Route path="v3/day" component={Main}/>
          <Route path="v3/day1" component={Day1} />

      </Route>
  </Router>
);