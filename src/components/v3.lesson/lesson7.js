import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'


let info = `

\`\`\`js
   svg.append("circle")
      .attr("cx", 100)
      .attr("cy", 300)
      .attr("r", 45)
      .style("fill","green")
      .transition()
      .duration(2000)
      .ease("bounce")          //过渡方式采用bounce（在终点处弹跳几次）
      .attr("cx", 300)         //在2秒（2000毫秒）内将圆心坐标由100变为300
      .style("fill","yellow")  //将颜色从绿色变为红色
      .attr("r", 25);          //将半径从45变成25  
\`\`\`

\`\`\`js
1. D3 提供了 4 个方法用于实现图形的过渡
- transition(): 启动过渡效果。其前后是图形变化前后的状态（形状、位置、颜色等等 
- duration()：指定过渡的持续时间，单位为毫秒。如 duration(2000) ，指持续 2000 毫秒，即 2 秒
- ease()： 指定过渡的方式，常用的有：linear，circle，elastic，bounce
- delay()：指定延迟的时间，表示一定时间后才开始转变，单位同样为毫秒。此函数可以对整体指定延迟，也可以对个别指定延迟
\`\`\`


`;


class Lesson7 extends React.Component {

    drawChart(){

        //画布大小
        let width = 400;
        let height = 400;

        //在 body 里添加一个 SVG 画布
        let svg = d3.select("#les7")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        svg.append("circle")
          .attr("cx", 100)
          .attr("cy", 100)
          .attr("r", 45)
          .style("fill","green")
          .transition()             //在1秒（1000毫秒）内将圆心坐标由100变为300
          .duration(1000)
          .attr("cx", 300);



        svg.append("circle")
          .attr("cx", 100)
          .attr("cy", 200)
          .attr("r", 45)
          .style("fill","green")
          .transition()
          .duration(1500)
          .attr("cx", 300)          //在1.5秒（1500毫秒）内将圆心坐标由100变为300，
          .style("fill","red");    //将颜色从绿色变为红色


        svg.append("circle")
          .attr("cx", 100)
          .attr("cy", 300)
          .attr("r", 45)
          .style("fill","green")
          .transition()
          .duration(2000)
          .ease("bounce")          //过渡方式采用bounce（在终点处弹跳几次）
          .attr("cx", 300)         //在2秒（2000毫秒）内将圆心坐标由100变为300
          .style("fill","yellow")  //将颜色从绿色变为红色
          .attr("r", 25);          //将半径从45变成25
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 7: 让图表动起来:实现简单的动态效果 </h1>
              <div id="les7">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson7;
