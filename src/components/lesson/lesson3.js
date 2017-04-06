import React from 'react'
import d3 from 'd3'
import Markdown from '../markdown'


let info = `

\`\`\`js
  
\`\`\`

\`\`\`js

\`\`\`


`;


class Lesson3 extends React.Component {

    drawChart(){

    }



    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Lesson </h1>
              <div id="les3">
              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Lesson3;
