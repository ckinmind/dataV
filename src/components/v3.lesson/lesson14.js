import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'
import './les14.scss'


let info = `

\`\`\`js
这个暂时看不懂了
\`\`\`

\`\`\`js
1. 弦图（Chord），主要用于表示两个节点之间的联系,两点之间的连线，表示谁和谁具有联系,
线的粗细表示权重
\`\`\`


`;


class Lesson14 extends React.Component {

    drawChart(){
        //1.定义数据
        // 城市名
        let city_name = [ "北京" , "上海" , "广州" , "深圳" , "香港"  ];

        // 城市人口的来源，如
        //			北京		    上海
        //	北京		1000		3045
        //	上海		3214		2000
        // 表示北京市的人口有1000个人来自本地，有3045人是来自上海的移民，总人口为 1000 + 3045
        // 上海市的人口有2000个人来自本地，有3214人是来自北京的移民，总人口为 3214 + 2000
        let population = [
            [ 1000,  3045　 , 4567　, 1234 , 3714 ],
            [ 3214,  2000　 , 2060　, 124  , 3234 ],
            [ 8761,  6545　 , 3000　, 8045 , 647  ],
            [ 3211,  1067  , 3214 , 4000  , 1006 ],
            [ 2146,  1034　 , 6745 , 4764  , 5000 ]
        ];

        //2.转换数据，并输出转换后的数据
        let chord_layout = d3.layout.chord()
          .padding(0.03)		//节点之间的间隔
          .sortSubgroups(d3.descending)	//排序
          .matrix(population);	//输入矩阵

        let groups = chord_layout.groups();
        let chords = chord_layout.chords();

        // console.log( groups );
        // console.log( chords );

        //3.SVG，弦图，颜色函数的定义
        let width  = 600;
        let height = 600;
        let innerRadius = width/2 * 0.7;
        let outerRadius = innerRadius * 1.1;

        let color20 = d3.scale.category20();

        let svg = d3.select("#les14").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

        //4.绘制节点（即分组，有多少个城市画多少个弧形），及绘制城市名称
        let outer_arc =  d3.svg.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius);

        let g_outer = svg.append("g");

        g_outer.selectAll("path")
          .data(groups)
          .enter()
          .append("path")
          .style("fill", d => color20(d.index))
          .style("stroke", d => color20(d.index))
          .attr("d", outer_arc );

        g_outer.selectAll("text")
          .data(groups)
          .enter()
          .append("text")
          .each( (d,i) => {
              d.angle = (d.startAngle + d.endAngle) / 2;
              d.name = city_name[i];
          })
          .attr("dy",".35em")
          .attr("transform", d => {
              return "rotate(" + ( d.angle * 180 / Math.PI ) + ")" +
                "translate(0,"+ -1.0*(outerRadius+10) +")" +
                ( ( d.angle > Math.PI*3/4 && d.angle < Math.PI*5/4 ) ? "rotate(180)" : "");
          })
          .text(d => d.name);


        //5.绘制内部弦（即所有城市人口的来源，即有5*5=25条弧）
        let inner_chord =  d3.svg.chord()
          .radius(innerRadius);

        svg.append("g")
          .attr("class", "chord")
          .selectAll("path")
          .data(chords)
          .enter()
          .append("path")
          .attr("d", inner_chord )
          .style("fill", d => color20(d.source.index))
          .style("opacity", 1)
          .on("mouseover",function(d,i){
              d3.select(this)
                .style("fill","yellow");
          })
          .on("mouseout",function(d,i) {
              d3.select(this)
                .transition()
                .duration(1000)
                .style("fill",color20(d.source.index));
          });
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 14: 弦图的制作 </h1>
              <div id="les14">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson14;
