import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'
import './les17.scss'


let info = `

\`\`\`js
let pack = d3.layout.pack()     //打包图的布局
  .size([width, height])        // size() 设定转换的范围，即转换后顶点的坐标(x,y)，都会在此范围内
  .radius(20);                  //radius() 设定转换后最小的圆的半径 
  
svg.selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("fill", "rgb(31, 119, 180)")
  .attr("fill-opacity", "0.4")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r",  d => d.r)
  .on("mouseover", function (d, i) {
      d3.select(this).attr("fill", "yellow");
  })
  .on("mouseout", function (d, i) {
      d3.select(this).attr("fill", "rgb(31, 119, 180)");
  });
\`\`\`

\`\`\`js
1. 无论用什么 Layout 来转换数据，一定要先看转换后的数据是什么再绘制，否则很容易出错
\`\`\`


`;

const city = {
    "name":"中国",
    "children":
      [
          {
              "name":"浙江" ,
              "children":
                [
                    {"name":"杭州" },
                    {"name":"宁波" },
                    {"name":"温州" },
                    {"name":"绍兴" }
                ]
          },
          {
              "name":"广西" ,
              "children":
                [
                    {"name":"桂林"},
                    {"name":"南宁"},
                    {"name":"柳州"},
                    {"name":"防城港"}
                ]
          },
          {
              "name":"黑龙江",
              "children":
                [
                    {"name":"哈尔滨"},
                    {"name":"齐齐哈尔"},
                    {"name":"牡丹江"},
                    {"name":"大庆"}
                ]
          },
          {
              "name":"新疆" ,
              "children":
                [
                    {"name":"乌鲁木齐"},
                    {"name":"克拉玛依"},
                    {"name":"吐鲁番"},
                    {"name":"哈密"}
                ]
          },
          {
              "name":"河北" ,
              "children":
                [
                    {"name":"石家庄"},
                    {"name":"唐山"},
                    {"name":"邯郸"},
                    {"name":"秦皇岛"}
                ]
          },
          {
              "name":"西藏" ,
              "children":
                [
                    {"name":"拉萨"},
                    {"name":"昌都"},
                    {"name":"林芝"}
                ]
          },
          {
              "name":"江苏" ,
              "children":
                [
                    {"name":"南京"},
                    {"name":"无锡"},
                    {"name":"徐州"},
                    {"name":"常州"},
                    {"name":"连云港"},
                    {"name":"淮安"}
                ]
          },
          {
              "name":"江苏" ,
              "children":
                [
                    {"name":"南京"},
                    {"name":"无锡"},
                    {"name":"徐州"},
                    {"name":"常州"},
                    {"name":"连云港"},
                    {"name":"淮安"}
                ]
          },
          {
              "name":"湖南" ,
              "children":
                [
                    {"name":"长沙"},
                    {"name":"株洲"},
                    {"name":"湘潭"},
                    {"name":"衡阳"},
                    {"name":"邵阳"},
                    {"name":"岳阳"}
                ]
          },
          {
              "name":"海南" ,
              "children":
                [
                    {"name":"海口"},
                    {"name":"三亚"},
                    {"name":"三沙"}
                ]
          },
          {
              "name":"陕西" ,
              "children":
                [
                    {"name":"西安"},
                    {"name":"咸阳"},
                    {"name":"汉中"},
                    {"name":"安康"},
                    {"name":"榆林"},
                    {"name":"延安"}
                ]
          },
          {
              "name":"甘肃" ,
              "children":
                [
                    {"name":"兰州"},
                    {"name":"酒泉"},
                    {"name":"金昌"},
                    {"name":"天水"},
                    {"name":"嘉峪关"},
                    {"name":"武威"}
                ]
          }
      ]
}



class Lesson17 extends React.Component {

    drawChart() {
        let width = 500;
        let height = 500;

        let pack = d3.layout.pack()    //打包图的布局
          .size([width, height])       // size() 设定转换的范围，即转换后顶点的坐标(x,y)，都会在此范围内
          .radius(20);                 //radius() 设定转换后最小的圆的半径

        let svg = d3.select("#les17").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(0,0)");

        //用 pack 函数分别将数据转换成了顶点 nodes 和 连线 links
        let nodes = pack.nodes(city);
        let links = pack.links(nodes);  // 并不对连线进行绘制

        // console.log(nodes);
        // console.log(links);

        svg.selectAll("circle")
          .data(nodes)
          .enter()
          .append("circle")
          .attr("fill", "rgb(31, 119, 180)")
          .attr("fill-opacity", "0.4")
          .attr("cx", d => d.x)
          .attr("cy", d => d.y)
          .attr("r",  d => d.r)
          .on("mouseover", function (d, i) {
              d3.select(this).attr("fill", "yellow");
          })
          .on("mouseout", function (d, i) {
              d3.select(this).attr("fill", "rgb(31, 119, 180)");
          });

        svg.selectAll("text")
          .data(nodes)
          .enter()
          .append("text")
          .attr("font-size", "10px")
          .attr("fill", "white")
          .attr("fill-opacity", d => d.depth == 2 ? "0.9" :"0")
          .attr("x", d => d.x)
          .attr("y", d => d.y)
          .attr("dx", -12)
          .attr("dy", 1)
          .text(d => d.name);
    }


    componentDidMount() {
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson </h1>
              <div id="les17">
              </div>
              <Markdown source={info}/>
          </div>
        );
    }
}

export default Lesson17;
