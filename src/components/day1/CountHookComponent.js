import React, { useState } from 'react';
import CountBoard from './CountBoard';
import CountButton from './CountButton';

// 클래스 컴포넌트를 사용하지 않고 Hook을 사용하는 경우 
const CountHookComponent = () => {

    // useState괄호 안에는 초기값이 들어감. count의 초기값은 0 
    const [count,setCount] = useState(0)

    // 클래스형 컴포넌트에서 changeCount안에 this블라블라 했던 코드가 더 간결해짐
    // '함수'는 this가 없음.
    const changeCount = (amount) => {
        setCount(count+amount)
    }

    return (
        <>
        <CountBoard num={count}></CountBoard>
            <CountButton label="+" wrapper = {changeCount} amount = {1}></CountButton>
            <CountButton label="-" wrapper = {changeCount} amount = {-1}></CountButton>
        </>
    )
}

export default CountHookComponent