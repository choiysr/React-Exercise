import React from 'react';
import CountWrapper from './CountWrapper';
import {useDispatch} from 'react-redux';
import {increase,decrease} from '../../day9_actions'

// yesterday : connect를 해야 props에 dispatch가 생김

const CountButtons = () => {

    const dispatch = useDispatch()
    // connect를 안했는데 dispatch가 있을까? > dispatch만 쓰고싶으면 useDispatch하면 됨! 
    console.log(dispatch)

    const handleInc = () => {
        dispatch(increase())
    }

    const handleDec = () => {
        dispatch(decrease())
    }

    return (
        <div>
            <button onClick={handleInc}>INCREASE</button>
            <button onClick={handleDec}>DECREASE</button>
        </div>
    )

}


export default CountButtons