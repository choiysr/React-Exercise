import React, {useState, useRef} from 'react'

const TodoInput = ({addTodo}) => {

    //ref는 react component를 참조하는 것이 아닌 DOM을 참조한다. 
    const inputRef = useRef()
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = (e) => {
        console.log("Save Click")
        addTodo(text)
        setText('')
        inputRef.current.focus()
    }

return(
    <div>
        <input type="text" value = {text} onChange={handleChange} ref={inputRef}></input>
        <button onClick={handleClick}>SAVE</button>
    </div>
)
}

export default TodoInput 