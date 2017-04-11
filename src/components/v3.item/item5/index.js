import React from 'react'
import d3 from 'd3'


class Item5 extends React.Component {


    data = [
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


    /** day1 */
    drawChart(){
        const valueRange = d3.extent(this.data, d => d.value);
        const colorScale = d3.scale.linear().domain(valueRange).range([5, 100]);

        d3.select('#item5-chart')
          .selectAll('rect')
          .data(this.data)
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
          <div className="item5" >
              <h1> 画圆 </h1>
              <svg id="item5-chart" style={{width:'400px', height:'400px'}}>day1</svg>
          </div>
        );
    }
}

export default Item5;

/**
 d3.extent - 返回给定数组（array）自然排序的最小值和最大值，等同于同时调用d3.min和d3.max
 d3.scale.linear - 构建一个线性比例尺

 domain() 和 range() 分别设定比例尺的定义域和值域

 identity.domain - 取得或设置比例尺的定义域
 identity.range - 等价于identity.domain


 rect元素是SVG的一个基本形状，用来创建矩形，基于一个角位置以及它的宽和高。它还可以用来创建圆角矩形

*/
