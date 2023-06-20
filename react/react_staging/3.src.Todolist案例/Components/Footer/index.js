import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
   //全选checkbox的回调
  ChangeAlltodos = (event) => {
    this.props.totalChange(event.target.checked)
  }
  //清除所有已完成的todo
  deleteAll = () => {
      this.props.deleteAllTodo()
  }
  
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre,todo) => {
      return pre+(todo.done?1:0)
    },0)
    const total = todos.length
        return (
            <div className="todo-footer">
                    <label>
              <input type="checkbox" onChange={this.ChangeAlltodos} checked={doneCount===total&&total!==0?true:false}/>
                    </label>
                    <span>
                     <span>已完成{doneCount}</span> / 全部{total}
                    </span>
            <button className="btn btn-danger" onClick={this.deleteAll}>清除已完成任务</button>
            </div>
        )
    }
}
