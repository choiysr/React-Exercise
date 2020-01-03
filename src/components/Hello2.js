import React, { Component, useState } from 'react'

// [클래스형 컴포넌트] 만들어보기
// 클래스형 컴포넌트는 state가 있다. (상태를 유지) => 'this'를 쓸 수 있다. 

class Hello2 extends Component {

    // 클래스형 컴포넌트에는 무조건 생성자와 render메서드가 정의되어 있어야함 
    constructor() {
        super()
        // 무조건 state라는 이름으로 정의되어있음. 
        // 상태를 유지하고싶은 애들을 넣는다. 
        this.state = { count: 1 }
    }

    handleClick = () => {
        console.log("CLICK")
        // state는 불변(immutable). so 그냥 ++ 하는 것이 아니라 
        // setState 이후 얘를 가지고 iv로 유지해줘! 라는 문법으로 써야함 
        this.setState({count: -- this.state.count})
    }

    render() {
        return (
            <>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}> + </button>
            </>
        )
    }

}

export default Hello2;