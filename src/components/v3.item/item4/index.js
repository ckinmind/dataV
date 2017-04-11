import React from 'react'
import './item4.scss'


class Item4 extends React.Component {




    render() {
        return (
          <div className="item4">
              <h1> SVG制作圆和三角形</h1>
              <svg width="200" height="200" id="item4-chart">
                  <circle fill="#3E5693" cx="50" cy="120" r="20" />
                  <text x="100" y="100">Hello SVG!</text>
                  <path d="M100,10L150,70L50,70Z" fill="#BEDBC3" stroke="#539E91" strokeWidth="3" />
              </svg>
          </div>
        );
    }
}

export default Item4;
