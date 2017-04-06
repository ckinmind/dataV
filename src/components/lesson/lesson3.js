import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'


let info = `

\`\`\`js
    let width = 300;       //画布的宽度
    let height = 300;      //画布的高度
    let rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
    let dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）
    
    let svg = d3.select('#les3')
                .append('svg')              //添加一个svg元素
                .attr('width', width)       //设定宽度
                .attr('height', height);    //设定高度
    
    svg.selectAll('rect')   //选择svg内所有的矩形
       .data(dataset)       //绑定数组
       .enter()             //指定选择集的enter部分
       .append('rect')      //添加足够数量的矩形元素
       .attr('x', 20)
       .attr('y',  (d, i) => i * rectHeight)
       .attr('width', d => d)
       .attr('height', rectHeight - 2)
       .attr('fill', '#4caf50');         //给矩形元素设置颜色  
\`\`\`

\`\`\`js
1. 要绘图，首要需要的是一块绘图的“画布”。HTML 5 提供两种强有力的“画布”：SVG 和 Canvas

2. 使用 D3 在选中元素中添加 svg 的代码如上所示

3. 在 SVG 中，矩形的元素标签是 rect，矩形的属性，常用的有四个：
- x：矩形左上角的 x 坐标
- y：矩形左上角的 y 坐标
- width：矩形的宽度
- height：矩形的高度

4. 常用代码：
 svg.selectAll("rect")   //选择svg内所有的矩形
    .data(dataset)  //绑定数组
    .enter()        //指定选择集的enter部分
    .append("rect") //添加足够数量的矩形元素
    
有数据，而没有足够图形元素的时候，使用此方法可以添加足够的元素
\`\`\`


`;


class Lesson3 extends React.Component {

    drawChart(){
        let width = 300;       //画布的宽度
        let height = 300;      //画布的高度
        let rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
        let dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）

        let svg = d3.select('#les3')
                    .append('svg')              //添加一个svg元素
                    .attr('width', width)       //设定宽度
                    .attr('height', height);    //设定高度

        svg.selectAll('rect')   //选择svg内所有的矩形
           .data(dataset)       //绑定数组
           .enter()             //指定选择集的enter部分
           .append('rect')      //添加足够数量的矩形元素
           .attr('x', 20)
           .attr('y',  (d, i) => i * rectHeight)
           .attr('width', d => d)
           .attr('height', rectHeight - 2)
           .attr('fill', '#4caf50');         //给矩形元素设置颜色

    }



    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 3: 做一个简单的图表</h1>
              <div id="les3">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson3;
