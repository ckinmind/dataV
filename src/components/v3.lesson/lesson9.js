import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'


let info = `

\`\`\`js
/* update / enter */
let dataset = [ 3 , 6 , 9 , 12 , 15 ];
//选择body中的p元素
let p = d3.select("#les9-1").selectAll("p");
//获取update部分
let update = p.data(dataset);
//获取enter部分
let enter = update.enter();
//update部分的处理：更新属性值
update.text( d => "update " + d);
//enter部分的处理：添加元素后赋予属性值
enter.append("p").text( d => "enter " + d); 


/* exit */
let dataset = [ 3 ];
//选择body中的p元素
let p = d3.select("#les9-2").selectAll("p");
//获取update部分
let update = p.data(dataset);
//获取exit部分
let exit = update.exit();
//update部分的处理：更新属性值
update.text(d => "update " + d);
//exit部分的处理：修改p元素的属性
exit.text(d => "exit " + d);
//exit部分的处理通常是删除元素
// exit.remove();
\`\`\`

\`\`\`js
1. 如果数组为 [3, 6, 9, 12, 15]，将此数组绑定到三个 p 元素的选择集上。
可以想象，会有两个数据没有元素与之对应，
这时候 D3 会建立两个空的元素与数据对应，这一部分就称为 Enter。而有元素与数据对应的部分称为Update。
如果数组为[3]，则会有两个元素没有数据绑定，那么没有数据绑定的部分被称为Exit
效果图如下所示

2. 记住
- update 部分的处理办法一般是：更新属性值
- enter 部分的处理办法一般是：添加元素后，赋予属性值
- exit 部分的处理办法一般是：删除元素（remove）
\`\`\`
![](http://www.ourd3js.com/wordpress/wp-content/uploads/2015/01/4-4-81.png)

`;


class Lesson9 extends React.Component {

    drawChart1(){
        let dataset = [ 3 , 6 , 9 , 12 , 15 ];

        //选择body中的p元素
        let p = d3.select("#les9-1").selectAll("p");

        //获取update部分
        let update = p.data(dataset);

        //获取enter部分
        let enter = update.enter();

        //update部分的处理：更新属性值
        update.text( d => "update " + d);

        //enter部分的处理：添加元素后赋予属性值
        enter.append("p").text( d => "enter " + d);
    }

    drawChart2(){

        let dataset = [ 3 ];

        //选择body中的p元素
        let p = d3.select("#les9-2").selectAll("p");

        //获取update部分
        let update = p.data(dataset);

        //获取exit部分
        let exit = update.exit();

        //update部分的处理：更新属性值
        update.text(d => "update " + d);

        //exit部分的处理：修改p元素的属性
        exit.text(d => "exit " + d);

        //exit部分的处理通常是删除元素
        // exit.remove();
    }


    componentDidMount(){
        this.drawChart1();
        this.drawChart2();
    }


    render() {
        return (
          <div>
              <h1> Lesson 9: 理解 Update、Enter、Exit</h1>
              <div id="les9-1">
                  <p>第一个元素</p>
                  <p>第二个元素</p>
                  <p>第三个元素</p>
              </div>
              <div id="les9-2" style={{marginTop: '20px'}}>
                  <p>第一个元素</p>
                  <p>第二个元素</p>
                  <p>第三个元素</p>
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson9;
