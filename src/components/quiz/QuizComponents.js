import React, {useState} from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent = ({quizArr}) => {

    const [idx, setIdx] = useState(0)

    // end와 setEnd를 이용하지 않는경우
    // const end로 하는 경우 > end = true로 변경이 안됨(because end가 상수)
    // 그렇다고 let으로 하게 되면 문제를 다 풀고 화면 변경이 없음 > 렌더링이 없다
    // 그냥 변수 end만 바뀌었을뿐 렌더링을 다시 하라는 신호를 주지 않았기 때문 
    const [end, setEnd] = useState(0)

    const checkAnswer = (userInput) => {
        console.log("checkAnswer")
        if(userInput=== quizArr[idx].answer) {
            if(quizArr.length-1 === idx) {
                setEnd(1)
                return
            }
            setIdx(idx+1)
        } else {
            setEnd(-1)
        }
    }

    // 인풋태그를 다루는 법
    // 1. input 내용이 바뀌면 onChange를 이용해 state를 유지하는 방법
    // 2. input 태그에 id같은 것을(react에서는 ref사용) 줘서 그 값을 참조하는 방법

    const comp = () => {
        let result = null;
        if(end==0) {
            result = <><QuizBoard title={quizArr[idx].title}></QuizBoard>
            <QuizInput fn={checkAnswer}></QuizInput></>
        } else if(end==-1) {
            result = <h1>YOU ARE FOOL</h1>
        } else {
            result = <h1>당신은 퀴즈왕</h1>
        }
        return result;
    }

    return(
        <div>
            {comp()}
        </div>
    )
}

export default QuizComponent