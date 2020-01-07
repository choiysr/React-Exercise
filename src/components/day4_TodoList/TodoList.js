import React from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'

const TodoList = ({todos, oper}) => {

    const filter = () => {
        if(!oper.type) {
            return todos
        } 
        if(oper.type === 'D') {
            return todos.filter(t=>t.done === true)
        }
        if(oper.type === 'Y') {
            return todos.filter(t=>t.done === false)
        }
        return todos
    }

    // filter를 호출한 결과만 mapping
    const list = filter().map(t => <li key={t.tno}><Todo todo={t} oper={oper}></Todo></li>)

    return(
        <ul className="todoList">
            {list}
        </ul>
    )
}

export default TodoList