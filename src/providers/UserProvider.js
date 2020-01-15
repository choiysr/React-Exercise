import React, { createContext, useState } from 'react'
export const UserContext = createContext()


const UserProvider = (props) => {

    const [userObj, setUserObj] =
        useState({
            userId: 'user00'
        })
    const updateUser = (newName) => {
        setUserObj({ userId: newName })
    }


    return (
        // <UserContext.Provider> 안에 들어가는 애들이 Context에 영향을 받게됨. -> app.js 
        // 처음부터 static하지 않고 dynamic하게 사용 하기 위해 > {props.children}
        // 반드시 value를 지정해주어야 함 
        // value는 문자열,객체를 지정할 수 있음. 유연성을 높이려면 당연히 객체를 지정하는것이 좋음

        // 내가 예전에 props로 명시적으로 물었던 것들이(연결되었던) 지금은 userProvider안에 쌓여서 암묵적으로 물고있는 형태
        // 지금은 우회적으로(context) 연결되어있는 구조 
        // userProvider의 상태가 바뀌면 하위컴포너트들이 영향 받는건 이전과 같다.

        // 여러개 전달 할때는 꼭 객체로 묶어서(감싸서) 전달해야한다. {} 
        <UserContext.Provider value={{userObj, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider