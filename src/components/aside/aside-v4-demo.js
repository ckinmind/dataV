import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
          <aside className="app-sidebar">
              <nav>
                  <Link to="/v4/demo"  activeClassName="active">说明</Link>
                  <Link to="/v4/demo1"  activeClassName="active">Demo 1</Link>
              </nav>
          </aside>
        )
    }
}

export default Aside;
