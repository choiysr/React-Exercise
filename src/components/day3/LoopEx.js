import React from 'react'

const LoopEx = () => {

    const arr = [
        {pno: 1, name:"USER1"},
        {pno: 2, name:"USER2"},
        {pno: 3, name:"USER3"},
        {pno: 4, name:"USER4"},
        {pno: 5, name:"USER5"}
    ]

    const lis = arr.map(obj=><li key={obj.pno}>{obj.name}</li>)
    // 아래처럼 실행하면 경고창이 뜸. unique한 "key"값을 요구. 따라서 위와 같이 key값을 지정해줘야함. 
    // const lis = arr.map(obj=><li>{obj.name}</li>)

    return(
        <ul>
            {lis}
        </ul>
    )
}

export default LoopEx