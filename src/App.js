import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloBox from './components/HelloBox';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';

function App() {

  /* const showName = (value) => {
    alert("Hello : "+value)
  } */

  return (
    <div className="App">
      <header className="App-header">
        <CountHookComponent></CountHookComponent>
        {/* <CountComponent></CountComponent> */}
       {/*  <img src={logo} className="App-logo" alt="logo" />
        <HelloBox></HelloBox> */}
       {/*  <Hello name={`Hong`} fn={showName}></Hello>
        <Hello name={`Kim`} fn={showName}></Hello> */}
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
