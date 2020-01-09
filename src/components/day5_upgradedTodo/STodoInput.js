import React, {useState} from 'react';
import {addToServer} from "../../modules/stodo";

const STodoInput = ({changePageNum}) => {

    const [title,setTitle] = useState('')
    const [targetDate,setTargetDate] = useState('2020-01-08')
    const handleClick = () => {
        addToServer(title,targetDate).then((response)=> {
            console.log(response)
            alert(response.data.tno+"번 글이 등록되었습니다.")
            // javascript 객체를 새로 정의하는 문법 > num:1
            // changePageNum(1) 로 하면 1이라는 숫자는 불변. 이전 숫자도 1이면 같은값으로 처리함 > 렌더링이 일어나지 않음
            // num이라는 객체를 호출할때마다 정의  >>>>> changePageNum({num:1})
            changePageNum(1)
        })
    }

    return(
        <div>
            {/* input에 들어가는 값을 체크할때 1)ref를 이용하는 방법 2)state를 이용하는 방법 */}
            <h4>Todo Input Component</h4>
            <input type='text' onChange = {(e) => {setTitle(e.target.value)}} value = {title}></input> &nbsp;
            <input type='date' onChange = {(e) => {setTargetDate(e.target.value)}} value = {targetDate}></input> &nbsp;
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    )
}

export default STodoInput