import React from 'react'
import d3 from 'd3'


class Item6 extends React.Component {



    drawChart(){
        let width = 300;	//画布的宽度
        let height = 300;	//画布的高度

        let svg = d3.select("#item6-chart")
          .append("svg")			//添加一个svg元素
          .attr("width", width)		//设定宽度
          .attr("height", height);	//设定高度

        let dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];

        let linear = d3.scale.linear()             //线性比例尺，输入范围[0,2.5], 输出方式[0,250],相当于y = 100x
          .domain([0, d3.max(dataset)])
          .range([0, 250]);

        let rectHeight = 25;	//每个矩形所占的像素高度(包括空白)

        svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x",20)                         // 距离左边20px
          .attr("y",(d,i) =>  i * rectHeight)   // 距离上边是 20 * i
          .attr("width",d => linear(d))         // 线性比例尺，输入x, 输出y
          .attr("height",rectHeight-2)          // 高度
          .attr("fill","#169bd5");              // 颜色填充
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div className="item6" >
              <h1> 比例尺的使用（线性比例尺）</h1>
              <div id="item6-chart"></div>
          </div>
        );
    }
}

export default Item6;

