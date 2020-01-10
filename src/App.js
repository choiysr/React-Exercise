import React from 'react';
import './App.css';
import {addToServer} from './modules/stodo'
import STodoWrapper from './components/day5_upgradedTodo/STodoWrapper';
import MapComponent from './components/mapcomp/Mapcomponent';
import MapWrapper from './components/mapcomp/MapWrapper';

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


  // ----------1 
  // 비동기 호출을 했는데 동기화된 코드(result에 담아주니까). 과연?  
  //const result = getServerData() 
  //console.log(result)
  // 이렇게 되면 promise객체가 제일 먼저 찍힘.
  // 동기화된 코드처럼 보이지만 실제로 동기화된 동작을 하진 않음.

  // ----------2(실행은 되겠지만 result에 담을 순 없음.)
  //getServerData().then(obj=>console.log(obj));
 
  // ----------3 (thridResult => undifine 비동기 문제 발생)
  //let thirdResult
  //getServerData().then(obj=>thirdResult = obj);
  //console.log(thirdResult)

  // ----------4 (함수가 반환됨)
  //let fresult = async () => {
/*     await getServerData().then(obj => {
      return obj 
    })
  } */


  return (
    <div className="App">

      <MapWrapper></MapWrapper>


      {/* <STodoWrapper></STodoWrapper> */}

        {/* <TodoWrapper></TodoWrapper> */}

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
