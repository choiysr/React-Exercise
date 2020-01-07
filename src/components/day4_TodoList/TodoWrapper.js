import React, {useState} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

let sequence = 0

const TodoWrapper = () => {

    // const [todos, setTodos] = useState([{tno:1,title:'Keep calm and Carry On', done:false}])
    const [todos, setTodos] = useState([])

    // ※배열에 원소를 추가하는 방법
    // 1. push (javascript 비동기문제 발생)
    // 2. concat (원본배열을 훼손하지 않고 새로운 배열 생성)
    // 3. 전개연산자 (like concat) 

    // 상태에 들어가는 값은 불변이기 때문에 기존값을 훼손할 수 없음(push사용 불가-원본을 훼손)
    // so setState시 concat or 전개연산자를 사용해야함 
    const addTodo = (title) => {
        const newTodo = {tno:++sequence, title:title, done:false}
       // concat사용법 
       // setTodos(todos.concat(newTodo))
       // 전개연산자 사용법
        setTodos([...todos, newTodo])
    }

    // 대상 tno가 아닌 todo들(배열)만 set
    const deleteTodo = (tno) => {
        setTodos(todos.filter(t=> t.tno !== tno))
    }

    const updateDone = (tno) => {
        console.log('updateDone...'+tno)
        // 기본적으로 배열로 나오기때문에 [0]번째로 설정
        const target = todos.filter(t=> t.tno === tno)[0]
        target.done = !target.done
        // 여기서바로 setTodos(todos) 한다면 화면에 변경(line-through)이 일어나지 x
        const newTodos = todos.slice() // 깊은 복사 
        setTodos(newTodos)
    }

    // 객체는 key-value로 보내야 하지만 최근 javascript는 그렇게 하지 않고 축약형으로 쓸 수 있음
    // var obj = {doA:doA, doB:doB} [previous]
    // var obj = {doA, doB} [current]
    const oper = {deleteTodo, updateDone}

    return(
        <div className="whole">
            <h1>Todo Wrapper Component</h1>
            <TodoInput addTodo = {addTodo}></TodoInput>
            <TodoList todos={todos} oper={oper}></TodoList>
        </div>
    )
}

export default TodoWrapper