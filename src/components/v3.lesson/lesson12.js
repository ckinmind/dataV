import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'


let info = `

\`\`\`js
  let arcs = svg.selectAll("g")
      .data(piedata)
      .enter()
      .append("g")
      .each(d => {
          let padding = 0.009;    // 增加扇形间的空隙
          d.startAngle += padding;
          d.endAngle -= padding;
      })
      .attr("transform",\`translate(\${(width/2)}, \${(width/2)})\`);
    
    arcs.append("path")
      .attr("fill",(d,i) => color(i))
      .attr("d", d => arc(d))        //调用弧生成器，得到路径值
      .on("mouseover",function(d,i){
          d3.select(this)
            .transition()
            .duration(1000)
            .delay(100)
            .ease("bounce")
            .attr("transform",(d) => \`scale(1.2,1.2)\`);
      })
      .on("mouseout",function(d,i){
          d3.select(this)
            .transition()
            .duration(1000)
            .attr("transform", d =>\`scale(1,1)\`); //centroid返回的是弧形的重心与弧心的相对位置
      });
\`\`\`

\`\`\`js
1. 计算出适合于作图的数据, 这个过程称之为数据转换

2. 布局不是要直接绘图，而是为了得到绘图所需的数据

3. 弧生成器，能够生成弧的路径，因为饼图的每一部分都是一段弧

4. color 是一个颜色比例尺，它能根据传入的索引号获取相应的颜色值
\`\`\`


`;


class Lesson12 extends React.Component {

    drawChart(){
        let width = 400;
        let height = 400;
        let dataset = [ 30 , 10 , 43 , 55 , 13 ];

        let svg = d3.select("#les12")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        let pie = d3.layout.pie();     //定义一个饼图布局

        let piedata = pie(dataset);    // piedata 就是转换后的数据


        let outerRadius = 150;	       //外半径
        let innerRadius = 30;	       //内半径，为0则中间没有空白
        let arc = d3.svg.arc()	       //弧生成器
          .innerRadius(innerRadius)	   //设置内半径
          .outerRadius(outerRadius);   //设置外半径



        let color = d3.scale.category10();  // 颜色比例尺，d3.scale.category10()能构造一个有10种颜色的序数比例尺

        let arcs = svg.selectAll("g")
          .data(piedata)
          .enter()
          .append("g")
          .each(d => {
              let padding = 0.009;    // 增加扇形间的空隙
              d.startAngle += padding;
              d.endAngle -= padding;
          })
          .attr("transform",`translate(${(width/2)}, ${(width/2)})`);

        arcs.append("path")
          .attr("fill",(d,i) => color(i))
          .attr("d", d => arc(d))        //调用弧生成器，得到路径值
          .on("mouseover",function(d,i){
              d3.select(this)
                .transition()
                .duration(1000)
                .delay(100)
                .ease("bounce")
                .attr("transform",(d) => `scale(1.2,1.2)`);
          })
          .on("mouseout",function(d,i){
              d3.select(this)
                .transition()
                .duration(1000)
                .attr("transform", d =>`scale(1,1)`); //centroid返回的是弧形的重心与弧心的相对位置
          });

        arcs.append("text")
          .attr("transform",(d) => `translate(${arc.centroid(d)})`)  //arc.centroid(d) 能算出弧线的中心
          .attr("text-anchor","middle")
          .text(d => d.data);  //注意，text() 里返回的是 d.data ，而不是 d 。因为被绑定的数据是对象，里面有 d.startAngle、d.endAngle、d.data 等，其中 d.data 才是转换前的整数的值

    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 12: 饼状图的制作</h1>
              <div id="les12">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson12;
