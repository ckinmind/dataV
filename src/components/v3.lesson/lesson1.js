import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'


let info = `

\`\`\`js
 let p = d3.select('#les1')
           .selectAll('p')
           .text('Hello D3')
           .style('color', '#4caf50')  //修改段落的颜色和字体大小
           .style('font-size', '72px');       
\`\`\`

\`\`\`js
1. 概念【选择集】：使用 d3.select() 或 d3.selectAll() 选择元素后返回的对象，就是选择集
\`\`\`


`;


class Lesson1 extends React.Component {

    drawChart(){
        d3.select("#les1")
          .selectAll("p")
          .text("Hello D3")
          .style("color", "#4caf50")  //修改段落的颜色和字体大小
          .style("font-size", "72px");
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 1: 第一个程序 HelloWorld </h1>
              <div id="les1">
                  <p>Hello World 1</p>
                  <p>Hello World 2</p>
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson1;
