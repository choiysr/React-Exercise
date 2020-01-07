import React from 'react'

// 출력용. 하나의 todo를 뿌려줌 
const Todo = ({todo, oper}) => {

        // style을 객체로 만들어 보기
        const styleDone = {
            backgroundColor: "white",
            textDecoration : 'line-through'
        }

        const styleYet = {
            backgroundColor: "skyBlue",
            textDecoration : 'underline'
        }

        const handleChange = () => {
            console.log("change...")
            oper.updateDone(todo.tno)
        }

        // TodoWrapper한테 '삭제해줘'라고 전달해야함
        // before to do : todowrapper에서 ref를 물어야하니까 wrapper쪽에서 먼저 function을 전달해줘야함 > list로 
        const handleClick = () => {
            console.log("delete Click")
            oper.deleteTodo(todo.tno)
        }
    
    return(
        <div>
            <input type='checkbox' onChange={handleChange}></input>
            <span style={todo.done ? styleDone :styleYet}>{todo.title}</span>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default Todo