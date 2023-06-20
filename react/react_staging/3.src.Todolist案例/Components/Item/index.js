import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  //勾选、取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (event) => {
          this.props.changeTodo(id,event.target.checked)
        }
  }
  //删除一个todo的回调
  handleDelete = (id) => {
    if (window.confirm('确定删除吗？'))
    {
      this.props.deleteTodo(id);
      }
  }

    render() {
      const { todo } = this.props
      
     
        return (
           <li>
                <label>
                  <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)}/>
                  <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" onClick={()=>{this.handleDelete(todo.id)}}>删除</button>
          </li>
        )
    }
}
