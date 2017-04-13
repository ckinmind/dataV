import React from 'react'
import Markdown from '../markdown'
import './demo1.scss'


let info = `

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`


`;


class Demo1 extends React.Component {

    drawChart(){
        // 定义数据
        let data = [
            { value: 99, label: 'Mon' },
            { value: 63, label: 'Tues' },
            { value: 41, label: 'Wed' },
            { value: 100, label: 'Thur' },
            { value: 50, label: 'Fri' },
            { value: 23, label: 'Sat' },
            { value: 8, label: 'Sun' }
        ];

        // 定义尺寸
        let dimensions = {
            gWidth: 600,
            gHeight: 400,
            gMargin: 40,
            gInnerWidth: 520,
            gInnerHeight: 320,
            bMargin: 10
        };

        // Define the scales
        let xScale = d3.scaleLinear()
          .domain ([0, data.length])
          .range([0, dimensions.gInnerWidth]);

        // Get the max value for the data. This will determine how high our y-scale is
        let maxValue = d3.max(data, d => d.value);

        // Now define the yScale, or vertical scale
        let yScale = d3.scaleLinear()
          .domain([0, maxValue])
          .range([0, dimensions.gInnerHeight]);

        // Finally, define the yAxis scale. This is identical to the yScale except that the domain is inverted. This is because the scale is determined from top down, rather than bottom up, and the data would look upside down otherwise.
        let yAxisScale = d3.scaleLinear()
          .domain([maxValue, 0])
          .range([0, dimensions.gInnerHeight]);

        // Render the chart
        // Select the containing element and append an SVG with your defined width and height
        let chart = d3.select('#demo1')
          .append('svg')
          .attrs({
              width: dimensions.gWidth,
              height: dimensions.gHeight
          });

        // Render the y-axis
        let yAxis = d3.axisLeft(yAxisScale)
        // This is to make the horizontal tick lines stretch all the way across the chart
          .tickSizeInner(-dimensions.gInnerWidth)
          // This spaces the tick values slights from the axis
          .tickPadding(10);

        chart.append('g')
          .attrs({
              class: 'axis axis-y',
              transform: `translate(${dimensions.gMargin}, ${dimensions.gMargin})`
          })
          .call(yAxis);

        // Define the ticks for the xAxis
        let xTicks = [];
        for (let i = 0; i < data.length; i++) {
            xTicks.push(i + 0.5); // 0.5 is to ensure the ticks are offset correctly to match the data
        }
        // Render the x-axis
        let xAxis = d3.axisBottom(xScale)
          .tickValues(xTicks)
          .tickFormat((d, i) => data[i].label);

        chart.append('g')
          .attrs({
              class:'axis axis-x',
              transform: `translate(${dimensions.gMargin}, ${(dimensions.gMargin + dimensions.gInnerHeight )})`
          })
          .call( xAxis );


        // Render the bars
        // This is rendered last so the bars appear on top of the axis and not vice versa
        let barAttributes = {
            class: 'bar-line',
            transform: `translate(${dimensions.gMargin}, ${dimensions.gMargin})`,
            height: (d, i)=> yScale(d.value),
            width: (dimensions.gInnerWidth / data.length) - (dimensions.bMargin * 2 ),
            x: (d, i) => (dimensions.gInnerWidth / data.length) * i + dimensions.bMargin,
            y: (d, i) => dimensions.gInnerHeight - yScale( d.value )
        };

        chart.append('g')
          .selectAll('.' + barAttributes.class)
          .data( data )
          .enter()
          .append('rect')
          .attrs( barAttributes );
    }


    componentDidMount(){
        this.drawChart();
    }


    render() {
        return (
          <div>
              <h1> Demo 1: Simple Bar Chart</h1>
              <div id="demo1">

              </div>
              {/*<Markdown source={info} />*/}
          </div>
        );
    }
}

export default Demo1;
