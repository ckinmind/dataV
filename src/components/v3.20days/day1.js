import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'


const data = [
    {
        value: 0,
        x: 50,
        y: 13,
    }, {
        value: 3,
        x: 150,
        y: 63,
    }, {
        value: 5,
        x: 250,
        y: 93,
    }, {
        value: 7,
        x: 100,
        y: 313,
    }, {
        value: 9,
        x: 150,
        y: 213,
    },
];

let info = `

\`\`\`js      
\`\`\`

\`\`\`js
\`\`\`


`;


class Day extends React.Component {

    drawChart(){
        const valueRange = d3.extent(data, d => d.value);
        const colorScale = d3.scale.linear().domain(valueRange).range([5, 100]);

        d3.select('#day1').selectAll('rect')
          .data(data)
          .enter()
          .append('circle')
          .attr({
              cx: d => d.x,
              cy: d => d.y,
              r: d => colorScale(d.value),
              fill: '#D0021B',
              opacity: 0.5,
          })
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Day 1</h1>
              <div id="day1">

              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Day;
