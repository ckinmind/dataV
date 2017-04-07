import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
          <aside className="app-sidebar">
              <nav>
                  <Link to="/lesson1"  activeClassName="active">Lesson 1</Link>
                  <Link to="/lesson2"  activeClassName="active">Lesson 2</Link>
                  <Link to="/lesson3"  activeClassName="active">Lesson 3</Link>
                  <Link to="/lesson4"  activeClassName="active">Lesson 4</Link>
                  <Link to="/lesson5"  activeClassName="active">Lesson 5</Link>
                  <Link to="/lesson6"  activeClassName="active">Lesson 6</Link>
                  <Link to="/lesson7"  activeClassName="active">Lesson 7</Link>
                  <Link to="/lesson8"  activeClassName="active">Lesson 8</Link>
                  <Link to="/lesson9"  activeClassName="active">Lesson 9</Link>
                  <Link to="/lesson10"  activeClassName="active">Lesson 10</Link>
                  <Link to="/lesson11"  activeClassName="active">Lesson 11</Link>


                  <Link to="/item1"  activeClassName="active">Item1</Link>
                  <Link to="/item2"  activeClassName="active">Item2</Link>
                  <Link to="/item3"  activeClassName="active">Item3</Link>
                  <Link to="/item4"  activeClassName="active">Item4</Link>
                  <Link to="/item5"  activeClassName="active">Item5</Link>
                  <Link to="/item6"  activeClassName="active">Item6</Link>
              </nav>
          </aside>
        )
    }
}

export default Aside;
