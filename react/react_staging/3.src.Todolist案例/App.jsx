import React, { Component } from 'react'
import Header from './Components/Header'
import List from './Components/List'
import Footer from './Components/Footer'
import './App.css'

export default class App extends Component {
    //初始化状态
    state = {
        todos: [
            { id:'001', name: '吃饭', done: true },
            { id:'002', name: '睡觉', done: true },
            { id:'003', name: '打代码', done: false },
        ]
    }
    //用于添加一个todo，接收的是todo对象
    addTodo = (todoObj) => {
        console.log('APP', todoObj);
        const { todos } = this.state
        const newtoDos = [...todos, todoObj];
        this.setState({
            todos: newtoDos
        })
    }
    //用于更新一个todo对象
    changeTodo = (id,done) => {
        const { todos } = this.state
        const newTodos=todos.map((todo) => {
            if (id === todo.id)
            {
                todo.done = done
                return todo
            } else {
                return todo
            }
            
        })
        this.setState({
                todos:newTodos
        })
    }
    //用于删除一个todo
    deleteTodo = (id) => {
        //获取原来的todos
        const { todos } = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj => {
            return todoObj.id !== id
        }))
        this.setState({
            todos:newTodos
        })
    }
    //改变所以todo的done状态
    totalChange = (flag) => {
        const { todos } = this.state
        todos.map((todo) => {
            todo.done = flag
            return todo
        })
        this.setState({
            todos:todos
        })
    }
    deleteAllTodo = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todo => {
            return todo.done!==true
        }))
        this.setState({
            todos:newTodos
        })
    }
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} deleteTodo={ this.deleteTodo}/>
                    <Footer todos={todos} totalChange={this.totalChange} deleteAllTodo={this.deleteAllTodo} />
                </div>
  </div>
        )
    }
}
