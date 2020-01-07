import React from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'

const TodoList = ({todos, oper}) => {

    const list = todos.map(t => <li key={t.tno}><Todo todo={t} oper={oper}></Todo></li>)

    return(
        <ul className="todoList">
            {list}
        </ul>
    )
}

export default TodoList