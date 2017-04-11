import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';


import Aside from './components/aside/v3.aside';

import Main from './components/v3.lesson/lesson';
import Lesson1  from './components/v3.lesson/lesson1';
import Lesson2  from './components/v3.lesson/lesson2';
import Lesson3  from './components/v3.lesson/lesson3';
import Lesson4  from './components/v3.lesson/lesson4';
import Lesson5  from './components/v3.lesson/lesson5';
import Lesson6  from './components/v3.lesson/lesson6';
import Lesson7  from './components/v3.lesson/lesson7';
import Lesson8  from './components/v3.lesson/lesson8';
import Lesson9  from './components/v3.lesson/lesson9';
import Lesson10 from './components/v3.lesson/lesson10';
import Lesson11 from './components/v3.lesson/lesson11';
import Lesson12 from './components/v3.lesson/lesson12';
import Lesson13 from './components/v3.lesson/lesson13';
import Lesson14 from './components/v3.lesson/lesson14';
import Lesson15 from './components/v3.lesson/lesson15';
import Lesson16 from './components/v3.lesson/lesson16';
import Lesson17 from './components/v3.lesson/lesson17';
import Lesson18 from './components/v3.lesson/lesson18';



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
          <Route path="v3/lesson" component={Main}/>
          <Route path="v3/lesson1" component={Lesson1} />
          <Route path="v3/lesson2" component={Lesson2} />
          <Route path="v3/lesson3" component={Lesson3} />
          <Route path="v3/lesson4" component={Lesson4} />
          <Route path="v3/lesson5" component={Lesson5} />
          <Route path="v3/lesson6" component={Lesson6} />
          <Route path="v3/lesson7" component={Lesson7} />
          <Route path="v3/lesson8" component={Lesson8} />
          <Route path="v3/lesson9" component={Lesson9} />
          <Route path="v3/lesson10" component={Lesson10} />
          <Route path="v3/lesson11" component={Lesson11} />
          <Route path="v3/lesson12" component={Lesson12} />
          <Route path="v3/lesson13" component={Lesson13} />
          <Route path="v3/lesson14" component={Lesson14} />
          <Route path="v3/lesson15" component={Lesson15} />
          <Route path="v3/lesson16" component={Lesson16} />
          <Route path="v3/lesson17" component={Lesson17} />
          <Route path="v3/lesson18" component={Lesson18} />

      </Route>
  </Router>
);