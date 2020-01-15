import React from 'react';
import './App.css';
import { addToServer } from './modules/stodo'
import STodoWrapper from './components/day5_upgradedTodo/STodoWrapper';
import MapComponent from './components/mapcomp/Mapcomponent';
import MapWrapper from './components/mapcomp/MapWrapper';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoPage from './pages/TodoPage';
import UserProvider from './providers/UserProvider';
import UserInfo from './components/day7_User/UserInfo';
import UserLogin from './components/day7_User/UserLogin';
import MailList from './components/day7_User/MailList';


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

    {/* 이렇게 분리하게 되면 MailList는 위의 UserProvider와는 같은 context를 공유하지 않는다. */}
    {/* updateUser을 했을때 MailList가 갱신이 안되는걸 확인할 수 있음.  */}

    {/* 또한 여러개의 context를 공유하고 싶을 때는 provider안에 provider을 넣어야함
    -> 구조가 복잡해짐 -> 이래서 나온 개념이 redux */}


    {/* 20.01.14  
     <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
          <li>
            <Link to="/page3">Page3</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/todo">
            <TodoPage />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
        </Router> */}
    </div> 
 
  );
}

export default App;

