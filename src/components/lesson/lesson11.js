import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'


let info = `

\`\`\`js
1.  布局，可以理解成 “制作常见图形的函数”，有了它制作各种相对复杂的图表就方便多了

2. 布局的作用是：将不适合用于绘图的数据转换成了适合用于绘图的数据，可将布局理解成数据转换

3. D3 总共提供了 12 个布局：饼状图（Pie）、力导向图（Force）、弦图（Chord）、树状图（Tree）、
集群图（Cluster）、捆图（Bundle）、打包图（Pack）、直方图（Histogram）、
分区图（Partition）、堆栈图（Stack）、矩阵树图（Treemap）、层级图（Hierarchy）

4. 12 个布局中，层级图（Hierarchy）不能直接使用。集群图、打包图、分区图、树状图、矩阵树图是由层级图扩展来的。
如此一来，能够使用的布局是 11 个（有 5 个是由层级图扩展而来）

5. 这些布局的作用都是将某种数据转换成另一种数据，而转换后的数据是利于可视化的
\`\`\`


`;


class Lesson11 extends React.Component {

    drawChart(){
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 11：布局 </h1>
              <div id="les">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson11;
