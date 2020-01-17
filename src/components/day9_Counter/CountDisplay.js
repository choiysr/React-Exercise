import React from 'react'
import { connect } from 'react-redux'

// 연결만 받아서 뿌려주는 역할

const CountDisplay = (props) => {
    return (
        <div>
            <h1>COUNT : {props.count}</h1>
        </div>
    )
} 

// connect가 들어가면 내가 정보를 받는 컴포넌트인지 보내는 컴포넌트인지 구분해야함.
// somthing TO somthing
// 들어올 state중에 countReducer만 필요함 (파라미터가 state가 아닌 countReducer로!)
const mapStateToProps = ({ countReducer }) => {
    console.log("IN CountDisplay.js......", countReducer)
    return countReducer
}

export default connect(mapStateToProps)(CountDisplay)