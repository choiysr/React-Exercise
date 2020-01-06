import React, { useState, useEffect } from 'react'
import axios from 'axios'


// axios Test

const SWTest = () => {


    const [name, setName] = useState("SORA")

    // 컴포넌트가 처음 로딩될때 한번만 동작하게 하는 form(빈배열 삽입) 
    /* useEffect(()=> {},[]) */

    useEffect(async () => {
        await axios.get('https://swapi.co/api/people/1/').then((res, error) => {
            setName(res.data.name)
        })
    }, [])

    return (
        <div>
            {name}
        </div>
    )

}

export default SWTest