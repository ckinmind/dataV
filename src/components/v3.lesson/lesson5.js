import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'
import './les5.scss'


let info = `

\`\`\`js
let width = 300;	//画布的宽度
let height = 300;	//画布的高度

let svg = d3.select("#les5")
  .append("svg")				//添加一个svg元素
  .attr("width", width)		    //设定宽度
  .attr("height", height);	    //设定高度

let dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];

let linear = d3.scale.linear()
  .domain([0, d3.max(dataset)])
  .range([0, 250]);

let rectHeight = 25;	//每个矩形所占的像素高度(包括空白)

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x",20)
  .attr("y",(d,i) => i * rectHeight)
  .attr("width", d => linear(d))
  .attr("height",rectHeight-2)
  .attr("fill","#4caf50");

let axis = d3.svg.axis()
  .scale(linear)		//指定比例尺
  .orient("bottom")	    //指定刻度的方向
  .ticks(7);			//指定刻度的数量

svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(20,130)")
  .call(axis);  
\`\`\`

\`\`\`js
1. 在 SVG 画布的预定义元素里，有六种基本图形
- 矩形 rect
- 圆形 circle
- 椭圆 ellipse
- 线段 line
- 折线 polyline
- 多边形 polygon

另外，还有一种比较特殊，也是功能最强的元素: 路径 path

2. 
- d3.svg.axis()：D3 中坐标轴的组件，能够在 SVG 中生成组成坐标轴的元素。
- scale()：指定比例尺。
- orient()：指定刻度的朝向，bottom 表示在坐标轴的下方显示。
- ticks()：指定刻度的数量

3. 在 D3 中，call() 的参数是一个函数。调用之后，将当前的选择集作为参数传递给此函数
\`\`\`


`;


class Lesson5 extends React.Component {

    drawChart(){
        let width = 300;	//画布的宽度
        let height = 300;	//画布的高度

        let svg = d3.select("#les5")
          .append("svg")				//添加一个svg元素
          .attr("width", width)		    //设定宽度
          .attr("height", height);	    //设定高度

        let dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];

        let linear = d3.scale.linear()
          .domain([0, d3.max(dataset)])
          .range([0, 250]);

        let rectHeight = 25;	//每个矩形所占的像素高度(包括空白)

        svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x",20)
          .attr("y",(d,i) => i * rectHeight)
          .attr("width", d => linear(d))
          .attr("height",rectHeight-2)
          .attr("fill","#4caf50");

        let axis = d3.svg.axis()
          .scale(linear)		//指定比例尺
          .orient("bottom")	    //指定刻度的方向
          .ticks(7);			//指定刻度的数量

        svg.append("g")
          .attr("class","axis")
          .attr("transform","translate(20,130)")
          .call(axis);
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 5: 坐标轴</h1>
              <div id="les5">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson5;
