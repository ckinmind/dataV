import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';

import Main from './components/Main';
import Aside from './components/aside';

import Item1 from './components/item1';


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
          <IndexRoute component={Main}/>
          <Route path="item1" component={Item1} />
      </Route>
  </Router>
);