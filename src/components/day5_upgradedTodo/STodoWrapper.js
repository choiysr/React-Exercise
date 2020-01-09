import React, { useState,useEffect } from 'react';

import STodoInput from './STodoInput';
import STodoList from './STodoList';
import {getServerData} from "../../modules/stodo";

const STodoWrapper = () => {

    // 여기에 있을 필요가 없음!
    // 컴포넌트와 컴포넌트간의 통신을 최대한 안할 수 있도록
    // 자기가 할 수 있는일은 자기가 처리하게 > STodoList로 옮기자 
    /*  const movePage = (page) => {
         console.log("movePage : " + page)
         getServerData(page).then(result => {
             console.log(result)
         })
     }  */

    // page가 바뀌면(렌더링이 되어야하니까) so, 상태를 바꿔줘야함 > state필요! > 이걸 STodoList에 날려줌 
    //const [page, setPage] = useState({num:1})


    const [listData,setListData] = useState([])
    const [pageInfo, setPageInfo] = useState({})

    const changePageNum = (pageValue) => {
        console.log("go to " + pageValue)
        getDataInServer(pageValue)
    }

    useEffect(()=> {
        getDataInServer(1)
    },[])

    const getDataInServer = (pageData) => {
        getServerData(pageData).then(res => {
            console.log("useEffect"+res)
            setListData(res.content)
            setListData(res.content)
            setPageInfo(res.pageInfo)
        })
    }

    return (
        <div>
            <h1>Wrapper Component With Axios</h1>
            <STodoInput changePageNum={changePageNum}></STodoInput>
            <br></br>
            <STodoList listData={listData} pageInfo={pageInfo} changePageNum={changePageNum}></STodoList>
        </div>
    )
}

export default STodoWrapper