const initState = {count:0}

// 만약 state에 해당하는 파라미터가 있다면 그것을 쓰고, 아니면 기본 파라미터로 initState를 써라 
export default function countReducer(state = initState, action) {
    
    console.log("IN countReducer.js...", action)
    const {type, payload} = action

    if(type !== "COUNTER") {
        return state
    }

    if(payload ==='INC') {
        return {count: state.count+1}
    }else if(payload =='DEC'){
        return {count: state.count-1}
    }

    return state

}