import React, { Component } from 'react';
import CountBoard from './CountBoard';
import CountButton from './CountButton';

class CountComponent extends Component {

    constructor() {
        super()
        this.state = { count: 1 }
    }

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