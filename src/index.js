import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'
import './styles/reset.css'

// 暂时在这里切换不同的d3版本的以及不同的d3教程整理
import Route from './v3.lessons.routes'
//import Route from './v3.20days.routes'
//import Route from './v4.20days.routes'




ReactDOM.render(<Route />, document.getElementById('app'));
