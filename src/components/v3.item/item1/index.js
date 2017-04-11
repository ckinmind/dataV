import React from 'react'
import d3 from 'd3'
import './item1.scss'


class Item1 extends React.Component {

    /** D3制作一个柱状图 */
    drawChart(){
        d3.select('#item1-chart1')
          .selectAll("div")
          .data([420,300,300,270, 230, 160, 150, 100,90, 80, 40, 30, 20, 10, 5])
          .enter()
          .append("div")
          .style("height", (d)=> d + "px");
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div className="item1">
              <h1> D3制作一个柱状图 </h1>
              <div id="item1-chart1"></div>
          </div>
        );
    }
}

export default Item1;

/**

 d3.select()：是选择所有指定元素的第一个
 d3.selectAll()：是选择指定元素的全部
 data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定
 enter: 返回输入（enter）选择：当前选择中存在但是当前DOM元素中还不存在的每个数据元素的占位符节点
 append()：在选择集末尾插入元素
 style:如果value参数被指定，通过指定名称和指定的值为所有选中的元素设置CSS样式属性

 */

