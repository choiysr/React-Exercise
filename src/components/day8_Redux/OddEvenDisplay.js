import React from 'react'
import { connect } from 'react-redux'

const OddEvenDisplay = (props) => {
    return (
        <div>
            <h1>ODD/EVEN : {props.text}</h1>
        </div>
    )
}

// store에 있는 state를 나의 property로 잡아
const mapStateToProps = (state) => {
    return { text: state.count % 2 == 0 ? 'EVEN' : 'ODD' }
}

export default connect(mapStateToProps)(OddEvenDisplay)