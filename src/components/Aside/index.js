import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
          <aside className="app-sidebar">
              <nav>
                  <Link to="/item1"  activeClassName="active">Item1</Link>
              </nav>
          </aside>
        )
    }
}

export default Aside;
