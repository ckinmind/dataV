import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'
import chinageo from './china.json'; /* 获取图片相关json数据 */

let info = `

\`\`\`js
let projection = d3.geo.mercator()
      .center([107, 31])   //center() 设定地图的中心位置，[107,31] 指的是经度和纬度
      .scale(450)           //scale() 设定放大的比例
      .translate([width/2, height/2]);   // translate() 设定平移。

let path = d3.geo.path().projection(projection);    //地理路径生成器
\`\`\`

\`\`\`js
1. 为了根据地图的地理数据生成 SVG 中 path 元素的路径值，需要用到 d3.geo.path()，称它为地理路径生成器

2. projection() 是设定生成器的投影函数，把上面定义的投影传入即可。以后，当使用此生成器计算路径时，会自己加入投影的影响

3. 给 svg 中添加 path 元素。本例中，每一个 path 表示一个省。
注意 attr(“d”,path) 这一行代码，它相当于
.attr("d",d => path(d))  //这种省略用法是很常用的
\`\`\`


`;


class Lesson18 extends React.Component {

    drawChart(){
        let width  = 600;
        let height = 500;

        let svg = d3.select("#les18").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(0,0)");

        let projection = d3.geo.mercator()
          .center([107, 31])   //center() 设定地图的中心位置，[107,31] 指的是经度和纬度
          .scale(450)           //scale() 设定放大的比例
          .translate([width/2, height/2]);   // translate() 设定平移。

        let path = d3.geo.path().projection(projection);    //地理路径生成器


        let color = d3.scale.category20();

        svg.selectAll("path")
          .data( chinageo.features )
          .enter()
          .append("path")

          .attr("stroke","#000")
          .attr("stroke-width",1)
          .attr("fill", (d,i) => color(i))
          .attr("d", path )
          .on("mouseover",function(d,i){
              d3.select(this).attr("fill","yellow");
          })
          .on("mouseout",function(d,i){
              d3.select(this).attr("fill",color(i));
          });

    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 18: 地图的制作 </h1>
              <div id="les18">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson18;
