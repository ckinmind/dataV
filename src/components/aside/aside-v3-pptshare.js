import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
          <aside className="app-sidebar">
              <nav>
                  <Link to="/ppt/p0"  activeClassName="active">开始</Link>
                  <Link to="/ppt/p1"  activeClassName="active">Mobx知识结构</Link>
                  <Link to="/ppt/p2"  activeClassName="active">autorun / when</Link>
                  <Link to="/ppt/p3"  activeClassName="active">@computed</Link>
                  <Link to="/ppt/p9"  activeClassName="active">intercept & observe</Link>

                  <Link to="/ppt/p7"  activeClassName="active">Observer</Link>
                  <Link to="/ppt/p8"  activeClassName="active">Provider and inject</Link>


                  <Link to="/ppt/p4"  activeClassName="active">object</Link>
                  <Link to="/ppt/p5"  activeClassName="active">arrays</Link>
                  <Link to="/ppt/p6"  activeClassName="active">maps</Link>

              </nav>

              <nav>
                  <Link to="/ppt/q1"  activeClassName="active">Q1</Link>
                  <Link to="/ppt/q2"  activeClassName="active">Q2</Link>
                  <Link to="/ppt/q3"  activeClassName="active">Q3</Link>
                  <Link to="/ppt/q4"  activeClassName="active">Q4</Link>
              </nav>

              <nav>
                  <Link to="/ppt/d1"  activeClassName="active">D1</Link>
                  <Link to="/ppt/d2"  activeClassName="active">D2</Link>
              </nav>
          </aside>
        )
    }
}

export default Aside;
