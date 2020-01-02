import React from 'react'

// [함수형 컴포넌트] 만들어보기 
// 함수명은 JS이름과 동일하게 만들어주는 것이 편함
// 함수는 데이터를 유지하지않음. -> side effect가 없음 -> 그래서 나온게 class형 컴포넌트 
// 함수형 컴포넌트는 뿌려주는 단위단위를 만들어줄때 이용((주로)전달받은 값을 출력하는 것 위주!)
// 데이터를 유지할때는 클래스형 컴포넌트.
// 데이터는 ajax로 가져와서 뿌리면되는거아냐? -> web page적 발상

// case 1. 
/* const Hello = () => <h1>Hello World</h1> */

// case 2.  = {}로 묶으면 무조건 return 값이 있어야 함. 
/* const Hello = () => {
 return <h1>Hello World</h1>
} */

// case 3. = console.log등을 사용할 수 있어서 debuging 시 편함 
/* const Hello = () => {
    console.log("Hello Component")
    return (<h1>Hello World Component</h1>)
} */

// case 4. = 재사용을 위해선 fix된 값이 아닌 동적으로 변할 필요가 있음. 
/* const Hello = (props) => {
    console.log(props)
    return (<h1>Hello World {props.name}</h1>)
} */

// case 5. = props로 전달시 key,value만 전달할 수 있는것이 아니라 이벤트(함수)도 전달 가능
// 그러나 handleClick function을 중간에 거치지 않으면 onclick하지 않아도 화면이 뜨면 즉시실행 되어버림(괄호안에 있으니 즉시실행)
/* const Hello = (props) => {
    const handleClick = () => {
        props.fn(props.name)
    }
    return (<h1 onClick ={(handleClick)}>Hello World {props.name}</h1>)
} */

// case 6. case 5를 아래처럼 줄일 수 있다. 
/* const Hello = (props) => {
    return (<h1 onClick ={()=>{props.fn(props.name)}}>Hello World {props.name}</h1>)
} */

// case 7. 비구조할당(구조분해할당) 이용. 
// props : 함수형 컴포넌트에 전달되는 개념 
// ex) 
// const obj = {name:'aaa', age:16, addr:'seoul'}
// const {name, age, addr} = obj;
const Hello = ({name, fn}) => {
    return (<h1 onClick ={()=>{fn(name)}}>Hello : {name}</h1>)
}

// 외부에서 쓰려면 Export 필수. 없으면 import가 안됨. 
export default Hello