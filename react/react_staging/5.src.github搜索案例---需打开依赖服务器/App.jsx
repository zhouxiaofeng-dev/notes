import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'


export default class App extends Component {
     //初始化状态
    state = {
        users: [],
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //标识是否处于加载中
        err:'',  //存储请求相关的错误信息
    }
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
    


    render() {
        return (
            <div className="container">
               <Search updateAppState={this.updateAppState} />
                <List {...this.state}/>
            </div>
        )
    }
}


