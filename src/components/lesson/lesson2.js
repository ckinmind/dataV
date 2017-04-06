import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'


let info = `

\`\`\`js
 d3.select('#les2')
          .selectAll('p')
          .data(dataset)
          .text(d => d);
\`\`\`

\`\`\`js
1. 如何选择元素
在 D3 中，用于选择元素的函数有两个：
- d3.select()：是选择所有指定元素的第一个
- d3.selectAll()：是选择指定元素的全部

2. 如何绑定数据
D3 中是通过以下两个函数来绑定数据的：
- datum()：绑定一个数据到选择集上
- data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定
\`\`\`


`;


class Lesson2 extends React.Component {

    drawChart(){
        let dataset = ["I like dogs","I like cats","I like snakes"];

        d3.select('#les2')
          .selectAll('p')
          .data(dataset)
          .text(d => d);
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 2: 选择元素和绑定数据</h1>
              <div id="les2">
                  <p>Apple</p>
                  <p>Pear</p>
                  <p>Banana</p>
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson2;
