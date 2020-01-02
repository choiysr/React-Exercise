import React from 'react'
import Hello from './Hello'
import Hello2 from './Hello2'

const HelloBox = () => {
    const showName = (value) => {
        alert("Hello : " + value)
    }

    // JSX elements must be wrapped in an eclosing tag.
    // 하나의 태그의 묶음으로 return 해줘야함. 여기서 <div>로 감싸지 않으면 에러뜸
    // <> </> 이걸로라도 감싸서 리턴해야함.  
    return (
        <div>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello2></Hello2>
            
            <Hello name={`Choi`} fn={showName}></Hello>
            <Hello name={`Lee`} fn={showName}></Hello>
        </div>
    )
}

export default HelloBox