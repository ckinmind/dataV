import React from 'react'
import d3 from 'd3'
import './item3.scss'


class Item3 extends React.Component {

    /** D3 画一组圆 */
    drawChart(){
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

        let g = d3.select('#item3-chart')
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
        this.drawChart();
    }


    render() {
        return (
          <div className="item3">
              <h1> D3 画一组圆</h1>
              <svg id="item3-chart" width="250" height="100"></svg>
          </div>
        );
    }
}

export default Item3;
