import React from 'react'
import { connect } from 'react-redux'

const CountDisplay = (props) => {

    console.log('CoutDisPlay : ', props)
    //이벤트에 이름을 주는 것 처럼 action에 type을 준다. 
    // props.dispatch({ type: 'TEST' })
    return (
        <div>
            <h1>COUNT {props.count}</h1>
        </div>
    )
}

// state를 mapping해 이 컴포넌트의 Props로! 
// state를 나의 property로 처리해주세요. 
// return은 props의 property의 일부가 된다. 

const mapStateToProps = (state) => {
// state가 들어오면 나는 어떤 property로 바꿔줄건지  
    console.log("mapStateToProps is running....", state)
    return state
}

// mapStateToProps를 넣기 전에는 dispatch만 생김(보낼때 생기는것)
// mapStateToProps를 넣으면 이 함수에 의해 파라미터로 들어오는 state가 props의 peroperty가 된다. 
export default connect(mapStateToProps)(CountDisplay)