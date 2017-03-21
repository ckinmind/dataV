import React from 'react'
import d3 from 'd3'
import './item1.scss'


class Item1 extends React.Component {

    /** D3制作一个柱状图 */
    drawChart1(){
        d3.select('#chart1')
          .selectAll("div")
          .data([420,300,300,270, 230, 160, 150, 100,90, 80, 40, 30, 20, 10, 5])
          .enter()
          .append("div")
          .style("height", (d)=> d + "px");
    }


    /** D3制作GitHub 贡献表*/
    drawChart2(){
        const colorMap = d3.interpolateRgb(
          d3.rgb('#d6e685'),
          d3.rgb('#1e6823')
        );

        d3.select('#chart2')
          .selectAll("div")
          .data([.2, .4, 0, 0, .13, .92])
          .enter()
          .append("div")
          .style("background-color", (d)=> {
              return d == 0 ? '#eee' : colorMap(d)
          });
    }


    componentDidMount(){
        this.drawChart1();
        this.drawChart2();
    }


    render() {
        return (
          <div>
              <h1> D3制作一个柱状图 </h1>
              <div id="chart1"></div>

              <h1> D3制作GitHub 贡献表</h1>
              <div id="chart2"></div>
          </div>
        );
    }
}

export default Item1;
