import React, { useState } from 'react'
import { getServerData } from "../../modules/stodo";
import STodo from './STodo';

const STodoList = ({ listData, pageInfo, changePageNum }) => {

    // 삽질 as blow  => 결론 : STodoList는 listData를 주면 뿌리는 역할 only 해주는게 편하다....

    /*  console.log("STODO LIST")
     // 첫 렌더링시엔 빈 배열을 뿌리고
     // useEffect에 의해 데이터를 받아오고 다시한번 렌더링을 실행하게된다. 
     const [listData, setListData] = useState([])
 
     getServerData(page.num).then(res => {
         console.log("Getserverdata in stodolist")
         console.log(res)
     })
 
     // 지금까지는 바깥쪽에서(wrapper) 리스트를 만들어서 뿌려줬었음 
     // 그러나 컴포넌트와 컴포넌트끼리의 결합성을 최대한 느슨하게 해주기 위해
     // page정보만 받아오고 List를 뿌려주는 일을 STodoList가 스스로 할 수 있게끔
 
     const movePage = (page) => {
         console.log("movePage : " + page)
         getServerData(page).then(result => {
             console.log(result)
             setListData(result.content) // (1) 10개의 배열이 담김 
             // (2) list 데이터를 렌더링 (아래 const list)
         })
     }
     // 이 case에서 useEffect를 쓸 필요가 없는 이유.
     // 페이지 번호가 바뀌면 STodoList컴포넌트가 재로딩되도록 만듦(num을 새로운 객체로 넘기기 때문)
 
    /*  useEffect(() => {
         console.log("use Effect.....")
     }, []) */

    const list = listData.map(todo => <li key={todo.tno}><STodo todo={todo} changePageNum={changePageNum}></STodo></li>)

    return (
        <div>
            <ul className="listUl">
                {list}
            </ul>
            <br></br>
            <div><button onClick={()=> {changePageNum(pageInfo.pageNumber)}}>PREV</button> &nbsp;
            <button onClick={()=> {changePageNum(pageInfo.pageNumber+2)}}>NEXT</button></div>
        </div>

    )
}

export default STodoList