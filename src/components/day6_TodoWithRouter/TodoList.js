import React, {useState, useEffect} from 'react'
import {useParams, Link} from "react-router-dom";
import Axios from 'axios';

let before = null

const TodoList = () => {

    let {page} = useParams()
    const [todos,setTodos] = useState([])

    useEffect(()=> {
        if(page === before) {
            return
        }

       Axios.get('http://localhost:8080/todos/list?page='+page)
        .then(res=>{
            console.log("got datas from axios")
            console.log(res.data.content)
            before = page
            setTodos(res.data.content)
        })
    })

    console.log("Todo List......" + page)

    const list = todos.map(t=><li key={t.tno}>{t.tno} ) {t.title}</li>)

    return(
        <div>
            <h3>TodoList!</h3>
            <ul>
                {list}
            </ul>
            <Link to={`/todo/list/${parseInt(page)-1}`}>PREV</Link> 
            <Link to={`/todo/list/${parseInt(page)+1}`}>NEXT</Link> 
            {/* Link로 처리할경우 useEffect가 한번 걸림. Link는 컴포넌트만 내부적으로 이동 하는 방법.
            <a>tag는 페이지 전체를 리로딩 하기 때문에(사실상 redirect) 클릭시마다 useEffect가 발생. 
            Link로 해주는게 좋아. why? > 쓸데없는 부분들을 reloading할 필요 없잖아. 
            그러나 Link같이 내부적으로 이동하다보면 내가 생각한 대로 움직이지 않는다.
            >>> 삽질이 끝나고 useEffect로 위와같이 처리함
            (a태그로 처리하는 것도 좋은 방법일 수 있음)  */}
        </div>
    )
}

export default TodoList