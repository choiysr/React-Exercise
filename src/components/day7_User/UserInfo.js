import React, { useContext } from 'react';
import { UserContext } from "../../providers/UserProvider";

// userContext를 사용하면 Context를 사용할 수 있게됨.(UserProvider에서는 createContext사용했었음)
// 사용할 Context도 import 

const UserInfo = () => {

    // 내가 props로 전달받은 것이 없는데 전달되고 있는 걸 확인할 수 있음 = context를 공유하고 있다는걸 알 수 있음. 
    const contextData = useContext(UserContext)

    return (
        <div>
            <h2>USER INFO : {contextData.userObj.userId}</h2>
        </div>
    )
}

export default UserInfo