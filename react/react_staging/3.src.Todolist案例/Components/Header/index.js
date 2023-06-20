import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    // 对PropTypes进行必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    //  键盘事件的回调
    handleKeyUp = (event) => {
        if (event.keyCode === 13)
        {
            if (event.target.value.trim() === '')
            {
                alert('输入不能为空');
                return
            }
              const todoObj = {
                id: nanoid(),
                name: event.target.value,
                done:false
               }
              this.props.addTodo(todoObj)
               event.target.value=''
            }
           
    }
    
    
    render() {
        return (
             <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
