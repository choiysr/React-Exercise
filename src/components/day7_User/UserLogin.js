import React, {useState, useContext} from 'react'
import { UserContext } from "../../providers/UserProvider";

const UserLogin = () => {
    // 함수형 컴포넌트의 치명적인 약점은 '상속'이 안된다.
    // setState > 옵저빙. 모니터링되는 곳에 영향을 미치게 된다. 
    const [text,setText] = useState('')

    const contextData = useContext(UserContext)
    const handleClick = () => {
        console.log("USER LOGIN: " + text)
        contextData.updateUser(text)
    }

    return (
        <div>
            <h2>USER Login</h2>
            <input type='text' 
                   onChange={(e)=> setText(e.target.value)}
                   value = {text}>
            </input>
            <button onClick={handleClick}>LOGIN</button>
        </div>
    )
}

export default UserLogin