//引入react核心库
import React from 'react'
//引入reactDOM
import ReactDOM from 'react-dom'
//
import { BrowserRouter } from 'react-router-dom'
//引入APP组件
import App from './App'

//渲染APP到页面
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'))