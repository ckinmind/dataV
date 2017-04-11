import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'
import './les10.scss'

let info = `

\`\`\`js
let rects = svg.selectAll(".MyRect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("class","MyRect")
  .attr("transform",\`translate(\${padding.left}, \${padding.top})\`)
  .attr("x", (d,i) => xScale(i) + rectPadding/2)
  .attr("y", d => yScale(d))
  .attr("width", xScale.rangeBand() - rectPadding)
  .attr("height", (d) => height - padding.top - padding.bottom - yScale(d))
  .attr("fill","steelblue")		//填充颜色不要写在CSS里
  .on("mouseover",(d,i) => {
       d3.select(\`rect:nth-child(\${i+1})\`).attr("fill","yellow")
       //d3.select(d3.event.target).attr("fill","yellow")
  })
  .on("mouseout",function(d,i){
      d3.select(this)
        .transition()
        .duration(500)
        .attr("fill","steelblue");
  }); 
\`\`\`

\`\`\`js
1. 在 D3 中，每一个选择集都有 on() 函数，用于添加事件监听器

2. 当某个事件被监听到时，D3 会把当前的事件存到 d3.event 对象，里面保存了当前事件的各种参数

3. 监听器函数中都使用了 d3.select(this)，表示选择当前的元素，this 是当前的元素，要改变响应事件的元素时这么写就好

4. 注意箭头函数在d3中使用遇到的关于this的问题，issue #8提供了几种解决方案
\`\`\`


`;


class Lesson10 extends React.Component {

    drawChart(){
        //画布大小
        let width = 400;
        let height = 400;

        //在 body 里添加一个 SVG 画布
        let svg = d3.select("#les10")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        //画布周边的空白
        let padding = {left:30, right:30, top:20, bottom:20};

        //定义一个数组
        let dataset = [10, 20, 30, 40, 33, 24, 12, 5];

        //x轴的比例尺
        let xScale = d3.scale.ordinal()
          .domain(d3.range(dataset.length))
          .rangeRoundBands([0, width - padding.left - padding.right]);

        //y轴的比例尺
        let yScale = d3.scale.linear()
          .domain([0,d3.max(dataset)])
          .range([height - padding.top - padding.bottom, 0]);

        //定义x轴
        let xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom");

        //定义y轴
        let yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left");

        //矩形之间的空白
        let rectPadding = 4;

        //添加矩形元素
        let rects = svg.selectAll(".MyRect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("class","MyRect")
          .attr("transform",`translate(${padding.left}, ${padding.top})`)
          .attr("x", (d,i) => xScale(i) + rectPadding/2)
          .attr("y", d => yScale(d))
          .attr("width", xScale.rangeBand() - rectPadding)
          .attr("height", (d) => height - padding.top - padding.bottom - yScale(d))
          .attr("fill","steelblue")		//填充颜色不要写在CSS里
          .on("mouseover",(d,i) => {
              d3.select(`rect:nth-child(${i+1})`).attr("fill","yellow");
             //d3.select(d3.event.target).attr("fill","yellow")
          })
          .on("mouseout",function(d,i){
              d3.select(this)
                .transition()
                .duration(500)
                .attr("fill","steelblue");
          });

        //添加文字元素
        let texts = svg.selectAll(".MyText")
          .data(dataset)
          .enter()
          .append("text")
          .attr("class","MyText")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .attr("x", (d,i) => xScale(i) + rectPadding/2)
          .attr("y", d => yScale(d))
          .attr("dx",() => (xScale.rangeBand() - rectPadding)/2)
          .attr("dy",(d) => 20)
          .text(d => d);

        //添加x轴
        svg.append("g")
          .attr("class","axis")
          .attr("transform",`translate(${padding.left}, ${(height - padding.bottom)} )`)
          .call(xAxis);

        //添加y轴
        svg.append("g")
          .attr("class","axis")
          .attr("transform",`translate(${padding.left}, ${padding.top})`)
          .call(yAxis);
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 10: 交互式操作</h1>
              <div id="les10">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson10;
