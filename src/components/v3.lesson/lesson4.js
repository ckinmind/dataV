import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'


let info = `

\`\`\`js
let width = 300;       //画布的宽度
let height = 300;      //画布的高度
let dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];
let rectHeight = 25;   //每个矩形所占的像素高度(包括空白)

let linear = d3.scale.linear()      //定义一个线性比例尺
  .domain([0, d3.max(dataset)])
  .range([0, 250]);


let svg = d3.select('#les4')
  .append('svg')              //添加一个svg元素
  .attr('width', width)       //设定宽度
  .attr('height', height);    //设定高度

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x",20)
  .attr("y",function(d,i){
      return i * rectHeight;
  })
  .attr("width",function(d){
      return linear(d);   //在这里用比例尺
  })
  .attr("height",rectHeight-2)
  .attr("fill","steelblue");  
\`\`\`

\`\`\`js
1. 比例尺：将某一区域的值映射到另一区域，其大小关系不变

2. D3 中的比例尺，也有定义域和值域，分别被称为 domain 和 range。
开发者需要指定 domain 和 range 的范围，如此即可得到一个计算关系

3. D3 提供了多种比例尺，常用的有线性比例尺和序数比例尺

4. d3.scale.linear() 返回一个线性比例尺。domain() 和 range() 分别设定比例尺的定义域和值域

5. d3.scale.linear() 的返回值，是可以当做函数来使用的
\`\`\`


`;


class Lesson4 extends React.Component {

    drawChart(){

        let width = 300;       //画布的宽度
        let height = 300;      //画布的高度
        let dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];
        let rectHeight = 25;   //每个矩形所占的像素高度(包括空白)

        let linear = d3.scale.linear()      //定义一个线性比例尺
          .domain([0, d3.max(dataset)])
          .range([0, 250]);


        let svg = d3.select('#les4')
          .append('svg')              //添加一个svg元素
          .attr('width', width)       //设定宽度
          .attr('height', height);    //设定高度

        svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x",20)
          .attr("y",function(d,i){
              return i * rectHeight;
          })
          .attr("width",function(d){
              return linear(d);   //在这里用比例尺
          })
          .attr("height",rectHeight-2)
          .attr("fill","#4caf50");


    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 4: 比例尺的使用</h1>
              <div id="les4">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson4;
