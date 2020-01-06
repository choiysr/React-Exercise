import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloBox from './components/HelloBox';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponents';
import LoopEx from './components/day3/LoopEx';
import ItemComponent from './components/day3/ItemComponent';
import SWTest from './components/day3/SWTest';

function App() {

  /* const showName = (value) => {
    alert("Hello : "+value)
  } */

/*   const qarr1 = [
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
] */

const arr = [
  {pno:1, pname:"01", price:3000, amount:0},
  {pno:2, pname:"02", price:4000, amount:0},
  {pno:3, pname:"03", price:5000, amount:0},
  {pno:4, pname:"04", price:8000, amount:0},
  {pno:5, pname:"05", price:9000, amount:0}
]

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo"></img>
        <SWTest></SWTest>
        <ItemComponent arr={arr}></ItemComponent>
        {/* <LoopEx></LoopEx> */}
        {/* <QuizComponent quizArr={qarr1}></QuizComponent> */}
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
