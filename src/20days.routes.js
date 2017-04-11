import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';


import Aside from './components/aside/aside-20days';

import Main from './components/20days/day';
import V3Day1  from './components/20days/v3day1';
import V4Day1  from './components/20days/v4day1';




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
          <Route path="v3/day1" component={V3Day1} />
          <Route path="v4/day2" component={V4Day1} />

      </Route>
  </Router>
);