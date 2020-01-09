import axios from 'axios'


export const addToServer = async (title, targetDate) => {
    const result = await axios.post('http://192.168.0.19:8080/todos/', { title, targetDate })
        .then((response, error) => {
            return response
        })
    return result
}

/* export const addToServer = (title,targetDate) => {
    axios({
        url : 'http://192.168.0.19:8080/todos',
        method :'post',
        data : {
            title : title,
            targetDate : targetDate
        }
    }).then((response, error) => {
        console.log(response)
    })
} */


// async,await 걸렸을때와 안걸렸을때의 차이점 확인 
export const getServerData = async (page) => {
    let result;
    //await를 걸면 async를 걸어야함
    //지금까지 비동기의 callback으로 처리했던 것을 마치 동기화 된 것 처럼 만들 수 있는 기술
    await axios.get('http://192.168.0.19:8080/todos/list?page=' + (page || 1)).then((response, error) => {
        //문법 : then.(실행할함수)
        console.log("1--------------------------------")
        result = {
            content: response.data.content,
            pageInfo: response.data.pageable
        }

    })

    console.log("1.5=====================")
    console.log(result)
    console.log("2--------------------------------")
    return result;
}

export const deleteToServer = async (tno) => {
   let result = await axios.delete('http://192.168.0.19:8080/todos/' + tno).then((response) => {return response})
   return result
}


export const doA = () => {
    console.log("doA")
}



