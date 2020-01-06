import React, { Component } from 'react';
import CountBoard from './CountBoard';
import CountButton from './CountButton';

class CountComponent extends Component {

    constructor() {
        super()
        this.state = { count: 1 }
    }

    // 람다를 사용하면 this의 범위가 달라진다. 
    changeCount = (amount) => {
        console.log(this)
        this.setState({count: this.state.count + amount})
    }

    render() {
        return (
            <>
            <CountBoard num={this.state.count}></CountBoard>
            <CountButton label="+" wrapper = {this.changeCount} amount = {1}></CountButton>
            <CountButton label="-" wrapper = {this.changeCount} amount = {-1}></CountButton>
            </>
        )
    }
}

export default CountComponent