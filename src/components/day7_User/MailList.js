import React , {useContext} from 'react'
import { UserContext } from "../../providers/UserProvider";

const MailList = () => {
    const {userObj} = useContext(UserContext)

    return(
        <div>
            <h1>Mail List</h1>
            <h5>{userObj.userId}</h5>
        </div>
    )
}

export default MailList