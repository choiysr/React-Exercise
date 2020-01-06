import React, {useState} from 'react'

const QuizInput = ({fn}) => {

    const jQuery = window.$

    const [text, setText] = useState('')

    const handleChange = (e) => {
        // event의 this = e.target 
        // this(e.target)의 value값으로 text를 set해줘야함(state 유지) 
        setText(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        // click시 QuizComponent에게 전달해줘야함
        // but react는 단방향 
        // 따라서 QuizComponent에서 함수를 만들어서 QuizInput에게 그 함수를 전달해주고
        // 그 함수를 이용해 QuizInput이 QuizComponent에게 값을 보내줘야함.  >>> fn={checkAnswer}
        const obj = document.querySelector('#uInput')
        console.log("input태그의 ID값을 가져올 수 있을까요? : " + obj.value) // 가능! 
        const jQueryObj = jQuery("#uInput")
        console.log("jQuery를 사용할 수 있을까요? : " + jQueryObj.val()) // 가능!
        // react에서는 DOM Object에 접근할 필요가 있을때 사용하기 위해 ref가 있다.
        fn(text)
        setText('')
    }

    return (
        <div>
            <input id='uInput' type='text' value={text} onChange={handleChange}></input>
            <button onClick={handleClick}>submit</button>
        </div>
    )
}

export default QuizInput