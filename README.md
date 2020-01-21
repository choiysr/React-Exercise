## React Example in class(2020-01-02 ~ 2020-01-17)

예제를 이용한 함수형 컴포넌트와 클래스형 컴포넌트의 이해, Hook의 사용법

### 1.(0102)Hello- Set : 함수형 컴포넌트, 클래스형 컴포넌트

### 2.(0102)day1 folder : 함수형 컴포넌트, 클래스형 컴포넌트 복습, Hook의 이해 

### 3.(0103)Quiz folder : Hook을 이용한 퀴즈 application 

### 4.(0106)day3 folder : KIOSK 시스템과 axios를 이용한 서버통신(&비동기처리)
![item](https://user-images.githubusercontent.com/48176963/71798076-08d9b580-3094-11ea-8b3b-4e2c8177b37a.png)

### 5.(0107)day4_TodoList folder : TO-DO LIST 만들기 (without 서버통신, 저장기능(x)) 
![todolist](https://user-images.githubusercontent.com/48176963/71873318-37be5d00-3162-11ea-9fe8-cb367cf6357b.png)

### 6.(0108~10)src/mudules & src/components/ folder : TO-DO LIST upgraded (서버통신, js비동기처리 패턴) 
![react_todolist](https://user-images.githubusercontent.com/48176963/72044803-17c0a200-32f8-11ea-9f05-d22e4e917327.png)

### 7.(0114)src/components/day6_TodoWithRouter & src/pages folder : 라우터를 이용한 TodoList(Page분기) 

### 8.(0115)src/components/day7_User & src/providers folder : Context(Provider) 사용해보기 

### 9.(0116)src/components/day8_Redux & src/reducers folder(/reducers/countReducer.js): redux, react-redux
![image](https://user-images.githubusercontent.com/48176963/72490361-6c18d400-385a-11ea-95ef-da06f9c0557c.png)

### 10.(0117)src/components/day9_Counter,Todo & src/day9_reducers & src/actions folder: action이 많아지고 복잡해질 때 & 여러개의 reducer를 연결. useEffect 두번째 파라미터 사용 


  
  
------------------------------------------------------------------------------------------------
  
   
    
   
   
 
## CLASS NOTE 

### What is React? 
: HTML(JSX) + 상태(option) + 행위(events)의 묶음. <br>
: 독립적인 라이프 사이클을 가지고 있음.(복잡했던 라이프사이클은 Hooks의 도입으로 단순화됐다) <br>
: 등장배경 - 예전엔 MVC(html(순수한데이터(Model)),CSS(View),JS(Controller)-무간섭js)가 유행. <br>
  but... 한꺼번에 만들어서 재사용 하면 좋을텐데? -> html과 js를 분리해놨더니 재사용이 더 힘들어짐 
  -> 이러면서 다시 재등장한 개념이 '컴포넌트' -> html + js로직을 한 단위로 묶어서 재사용이 가능
  -> 컴포넌트(그 하나로써 온전한 기능을 가진 단위) -> 결국 React의 개발방식은 이 컴포넌트를 어떻게 만들어서 잘 쓰느냐가 관건.<br>
: 현실적인 문제들 
  - 기존과 달리 React 컴포넌트는 css까지 컴포넌트의 요소로 활용한다는 점
  - 컴포넌트에 디자인을 입히는 방법에 대한 고민 > 기존 템플릿에 디자인을 입히는 방식 / React에 맞는 템플릿을 사용하는 방식 

### Component 
: 앱을 만들때 빌딩 블럭(컴포넌트)을 만든다고 함.<br>
: 일반 엘리먼트와의 차이점은 (유형에 따라)상태와 독립적인 라이프사이클을 가지고 있다는 점. 

1. 함수형 컴포넌트 <br>
- 함수를 정의한다.  
- 파라미터를 받거나 구조 분해 할당 처리  
- 함수 내에서 필요한 변수나 연산 처리  
- return 값은 JSX처리(JSX의 속성으로는 표현식(expression) 

2. 클래스형 컴포넌트 <br>
- 상태를 유지하고, 여러 하위 컴포넌트들을 컨트롤 할 수 있다.  
- 컴포넌트들을 조합해서 하나의 단위 기능을 만들 경우에 유용하게 사용할 수 있음.
- 그러나 Hooks의 도입이후 최신형 컴포넌트들은 함수형컴포넌트에 hook을 도입하여 사용한다.

### Hooks
: React version 16.8에 새로 도입됨 <br>
: class를 작성할 필요 없이 함수형 컴포넌트가 상태(state)를 유지할 수 있음.(useState이용)<br>
- useState : 함수형 컴포넌트가 상태를 유지하는 방법. 가장 기본적인 Hook <br>
  : 전통적인 함수는 상태를 유지할 수 없는 방식 > 따라서 클래스형 컴포넌트가 사용되고 있었음. useState가 나온 이후로는 함수형 컴포넌트에서도  상태 유지 가능.<br>
- useEffect : 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 가능.(렌더링 직후 작업을 설정)<br>
  : 렌더링 될때마다 실행 되므로 여러번의 렌더링이 일어나면 여러번 수행됨. > 컴포넌트가 화면에 가장 처음 렌더링 될 때 한번만 실행되게 하려면 두번째 파라미터로 빈 배열을 삽입.  <br>
   cf.)useEffect(()=> {},[])  <br>
   
   
### 자바스크립트 비동기 처리 패턴
: 자바스크립트는 싱글 스레드 프로그래밍 언어로 비동기처리가 필수적이다.<br>
: 비동기처리의 경우 결과가 언제 나올지 모르기 때문에 그것을 우리가 직접 모니터링해주다가 결과가 반환되면 assign해줘야 한다. 일일이 모니터링 해주는 법 밖엔 없을까? 이 문제는 어떻게 해결할까? > 동기식으로 처리하는 기법이 필요하다 <br>
: before : callBack으로 처리(내가 니한테 일을 맡기는 형식-'그게 다 끝나면 이 함수 실행해줘~')<br>
: after :  비동기처리 패턴으로 처리(니가 일을 끝내면 내가 일을 하는 형식-'니가 이렇게 해주면 내가 이렇게 할게')<br>
: ~~그러나 비동기를 동기적으로 "완벽하게" 처리해줄 순 없다~~<br>
  1) **promise** : '지연'이라고 생각 -> 다 읽으면 return해! -> 실행이 완료되면 어떤 동작을 하게끔 '약속(보장)'해주는 것이 promise의 개념이다. 따라서 promise이후에 .then() 문법으로 실행이 완료 되면, 그러면(then) 이걸 실행해.<br> 
             : promise 객체의 인자에는 resolve function과 reject function이 있다. then에서 넘겨진 function은 promise의 resolve에서 실행된다. -> then에서 function을 넘겨주고, 해당 function이 resolve임. then을 계속 사용하기 위해서는 new Promise를 계속 반환해줘야 하는 문제가 있음. > 그럼 동기프로그래밍을 하기 위해 항상 then을 사용해야 하는데... 게다가 then바깥에서는 여전히 비동기 프로그래밍 방식으로 실행이 된다. > 그래서 나온 개념이 **async/await!** <br>
  2) **async/await** : promise로 반환하는 것들 앞에 await을 붙여서 비동기로 실행되는 것들을 끝날 때 까지 기다리는 형태의 패턴. 
  

### Context
: context는 기존에 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할수 있다.<br>
일반적인 React 애플리케이션에서 데이터는 부모->자식에게 props를 통해 전달되지만, 애플리케이션 안의 여러 컴포넌트들에 전해줘야 하는 props의 경우 이 과정이 번거롭다.<br>
그러나 context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 값을 공유할 수 있다. 

* 주의할 점
```js
function App() {
  return (
   <div className="App">
     <UserProvider>
       <UserInfo></UserInfo>
       <UserLogin></UserLogin>
     </UserProvider>
     <h1>DIVIDER</h1>
     <UserProvider>
     <MailList></MailList>
     </UserProvider>
  </div> 
  );
}
```
위와 같이 UserProvider Context를 분리하여 쓰게 되면, MailList는 위의 다른 UserProvider와는 같은 context를 공유하지 않는다.실제로 updateUser 메서드를 실행했을때 MailList가 갱신이 안되는 걸 확인할 수 있다. <br>
결론 : 이렇게 분리해서 쓸 수 없다. > 지역적인 context. <br>
또한 여러개의 context를 공유하고 싶을 때는 provider안에 provider를 넣어야하는데 이렇게 되면 구조가 복잡해진다. <br> 
-> 이래서 나온 개념이 Redux! <br>



### Redux
: 모든 컴포넌트가 '전역적으로' 유지해야 하는 상태.  
: 시작전 npm install --save redux react-redux <br>
: react를 시작할때 제일먼저 알아야 할 것 -> Reducer(이벤트핸들러 같은, 이벤트를 처리해주는)
: Reducer는 전체 컨텍스트를 제어하는 단순 함수(모든 함수는 return이 있다) > 이 함수의 입력,출력값을 뭘까? <br>
 - 입력값 : state, action(어떠한 정보를 어떻게 처리할 것인지)<br>
 - 출력값 : 최종적으로 유지할 state(immutable) <br>
 
 [1] Reducer를 만들어라 : Reducer 준비 (countReducer.js) <br>

```js
// reducer는 순수함수. 

// 맨 처음에 내가 유지해야하는 값. undefined면 안되니까. 
const initState = {count:0} 
// 만약 state에 해당하는 파라미터가 있다면 그것을 쓰고, 아니면 기본 파라미터로 initState를 써라 
function countReducer(state = initState,action){
    console.log("countRedcuer is running..." , state, action)
    // do somthing    
    return state
}
export default countReducer
```
[2] Store을 만들어라 : index.js 수정(App.js의 상위) <br>
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import countReducer from "./reducers/countReducer"

// 이  store는 모든 action이 발생하면 countRedcuer로 간다. 
const store = createStore(countReducer)

ReactDOM.render(
    // Provider로 감싸 이 안의 내용(<app />)이 children이 된다. 
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
이 상태로 실행하게 되면 countReducer가 실행된다. <br>
컴포넌트가 리덕스의 영향을 받고 싶으면 이야기를 해줘야함. '나는 Store랑 연결되어 있어!' > Connect !  <br>

[3] 컴포넌트를 만들어 : 컴포넌트가 store를 쓰려면 connect를 써야함.  <br>

```js
import React from 'react'
import {connect} from 'react-redux'

const CountDisplay = (props) => {

    console.log('CoutDisPlay : ', props)
return(
    <h1>COUNT</h1>
)
}

export default connect()(CountDisplay)
```

이렇게 실행하게 되면 <br>
![image](https://user-images.githubusercontent.com/48176963/72487691-2d7f1b80-3852-11ea-9378-0153e1f7c8d4.png)

Connect하면 Dispatch(함수)가 생김. Dispatch로 action을 전달 할 수 있고 action은 Reducer를 실행시킨다. <br>

```js
const mapStateToProps = (state) => {
// state가 들어오면 나는 어떤 property로 바꿔줄건지  
    console.log("mapStateToProps is running....", state)
    return state
}

// mapStateToProps를 넣기 전에는 dispatch만 생김(보낼때 생기는것)
// mapStateToProps를 넣으면 이 함수에 의해 파라미터로 들어오는 state가 props의 peroperty가 된다. 
export default connect(mapStateToProps)(CountDisplay)
```

### Redux remind 
yesterday : reducer가 하나 = state가 하나 <br>
today : reducer가 두개 = state가 두개 <br> 
So, 컴포넌트에서 받을때 어떤 reducer의 state를 내가 받아야 하는지를 처리해야함. <br>

store는 하나인데 reducer가 많다. 그럼 어떻게 처리 해야 될까? > action이 모든 reducer에게 다 뿌려짐 > 그럼 Reducer들은 이 action이 나에게 맞는 action인가? 구분해야함 > Reducer여러개를 묶어줌 (index.js에서 combineReducer사용) <br>
countReducer.js
```js
const initState = {count:0}

// 만약 state에 해당하는 파라미터가 있다면 그것을 쓰고, 아니면 기본 파라미터로 initState를 써라 
export default function countReducer(state = initState, action) {

    const {type, payload} = action

    if(type !== "COUNTER") {
        return state
    }

    if(payload ==='INC') {
        return {count: state.count+1}
    }else if(payload =='DEC'){
        return {count: state.count-1}
    }

    console.log("IN countReducer.js...", action)

    return state

}
}
```
reducer의 type이 'COUNTER'면 실행하는 countReducer 




button을 누르면 action을 던져야 함 > Hooks를 사용해보자 > useDispach() <br>
