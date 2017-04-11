import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'
import './les15.scss'


let info = `

\`\`\`js
//定义一个集群图布局
let cluster = d3.layout.cluster().size([width, height - 200]);

// d3.svg.diagonal() 。这是一个对角线生成器，只需要输入两个顶点坐标，即可生成一条贝塞尔曲线
let diagonal = d3.svg.diagonal().projection(d => [d.y, d.x]);

// 调用 cluster 转换数据
let nodes = cluster.nodes(city);  // 转换后的顶点数据（nodes）
let links = cluster.links(nodes); // 转换后的连接线数据（links）
  
\`\`\`

\`\`\`js
1. d3.json读取远程的数据，这里用写死的本地数据，就不需要这个方法了

2. force.size - 取得或者设置布局大小

3. d3.svg.diagonal() 。这是一个对角线生成器，只需要输入两个顶点坐标，即可生成一条贝塞尔曲线

4. svg中d属性定义了一个路径

5. text-anchor(svg中的属性): 文本锚点属性被用来描述该文本与所给点的对齐方式 (开头、中间、末尾对齐)

6. dx/dy : 表示一个元素或其内容在x/y轴方向上的偏移，偏移量取决于设置该属性的元素
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





class Lesson15 extends React.Component {

    drawChart() {
        let width = 500, height = 500;

        let svg = d3.select("#les15").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(40,0)");

        //定义一个集群图布局
        let cluster = d3.layout.cluster().size([width, height - 100]);


        // d3.svg.diagonal() 。这是一个对角线生成器，只需要输入两个顶点坐标，即可生成一条贝塞尔曲线
        let diagonal = d3.svg.diagonal().projection(d => [d.y, d.x]);


        // 调用 cluster 转换数据
        let nodes = cluster.nodes(city);  // 转换后的顶点数据（nodes）
        let links = cluster.links(nodes); // 转换后的连接线数据（links）

        // console.log(nodes);
        // console.log(links);

        let link = svg.selectAll(".link")
          .data(links)
          .enter()
          .append("path")
          .attr("class", "link")
          .attr("d", diagonal)   //svg中d属性定义了一个路径
           .on('mouseover', function(d,i,j){

               //d3.select(`#les15 .link:nth-child(${i+1})`).attr("class", "link2");
               //d3.select(d3.select(this)).attr("class", "link2");

           }).on('mouseout', function(d,i,j){

             //  d3.select(`#les15 .link:nth-child(${i+1})`).classed({"link2":false});
              //d3.select(d3.select(this)).attr("class", "link2");

          });

        let node = svg.selectAll(".node")
          .data(nodes)
          .enter()
          .append("g")
          .attr("class", "node")
          .attr("transform", d => `translate(${d.y}, ${d.x})`);

        // 定义节点圆的半径
        node.append("circle")
          .attr("r", 4.5)
          .style("fill", d =>  d.children ? "lightsteelblue" : "#fff");

        node.append("text")
          .attr("dx", d => d.children ? -8 : 8)  // dx属性表示一个元素或其内容在x轴方向上的偏移，偏移量取决于设置该属性的元素
          .attr("dy", 3)
          .style("text-anchor", d => d.children ? "end" : "start") // text-anchor: 文本锚点属性被用来描述该文本与所给点的对齐方式 (开头、中间、末尾对齐)
          .attr('font-size','12px')
          .text(d => d.name);

        node.selectAll('text')
          .on('mouseover', function(d,i,j){

              // console.log(d);
              // console.log('i: '+i);
              // console.log(j);
              // console.log(links);
              // console.log(nodes);
              // console.log(d3.event.target);
              // console.log(d3.select(this));


              d3.select(d3.event.target)
                .transition()
                .duration(1000)
                .ease("bounce")
                .attr('font-size','18px');

             // d3.select('#les15 .link:nth-child(2)').attr("class", "link2");
             // d3.selectAll(`#les15 .link:nth-child(${j})`).attr("class", "link2");
              //d3.select(nodes[0]).attr("class", "link2");


          })
          .on('mouseout', (d,i) => {
              //link.filter( a => a.source == d).attr('stroke', 'orange');
              d3.select(d3.event.target)
                .transition()
                .duration(1000)
                .ease("bounce")
                .attr('font-size','12px');
          });
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 15: 集群图的制作</h1>
              <div id="les15">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson15;
