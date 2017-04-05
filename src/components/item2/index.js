import React from 'react'
import d3 from 'd3'
import './item2.scss'


class Item2 extends React.Component {

    /** D3制作GitHub 贡献表*/
    drawChart(){
        const colorMap = d3.interpolateRgb(
          d3.rgb('#d6e685'),
          d3.rgb('#1e6823')
        );

        d3.select('#item2-chart')
          .selectAll("div")
          .data([.2, .4, 0, 0, .13, .92])
          .enter()
          .append("div")
          .style("background-color", (d)=> {
              return d == 0 ? '#eee' : colorMap(d)
          });
    }

    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div className="item2">
              <h1 className="title"> D3制作GitHub 贡献表2</h1>
              <div id='item2-chart'></div>
          </div>
        );
    }
}

export default Item2;
