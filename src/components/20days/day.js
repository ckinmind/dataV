import React from 'react'
import d3 from './d3'
import Markdown from '../markdown'


let info = `

\`\`\`js      
\`\`\`

\`\`\`js
\`\`\`


`;


class Day extends React.Component {

    drawChart(){

    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Day </h1>
              <div id="day">

              </div>
              <Markdown source={info} />
          </div>
        );
    }
}

export default Day;
