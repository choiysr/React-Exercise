import React from 'react'
import { connect } from 'react-redux'

const CountButtons2 = (props) => {
    return(
        <div>
            <button onClick={props.inc}>INC2</button>
            <button onClick={props.dec}>DEC2</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    // dispatch를 이용해서 얘가 property로 저장해줄 애를 만들어줘야함.
    // inc,dec가 property가 됨! 
    return {
        inc: () => dispatch({type:'INC'}),
        dec: () => dispatch({type:'DEC'})
    }
}

export default connect(null,mapDispatchToProps)(CountButtons2)