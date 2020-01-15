## React Example in class(2020-01-02 ~ )

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
위와 같이 <UserProvider>을 분리하여 쓰게 되면, MailList는 위의 다른 UserProvider와는 같은 context를 공유하지 않는다.실제로 updateUser 메서드를 실행했을때 MailList가 갱신이 안되는 걸 확인할 수 있다. <br>
결론 : 이렇게 분리해서 쓸 수 없다. <br>
또한 여러개의 context를 공유하고 싶을 때는 provider안에 provider를 넣어야하는데 이렇게 되면 구조가 복잡해진다. <br> 
-> 이래서 나온 개념이 Redux! <br>




