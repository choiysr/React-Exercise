import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TodoList = () => {

    const [page, setPage] = useState(1)
    const [arr, setArr] = useState([])
    console.log("page능?: " ,page)

    useEffect(() => {
        console.log("axios run....")
        axios.get("http://localhost:8080/todos/list?page=" + page)
            .then(res => {
                setArr(res.data.content)
            })
        return () => {
            console.log("clean up")
        }
    }, [page])
    // 두번째 파라미터의 의미 > 표현식을 씀(표현식에 나온 값을 모니터링 하는 역할). 
    // 표현식에서 나온 값이 변경이 되면>useEffect가 동작   

    // cleanup > 다음의 useEffect 실행되는 상황에 useEffect 실행되기 바로 전에 cleanup실행
    // > so, 처음에는 cleanup이 일어나지 않고 그 다음 useEffect가 실행될 상황 그 전부터 실행  

    const handleNext = () => {
        setPage(page + 1)
    }

    const list = arr.map(t => <li key={t.tno}>{t.tno}------{t.title}</li>)

    return (
        <div>
            <ul>
                {list}
            </ul>
            <button onClick={handleNext}>NEXT</button>
        </div>
    )

}

export default TodoList