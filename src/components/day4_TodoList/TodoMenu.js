import React from 'react'

const TodoMenu = ({changeType}) => {

    const handleClick = (e) => {
        // e.target : 실제로 이벤트가 일어나는 target
        const target = e.target
        console.log("menu click : " +target.getAttribute("custom-type"))
        changeType(target.getAttribute("custom-type"))
    }

    return(
        <div className="menu" onClick={handleClick}>
            <span custom-type='A'>ALL</span>
            <span custom-type='D'>DONE</span>
            <span custom-type='Y'>YET</span>
        </div>
    )

}

export default TodoMenu