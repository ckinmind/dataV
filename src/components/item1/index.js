import React from 'react'
import d3 from 'd3'
import './item1.scss'


class Item1 extends React.Component {


    componentDidMount(){
        d3.select('#chart')
          .selectAll("div")
          .data([420,300,300,270, 230, 160, 150, 100,90, 80, 40,30,20,10,5])
          .enter()
          .append("div")
          .style("height", (d)=> d + "px")
    }


    render() {

        return (
          <div>
              <h1> D3制作一个柱状图 </h1>
              <div id="chart">
              </div>
          </div>
        );
    }
}

export default Item1;
