import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'


let info = `

\`\`\`js
/* 选择元素，绑定元素 */
 d3.select('#les2')
   .selectAll('p')
   .data(dataset)
   .text(d => d);
/* 添加元素 */
 d3.select('#les2')
   .append('p')
   .text('添加到末尾');

 d3.select('#les2')
   .insert('p','p:nth-child(1)')
   .text('添加到开头');

/* 删除元素 */
 d3.select('#les2 p:nth-child(2)')
   .remove();
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

3. 插入元素
插入元素涉及的函数有两个
- append()：在选择集末尾插入元素
- insert()：在选择集前面插入元素

4. 删除元素
- 删除一个元素时，对于选择的元素，使用 remove 即可
\`\`\`


`;


class Lesson2 extends React.Component {

    drawChart(){
        let dataset = ["I like dogs","I like cats","I like snakes"];

        d3.select('#les2')
          .selectAll('p')
          .data(dataset)
          .text(d => d);

        d3.select('#les2')
          .append('p')
          .text('添加到末尾');


         d3.select('#les2')
           .insert('p','p:nth-child(1)')
           .text('添加到开头');

         d3.select('#les2 p:nth-child(2)')
           .remove();

    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson 2: 选择元素和绑定数据 / 选择、插入、删除元素</h1>
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
