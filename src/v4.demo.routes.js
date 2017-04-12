import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';


import Aside from './components/aside/aside-v4-demo';

import Demo1  from './components/v4.demo/demo1';




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
          <Route path="v4/demo1" component={Demo1} />
      </Route>
  </Router>
);