import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
          <aside className="app-sidebar">
              <nav>
                  <Link to="/item1"  activeClassName="active">Item1</Link>
                  <Link to="/item2"  activeClassName="active">Item2</Link>
                  <Link to="/item3"  activeClassName="active">Item3</Link>
                  <Link to="/item4"  activeClassName="active">Item4</Link>
                  <Link to="/item5"  activeClassName="active">Item5</Link>

                  {/*// <Link to="/item6"  activeClassName="active">Item6</Link>*/}
                  {/*// <Link to="/item7"  activeClassName="active">Item7</Link>*/}
                  {/*<Link to="/item8"  activeClassName="active">Item8</Link>*/}
                  {/*<Link to="/item9"  activeClassName="active">Item9</Link>*/}
                  {/*<Link to="/item11"  activeClassName="active">Item10</Link>*/}
                  {/*<Link to="/item12"  activeClassName="active">Item11</Link>*/}
                  {/*<Link to="/item13"  activeClassName="active">Item12</Link>*/}
                  {/*<Link to="/item14"  activeClassName="active">Item13</Link>*/}
                  {/*<Link to="/item15"  activeClassName="active">Item14</Link>*/}
                  {/*<Link to="/item16"  activeClassName="active">Item15</Link>*/}
              </nav>
          </aside>
        )
    }
}

export default Aside;
