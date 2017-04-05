import React from 'react'
import d3 from 'd3'
import './item1.scss'


class Item1 extends React.Component {

    /** D3制作一个柱状图 */
    drawChart(){
        d3.select('#item1-chart1')
          .selectAll("div")
          .data([420,300,300,270, 230, 160, 150, 100,90, 80, 40, 30, 20, 10, 5])
          .enter()
          .append("div")
          .style("height", (d)=> d + "px");
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div className="item1">
              <h1> D3制作一个柱状图 </h1>
              <div id="item1-chart1"></div>
          </div>
        );
    }
}

export default Item1;


/*

 <h1> SVG制作圆和三角形</h1>
 <svg width="200" height="200" id="item1-chart2">
 <circle fill="#3E5693" cx="50" cy="120" r="20" />
 <text x="100" y="100">Hello SVG!</text>
 <path d="M100,10L150,70L50,70Z" fill="#BEDBC3" stroke="#539E91" strokeWidth="3" />
 </svg>

*/
