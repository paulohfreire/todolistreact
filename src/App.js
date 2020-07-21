import React, { Component } from 'react'
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends Component {
    constructor() {
        super ()
        this.state = {
            todos: todosData
        }

    }

    render () {

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
    
        return (
            <div className="todo-list">
                <h1>To do List</h1>
                {todoItems}
            </div>
        )
    }
}

export default App