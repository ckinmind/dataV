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

    drawChart4(){
        let data = [{
            label: "7am",
            sales: 20
        },{
            label: "8am",
            sales: 12
        }, {
            label: "9am",
            sales: 8
        }, {
            label: "10am",
            sales: 27
        }];

        let g = d3.select('#chart4')
          .selectAll("g")
          .data(data)
          .enter()
          .append('g');

        g.append("circle")
          .attr('cy', 40)
          .attr('cx', (d, i)=> (i+1) * 50)
          .attr('r', (d)=> d.sales);
          //.attr('fill','#4A988A');

        g.append("text")
          .attr('y', 90)
          .attr('x', (d, i)=> (i+1) * 50)
          .text((d)=> d.label)

    }


    componentDidMount(){
        this.drawChart1();
        this.drawChart2();
        this.drawChart4();
    }


    render() {
        return (
          <div>
              <h1> D3制作一个柱状图 </h1>
              <div id="chart1"></div>

              <h1> D3制作GitHub 贡献表</h1>
              <div id="chart2"></div>

              <h1> SVG制作圆和三角形</h1>
              <svg width="200" height="200" id="chart3">
                  <circle fill="#3E5693" cx="50" cy="120" r="20" />
                  <text x="100" y="100">Hello SVG!</text>
                  <path d="M100,10L150,70L50,70Z" fill="#BEDBC3" stroke="#539E91" strokeWidth="3" />
              </svg>

              <h1> D3 画一组圆</h1>
              <svg id="chart4" width="250" height="100"></svg>
          </div>
        );
    }
}

export default Item1;
