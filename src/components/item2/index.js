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

/**

 d3.interpolateRg: 返回一个a和b两种颜色值之间的RGB颜色空间插值器。
 颜色a和b不需要在RGB里，但他们将通过d3.rgb转换为RGB值。
 红、绿、蓝通道是线性地插入值，在某种程度上相当于interpolateRound，即小数部分的通道值是不允许返回的。
 插值器的返回值是一个十六进制RGB字符串

 */