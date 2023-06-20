//创建外壳组件App
import React, { Component } from 'react'
import Hello from './Components/Hello'
import Welcome from './Components/Welcome'


//创建并暴露App组件
export default class App extends Component{
    render() {
        return (
            <div>
                <Hello />
                <Welcome/>
            </div>
        )
    }
}

