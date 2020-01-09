import React from 'react'
import {deleteToServer} from "../../modules/stodo";

const STodo = ({todo, changePageNum}) => {

    const handleClick = (e) => {
        deleteToServer(todo.tno).then(res=> {
            console.log(res)
            alert("삭제가 완료되었습니다.")
            changePageNum(1)
        })
    }

    return(
        <div>
            <span className="tno">{todo.tno}</span> &nbsp;
            <span>{todo.title}</span> &nbsp;
            <span>{todo.targetDate}</span> &nbsp;
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default STodo