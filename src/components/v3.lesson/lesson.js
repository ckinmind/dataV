import React from 'react'
import Markdown from '../markdown'


let info = `

教程地址：[D3.js 入门系列 ](http://www.ourd3js.com/wordpress/396/)

\`\`\`js
  课程列表：
- Lesson 1: 第一个程序 HelloWorld
- Lesson 2: 选择元素和绑定数据 / 选择、插入、删除元素
- Lesson 3: 做一个简单的图表
- Lesson 4: 比例尺的使用
- Lesson 5: 坐标轴
- Lesson 6: 完整的柱形图
- Lesson 7: 让图表动起来:实现简单的动态效果
- Lesson 8: 给柱形图加上动态效果
- Lesson 9: 理解 Update、Enter、Exit
- Lesson 10: 交互式操作
- Lesson 11: 布局
- Lesson 12: 饼状图的制作
- Lesson 13: 力导向图的制作
- Lesson 14: 弦图的制作
- Lesson 15: 集群图的制作
- Lesson 16: 树状图的制作
- Lesson 17: 打包图的制作
- Lesson 18: 地图的制作
\`\`\`


`;


class Lesson extends React.Component {




    render() {
        return (
          <div>
              <h1> 说明 </h1>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson;
