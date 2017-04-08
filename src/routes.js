import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';

import Main from './components/Main';
import Aside from './components/aside';

import Lesson1 from './components/lesson/lesson1';
import Lesson2 from './components/lesson/lesson2';
import Lesson3 from './components/lesson/lesson3';
import Lesson4 from './components/lesson/lesson4';
import Lesson5 from './components/lesson/lesson5';
import Lesson6 from './components/lesson/lesson6';
import Lesson7 from './components/lesson/lesson7';
import Lesson8 from './components/lesson/lesson8';
import Lesson9 from './components/lesson/lesson9';
import Lesson10 from './components/lesson/lesson10';
import Lesson11 from './components/lesson/lesson11';
import Lesson12 from './components/lesson/lesson12';
import Lesson13 from './components/lesson/lesson13';
import Lesson14 from './components/lesson/lesson14';
import Lesson15 from './components/lesson/lesson15';


import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Item6 from './components/item6';




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

          <Route path="lesson1" component={Lesson1} />
          <Route path="lesson2" component={Lesson2} />
          <Route path="lesson3" component={Lesson3} />
          <Route path="lesson4" component={Lesson4} />
          <Route path="lesson5" component={Lesson5} />
          <Route path="lesson6" component={Lesson6} />
          <Route path="lesson7" component={Lesson7} />
          <Route path="lesson8" component={Lesson8} />
          <Route path="lesson9" component={Lesson9} />
          <Route path="lesson10" component={Lesson10} />
          <Route path="lesson11" component={Lesson11} />
          <Route path="lesson12" component={Lesson12} />
          <Route path="lesson13" component={Lesson13} />
          <Route path="lesson14" component={Lesson14} />
          <Route path="lesson15" component={Lesson15} />

          <Route path="item1" component={Item1} />
          <Route path="item2" component={Item2} />
          <Route path="item3" component={Item3} />
          <Route path="item4" component={Item4} />
          <Route path="item5" component={Item5} />
          <Route path="item6" component={Item6} />
      </Route>
  </Router>
);