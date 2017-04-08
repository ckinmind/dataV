import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'


let info = `

\`\`\`js
// 定义一个力导向图的布局
let force = d3.layout.force()
  .nodes(nodes)		        //指定节点数组
  .links(edges)		        //指定连线数组
  .size([width,height])	    //指定范围
  .linkDistance(150)	    //指定连线长度
  .charge(-400);	        //相互之间的作用力

// 使力学作用生效
force.start();

//添加连线
let svg_edges = svg.selectAll("line")
  .data(edges)
  .enter()
  .append("line")
  .style("stroke","#ccc")
  .style("stroke-width",1);

let color = d3.scale.category20();

//添加节点
let svg_nodes = svg.selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r",20)
  .style("fill",(d,i) => color(i))
  .call(force.drag);	            //使得节点能够拖动



//添加描述节点的文字
let svg_texts = svg.selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .style("fill", "black")
  .attr("dx", 20)          //距离节点的偏移
  .attr("dy", 8)
  .text(d => d.name);


force.on("tick", () => {	//对于每一个时间间隔

    //更新连线坐标
    svg_edges.attr("x1",d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    //更新节点坐标
    svg_nodes.attr("cx", d => d.x)
      .attr("cy", d => d.y);

    //更新文字坐标
    svg_texts.attr("x", d => d.x)
      .attr("y", d => d.y);
}); 
  
\`\`\`

\`\`\`js
1. 力导向图（Force-Directed Graph），是绘图的一种算法。在二维或三维空间里配置节点，
节点之间用线连接，称为连线。各连线的长度几乎相等，且尽可能不相交。
节点和连线都被施加了力的作用，力是根据节点和连线的相对位置计算的。
根据力的作用，来计算节点和连线的运动轨迹，并不断降低它们的能量，最终达到一种能量很低的安定状态

2. 力导向图能表示节点之间的多对多的关系

3. 转换后，节点对象里多了一些变量。其意义如下
- index：节点的索引号
- px, py：节点上一个时刻的坐标
- x, y：节点的当前坐标
- weight：节点的权重

4. 有了转换后的数据，就可以作图了。分别绘制三种图形元素：
- line，线段，表示连线。
- circle，圆，表示节点。
- text，文字，描述节点

5. 调用 call( force.drag ) 后节点可被拖动。
force.drag() 是一个函数，将其作为 call() 的参数，相当于将当前选择的元素传到 force.drag() 函数中

6. 力导向图布局 force 有一个事件 tick，每进行到一个时刻，都要调用它

\`\`\`


`;


class Lesson13 extends React.Component {

    drawChart(){

        // 节点数据
        let nodes = [
            {name: "桂林"},
            {name: "广州"},
            {name: "厦门"},
            {name: "杭州"},
            {name: "上海"},
            {name: "青岛"},
            {name: "天津"}
        ];

        // 连线数据
        let edges = [
            {source: 0, target: 1},
            {source: 0, target: 2},
            {source: 0, target: 3},
            {source: 1, target: 4},
            {source: 1, target: 5},
            {source: 1, target: 6}
        ];

        let width = 400;
        let height = 400;

        // 构造画布
        let svg = d3.select("#les13")
          .append("svg")
          .attr("width",width)
          .attr("height",height);

        // 定义一个力导向图的布局
        let force = d3.layout.force()
          .nodes(nodes)		        //指定节点数组
          .links(edges)		        //指定连线数组
          .size([width,height])	    //指定范围
          .linkDistance(150)	    //指定连线长度
          .charge(-400);	        //相互之间的作用力

        // 使力学作用生效
        force.start();

        //添加连线
        let svg_edges = svg.selectAll("line")
          .data(edges)
          .enter()
          .append("line")
          .style("stroke","#ccc")
          .style("stroke-width",1);

        let color = d3.scale.category20();

        //添加节点
        let svg_nodes = svg.selectAll("circle")
          .data(nodes)
          .enter()
          .append("circle")
          .attr("r",20)
          .style("fill",(d,i) => color(i))
          .call(force.drag);	            //使得节点能够拖动



        //添加描述节点的文字
        let svg_texts = svg.selectAll("text")
          .data(nodes)
          .enter()
          .append("text")
          .style("fill", "black")
          .attr("dx", 20)          //距离节点的偏移
          .attr("dy", 8)
          .text(d => d.name);


        force.on("tick", () => {	//对于每一个时间间隔

            //更新连线坐标
            svg_edges.attr("x1",d => d.source.x)
              .attr("y1", d => d.source.y)
              .attr("x2", d => d.target.x)
              .attr("y2", d => d.target.y);

            //更新节点坐标
            svg_nodes.attr("cx", d => d.x)
              .attr("cy", d => d.y);

            //更新文字坐标
            svg_texts.attr("x", d => d.x)
              .attr("y", d => d.y);
        });
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 13: 向图的制作</h1>
              <div id="les13">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson13;
