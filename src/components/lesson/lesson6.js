import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'
import './les6.scss'


let info = `

\`\`\`js
/* 部分 */

//x轴的比例尺
let xScale = d3.scale.ordinal()     //定义一个序数比例尺
  .domain(d3.range(dataset.length)) //d3.range(dataset.length) 返回 [0,1,2,3,4,5,6,7]
  .rangeRoundBands([0, width - padding.left - padding.right]); // 指定输出范围为连续区间，区间段的起点均为整数
  
//添加文字元素
svg.selectAll(".MyText")
  .data(dataset)
  .enter()
  .append("text")
  .attr("class","MyText")
  .attr("transform","translate(" + padding.left + "," + padding.top + ")")
  .attr("x", (d,i) => xScale(i) + rectPadding/2)
  .attr("y", d => yScale(d))
  .attr("dx",() => (xScale.rangeBand() - rectPadding)/2)
  .attr("dy", d => 20)
  .text( d => d); 
\`\`\`

\`\`\`js
1. d3.scale.ordinal() 序数比例尺
\`\`\`


`;


class Lesson6 extends React.Component {

    drawChart(){
        /** 1. 添加 SVG 画布*/
        //画布大小
        let width = 400;
        let height = 400;

        //在 #les6 里添加一个 SVG 画布
        let svg = d3.select("#les6")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        //画布周边的空白
        let padding = {left:30, right:30, top:20, bottom:20};

        /** 2. 定义数据和比例尺*/
        //定义一个数组
        let dataset = [10, 20, 30, 40, 33, 24, 12, 5];

        //x轴的比例尺
        let xScale = d3.scale.ordinal()     //定义一个序数比例尺
          .domain(d3.range(dataset.length)) //d3.range(dataset.length) 返回 [0,1,2,3,4,5,6,7]
          .rangeRoundBands([0, width - padding.left - padding.right]); // 指定输出范围为连续区间，区间段的起点均为整数

        //y轴的比例尺
        let yScale = d3.scale.linear()
          .domain([0,d3.max(dataset)])
          .range([height - padding.top - padding.bottom, 0]);

        /** 3. 定义坐标轴*/
        //定义x轴
        let xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom");

        //定义y轴
        let yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left");

        /** 4. 添加矩形和文字元素 */
        //矩形之间的空白
        let rectPadding = 4;

        //添加矩形元素样式
        svg.selectAll(".MyRect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("class","MyRect")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .attr("x", (d,i) => xScale(i) + rectPadding/2)
          .attr("y", d => yScale(d))
          .attr("width", xScale.rangeBand() - rectPadding )
          .attr("height", d => height - padding.top - padding.bottom - yScale(d));

        //添加文字元素
        svg.selectAll(".MyText")
          .data(dataset)
          .enter()
          .append("text")
          .attr("class","MyText")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .attr("x", (d,i) => xScale(i) + rectPadding/2)
          .attr("y", d => yScale(d))
          .attr("dx",() => (xScale.rangeBand() - rectPadding)/2)
          .attr("dy", d => 20)
          .text( d => d);

        /** 5. 添加坐标轴的元素*/
        //添加x轴
        svg.append("g")
          .attr("class","axis")
          .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
          .call(xAxis);

        //添加y轴
        svg.append("g")
          .attr("class","axis")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .call(yAxis);
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 6: 完整的柱形图</h1>
              <div id="les6">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson6;
