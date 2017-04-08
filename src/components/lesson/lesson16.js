import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'
import './les16.scss'


let info = `

\`\`\`js
// 定义一个树状图布局
let tree = d3.layout.tree()
.size([width, height-100]).
separation((a, b) => (a.parent == b.parent ? 1 : 2));
\`\`\`

\`\`\`js
1. 在集群图中是这么定义的
let cluster = d3.layout.cluster().size([width, height - 100]);

2. tree.separation - 取得或设置相邻节点的间隔函数。
\`\`\`

`;


let city =
  {
      "name": "中国",
      "children": [
          {
              "name": "浙江",
              "children": [
                  {"name": "杭州"},
                  {"name": "宁波"},
                  {"name": "温州"},
                  {"name": "绍兴"}
              ]
          },

          {
              "name": "广西",
              "children": [
                  {
                      "name": "桂林",
                      "children": [
                          {"name":"秀峰区"},
                          {"name":"叠彩区"},
                          {"name":"象山区"},
                          {"name":"七星区"}
                      ]
                  },
                  {"name": "南宁"},
                  {"name": "柳州"},
                  {"name": "防城港"}
              ]
          },

          {
              "name": "黑龙江",
              "children": [
                  {"name": "哈尔滨"},
                  {"name": "齐齐哈尔"},
                  {"name": "牡丹江"},
                  {"name": "大庆"}
              ]
          },

          {
              "name": "新疆",
              "children": [
                  {"name": "乌鲁木齐"},
                  {"name": "克拉玛依"},
                  {"name": "吐鲁番"},
                  {"name": "哈密"}
              ]
          }
      ]
  }



class Lesson16 extends React.Component {

    drawChart(){
        let width = 500, height = 500;

        // 定义一个树状图布局
        let tree = d3.layout.tree().size([width, height-100]).separation((a, b) => (a.parent == b.parent ? 1 : 2));

        let diagonal = d3.svg.diagonal().projection(d => [d.y, d.x]);

        let svg = d3.select("#les16").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(40,0)");

        let nodes = tree.nodes(city);
        let links = tree.links(nodes);


        let link = svg.selectAll(".link")
          .data(links)
          .enter()
          .append("path")
          .attr("class", "link")
          .attr("d", diagonal);

        let node = svg.selectAll(".node")
          .data(nodes)
          .enter()
          .append("g")
          .attr("class", "node")
          .attr("transform",  d => `translate(${d.y}, ${d.x})`);

        node.append("circle")
          .attr("r", 4.5);

        node.append("text")
          .attr("dx", d => d.children ? -8 : 8)
          .attr("dy", 3)
          .style("text-anchor",  d => d.children ? "end" : "start")
          .text(d => d.name);
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 16: 树状图的制作</h1>
              <div id="les16">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson16;
