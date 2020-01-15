import React, { useReducer, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import TodoList from '../components/day6_TodoWithRouter/TodoList';
import TodoInput from '../components/day6_TodoWithRouter/TodoInput';
import Axios from 'axios';



const TodoPage = () => {

    let match = useRouteMatch();
    console.log("what is match? : ")
    console.log(match)
    /* match는  /todo가 뜬다. */


    
    return (
        <div className='page-wrapper'>
            <h3>TodoPage....</h3>
            <ul>
                <li>
                    {/* 분기. backtick(`)은 슬래시(/)까지 합쳐 url을 한꺼번에 지정해주기 위함 */}
                    <Link to={`${match.url}/input`}>TodoInput</Link>
                </li>
                <li>
                    <Link to={`${match.url}/list/1`}>TodoList</Link>
                </li>
            </ul>
            <Switch>
        <Route path={`${match.path}/input`}>
            <TodoInput></TodoInput>
        </Route>
        <Route path={`${match.path}/list/:page`}>
          <TodoList></TodoList>
        </Route>
      </Switch>
        </div>
    )
}

export default TodoPage