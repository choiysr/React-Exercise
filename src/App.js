import React from 'react';
import './App.css';
import TodoWrapper from './components/day4_TodoList/TodoWrapper';

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
  
  const qarr2 = [
    { title:"Second Quiz 1", answer:"1" },
    { title:"Second Quiz 2", answer:"2" },
    { title:"Second Quiz 3", answer:"3" },
    { title:"Second Quiz 4", answer:"4" },
    { title:"Second Quiz 5", answer:"5" }
  ] */

  /* const arr = [
    {pno:1, pname:"01", price:3000, amount:0},
    {pno:2, pname:"02", price:4000, amount:0},
    {pno:3, pname:"03", price:5000, amount:0},
    {pno:4, pname:"04", price:8000, amount:0},
    {pno:5, pname:"05", price:9000, amount:0}
  ] */

  return (
    <div className="App">
        <TodoWrapper></TodoWrapper>

        {/* ============================ */}
        {/*  <img src={logo} className="App-logo" alt="logo"></img>
        <SWTest></SWTest> */}
        {/* <ItemComponent arr={arr}></ItemComponent> */}
        {/* <LoopEx></LoopEx> */}
        {/* <QuizComponent quizArr={qarr1}></QuizComponent> */}
        {/*  <CountHookComponent></CountHookComponent> */}
        {/* <CountComponent></CountComponent> */}
        {/*  <HelloBox></HelloBox> */}
        {/*  <Hello name={`Hong`} fn={showName}></Hello>
        <Hello name={`Kim`} fn={showName}></Hello> */}

    </div>
  );
}

export default App;
