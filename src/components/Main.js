import React from 'react'
import d3 from 'd3'

import '../styles/App.scss';


class App extends React.Component {


  componentDidMount(){


  }



  render() {
    const titleArray = [];
    for (let i = 1; i < 21; i++) {
      titleArray.push(`day ${i}`)
    }

    console.log(titleArray);

    const areaTags = d3.select('body').selectAll('div')
      .data(titleArray)
      .enter()
      .append('div')
      .attr('class', 'main-area');

    areaTags.append('p').text(d => d);
    areaTags.append('svg');

    return (
      <h1 className="index">
            D3 Test
      </h1>
    );
  }
}

App.defaultProps = {
};

export default App;
