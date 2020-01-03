import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloBox from './components/HelloBox';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponents';

function App() {

  /* const showName = (value) => {
    alert("Hello : "+value)
  } */

  const arr1 = [
    { title:"Quiz 1", answer:"1" },
    { title:"Quiz 2", answer:"2" },
    { title:"Quiz 3", answer:"3" },
    { title:"Quiz 4", answer:"4" },
    { title:"Quiz 5", answer:"5" }
]

const arr2 = [
  { title:"Second Quiz 1", answer:"1" },
  { title:"Second Quiz 2", answer:"2" },
  { title:"Second Quiz 3", answer:"3" },
  { title:"Second Quiz 4", answer:"4" },
  { title:"Second Quiz 5", answer:"5" }
]

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo"></img>
        <QuizComponent quizArr={arr1}></QuizComponent>
        {/*  <CountHookComponent></CountHookComponent> */}
        {/* <CountComponent></CountComponent> */}
        {/*  <HelloBox></HelloBox> */}
        {/*  <Hello name={`Hong`} fn={showName}></Hello>
        <Hello name={`Kim`} fn={showName}></Hello> */}
        {/*     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
