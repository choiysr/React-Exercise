import React from 'react'
import {connect} from 'react-redux'

// props를 받을 필요 없음. 
// dispatch만 해주면 됨 
// connect된 애들만 dispatch가 자동으로 들어감 
const CountButtons = ({dispatch}) => {

    console.log("CountButtons: " , dispatch)

    const handleInc = () => {
        console.log("inc")
        dispatch({type:'INC'})
    }

    const handleDec = () => {
        console.log("dec")
        dispatch({type:'DEC'})
    }

    return (
        <div>
            <button onClick={handleInc}>INC</button>
            <button onClick={handleDec}>DEC</button>
        </div>
    )
}

// connect를 실행해주고, connect의 결과를 실행(?)
export default connect()(CountButtons)