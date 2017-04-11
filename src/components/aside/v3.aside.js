import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
          <aside className="app-sidebar">
              <nav>
                  <Link to="/v3/lesson1"  activeClassName="active">Lesson 1</Link>
                  <Link to="/v3/lesson2"  activeClassName="active">Lesson 2</Link>
                  <Link to="/v3/lesson3"  activeClassName="active">Lesson 3</Link>
                  <Link to="/v3/lesson4"  activeClassName="active">Lesson 4</Link>
                  <Link to="/v3/lesson5"  activeClassName="active">Lesson 5</Link>
                  <Link to="/v3/lesson6"  activeClassName="active">Lesson 6</Link>
                  <Link to="/v3/lesson7"  activeClassName="active">Lesson 7</Link>
                  <Link to="/v3/lesson8"  activeClassName="active">Lesson 8</Link>
                  <Link to="/v3/lesson9"  activeClassName="active">Lesson 9</Link>
                  <Link to="/v3/lesson10"  activeClassName="active">Lesson 10</Link>
                  <Link to="/v3/lesson11"  activeClassName="active">Lesson 11</Link>
                  <Link to="/v3/lesson12"  activeClassName="active">Lesson 12</Link>
                  <Link to="/v3/lesson13"  activeClassName="active">Lesson 13</Link>
                  <Link to="/v3/lesson14"  activeClassName="active">Lesson 14</Link>
                  <Link to="/v3/lesson15"  activeClassName="active">Lesson 15</Link>
                  <Link to="/v3/lesson16"  activeClassName="active">Lesson 16</Link>
                  <Link to="/v3/lesson17"  activeClassName="active">Lesson 17</Link>
                  <Link to="/v3/lesson18"  activeClassName="active">Lesson 18</Link>
              </nav>
          </aside>
        )
    }
}

export default Aside;
